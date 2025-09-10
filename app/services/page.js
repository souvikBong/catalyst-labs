export default function ServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-700">Pathology Tests</h2>
            <p className="mt-2 text-gray-700">
              Wide range of accurate diagnostic tests with timely results.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-700">Health Packages</h2>
            <p className="mt-2 text-gray-700">
              Preventive health checkups tailored to your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-purple-700">Home Collections</h2>
            <p className="mt-2 text-gray-700">
              Hassle-free sample collection at your doorstep.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
