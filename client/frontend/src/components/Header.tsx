import ProductCart from "./ProductCart";
import { checkout } from "../services";
import type { Cart, CartActions } from "../types";

interface HeaderProps {
  cart: Cart[],
  cartDispatch: React.ActionDispatch<[action: CartActions]>
};

const Header = ({ cart, cartDispatch }: HeaderProps) => {
  const handleCheckout = async () => {
    await checkout();
    cartDispatch({ type: "CHECKOUT" });
  };

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <ProductCart cart={cart} />
        <button
          className="checkout"
          onClick={handleCheckout}
          disabled={cart.length === 0} >
          Checkout
        </button>
      </div>
    </header>
  )
}

export default Header;
