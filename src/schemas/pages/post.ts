import { postSchema } from "@/schemas/blocks/post"
import { seoSchema } from "@/schemas/misc/seo"

export const postPageSchema = postSchema
  .extend({
    seo: seoSchema,
  })
  .partial()
  .strict()
