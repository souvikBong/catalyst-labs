export default function ContactsPage() {
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>

        {/* Contact Info */}
        <div className="mb-8 space-y-2">
          <p className="text-lg text-gray-800">
            📧 Email: 
            <a href="mailto:catalystlaboratoriespvtltd@gmail.com" className="text-green-700 font-semibold ml-2">
              catalystlaboratoriespvtltd@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-800">
            📍 Address: Flat No- GB, Triparno BC-28, Deshbandhu Nagar, North 24 Parganas, West Bengal, India 700059
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
