import { useSelector } from "react-redux";
import ProductCard from "../features/components/ProductCard";

function ProductListingPage() {
  const { products } = useSelector((state) => state.products);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Plants</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
