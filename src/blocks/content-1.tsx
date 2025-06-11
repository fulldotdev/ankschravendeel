import type { ContentProps } from "@/schemas/blocks/content"

import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Prose } from "@/components/ui/prose"

export default function ({
  title,
  description,
  image,
  children,
}: ContentProps) {
  return (
    <section className="relative w-full py-16">
      <div className="mx-auto flex w-full max-w-screen-md flex-col px-4 lg:px-8">
        {title && (
          <Heading className="mb-4" as="h1" size="5xl">
            {title}
          </Heading>
        )}
        {description && (
          <Paragraph
            className="text-muted-foreground mt-4 font-medium"
            size="lg"
          >
            {description}
          </Paragraph>
        )}
        {image && (
          <img className="mt-8 rounded-md" src={image.src} alt={image.alt} />
        )}
        <Prose className="not-first:mt-8">{children}</Prose>
      </div>
    </section>
  )
}
