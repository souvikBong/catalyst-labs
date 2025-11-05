export default function Products() {
  const products = [
    {
      name: "ESOCAT DSR",
      category: "Gastroenterology",
      description: "A powerful combination of Esomeprazole 40 mg and Domperidone 30 mg for treating acid reflux and GERD.",
    },
    {
      name: "ESOCAT 40",
      category: "Gastroenterology",
      description: "Effective proton pump inhibitor for gastritis, peptic ulcers, and acid control.",
    },
    {
      name: "BASOCAL",
      category: "Orthopedics & Nutrition",
      description: "Calcium and Vitamin D3 supplement for stronger bones and improved bone density.",
    },
    {
      name: "AMOXIGUARD-CV",
      category: "Antibiotic",
      description: "Amoxicillin with Clavulanic acid formulation for broad-spectrum bacterial infections.",
    },
    {
      name: "OXYVIT",
      category: "Multivitamin",
      description: "Comprehensive multivitamin formula that boosts immunity, energy, and overall health.",
    },
  ];

  return (
    <section className="bg-yellow-50 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-700">Our Products</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {products.map((p, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-yellow-700 mb-2">{p.name}</h3>
              <p className="font-semibold text-gray-600 mb-2">{p.category}</p>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
