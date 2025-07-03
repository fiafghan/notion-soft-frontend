import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./navigation-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-300 to-orange-200 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
         
            <img
              src="/notionsoft-logo.png"
              alt="Notion Soft"
              className="h-12 w-auto"
            />

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <NavigationMenu className="hidden sm:flex">
            <NavigationMenuList className="flex space-x-6">
              {["Home", "Services", "About Us", "Blog"].map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                    >
                      <motion.span
                        whileHover={{
                          scale: 1.07,
                          color: "#111827", // Tailwind gray-900
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="text-base font-medium text-gray-700 transition-colors duration-300"
                      >
                        {item}
                        <motion.span
                        layoutId="underline"
                        className="absolute left-1/2 -bottom-1 h-[2px] w-0 group-hover:w-full group-hover:left-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 origin-center transition-all duration-300"
                      />
                      </motion.span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Menu with AnimatePresence */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden mt-4"
            >
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col space-y-4 text-center">
                  {["Home", "Services", "About Us", "Blog"].map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                          onClick={() => setMenuOpen(false)}
                          className="text-lg text-gray-800 hover:text-black"
                        >
                          {item}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
