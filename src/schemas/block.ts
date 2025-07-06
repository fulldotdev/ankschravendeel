import type React from "react"
import { imageSchema } from "@/schemas/image"
import { linkSchema } from "@/schemas/link"
import { menuSchema } from "@/schemas/menu"
import { seoSchema } from "@/schemas/seo"
import { reference, z, type CollectionKey } from "astro:content"

export const itemSchema = z
  .object({
    id: z.string(),
    href: z.string(),
    content: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.string().array(),
    socials: z.string().array(),
    buttons: linkSchema.array(),
    rating: z.number(),
    when: z.string(),
    where: z.string(),
    published: z.date(),
    person: z.object({
      title: z.string(),
      tagline: z.string(),
      avatar: z.string(),
    }),
    image: imageSchema,
  })
  .partial()

export type ItemSchema = z.infer<typeof itemSchema>

export type ItemProps = Omit<ItemSchema, "content"> & {
  children?: React.ReactNode
}

const pathSchema = <C extends CollectionKey>(collection: C) => {
  return z.preprocess((value) => {
    if (typeof value !== "string") return value
    const path = value.split(`/${collection}/`)[1]
    if (!path) return value
    const id = path.split(".")[0]
    return id
  }, reference(collection))
}

export const blockSchema = itemSchema
  .extend({
    block: z.string(),
    logo: imageSchema,
    menus: menuSchema.array(),
    form: z.any(),
    // Items
    items: itemSchema.array(),
    // References
    posts: pathSchema("posts").array(),
    articles: pathSchema("articles").array(),
    services: pathSchema("services").array(),
    events: pathSchema("events").array(),
    reviews: pathSchema("reviews").array(),
    person: pathSchema("persons"),
  })
  .partial()

export type BlockSchema = z.infer<typeof blockSchema>

export type BlockProps = Omit<
  BlockSchema,
  | "block"
  | "content"
  | "posts"
  | "articles"
  | "services"
  | "events"
  | "reviews"
  | "person"
> & {
  children?: React.ReactNode
  posts?: ItemProps[]
  articles?: ItemProps[]
  services?: ItemProps[]
  events?: ItemProps[]
  reviews?: ItemProps[]
  person?: ItemProps
}

export const pageSchema = blockSchema
  .extend({
    blocks: blockSchema.array(),
    seo: seoSchema,
  })
  .partial()
  .strict()
