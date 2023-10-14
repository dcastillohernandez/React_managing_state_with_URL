import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useURLID } from "./hooks/useURLID";

const ProductItem = () => {
  const { id } = useURLID();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:9000/products/${id}`);
        const data = await res.json();
        setSingleProduct(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="single__product">
      <h1>
        <span onClick={() => navigate("/")}>🔙 </span>
        <span>
          {singleProduct.itemName} Page id: {id}
        </span>
      </h1>
      <section>
        <figure className="product__img-container">
          <img
            className="product__img"
            src={singleProduct.imageUrl}
            alt="image"
          />
        </figure>
      </section>
      <aside>
        <h2>{singleProduct.itemName}</h2>
        <h3>{singleProduct.notes}</h3>
        <h4>
          <p>
            Width: <strong>{singleProduct?.size?.width}</strong>
          </p>
          <p>
            Length: <strong>{singleProduct?.size?.length}</strong>
          </p>
        </h4>
      </aside>
    </div>
  );
};

export default ProductItem;
