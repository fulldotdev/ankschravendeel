import { z } from "astro:content"

export const eventSchema = z
  .object({
    href: z.string(),
    title: z.string(),
    description: z.string(),
    when: z.string().optional(),
    where: z.string().optional(),
  })
  .partial()
  .strict()

export type EventProps = z.infer<typeof eventSchema>
