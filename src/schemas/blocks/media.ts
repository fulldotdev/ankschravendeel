import { imageSchema } from "@/schemas/misc/image"
import { linkSchema } from "@/schemas/misc/link"
import { z } from "astro:content"

export const mediaSchema = z
  .object({
    children: z.any(),
    buttons: linkSchema.array(),
    image: imageSchema,
  })
  .partial()
  .strict()

export type MediaProps = z.infer<typeof mediaSchema>
