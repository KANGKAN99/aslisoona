import { useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      <img src={item.image} alt={item.name} width="100" height="100" />
      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => dispatch(increment(item.id))}>+</button>
        <button onClick={() => dispatch(decrement(item.id))}>-</button>
        <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
      </div>
    </div>
  );
}

export default CartItem;
