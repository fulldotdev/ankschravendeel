import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Tagline } from "@/components/ui/tagline"
import { Tile, TileContent, TileHeader } from "@/components/ui/tile"
import { Toggle } from "@/components/ui/toggle"
import { Writeup } from "@/components/ui/writeup"

export interface Posts1Props {
  children?: React.ReactNode
  posts?: {
    href?: string
    title?: string
    description?: string
    published?: Date | string
    tags?: string[]
  }[]
}

export default function Posts1({ children, posts }: Posts1Props) {
  const allTags = posts?.flatMap(({ tags }) => tags)
  const uniqueTags = [...new Set(allTags)].filter((tag) => tag !== undefined)

  return (
    <section className="relative w-full py-16" data-posts-filterable>
      <div className="mx-auto flex w-full flex-col items-center px-4 md:px-12">
        {children && (
          <Writeup className="text-center" size="4xl">
            {children}
          </Writeup>
        )}
        <div className="flex flex-col gap-4 not-first:mt-16">
          <div className="mb-8 flex flex-row flex-wrap justify-center gap-2">
            {uniqueTags?.map((tag) => (
              <Toggle
                key={tag}
                size="sm"
                variant="outline"
                aria-pressed="false"
                data-post-filter={tag}
              >
                {tag}
              </Toggle>
            ))}
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-4">
            {posts?.map(({ href, title, description, published, tags }) => (
              <Tile
                key={href}
                href={href}
                data-post-tags={JSON.stringify(tags ?? [])}
              >
                {tags && (
                  <TileHeader className="flex flex-row flex-wrap">
                    {tags?.map((tag) => (
                      <Badge variant="secondary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </TileHeader>
                )}
                <TileContent>
                  <Tagline size="xs">
                    {published
                      ? new Date(published).toLocaleDateString("nl-NL", {
                          timeZone: "Europe/Amsterdam",
                        })
                      : null}
                  </Tagline>
                  <Heading as="h3">{title}</Heading>
                  <Paragraph
                    className="[&_a]:text-primary [&_a]:underline"
                    dangerouslySetInnerHTML={{ __html: description ?? "" }}
                  />
                </TileContent>
              </Tile>
            ))}
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
(() => {
  const initPostFilters = () => {
    document.querySelectorAll("[data-posts-filterable]").forEach((root) => {
      if (root.dataset.filtersReady === "true") return
      root.dataset.filtersReady = "true"

      const buttons = [...root.querySelectorAll("[data-post-filter]")]
      const cards = [...root.querySelectorAll("[data-post-tags]")]

      const applyFilters = () => {
        const activeTags = buttons
          .filter((button) => button.getAttribute("aria-pressed") === "true")
          .map((button) => button.dataset.postFilter)

        cards.forEach((card) => {
          const tags = JSON.parse(card.dataset.postTags || "[]")
          card.hidden =
            activeTags.length > 0 &&
            !tags.some((tag) => activeTags.includes(tag))
        })
      }

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const nextPressed = button.getAttribute("aria-pressed") !== "true"

          button.setAttribute("aria-pressed", String(nextPressed))
          button.dataset.state = nextPressed ? "on" : "off"
          applyFilters()
        })
      })
    })
  }

  initPostFilters()
  document.addEventListener("astro:page-load", initPostFilters)
})()
`,
        }}
      />
    </section>
  )
}
