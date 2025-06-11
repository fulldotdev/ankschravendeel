import { imageSchema } from "@/schemas/misc/image"
import { linkSchema } from "@/schemas/misc/link"
import { menuSchema } from "@/schemas/misc/menu"
import { z } from "astro:content"

export const footerSchema = z
  .object({
    logo: imageSchema,
    title: z.string().optional(),
    description: z.string().optional(),
    channels: z.record(z.any()).optional(),
    socials: z.array(z.string()).optional(),
    menus: menuSchema.array(),
    links: linkSchema.array(),
    copyright: z.string().optional(),
  })
  .partial()
  .strict()

export type FooterProps = z.infer<typeof footerSchema>
