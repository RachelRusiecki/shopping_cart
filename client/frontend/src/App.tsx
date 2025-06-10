import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import Products from "./components/Products";
import { useEffect, useReducer } from "react";
import { getAllCartProducts, getAllProducts } from "./services";
import { productsReducer, cartReducer } from "./reducer";

const App = () => {
  const [products, productDispatch] = useReducer(productsReducer, []);
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    (async () => {
      const fetchedProducts = await getAllProducts();
      productDispatch({
        type: "SET_INITIAL_PRODUCTS",
        products: fetchedProducts
      });

      const fetchedCartProducts = await getAllCartProducts();
      cartDispatch({
        type: "SET_INITIAL_CART",
        cart: fetchedCartProducts
      });
    })();
  }, []);

  return (
    <div id="app">
      <Header cart={cart} cartDispatch={cartDispatch} />
      <main>
        <Products
          products={products}
          productDispatch={productDispatch}
          cartDispatch={cartDispatch} />
        <AddProduct productDispatch={productDispatch} />
      </main>
    </div>
  )
}

export default App;
