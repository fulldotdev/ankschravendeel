import { defineCollection } from "astro:content"
import { file, glob } from "astro/loaders"

import { preprocessReferences } from "@/lib/preprocess-references"
import { reviewSchema } from "@/schemas/blocks/review"
import { articlePageSchema } from "@/schemas/pages/article"
import { pageSchema } from "@/schemas/pages/page"
import { personPageSchema } from "@/schemas/pages/person"
import { policyPageSchema } from "@/schemas/pages/policy"
import { servicePageSchema } from "@/schemas/pages/service"

export const collections = {
  pages: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/pages",
    }),
    schema: preprocessReferences(pageSchema),
  }),
  articles: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/articles",
    }),
    schema: preprocessReferences(articlePageSchema),
  }),
  services: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/services",
    }),
    schema: preprocessReferences(servicePageSchema),
  }),
  persons: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/persons",
    }),
    schema: preprocessReferences(personPageSchema),
  }),
  policies: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/policies",
    }),
    schema: preprocessReferences(policyPageSchema),
  }),
  reviews: defineCollection({
    loader: file("src/content/reviews.yml"),
    schema: reviewSchema,
  }),
}
