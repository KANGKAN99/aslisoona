import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const totalItems = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <header style={{ padding: "10px", display: "flex", justifyContent: "space-between" }}>
      <h2>Aslisoona</h2>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒 ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;

