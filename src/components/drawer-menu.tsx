import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DrawerContent,
  Drawer as DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface Props
  extends Omit<React.ComponentProps<typeof Button>, "asChild" | "children"> {
  items?: {
    text?: string
    href?: string
    links?: {
      text?: string
      href?: string
    }[]
  }[]
}

function DrawerMenu({ items, ...props }: Props) {
  return items ? (
    <DrawerRoot>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menu openen" {...props}>
          <Menu className="size-5 !w-9" />
        </Button>
      </DrawerTrigger>
      <DrawerContent aria-describedby={undefined}>
        <DrawerTitle className="sr-only">Menu</DrawerTitle>
        <div className="flex flex-col gap-3 overflow-auto p-6">
          {items.map(({ text, href, links }, index) =>
            text || links ? (
              <div
                className={cn("flex flex-col gap-3", links && "mt-3")}
                key={index}
              >
                {text && (
                  <a
                    className="text-foreground text-base font-medium hover:underline"
                    href={href}
                  >
                    {text}
                  </a>
                )}
                {links?.map(({ text, href }, index) =>
                  text && href ? (
                    <a
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      key={index}
                      href={href}
                    >
                      {text}
                    </a>
                  ) : null
                )}
              </div>
            ) : null
          )}
        </div>
      </DrawerContent>
    </DrawerRoot>
  ) : null
}

export { DrawerMenu }
