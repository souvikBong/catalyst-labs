export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-50 text-gray-900">
      {/* 🔹 Fullscreen Hero Section */}
      <section className="relative w-full h-screen">
        <img
          src="/bg.png"
          alt="Catalyst Labs Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Catalyst Laboratories Pvt. Ltd.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
            Innovation • Quality • Trust — Advancing Healthcare for a Healthier
            Tomorrow
          </p>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Welcome to Catalyst Laboratories
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Catalyst Laboratories Pvt. Ltd. is dedicated to delivering superior
          pharmaceutical formulations and healthcare innovations. We believe in
          ethical research, precision, and consistent quality that truly makes a
          difference in people’s lives.
        </p>

        {/* 🔹 CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="/products"
            className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
          >
            Explore Products
          </a>
          <a
            href="/research"
            className="px-6 py-3 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition"
          >
            Our Research
          </a>
        </div>

        {/* 🔹 Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md border border-blue-100 transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Quality & Compliance
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              We adhere to WHO-GMP standards, ensuring every formulation meets
              the highest benchmarks of safety and efficacy.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md border border-blue-100 transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Research Focus
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Our R&D team develops innovative drug delivery systems and
              therapeutic solutions for emerging healthcare needs.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md border border-blue-100 transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Global Vision
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              We aspire to expand our global footprint through partnerships and
              accessible, affordable healthcare worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section className="w-full bg-blue-50 py-12 px-6 text-center border-t border-blue-100">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Have an Enquiry?
        </h2>
        <p className="text-gray-700 mb-4">
          Reach out to us at{" "}
          <a
            href="mailto:catalystlaboratoriespvtltd@gmail.com"
            className="text-blue-700 font-medium hover:underline"
          >
            catalystlaboratoriespvtltd@gmail.com
          </a>{" "}
          or visit our Contacts page.
        </p>
        <a
          href="/contacts"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
