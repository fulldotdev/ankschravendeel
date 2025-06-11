import { articleSchema } from "@/schemas/blocks/article"
import { imageSchema } from "@/schemas/misc/image"
import { z } from "astro:content"

export const articlesSchema = z
  .object({
    children: z.any(),
    articles: articleSchema.array(),
  })
  .partial()
  .strict()

export type ArticlesProps = z.infer<typeof articlesSchema>
