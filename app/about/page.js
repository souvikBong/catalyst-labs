export const metadata = {
  title: "About | Catalyst Laboratories Pvt. Ltd.",
  description:
    "Learn about Catalyst Laboratories Pvt. Ltd. — our mission, vision, and commitment to quality healthcare.",
};

export default function AboutPage() {
  return (
    <section className="bg-gray-50 text-gray-900 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          About Catalyst Laboratories
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Catalyst Laboratories Pvt. Ltd. is committed to advancing healthcare
          through precision, innovation, and trust. Our mission is to develop
          high-quality pharmaceutical formulations and provide reliable
          healthcare solutions that improve lives.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Founded by a team of experienced professionals, Catalyst Labs blends
          research expertise with global quality standards to ensure
          cost-effective and safe formulations for every need.
        </p>
      </div>
    </section>
  );
}
