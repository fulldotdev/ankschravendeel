import { postSchema } from "@/schemas/blocks/post"
import { z } from "astro:content"

export const postsSchema = z
  .object({
    children: z.any(),
    posts: postSchema.array(),
  })
  .partial()
  .strict()

export type PostsProps = z.infer<typeof postsSchema>
