import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./navigation-menu"; // adjust your import path

export default function Header() {
  return (
<header className="sticky top-0 z-50 bg-gradient-to-r from-gray-300 to-orange-200 shadow-md mx-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavigationMenu className="flex items-center justify-between p-2">
          {/* Logo on the left */}
          <div className="flex items-center mr-6">
            <img
              src="/notionsoft-logo.png"
              alt="Notion Soft"
              className="h-18 w-auto"
            />
          </div>

          {/* Navigation links */}
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/home">Home</NavigationMenuLink>
            </NavigationMenuItem>
              <NavigationMenuItem>
              <NavigationMenuLink href="/services">Services</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about-us">About Us</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact-us">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>

  )
}
