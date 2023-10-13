import { useEffect, useState } from "react";

const HomePage = () => {
  //Almecenamos los datos en un estado con useState
  const [products, setProducts] = useState([]);

  //Usaremos useEffect para hacer el fetch de la data
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
      <h1>HomePage of m Dummy Product Page</h1>
      <div className="products__list">
        {products.map((product) => (
          <div key={product.id} className="product__item">
            <img loading="lazy" src={product.imageUrl} alt="" />
            <h2>{product.itemName}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
