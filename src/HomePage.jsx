import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  //Almecenamos datos
  const [products, setProducts] = useState([]);

  //Fetch de la data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:9000/products");
        const clothesData = await res.json();
        console.log(clothesData);
        setProducts(clothesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="homepage">
      <h1>HomePage of my Dummy Product Page</h1>
      <div className="products__list">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product?id=${product.id}`}
            className="product__item"
          >
            <img loading="lazy" src={product.imageUrl} alt="" />
            <h2>{product.itemName}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
