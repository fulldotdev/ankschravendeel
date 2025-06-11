import { imageSchema } from "@/schemas/misc/image"
import { z } from "astro:content"

export const contentSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    image: imageSchema,
    children: z.any(),
  })
  .partial()
  .strict()

export type ContentProps = z.infer<typeof contentSchema>
