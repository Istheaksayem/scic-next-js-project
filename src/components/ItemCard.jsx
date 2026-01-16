import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ item }) => {
    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <div className="relative h-48 mb-4">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                />
                {/* <img 
                src={item.image}
               
                /> */}
            </div>

            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            <p className="text-lg font-bold mt-3">৳ {item.price}</p>

            <Link
                href={`/items/${item.id}`}
                className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
                View Details
            </Link>
        </div>
    );
};

export default ItemCard;
