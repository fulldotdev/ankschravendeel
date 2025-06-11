import { serviceSchema } from "@/schemas/blocks/service"
import { z } from "astro:content"

export const servicesSchema = z
  .object({
    children: z.any(),
    services: serviceSchema.array(),
  })
  .partial()
  .strict()

export type ServicesProps = z.infer<typeof servicesSchema>
