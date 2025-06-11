import { linkSchema } from "@/schemas/misc/link"
import { z } from "astro:content"

export const ctaSchema = z
  .object({
    children: z.any(),
    buttons: linkSchema.array(),
  })
  .partial()
  .strict()

export type CtaProps = z.infer<typeof ctaSchema>
