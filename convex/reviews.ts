import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("reviews").order("desc").collect();
  },
});

export const submit = mutation({
  args: {
    author: v.string(),
    rating: v.number(),
    text: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("reviews", {
      author: args.author,
      rating: args.rating,
      text: args.text,
      isVerified: false,
    });
  },
});
