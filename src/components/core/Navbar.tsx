import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
// import { Button } from "./ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Membership", href: "#membership" },
    { label: "Clients", href: "#clients" },
    { label: "Why Us?", href: "#why-us" },
  ];

  return (
    <nav className="fixed top-0 z-100 w-full border-b border-white/20 bg-linear-to-b from-black/30 via-black/20 to-transparent backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="group text-white drop-shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center space-x-2">
                <span className="bg-linear-to-r from-white via-white to-white/90 bg-clip-text font-serif text-3xl italic tracking-wide text-transparent transition-all">
                  Élégance
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-white/90 drop-shadow-md transition-all hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-linear-to-r after:from-white/60 after:to-white after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button
              className="hidden rounded-full border-2 border-white/40 bg-white/20 px-8 py-2.5 text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-white/60 hover:bg-white/30 hover:shadow-lg hover:shadow-white/20 md:inline-flex"
            // asChild
            >
              <Link to="#contact">Contact</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="group rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl transition-all hover:scale-110 hover:border-white/50 hover:bg-white/20 md:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-white/20 bg-linear-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-2xl">
                <SheetHeader>
                  <SheetTitle className="font-serif text-2xl italic text-white">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-6">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group text-lg text-white/90 transition-all hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-linear-to-r after:from-white/60 after:to-white after:transition-all group-hover:after:w-full">
                        {item.label}
                      </span>
                    </a>
                  ))}
                  {/* <div className="border-t border-white/20 pt-6">
                    <a
                      href="#search"
                      className="flex items-center space-x-3 text-lg text-white/90 transition-colors hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="rounded-full border border-white/30 bg-white/10 p-2 backdrop-blur-xl">
                        <Search className="h-5 w-5" />
                      </div>
                      <span>Search</span>
                    </a>
                  </div> */}
                  <Button
                    className="rounded-full border-2 border-white/40 bg-white/20 py-6 text-white backdrop-blur-xl transition-all hover:border-white/60 hover:bg-white/30 hover:shadow-lg hover:shadow-white/20"
                  >
                    <Link to="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
