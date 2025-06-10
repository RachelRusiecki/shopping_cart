import EditableProduct from "./EditableProduct";
import { useState } from "react";
import type { CartActions, Product, ProductActions } from "../types";

interface ProductsProps {
  products: Product[],
  productDispatch: React.ActionDispatch<[action: ProductActions]>,
  cartDispatch: React.ActionDispatch<[action: CartActions]>
};

const Products = ({
  products,
  productDispatch,
  cartDispatch
}: ProductsProps) => {
  const [sortedBy, setsortedBy] = useState("name");

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {/* <div>
        {"Sort by: "}
        <button className={sortedBy === "name"}>Name</button>
        <button className={sortedBy === "price"}>Price</button>
        <button className={sortedBy === "quantity"}>Quantity</button>
      </div> */}
      <ul className="product-list">
        {products.map(({ _id, title, price, quantity }) => {
          return <EditableProduct
            key={_id}
            productDispatch={productDispatch}
            cartDispatch={cartDispatch}
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
