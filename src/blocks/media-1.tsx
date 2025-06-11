import type { MediaProps } from "@/schemas/blocks/media"

import { Button } from "@/components/ui/button"
import { Writeup } from "@/components/ui/writeup"

export default function ({ children, buttons, image }: MediaProps) {
  return (
    <section className="relative w-full py-16">
      <div className="relative mx-auto grid w-full max-w-screen-xl items-center gap-y-8 px-4 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 lg:px-8">
        <div className="flex flex-col items-start">
          <Writeup size="4xl">{children}</Writeup>
          <div className="flex flex-row flex-wrap gap-2 not-first:mt-6">
            {buttons?.map(({ text, href }, i) => (
              <Button
                key={href}
                variant={i === 0 ? "default" : "ghost"}
                asChild
              >
                <a href={href}>{text}</a>
              </Button>
            ))}
          </div>
        </div>
        <img className="rounded-lg" {...image} />
      </div>
    </section>
  )
}
