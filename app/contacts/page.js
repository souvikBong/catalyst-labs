export default function Contacts() {
  return (
    <section className="bg-gray-50 text-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="text-left sm:text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Reach Us
            </h3>
            <p>
              <strong>Registered Office:</strong>
              <br />
              BL-H, Ground Floor, BC-28, Ward No. 10,
              <br />
              Deshbandhu Nagar, Kolkata - 700059
            </p>

            <p className="mt-4">
              <strong>Corporate Office:</strong>
              <br />
              A321, Royal Palms, Goregaon (East),
              <br />
              Mumbai - 400065
            </p>

            <p className="mt-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:catalystlaboratoriespvtltd@gmail.com"
                className="text-blue-700 hover:underline"
              >
                catalystlaboratoriespvtltd@gmail.com
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <form className="bg-white p-6 rounded-lg shadow-md border border-blue-100 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
