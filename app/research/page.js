export default function ResearchPage() {
  return (
    <main className="px-6 py-12 bg-gray-50 text-gray-900">
      {/* Hero Banner */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Research & Development
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Catalyst Labs, we are driven by innovation and a commitment to advancing diagnostic excellence. 
          Our R&D focuses on delivering accurate, affordable, and accessible pathology solutions powered by science and technology.
        </p>
      </section>

      {/* Focus Areas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
          Our Focus Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg text-blue-900 mb-2">Pathology Innovation</h3>
            <p className="text-gray-600">
              Developing advanced diagnostic tests for faster and more reliable results.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg text-blue-900 mb-2">Digital Healthcare</h3>
            <p className="text-gray-600">
              Leveraging AI, data science, and automation to transform patient care.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg text-blue-900 mb-2">Collaborative Research</h3>
            <p className="text-gray-600">
              Partnering with hospitals, universities, and research centers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
          Infrastructure & Facilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg text-blue-900 mb-2">State-of-the-Art Labs</h3>
            <p className="text-gray-600">
              Equipped with modern diagnostic machines ensuring precision and reliability.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg text-blue-900 mb-2">Clinical Research</h3>
            <p className="text-gray-600">
              Conducting trials and validations to maintain the highest global standards.
            </p>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Quality & Certifications
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Catalyst Labs follows rigorous quality protocols and adheres to international standards. 
          We aim to be NABL and ISO certified, ensuring accuracy, safety, and global compliance.
        </p>
      </section>

      {/* Future Vision */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Our Future Vision
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We are working towards a future where advanced diagnostics and preventive healthcare 
          are accessible to everyone. With AI-driven tools and sustainable practices, 
          Catalyst Labs is shaping the future of pathology.
        </p>
      </section>
    </main>
  );
}