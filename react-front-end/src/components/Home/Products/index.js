import Product from "./Product";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/products";
import SearchBar from "material-ui-search-bar";
import Fuse from "fuse.js";
import { useSessionStorage } from "../../common/Hooks/useStorage";

const Products = () => {
  const [products, setProducts] = useSessionStorage("products", []);
  const [searchQuery, setSearchQuery] = useState("");
  const [productsToRender, setProductsToRender] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts();
      setProducts(data);
      setProductsToRender(data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      //if no query is entered render all customers
      setProductsToRender(products);
      return;
    }

    //construct fuse array to be able to fuzzy search
    const fuse = new Fuse(products, {
      shouldSort: true,
      keys: ["name"],
    });

    const result = fuse.search(query);
    const newProducts = result.map((res) => res.item);
    setProductsToRender(newProducts);
  };

  return (
    <div className="col-12">
      <div className="col-12 d-flex flex-column align-items-center">
        <SearchBar
          className="col-6 my-3 shadow"
          value={searchQuery}
          onChange={(searchVal) => handleSearch(searchVal)}
          onCancelSearch={() => handleSearch("")}
        />
      </div>
      <div className="row justify-content-center">
        {productsToRender.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
