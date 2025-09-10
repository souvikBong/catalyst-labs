export default function FAQPage() {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-green-700">How do I book a test?</h2>
            <p className="text-gray-700">
              You can book a test online or by contacting us directly. Home collection is also available.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-blue-700">Do you offer health packages?</h2>
            <p className="text-gray-700">
              Yes, we provide affordable packages for regular health checkups.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-purple-700">How do I get my reports?</h2>
            <p className="text-gray-700">
              Reports are delivered digitally via email and can also be collected from our lab.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
