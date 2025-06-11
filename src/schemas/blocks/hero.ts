import { imageSchema } from "@/schemas/misc/image"
import { linkSchema } from "@/schemas/misc/link"
import { z } from "astro:content"

export const heroSchema = z
  .object({
    children: z.any(),
    buttons: linkSchema.array(),
    image: imageSchema,
  })
  .partial()
  .strict()

export type HeroProps = z.infer<typeof heroSchema>
