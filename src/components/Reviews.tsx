import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

const STATIC_REVIEWS = [
  {
    _id: "static-1",
    author: "Heshan Maduka",
    rating: 5,
    text: "Best place in Kandy for all your printing options...",
    badge: "Local Guide · 79 reviews",
    timeAgo: "6 years ago",
  },
  {
    _id: "static-2",
    author: "Manusha Ravishan",
    rating: 5,
    text: "Oxford Ads Advertising Agency Strives to understand business before producing work.",
    badge: "Local Guide · 15 reviews",
    timeAgo: "6 years ago",
  },
  {
    _id: "static-3",
    author: "Manusha Creations",
    rating: 5,
    text: "Best Advertising Provider...",
    badge: "2 reviews",
    timeAgo: "6 years ago",
  },
];

function StarRating({ rating, onRate }: { rating: number; onRate?: (r: number) => void }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={onRate ? "button" : undefined}
          onClick={() => onRate?.(star)}
          className={`text-lg leading-none ${star <= rating ? "text-amber-400" : "text-gray-200"} ${onRate ? "cursor-pointer hover:scale-110 transition-transform" : "cursor-default"}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

const avatarColors = [
  "bg-blue-100 text-blue-700",
  "bg-violet-100 text-violet-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
];

export default function Reviews() {
  const dbReviews = useQuery(api.reviews.list) ?? [];
  const submitReview = useMutation(api.reviews.submit);

  const [showForm, setShowForm] = useState(false);
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const allReviews = [...STATIC_REVIEWS, ...dbReviews];
  const avgRating = (
    allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
  ).toFixed(1);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    setSubmitting(true);
    try {
      await submitReview({ author, rating, text });
      toast.success("Review submitted! Thank you.");
      setAuthor("");
      setText("");
      setRating(5);
      setShowForm(false);
    } catch {
      toast.error("Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="reviews" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              What our customers say
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
            <div>
              <p className="text-4xl font-black text-gray-900">{avgRating}</p>
              <div className="flex text-amber-400 text-sm mt-0.5">★★★★★</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-sm font-semibold text-gray-700">{allReviews.length} reviews</p>
              <p className="text-xs text-gray-400 mt-0.5">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {allReviews.map((review, idx) => (
            <div
              key={review._id}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center text-sm ${avatarColors[idx % avatarColors.length]}`}>
                  {getInitials(review.author)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.author}</p>
                  {"badge" in review && (
                    <p className="text-xs text-gray-400">{(review as any).badge}</p>
                  )}
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{review.text}</p>
              {"timeAgo" in review && (
                <p className="text-xs text-gray-400">{(review as any).timeAgo}</p>
              )}
            </div>
          ))}
        </div>

        {/* Write a review */}
        {!showForm ? (
          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Write a Review
            </button>
          </div>
        ) : (
          <div className="max-w-lg mx-auto bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Write a Review</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <StarRating rating={rating} onRate={setRating} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-shadow"
                  placeholder="Share your experience..."
                />
              </div>
              <div className="flex gap-3 pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm"
                >
                  {submitting ? "Submitting..." : "Submit Review"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-3 border border-gray-200 bg-white rounded-xl text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
