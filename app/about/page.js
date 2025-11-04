// app/about/page.js
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Catalyst Laboratories Pvt. Ltd.</h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Catalyst Laboratories is a Kolkata-based pharmaceutical company dedicated to producing safe, effective, and affordable medicines. We combine modern manufacturing practices with a commitment to quality and compliance to improve patient outcomes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Our Mission</h3>
            <p className="text-gray-700">To provide high-quality pharmaceutical formulations that are accessible and affordable to all.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Our Vision</h3>
            <p className="text-gray-700">To be a trusted name in pharmaceuticals known for quality, innovation, and reliable patient care.</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Values</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity & transparency</li>
            <li>Patient safety & quality</li>
            <li>Innovation & continuous improvement</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
