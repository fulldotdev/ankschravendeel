import { z } from "astro:content"

import { seoSchema } from "@/schemas/misc/seo"

export const policyPageSchema = z
  .object({
    seo: seoSchema,
  })
  .partial()
  .strict()
