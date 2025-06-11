import { eventSchema } from "@/schemas/blocks/event"
import { z } from "astro:content"

export const eventsSchema = z
  .object({
    children: z.any(),
    events: eventSchema.array(),
  })
  .partial()
  .strict()

export type EventsProps = z.infer<typeof eventsSchema>
