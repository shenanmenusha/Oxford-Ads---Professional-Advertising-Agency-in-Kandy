import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const applicationTables = {
  reviews: defineTable({
    author: v.string(),
    rating: v.number(),
    text: v.string(),
    isVerified: v.optional(v.boolean()),
  }),
  contactMessages: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    read: v.optional(v.boolean()),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
