import type { BannerProps } from "@/schemas/blocks/banner"

export default function ({ text, href }: BannerProps) {
  const Comp = href ? "a" : "p"
  return (
    <header className="bg-primary relative z-10 flex h-8 items-center">
      <div className="text-primary-foreground mx-auto flex w-full max-w-screen-xl items-center justify-center px-4 lg:px-8">
        <Comp
          className="text-primary-foreground text-center text-sm font-medium"
          href={href}
        >
          <span>{text}</span>
        </Comp>
      </div>
    </header>
  )
}
