import { seoSchema } from "@/schemas/misc/seo"
import { z } from "astro:content"

export const postSchema = z
  .object({
    href: z.string(),
    children: z.any(),
    title: z.string(),
    description: z.string(),
    tags: z.string().array(),
    published: z.date(),
  })
  .partial()
  .strict()
