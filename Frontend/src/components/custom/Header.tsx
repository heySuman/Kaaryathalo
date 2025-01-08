import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const navItems = [
  { name: "Find talents", href: "/" },
  { name: "Why Kaaryathalo", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Login", href: "/login" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="lg:w-2/3 mx-auto sticky top-0 z-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-normal h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-800 ">
                Kaaryathalo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-600 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium"
                    activeProps={{
                      className: "underline underline-offset-2 text-blue-900",
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobile && isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
