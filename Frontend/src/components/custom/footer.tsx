import { Link } from "@tanstack/react-router";

const footerLinks = [
  { title: "Company", links: ["About Us", "Careers", "Contact Us", "Press"] },
  {
    title: "Services",
    links: ["Find Talents", "Find Work", "How It Works", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Blog", "FAQs", "Terms of Service", "Privacy Policy"],
  },
];

export function Footer() {
  return (
    <footer className="bg-blue-50 lg:w-3/4 mx-auto rounded-md mb-4">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-[#0042C6]">
              Karyathalo
            </Link>
            <p className="text-sm text-gray-600">
              Nepal's own freelance marketplace. Connecting talents with local
              clients and businesses.
            </p>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-900">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to="/"
                      className="text-sm text-gray-600 hover:text-[#0042C6]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Karyathalo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
