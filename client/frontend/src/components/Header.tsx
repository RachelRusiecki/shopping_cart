import ProductCart from "./ProductCart";
import { getAllCartProducts } from "../services";
import { useState, useEffect } from "react";
import type { Cart } from "../types";

const Header = () => {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedCartProducts = await getAllCartProducts();
      setCart(fetchedCartProducts);
    })();
  }, []);

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <ProductCart cart={cart} />
        <button className="checkout" disabled={cart.length === 0}>
          Checkout
        </button>
      </div>
    </header>
  )
}

export default Header;
