export const metadata = {
  title: "Contact Us - Catalyst Laboratories Pvt. Ltd.",
  description:
    "Get in touch with Catalyst Laboratories Pvt. Ltd. for inquiries about our products, partnerships, or services.",
};

export default function Contacts() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Contact Us
        </h2>

        <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-md">
          

          <p className="text-gray-700 mb-6">
            <strong>Registered Office:</strong><br />
            BL-H, Ground Floor, BC-28, Ward No. 10,<br />
            Deshbandhu Nagar, Kolkata - 700059
          </p>

          <p className="text-gray-700 mb-6">
            <strong>C.O.:</strong><br />
            A321, Royal Palms, Goregaon (East),<br />
            Mumbai - 400065
          </p>

          <p className="text-gray-700">
            <strong>Email:</strong> catalystlaboratoriespvtltd@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
