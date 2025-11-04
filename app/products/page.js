// app/products/page.js
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Products</h1>

        <p className="text-gray-700 mb-6">
          Catalyst Laboratories produces a range of pharmaceutical formulations (tablets & capsules) across therapeutic categories. Below are highlighted product categories.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card: Antibiotics */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Antibiotics</h3>
            <p className="text-gray-700 mb-4">Quality antibiotic formulations manufactured following regulatory requirements.</p>
            <Link href="#" className="text-green-700 hover:underline">Learn more</Link>
          </div>

          {/* Card: Multivitamins */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Multivitamins</h3>
            <p className="text-gray-700 mb-4">A selection of multivitamin and mineral supplements to support general health.</p>
            <Link href="#" className="text-green-700 hover:underline">Learn more</Link>
          </div>

          {/* Card: Calcium-D3 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Calcium - D3</h3>
            <p className="text-gray-700 mb-4">Calcium and Vitamin D3 supplements formulated for bone health.</p>
            <Link href="#" className="text-green-700 hover:underline">Learn more</Link>
          </div>

          {/* Card: PPI (Proton Pump Inhibitors) */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">PPI Class Tablets</h3>
            <p className="text-gray-700 mb-4">Gastric acid suppression formulations manufactured with quality controls.</p>
            <Link href="#" className="text-green-700 hover:underline">Learn more</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
