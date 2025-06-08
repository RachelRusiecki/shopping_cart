import ProductCart from "./ProductCart";
import { checkout } from "../services";
import type { Cart } from "../types";

interface HeaderProps {
  cart: Cart[],
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>
};

const Header = ({ cart, setCart }: HeaderProps) => {
  const handleCheckout = async () => {
    await checkout();
    setCart([]);
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
