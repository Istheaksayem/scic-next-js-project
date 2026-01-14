import Link from "next/link";

const items = [
  { id: 1, name: "Wireless Headphone", price: "$120" },
  { id: 2, name: "Smart Watch", price: "$80" },
  { id: 3, name: "Gaming Mouse", price: "$40" },
];

export default function ItemsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Featured Items
        </h2>
        <p className="text-center text-gray-600 mb-10">
          A quick preview of items you can manage in this app
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-indigo-600 font-bold mt-2">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/items"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            View All Items
          </Link>
        </div>
      </div>
    </section>
  );
}
