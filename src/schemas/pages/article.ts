import { articleSchema } from "@/schemas/blocks/article"
import { seoSchema } from "@/schemas/misc/seo"

export const articlePageSchema = articleSchema
  .extend({
    seo: seoSchema,
  })
  .partial()
  .strict()
