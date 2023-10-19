import React from 'react'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import ModeToggle from './mode-toggle'
import { Swords } from 'lucide-react'
import { Button } from './ui/button'

export default function Navbar() {
  const navItems = [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: '/docs' },
  ]

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-row items-center space-x-4">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center space-x-2">
            <Swords size={28} />
            <p className="text-2xl font-bold">SaaS Ninja</p>
          </a>
        </Link>
        <NavigationMenu className="list-none pl-2">
          <NavigationMenuList>
            {navItems.map((navItem, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href={navItem.href}
                >
                  {navItem.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-row space-x-2">
        <ModeToggle />
        <Button asChild variant="secondary">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  )
}
