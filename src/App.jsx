import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        
      })
      
  });

  const getRandomProducts = () => {
    setDisplayedProducts(products.sort(() => 0.5 - Math.random()).slice(0, 3));
  };

  return (
    <div>
      <h1>Tienda Online</h1>
      <button onClick={getRandomProducts}>Ver productos</button>
      <ProductList products={displayedProducts} />
    </div>
  );
}

export default App;
