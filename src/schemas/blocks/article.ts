import { z } from "astro:content"

import { personSchema } from "@/schemas/blocks/person"
import { imageSchema } from "@/schemas/misc/image"

export const articleSchema = z
  .object({
    href: z.string(),
    children: z.any(),
    title: z.string(),
    description: z.string(),
    published: z.date(),
    image: imageSchema,
    person: personSchema,
  })
  .partial()
  .strict()

export type ArticleProps = z.infer<typeof articleSchema>
