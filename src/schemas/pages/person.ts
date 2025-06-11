import { personSchema } from "@/schemas/blocks/person"
import { blockSchema } from "@/schemas/misc/block"
import { seoSchema } from "@/schemas/misc/seo"

export const personPageSchema = personSchema
  .extend({
    blocks: blockSchema.array(),
    seo: seoSchema,
  })
  .partial()
  .strict()
