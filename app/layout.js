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
      <body
        className="bg-gray-50 text-gray-900 flex flex-col min-h-screen"
        style={{ fontFamily: "Bahnschrift Light, sans-serif" }}
      >
        {/* 🌐 Header */}
        <header className="bg-blue-500 shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4 flex-wrap">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="Catalyst Labs Logo"
                width={90}
                height={90}
                className="rounded-full object-contain"
              />
              <h1 className="text-3xl font-bold text-white tracking-wide">
                Catalyst Labs
              </h1>
            </div>

            {/* Navbar */}
            <nav className="space-x-6 text-lg font-semibold text-white flex flex-wrap justify-center">
              <Link href="/" className="hover:text-blue-200 transition-all duration-200">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-200 transition-all duration-200">
                About
              </Link>
              <Link href="/research" className="hover:text-blue-200 transition-all duration-200">
                Research
              </Link>
              <Link href="/products" className="hover:text-blue-200 transition-all duration-200">
                Products
              </Link>
              <Link href="/contacts" className="hover:text-blue-200 transition-all duration-200">
                Contacts
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-0">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-400 text-white py-6 mt-10 border-t border-blue-600">
          <div className="container mx-auto text-center text-sm px-4">
            <p>
              &copy; {new Date().getFullYear()} Catalyst Laboratories Pvt. Ltd.
              All rights reserved.
            </p>
            <p className="mt-2">
              Flat No-GB, Triparno BC-28, Deshbandhu Nagar, North 24 Parganas,
              West Bengal, India – 700059
            </p>
            <p className="mt-1">
              Email: catalystlaboratoriespvtltd@gmail.com
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
