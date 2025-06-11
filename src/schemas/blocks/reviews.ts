import { reviewSchema } from "@/schemas/blocks/review"
import { imageSchema } from "@/schemas/misc/image"
import { z } from "astro:content"

export const reviewsSchema = z
  .object({
    children: z.string(),
    reviews: reviewSchema.array(),
  })
  .partial()
  .strict()

export type ReviewsProps = z.infer<typeof reviewsSchema>
