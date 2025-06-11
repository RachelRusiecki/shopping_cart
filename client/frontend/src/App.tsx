import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import Products from "./components/Products";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useReducer, useContext } from "react";
import { getAllCartProducts, getAllProducts } from "./services";
import { productsReducer, cartReducer } from "./reducer";

const App = () => {
  const [products, productDispatch] = useReducer(productsReducer, []);
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  const { toggleTheme } = useContext(ThemeContext);

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
      <label htmlFor="theme">{"Dark / Light Theme "}</label>
      <select name="theme-selection" id="theme" onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
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
