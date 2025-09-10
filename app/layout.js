import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Catalyst Labs",
  description: "Advanced pathology tests and health packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 bg-white shadow">
          <div className="text-2xl font-bold text-green-600">Catalyst Labs</div>
          <div className="space-x-6">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <Link href="/about" className="hover:text-green-600">About</Link>
            <Link href="/services" className="hover:text-green-600">Services</Link>
            <Link href="/experts" className="hover:text-green-600">Experts</Link>
            <Link href="/testimonials" className="hover:text-green-600">Testimonials</Link>
            <Link href="/faq" className="hover:text-green-600">FAQ</Link>
            <Link href="/contact" className="hover:text-green-600">Contact</Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="min-h-[80vh]">{children}</main>

        {/* Footer */}
        <footer className="bg-green-600 text-white text-center p-6 mt-10">
          <p className="font-semibold">Catalyst Laboratories Pvt. Ltd.</p>
          <p>Flat No- GB, Triparno BC-28, Deshbandhu Nagar, North 24 Parganas, West Bengal, India 700059</p>
          <p>Email: catalystlaboratoriespvtltd@gmail.com</p>
          <div className="mt-3 space-x-6">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/experts" className="hover:underline">Experts</Link>
            <Link href="/testimonials" className="hover:underline">Testimonials</Link>
            <Link href="/faq" className="hover:underline">FAQ</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Catalyst Labs. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
