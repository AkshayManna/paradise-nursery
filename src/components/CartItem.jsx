export default function CartItem({ item, updateQuantity, removeItem }) {
    return (
      <div style={{ border: "1px solid #aaa", padding: "10px", margin: "10px" }}>
        <img src={item.image} alt={item.name} width="100" />
        <h4>{item.name}</h4>
        <p>Unit Cost: ₹{item.cost}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ₹{item.cost * item.quantity}</p>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
        <button onClick={() => removeItem(item.id)}>Delete</button>
      </div>
    );
  }
  