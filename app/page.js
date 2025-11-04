// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-white rounded-lg shadow-sm py-12 px-6 md:px-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Welcome to Catalyst Laboratories Pvt. Ltd.
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Advancing healthcare through precision, quality, and trust. We deliver high-quality pharmaceutical formulations and dependable healthcare products to improve lives.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/products" className="px-5 py-3 bg-green-700 text-white rounded-md shadow hover:bg-green-800">Explore Products</Link>
          <Link href="/research" className="px-5 py-3 border border-green-700 text-green-700 rounded-md hover:bg-green-50">Our Research</Link>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-2">Quality First</h3>
          <p className="text-gray-700">Committed to rigorous quality protocols and regulatory compliance.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Affordable Care</h3>
          <p className="text-gray-700">Delivering cost-effective pharmaceutical formulations without compromising safety.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Wide Portfolio</h3>
          <p className="text-gray-700">Tablets, capsules and specialized formulations across several therapeutic areas.</p>
        </div>
      </section>

      {/* QUICK CTA */}
      <section className="mt-10 bg-green-50 p-6 rounded-lg text-center">
        <h4 className="text-lg font-semibold text-green-800 mb-2">Have an enquiry?</h4>
        <p className="text-gray-700 mb-4">Email us at <a href="mailto:catalystlaboratoriespvtltd@gmail.com" className="text-green-700 underline">catalystlaboratoriespvtltd@gmail.com</a> or visit the Contacts page.</p>
        <Link href="/contacts" className="inline-block px-6 py-2 bg-green-700 text-white rounded-md">Contact Us</Link>
      </section>
    </div>
  );
}
