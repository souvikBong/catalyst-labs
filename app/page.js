export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 px-4 sm:px-6 md:px-10">
      {/* Hero Section */}
      <section className="text-center py-10 md:py-16 bg-white rounded-2xl shadow-md w-full max-w-5xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Welcome to Catalyst Laboratories Pvt. Ltd.
        </h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
          Advancing healthcare through precision, quality, and trust. We deliver
          high-quality pharmaceutical formulations and dependable healthcare
          products to improve lives.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-sm sm:text-base">
            Explore Products
          </button>
          <button className="border border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition text-sm sm:text-base">
            Our Research
          </button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12 w-full max-w-6xl px-2">
        <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <h3 className="text-green-700 font-semibold text-lg mb-2">
            Quality First
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Committed to rigorous quality protocols and regulatory compliance.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <h3 className="text-green-700 font-semibold text-lg mb-2">
            Affordable Care
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Delivering cost-effective pharmaceutical formulations without
            compromising safety.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <h3 className="text-green-700 font-semibold text-lg mb-2">
            Wide Portfolio
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Tablets, capsules, and specialized formulations across several
            therapeutic areas.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-yellow-100 text-center p-6 sm:p-10 rounded-2xl shadow max-w-5xl w-full mb-10">
        <h3 className="text-green-800 font-semibold text-lg sm:text-xl mb-2">
          Have an enquiry?
        </h3>
        <p className="text-gray-800 text-sm sm:text-base mb-4">
          Email us at{" "}
          <a
            href="mailto:catalystlaboratoriespvtltd@gmail.com"
            className="text-green-700 font-medium underline hover:text-green-800"
          >
            catalystlaboratoriespvtltd@gmail.com
          </a>{" "}
          or visit the Contacts page.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-sm sm:text-base">
          Contact Us
        </button>
      </section>
    </main>
  );
}
