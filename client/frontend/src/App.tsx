import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import type { Product } from "./types";
import { getAllProducts } from "./services";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
    })();
  }, []);

  return (
    <div id="app">
      <Header />
      <main>
        <Products products={products} setProducts={setProducts} />
        <AddProduct products={products} setProducts={setProducts} />
      </main>
    </div>
  )
}

export default App;
