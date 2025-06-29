import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={product.image} alt={product.name} width="100%" height="150" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))} disabled={isInCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;