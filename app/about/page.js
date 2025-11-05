export default function About() {
  return (
    <section className="bg-yellow-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-700">About Us</h2>

        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          Catalyst Laboratories Pvt. Ltd. is a fast-growing pharmaceutical company dedicated to innovation,
          quality, and patient care. We focus on research-driven formulations and the highest manufacturing standards.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-yellow-700 mb-3">Our Vision</h3>
            <p>
              To establish Catalyst Laboratories as a leading healthcare brand recognized globally for quality,
              trust, and innovation.
            </p>

            <h3 className="text-2xl font-bold text-yellow-700 mt-8 mb-3">Our Mission</h3>
            <p>
              To deliver excellence in healthcare through ethical practices, innovative formulations,
              and an unwavering commitment to patient well-being.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-yellow-700 mb-3">Our Strength</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>WHO-GMP & ISO 9001:2015 compliant manufacturing</li>
              <li>Experienced R&D and formulation team</li>
              <li>Modern infrastructure and advanced quality control</li>
              <li>Strong product portfolio across therapeutic segments</li>
            </ul>

            <h3 className="text-2xl font-bold text-yellow-700 mt-8 mb-3">Certifications</h3>
            <p>GMP | ISO 9001:2015 Certified | FSSAI Registered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
