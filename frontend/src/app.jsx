import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const callBackend = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await fetch("http://localhost:8000/health");
      if (!response.ok) {
        throw new Error("Backend not reachable");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🚀 K8s Demo App</h1>
        <p className="subtitle">
          React frontend talking to FastAPI backend
        </p>

        <button onClick={callBackend} disabled={loading}>
          {loading ? "Checking..." : "Check Backend Health"}
        </button>

        {data && (
          <div className="success">
            ✅ Backend Status: <strong>{data.status}</strong>
          </div>
        )}

        {error && (
          <div className="error">
            ❌ {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
