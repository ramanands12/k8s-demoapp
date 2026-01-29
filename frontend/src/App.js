import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]); // initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/items") // replace with your API endpoint
      .then((res) => res.json())
      .then((data) => {
        // Ensure the data is an array
        if (Array.isArray(data)) {
          setItems(data);
        } else if (data && data.items && Array.isArray(data.items)) {
          // in case your backend returns { items: [...] }
          setItems(data.items);
        } else {
          setItems([]); // fallback
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        setError("Failed to load items");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item) => (
            <li key={item.id || item.name}>{item.name || JSON.stringify(item)}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
