import { linkSchema } from "@/schemas/misc/link"

export const menuSchema = linkSchema
  .extend({
    links: linkSchema.array(),
  })
  .partial()
  .strict()
