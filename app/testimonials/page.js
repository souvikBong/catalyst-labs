export default function Testimonials() {
  return (
    <section className="bg-yellow-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-700">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <p className="italic">
              &quot;Catalyst Labs provides outstanding service and reliable reports.
              Our clinic trusts them for every diagnostic need.&quot;
            </p>
            <h4 className="mt-4 font-semibold text-yellow-700">
              – Dr. Priya Menon
            </h4>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <p className="italic">
              &quot;Their advanced pathology and home collection services make
              testing so much easier for our patients.&quot;
            </p>
            <h4 className="mt-4 font-semibold text-yellow-700">
              – Dr. Arindam Ghosh
            </h4>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <p className="italic">
              &quot;Accurate results, excellent turnaround time, and courteous
              staff — Catalyst Labs truly lives up to its name.&quot;
            </p>
            <h4 className="mt-4 font-semibold text-yellow-700">
              – Dr. Meera Basu
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
