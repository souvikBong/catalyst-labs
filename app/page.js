import Link from "next/link";

export const metadata = {
  title: "Home | Catalyst Laboratories Pvt. Ltd.",
  description:
    "Welcome to Catalyst Laboratories Pvt. Ltd. – advancing healthcare through precision, quality, and trust.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-50 text-gray-900 flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="w-full max-w-6xl bg-white p-6 sm:p-10 rounded-lg shadow-md text-center mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-4 leading-snug">
          Welcome to Catalyst Laboratories Pvt. Ltd.
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mb-6">
          Advancing healthcare through precision, quality, and trust. We deliver
          high-quality pharmaceutical formulations and dependable healthcare
          products to improve lives.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/products"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto text-center"
          >
            Explore Products
          </Link>
          <Link
            href="/research"
            className="border border-green-600 text-green-700 px-6 py-2 rounded-md hover:bg-green-100 transition w-full sm:w-auto text-center"
          >
            Our Research
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12">
        <div className="p-6 bg-yellow-100 rounded-lg shadow hover:shadow-lg transition text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
            Quality First
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Committed to rigorous quality protocols and regulatory compliance.
          </p>
        </div>

        <div className="p-6 bg-yellow-100 rounded-lg shadow hover:shadow-lg transition text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
            Affordable Care
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Delivering cost-effective pharmaceutical formulations without
            compromising safety.
          </p>
        </div>

        <div className="p-6 bg-yellow-100 rounded-lg shadow hover:shadow-lg transition text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
            Wide Portfolio
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Tablets, capsules, and specialized formulations across several
            therapeutic areas.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-5xl bg-yellow-100 rounded-lg p-6 sm:p-8 shadow-md text-center mb-10">
        <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-3">
          Have an enquiry?
        </h3>
        <p className="text-gray-800 text-sm sm:text-base mb-3">
          Email us at{" "}
          <a
            href="mailto:catalystlaboratoriespvtltd@gmail.com"
            className="text-green-700 underline hover:text-green-800"
          >
            catalystlaboratoriespvtltd@gmail.com
          </a>{" "}
          or visit the Contacts page.
        </p>
        <Link
          href="/contacts"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
