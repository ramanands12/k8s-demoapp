import { useEffect, useState } from 'react';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/items')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch items');
        return res.json();
      })
      .then(data => setItems(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading items...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

 return (
  <div style={{ padding: "20px" }}>
    <h2>Items</h2>

    {items && items.length > 0 ? (
      items.map(item => (
        <div
          key={item.id}
          style={{
            padding: "10px",
            marginBottom: "8px",
            border: "1px solid #ccc",
            borderRadius: "6px"
          }}
        >
          {item.name}
        </div>
      ))
    ) : (
      <p>No items available or failed to load.</p>
    )}
  </div>
);
}
export default App;
