import { z } from "astro:content"

import { blockSchema } from "@/schemas/misc/block"
import { seoSchema } from "@/schemas/misc/seo"

export const pageSchema = z
  .object({
    blocks: blockSchema.array(),
    seo: seoSchema,
  })
  .partial()
  .strict()
