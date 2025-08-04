import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart({ cart, updateQuantity, removeItem }) {
  const total = cart.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <h3>Total: ₹{total}</h3>
          <Link to="/products"><button>Continue Shopping</button></Link>
          <button onClick={() => alert("Proceeding to checkout...")}>Checkout</button>
        </>
      )}
    </div>
  );
}
