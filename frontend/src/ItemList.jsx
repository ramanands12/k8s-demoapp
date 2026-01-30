function ItemList({ items }) {
  if (!Array.isArray(items)) {
    return <p className="text-center text-red-500">Failed to load items.</p>;
  }

  if (items.length === 0) {
    return <p className="text-center">No items available.</p>;
  }

  return (
    <div className="grid gap-3">
      {items.map(item => (
        <div
          key={item.id}
          className="p-4 border rounded shadow-sm bg-white"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
