import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Catalyst Laboratories Pvt. Ltd.",
  description: "Innovating Care. Inspiring Lives. Catalyst Laboratories Pvt. Ltd. - Committed to delivering excellence in healthcare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-yellow-50 text-gray-800">
        {/* Header */}
        <header className="bg-yellow-100 shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.jpg"
                alt="Catalyst Labs Logo"
                width={90}
                height={90}
                className="rounded-full"
              />
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Catalyst Labs
              </h1>
            </div>

            <nav className="space-x-6">
              <Link href="/" className="text-black hover:text-yellow-800 font-semibold">Home</Link>
              <Link href="/about" className="text-black hover:text-yellow-800 font-semibold">About</Link>
              <Link href="/products" className="text-black hover:text-yellow-800 font-semibold">Products</Link>
              <Link href="/research" className="text-black hover:text-yellow-800 font-semibold">Research</Link>
              <Link href="/testimonials" className="text-black hover:text-yellow-800 font-semibold">Testimonials</Link>
              <Link href="/contacts" className="text-black hover:text-yellow-800 font-semibold">Contacts</Link>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-yellow-100 text-gray-700 py-6 text-center border-t border-yellow-200">
          <p className="font-medium">© {new Date().getFullYear()} Catalyst Laboratories Pvt. Ltd.</p>
          <p className="italic text-yellow-800">Innovating Care. Inspiring Lives.</p>
        </footer>
      </body>
    </html>
  );
}
