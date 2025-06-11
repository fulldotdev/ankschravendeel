import { linkSchema } from "@/schemas/misc/link"
import { z } from "astro:content"

export const personSchema = z
  .object({
    href: z.string(),
    children: z.any(),
    title: z.string(),
    description: z.string(),
    tagline: z.string(),
    socials: z.string().array(),
    buttons: linkSchema.array(),
    avatar: z.string(),
  })
  .partial()
  .strict()
