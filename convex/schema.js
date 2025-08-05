import{ defineSchema,defineTable } from "convex/server";
import{ v } from "convex/values";
export default defineSchema({
    users:defineTable({
        name:v.string(),
        email:v.string(),
        tokenIdentifier:v.string(),
        imageUrl:v.optional(v.string()),
    }).index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"])
    .index("search_name", {searchfield:"name"})
    .index("search_email", {searchfield:"email"}),
});