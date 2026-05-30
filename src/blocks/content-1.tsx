import { Heading } from "@/components/ui/heading"
import { Paragraph } from "@/components/ui/paragraph"
import { Prose } from "@/components/ui/prose"

export interface Content1Props {
  title?: string
  description?: string
  when?: string
  where?: string
  image?: {
    src?: string
    alt?: string
  }
  children?: React.ReactNode
}

export default function ({
  title,
  description,
  when,
  where,
  image,
  children,
}: Content1Props) {
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
        {(when || where) && (
          <dl className="bg-muted/40 mt-8 grid gap-4 rounded-lg border p-5 text-sm sm:grid-cols-2">
            {when && (
              <div className="flex flex-col gap-1">
                <dt className="text-primary font-medium">Wanneer</dt>
                <dd className="text-foreground/80 leading-relaxed">{when}</dd>
              </div>
            )}
            {where && (
              <div className="flex flex-col gap-1">
                <dt className="text-primary font-medium">Waar</dt>
                <dd className="text-foreground/80 leading-relaxed">{where}</dd>
              </div>
            )}
          </dl>
        )}
        {image && (
          <img className="mt-8 rounded-md" src={image.src} alt={image.alt} />
        )}
        <Prose className="not-first:mt-8">{children}</Prose>
      </div>
    </section>
  )
}
