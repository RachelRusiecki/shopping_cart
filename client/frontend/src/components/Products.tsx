import EditableProduct from "./EditableProduct";
import type { Product } from "../types";

interface ProductsProps { products: Product[] };

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map(({ _id, title, price, quantity }) => {
          return <EditableProduct
            key={_id}
            title={title}
            price={price}
            quantity={quantity} />
        })}
      </ul>
    </div>
  )
}

export default Products;
