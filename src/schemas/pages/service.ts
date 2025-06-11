import { serviceSchema } from "@/schemas/blocks/service"
import { blockSchema } from "@/schemas/misc/block"
import { seoSchema } from "@/schemas/misc/seo"

export const servicePageSchema = serviceSchema
  .extend({
    blocks: blockSchema.array(),
    seo: seoSchema,
  })
  .partial()
  .strict()
