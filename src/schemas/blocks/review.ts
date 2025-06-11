import { z } from "astro:content"

import { imageSchema } from "@/schemas/misc/image"

export const reviewSchema = z
  .object({
    id: z.string(),
    image: imageSchema,
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    rating: z.number(),
    avatar: z.string(),
  })
  .partial()
  .strict()

export type ReviewProps = z.infer<typeof reviewSchema>
