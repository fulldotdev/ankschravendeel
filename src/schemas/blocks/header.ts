import { imageSchema } from "@/schemas/misc/image"
import { linkSchema } from "@/schemas/misc/link"
import { menuSchema } from "@/schemas/misc/menu"
import { z } from "astro:content"

export const headerSchema = z
  .object({
    logo: imageSchema,
    title: z.string(),
    menus: menuSchema.array(),
    buttons: linkSchema.array(),
  })
  .partial()
  .strict()

export type HeaderProps = z.infer<typeof headerSchema>
