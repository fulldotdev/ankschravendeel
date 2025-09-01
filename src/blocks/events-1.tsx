import type { BlockProps } from "@/schemas/block"

import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Tagline } from "@/components/ui/tagline"
import { Writeup } from "@/components/ui/writeup"

export interface Events1Props {
  children?: React.ReactNode
  events?: {
    href?: string
    title?: string
    description?: string
    published?: Date
    when?: string
    where?: string
  }[]
}

export default function ({ children, events }: Events1Props) {
  const sortedEvents = events?.sort(
    (a, b) =>
      new Date(b.published || new Date()).getTime() -
      new Date(a.published || new Date()).getTime()
  )
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-md flex-col px-4 md:px-12">
        {children && <Writeup size="4xl">{children}</Writeup>}
        <div className="flex flex-col gap-4 not-first:mt-16">
          {sortedEvents?.map(({ href, title, description, when, where }) => (
            <a
              href={href}
              className="flex flex-col items-start gap-4 rounded-lg border p-6"
              key={href}
            >
              <Heading as="h3">{title}</Heading>
              <Paragraph>{description}</Paragraph>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="flex flex-row gap-2">
                  <span className="text-primary w-16 font-medium">
                    Wanneer:
                  </span>
                  <span>{when}</span>
                </li>
                <li className="flex flex-row gap-2">
                  <span className="text-primary w-16 font-medium">Waar:</span>
                  <span>{where}</span>
                </li>
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
