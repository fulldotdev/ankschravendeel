import { z } from "astro:content"

export const bannerSchema = z
  .object({
    text: z.string(),
    href: z.string(),
  })
  .partial()
  .strict()

export type BannerProps = z.infer<typeof bannerSchema>
