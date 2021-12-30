import Product from "./Product";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/products";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="row">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
