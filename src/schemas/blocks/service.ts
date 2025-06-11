import { imageSchema } from "@/schemas/misc/image"
import { z } from "astro:content"

export const serviceSchema = z
  .object({
    href: z.string(),
    children: z.any(),
    title: z.string(),
    description: z.string(),
    image: imageSchema,
  })
  .partial()
  .strict()
