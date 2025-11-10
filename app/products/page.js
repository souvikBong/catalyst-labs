export default function Products() {
  const products = [
    {
      name: "ESOCAT DSR",
      category: "Gastroenterology",
      description:
        "A powerful combination of Esomeprazole 40 mg and Domperidone 30 mg for treating acid reflux and GERD.",
    },
    {
      name: "ESOCAT 40",
      category: "Gastroenterology",
      description:
        "Effective proton pump inhibitor for gastritis, peptic ulcers, and acid control.",
    },
    {
      name: "BASOCAL",
      category: "Orthopedics & Nutrition",
      description:
        "Calcium and Vitamin D3 supplement for stronger bones and improved bone density.",
    },
    {
      name: "AMOXIGUARD-CV",
      category: "Antibiotic",
      description:
        "Amoxicillin with Clavulanic acid formulation for broad-spectrum bacterial infections.",
    },
    {
      name: "OXYVIT",
      category: "Multivitamin",
      description:
        "Comprehensive multivitamin formula that boosts immunity, energy, and overall health.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Our Products
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl border border-blue-100 transition transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                {p.name}
              </h3>
              <p className="font-semibold text-gray-600 mb-2">{p.category}</p>
              <p className="text-gray-700">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
