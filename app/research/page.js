export default function Research() {
  return (
    <section className="bg-yellow-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-700">Research & Development</h2>

        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          At Catalyst Laboratories, innovation drives every process. Our R&D team focuses on creating
          superior formulations, ensuring efficacy, safety, and patient satisfaction.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-yellow-700 mb-3">R&D Focus Areas</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Gastroenterology & Digestive Health</li>
              <li>Bone & Joint Care</li>
              <li>Infection Control (Antibiotics)</li>
              <li>Nutrition & Immunity</li>
              <li>General Wellness</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-700 mb-3">Quality Standards</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>State-of-the-art GMP compliant facilities</li>
              <li>Stringent quality testing for every batch</li>
              <li>Continuous innovation in formulation development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
