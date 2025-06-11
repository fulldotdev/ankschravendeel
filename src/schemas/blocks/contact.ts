import { linkSchema } from "@/schemas/misc/link"
import { z } from "astro:content"

export const contactSchema = z
  .object({
    children: z.string(),
    buttons: linkSchema.array(),
    socials: linkSchema.array(),
    channels: z.any(),
    form: z.any(),
  })
  .partial()
  .strict()

export type ContactProps = z.infer<typeof contactSchema>
