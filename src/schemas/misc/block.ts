import { z } from "astro:content"

import { ctaSchema } from "@/schemas/blocks/cta"
import { heroSchema } from "@/schemas/blocks/hero"
import { mediaSchema } from "@/schemas/blocks/media"
import { postSchema } from "@/schemas/blocks/post"
import { postsSchema } from "@/schemas/blocks/posts"
import { reviewSchema } from "@/schemas/blocks/review"
import { reviewsSchema } from "@/schemas/blocks/reviews"
import { serviceSchema } from "@/schemas/blocks/service"
import { servicesSchema } from "@/schemas/blocks/services"

export const blockSchema = z.union([
  ctaSchema,
  heroSchema,
  mediaSchema,
  postSchema,
  postsSchema,
  reviewSchema,
  reviewsSchema,
  serviceSchema,
  servicesSchema,
  z.object({
    block: z.string(),
  }),
])
