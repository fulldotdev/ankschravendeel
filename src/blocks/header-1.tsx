import type { HeaderProps } from "@/schemas/blocks/header"

import { Button } from "@/components/ui/button"
import { DrawerMenu } from "@/components/drawer-menu"
import { NavigationMenu } from "@/components/navigation-menu"

export default function ({ title, logo, menus, buttons }: HeaderProps) {
  return (
    <header className="header bg-background sticky top-0 z-50 flex h-14 w-full border-b">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-4 px-4 max-sm:gap-0 lg:px-8">
        <div className="flex items-center gap-2">
          {menus && <DrawerMenu className="-ml-2.5 lg:hidden" items={menus} />}
          {logo && (
            <a
              href="/"
              className="mr-4 flex items-center gap-3 font-semibold whitespace-nowrap"
            >
              {logo.src && (
                <img
                  className="logo h-9 w-auto max-w-[200px] object-contain max-sm:hidden lg:hidden xl:flex"
                  {...logo}
                />
              )}
              {title && <span>{title}</span>}
            </a>
          )}
          {menus && (
            <NavigationMenu
              className="max-xl:-ml-3 max-lg:hidden"
              items={menus}
            />
          )}
        </div>
        <div className="inline-flex w-full items-center justify-end gap-2">
          {buttons && buttons.length > 0 && (
            <div className="inline-flex flex-nowrap gap-2 max-sm:hidden">
              {buttons.map(({ text, href, ...button }, i) => (
                <Button
                  key={href}
                  variant={i === 0 ? "default" : "ghost"}
                  asChild
                  {...button}
                >
                  <a href={href}>{text}</a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
