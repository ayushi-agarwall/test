'use client'

import { Link } from 'next-view-transitions'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'
import If from '@/components/ui/if'

import { LuGithub, LuMenu } from 'react-icons/lu'
import { FaXTwitter } from 'react-icons/fa6'
import { SiBuymeacoffee } from 'react-icons/si'

import Logo from '@/assets/logo.svg'
import { usePathname } from 'next/navigation'
import { ThemeSwitch } from '../ui/theme-switch'

type Tabs = {
  name: string
  href: string
  isNewTab?: boolean
  variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'arrow'
    | 'smile'
    | 'linkHover2'
    | null
    | undefined
  className?: string
  isUpdated?: boolean
}

const tabs: Tabs[] = [
  { name: 'Sales Agent', href: '/', variant: 'linkHover2' },
  { name: 'Scheduled Calls', href: '/', variant: 'arrow' },
]

export default function Header() {
  const pathname = usePathname()
  const currentBasePath = '/' + pathname.split('/')[1]

  return (
    <header className="max-w-5xl mx-auto flex justify-between items-center my-5 px-5 lg:px-0">
      <Link
        href="/"
        className="cursor-pointer md:hidden dark:bg-white dark:rounded-lg p-2"
      >
        <Logo className="w-9 h-9" />
      </Link>
      <nav className="hidden md:flex items-center gap-3">
        <Link
          href="/"
          className="cursor-pointer dark:bg-white dark:rounded-lg p-1"
        >
          <Logo className="w-9 h-9" />
        </Link>
        {tabs.map((tab, i) => (
          <Link
            href={tab.href}
            key={i}
            target={tab.isNewTab ? '_blank' : '_self'}
            className="relative"
          >
            <Button
              variant={tab.variant}
              className={cn(
                'w-full px-1',
                tab?.className,
                currentBasePath !== tab.href && 'text-muted-foreground',
                currentBasePath === tab.href && 'text-primary',
              )}
            >
              {tab.name}
              <If
                condition={tab.isUpdated}
                render={() => (
                  <span className="w-2 h-2 bg-green-400 rounded-full absolute right-1.5 top-1.5 animate-pulse" />
                )}
              />
            </Button>
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <Link href="/">
          <Button variant="gooeyLeft" className="g-primary rounded-full px-4">
            Customise Agent
          </Button>
        </Link>
        <ThemeSwitch />
      </div>

      <nav className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="rounded-full" size="icon">
              <LuMenu />
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <div className="mx-auto w-full max-w-sm flex flex-col gap-3">
              <DrawerFooter>
                <div className="flex justify-end space-x-2">
                  
                  <ThemeSwitch />
                </div>

                {tabs.map((tab) => (
                  <DrawerClose asChild key={tab.href}>
                    <Link href={tab.href}>
                      <Button
                        variant="secondary"
                        className={cn('w-full', tab?.className)}
                      >
                        {tab.name}
                      </Button>
                    </Link>
                  </DrawerClose>
                ))}
                <Link href="/">
                  <Button className="w-full bg-primary  px-2">
                    Customise Agent
                  </Button>
                </Link>
                <DrawerClose asChild>
                  <Button variant="outline" className="rounded-full">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  )
}
