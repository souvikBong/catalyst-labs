// app/contacts/page.js
export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h1>

        <p className="text-gray-800 mb-4">
          For enquiries, partnerships, or product information please contact us:
        </p>

        <div className="space-y-3 text-gray-900 mb-6">
          <div><strong>Email:</strong> <a href="mailto:catalystlaboratoriespvtltd@gmail.com" className="text-green-700 underline">catalystlaboratoriespvtltd@gmail.com</a></div>
          <div><strong>Address:</strong> Flat No- GB, Triparno BC-28, Deshbandhu Nagar, North 24 Parganas, West Bengal, India - 700059</div>
          <div><strong>Phone:</strong> +91-XXXXXXXXXX</div>
        </div>

        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-md text-gray-900 focus:ring-2 focus:ring-green-400" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md text-gray-900 focus:ring-2 focus:ring-green-400" />
          <textarea rows="4" placeholder="Message" className="w-full p-3 border rounded-md text-gray-900 focus:ring-2 focus:ring-green-400"></textarea>
          <button className="px-5 py-3 bg-green-700 text-white rounded-md">Send Message</button>
        </form>
      </section>
    </main>
  );
}
