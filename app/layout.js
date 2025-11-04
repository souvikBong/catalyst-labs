// app/layout.js
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Catalyst Laboratories Pvt. Ltd.",
  description: "High-quality pharmaceutical formulations — Catalyst Laboratories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* NAVBAR */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            {/* Brand (left) */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Catalyst Laboratories Logo"
                className="h-14 w-auto rounded-md"
              />
              <div>
                <div className="text-lg font-semibold text-yellow-700">
                  Catalyst Laboratories
                </div>
                <div className="text-sm text-gray-600">Pvt. Ltd.</div>
              </div>
            </div>

            {/* Links (right) */}
            <nav className="hidden md:flex items-center space-x-6 text-gray-800">
              <Link href="/" className="hover:text-yellow-600 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-yellow-600 transition">
                About
              </Link>
              <Link href="/products" className="hover:text-yellow-600 transition">
                Products
              </Link>
              <Link href="/research" className="hover:text-yellow-600 transition">
                Research
              </Link>
              <Link href="/contacts" className="hover:text-yellow-600 transition">
                Contacts
              </Link>
              <Link href="/faq" className="hover:text-yellow-600 transition">
                FAQ
              </Link>
            </nav>

            {/* Mobile contact shortcut */}
            <div className="md:hidden text-gray-700">
              <Link
                href="/contacts"
                className="px-3 py-2 bg-yellow-500 text-white rounded-md text-sm hover:bg-yellow-600 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-grow container mx-auto px-6 py-8">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-200 py-10 mt-12">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Company Info */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                Catalyst Laboratories Pvt. Ltd.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Flat No- GB, Triparno BC-28, Deshbandhu Nagar, North 24 Parganas,
                West Bengal, India - 700059
              </p>
              <p className="mt-2 text-gray-400 text-sm">
                Email:{" "}
                <a
                  href="mailto:catalystlaboratoriespvtltd@gmail.com"
                  className="text-yellow-400 hover:underline"
                >
                  catalystlaboratoriespvtltd@gmail.com
                </a>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h2>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-yellow-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-yellow-400">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:text-yellow-400">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="hover:text-yellow-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tagline */}
            <div className="flex flex-col justify-center items-center md:items-end">
              <p className="text-yellow-400 italic mb-2">
                “Advancing healthcare through precision, quality, and trust.”
              </p>
              <p className="text-xs text-gray-500 mt-3">
                © 2025 Catalyst Laboratories Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
