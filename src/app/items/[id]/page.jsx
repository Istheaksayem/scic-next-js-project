import items from "@/data/items.json";
import Image from "next/image";
import Link from "next/link";

const ItemDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log("params id:", id);
  const item = items.find((item) => item.id.toString() === id);

  // console.log("items:", items);


  if (!item) {
    return <p className="text-center mt-10">Item not found ❌</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link href="/items" className="text-blue-600 underline">
        ← Back to Items
      </Link>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="relative h-80">
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            height={100}
            className="object-cover rounded-xl"
          />
          {/* <img
            src={item.image}

          /> */}
        </div>

        <div>
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="text-gray-600 mt-3">{item.description}</p>
          <p className="text-2xl font-semibold mt-4">৳ {item.price}</p>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
