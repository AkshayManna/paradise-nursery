export default function PlantCard({ plant, addToCart }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
        <img src={plant.image} alt={plant.name} width="150" />
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <p>₹{plant.cost}</p>
        <button onClick={() => addToCart(plant)}>Add to Cart</button>
      </div>
    );
  }
  