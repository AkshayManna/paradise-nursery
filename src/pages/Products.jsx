import { plants } from "../data/plants";
import PlantCard from "../components/PlantCard";

export default function Products({ addToCart }) {
  const aromatic = plants.filter(p => p.category === "Aromatic");
  const medicinal = plants.filter(p => p.category === "Medicinal");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Aromatic Plants</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {aromatic.map(plant => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>

      <h2>Medicinal Plants</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {medicinal.map(plant => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
