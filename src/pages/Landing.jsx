import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Paradise Nursery 🌿</h1>
      <p>Discover our aromatic and medicinal plants.</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}
