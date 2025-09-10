// app/page.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpg"
              alt="Catalyst Labs Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold">Catalyst Labs</h1>
          </div>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/about" className="hover:text-gray-200">About</Link>
            <Link href="/services" className="hover:text-gray-200">Services</Link>
            <Link href="/contacts" className="hover:text-gray-200">Contacts</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-green-100 to-green-200">
        <h2 className="text-4xl font-bold mb-4 text-green-900">
          Your Trusted Pathology Partner
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Providing accurate, affordable, and reliable diagnostic services.
        </p>
        <Link
          href="/services"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Explore Services
        </Link>
      </section>

      {/* Features Section */}
      <section id="projects" className="grid md:grid-cols-3 gap-6 container mx-auto p-10">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <Image src="/icon-pathology.png" alt="Pathology Tests" width={80} height={80} className="mx-auto" />
          <h3 className="text-xl font-bold text-green-700 mt-4">Pathology Tests</h3>
          <p className="text-gray-600 mt-2">Comprehensive diagnostic tests with accurate reports.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <Image src="/icon-health.png" alt="Health Packages" width={80} height={80} className="mx-auto" />
          <h3 className="text-xl font-bold text-blue-700 mt-4">Health Packages</h3>
          <p className="text-gray-600 mt-2">Affordable packages designed for your complete health checkup.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <Image src="/icon-home.png" alt="Home Collections" width={80} height={80} className="mx-auto" />
          <h3 className="text-xl font-bold text-purple-700 mt-4">Home Collections</h3>
          <p className="text-gray-600 mt-2">Get samples collected from the comfort of your home.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-900">
            Contact Us
          </h2>
          <form className="space-y-4 max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"></textarea>
            <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-center mt-6 text-gray-800">
            <p>Email: <a href="mailto:catalystlaboratoriespvtltd@gmail.com" className="text-green-700 font-semibold">catalystlaboratoriespvtltd@gmail.com</a></p>
            <p className="mt-2">
              Flat No- GB, Triparno BC-28, Deshbandhu Nagar, North 24 Parganas,
              West Bengal, India - 700059
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center py-4 mt-8">
        <p>© {new Date().getFullYear()} Catalyst Labs. All rights reserved.</p>
      </footer>
    </main>
  );
}
