export default function ItemCard({ item }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
}
