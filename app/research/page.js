export const metadata = {
  title: "Research | Catalyst Laboratories Pvt. Ltd.",
  description:
    "Explore research initiatives and innovations at Catalyst Laboratories Pvt. Ltd.",
};

export default function ResearchPage() {
  return (
    <section className="bg-gray-100 text-gray-900 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Research & Innovation
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Our R&D team focuses on formulating advanced pharmaceutical products
          that adhere to international quality standards. We believe innovation
          is the heart of healthcare progress.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Formulation Development",
              desc: "Innovative solutions for oral, injectable, and topical formulations.",
            },
            {
              title: "Analytical Research",
              desc: "Cutting-edge analytical techniques ensuring product safety and stability.",
            },
            {
              title: "Clinical Evaluation",
              desc: "Scientific validation through ethical and accurate clinical research.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
