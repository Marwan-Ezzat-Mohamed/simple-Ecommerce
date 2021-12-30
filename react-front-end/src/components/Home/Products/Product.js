import { useEffect, useState } from "react";
import { getProductImages } from "../../../services/products";
import notFound from "../../../assets/notFound.png";

const Product = ({ product }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImages(id) {
      const { data } = await getProductImages(id);
      setImages(data);
      console.log(data);
    }
    fetchImages(product.id);
  }, [product]);
  return (
    <div
      className="col my-4 mx-2 justify-content-center align-items-center text-center rounded bg-white p-3 shadow"
      style={{
        maxWidth: "235px",
      }}
    >
      <img
        className="img"
        style={{
          width: "200px",
          maxHeight: "400px",
        }}
        src={images?.length ? images[0] : notFound}
      />
      <div className="d-flex flex-colum justify-content-between mt-2 row align-items-center">
        <label className="text-secondary fs-5 fw-bold col">
          {product.name}
        </label>
        <label className="text-success fs-5 fw-bold col">
          {product.price}EGP{" "}
        </label>
      </div>
    </div>
  );
};

export default Product;
