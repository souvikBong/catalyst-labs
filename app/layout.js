import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Catalyst Laboratories Pvt. Ltd.",
  description:
    "Official website of Catalyst Laboratories Pvt. Ltd. – delivering quality pharmaceuticals, diagnostics, and healthcare innovation.",
  keywords: [
    "Catalyst Labs",
    "pharmaceuticals",
    "diagnostics",
    "research",
    "healthcare",
    "medical",
    "biotech",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-yellow-50 text-gray-900 flex flex-col min-h-screen">
        {/* 🌟 Header / Navbar */}
        <header className="bg-yellow-300 shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Catalyst Labs Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
                Catalyst Labs
              </h1>
            </div>

            {/* Navigation Links */}
            <nav className="space-x-6 text-lg font-semibold">
              <Link
                href="/"
                className="text-gray-900 hover:text-green-700 transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-green-700 transition"
              >
                About
              </Link>
              <Link
                href="/research"
                className="text-gray-900 hover:text-green-700 transition"
              >
                Research
              </Link>
              <Link
                href="/products"
                className="text-gray-900 hover:text-green-700 transition"
              >
                Products
              </Link>
              <Link
                href="/contacts"
                className="text-gray-900 hover:text-green-700 transition"
              >
                Contacts
              </Link>
              <Link
                href="/faq"
                className="text-gray-900 hover:text-green-700 transition"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </header>

        {/* 🌐 Page Content */}
        <main className="flex-grow container mx-auto p-6">{children}</main>

        {/* 🧾 Footer */}
        <footer className="bg-yellow-200 text-gray-900 py-6 mt-10 border-t border-yellow-400">
          <div className="container mx-auto text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Catalyst Laboratories Pvt. Ltd.
              All rights reserved.
            </p>
            <p className="text-gray-800 mt-2">
              Flat No-GB, Triparno BC-28, Deshbandhu Nagar, North 24 Parganas,
              West Bengal, India – 700059
            </p>
            <p className="text-gray-800 mt-1">
              Email: catalystlaboratoriespvtltd@gmail.com
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
