import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import { getAllCartProducts, getAllProducts } from "./services";
import type { Product, Cart } from "./types";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
      const fetchedCartProducts = await getAllCartProducts();
      setCart(fetchedCartProducts);
    })();
  }, []);

  return (
    <div id="app">
      <Header cart={cart} setCart={setCart} />
      <main>
        <Products
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart} />
        <AddProduct products={products} setProducts={setProducts} />
      </main>
    </div>
  )
}

export default App;
