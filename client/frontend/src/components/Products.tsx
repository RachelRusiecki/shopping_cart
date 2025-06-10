import EditableProduct from "./EditableProduct";
import Arrow from "./Arrow";
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
  const [sortedBy, setSortedBy] = useState({ name: "title", ascending: true });

  const handleSortBy = (sortBy: "title" | "price" | "quantity") => {
    return () => {
      setSortedBy({
        name: sortBy,
        ascending: sortedBy.name === sortBy ? !sortedBy.ascending : true
      });
    }
  };

  if (sortedBy.name === 'title') {
    products.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortedBy.name === "price") {
    products.sort((a, b) => a.price - b.price);
  } else {
    products.sort((a, b) => a.quantity - b.quantity);
  };

  if (!sortedBy.ascending) products.reverse();

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <div>
        {"Sort by: "}
        <button
          className={sortedBy.name === "title" ? "sort-selection" : ""}
          onClick={handleSortBy("title")}>
          {"Name "}
          {sortedBy.name === "title" ?
            <Arrow ascending={sortedBy.ascending} /> : null
          }
        </button>
        <button
          className={sortedBy.name === "price" ? "sort-selection" : ""}
          onClick={handleSortBy("price")}>
          {"Price "}
          {sortedBy.name === "price" ?
            <Arrow ascending={sortedBy.ascending} /> : null
          }
        </button>
        <button
          className={sortedBy.name === "quantity" ? "sort-selection" : ""}
          onClick={handleSortBy("quantity")}>
          {"Quantity "}
          {sortedBy.name === "quantity" ?
            <Arrow ascending={sortedBy.ascending} /> : null
          }
        </button>
      </div>
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
