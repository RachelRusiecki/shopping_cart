import EditableProduct from "./EditableProduct";
import type { Product, Cart } from "../types";

interface ProductsProps {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  cart: Cart[],
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>
};

const Products = ({ products, setProducts, cart, setCart }: ProductsProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(({ _id, title, price, quantity }) => {
          return <EditableProduct
            key={_id}
            products={products}
            setProducts={setProducts}
            cart={cart}
            setCart={setCart}
            _id={_id}
            title={title}
            price={price}
            quantity={quantity} />
        })}
      </ul>
    </div>
  )
}

export default Products;
