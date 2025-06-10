import AddButton from "./AddButton";
import AddForm from "./AddForm";
import { useState } from "react";
import type { ProductActions } from "../types";

interface AddProductProps {
  productDispatch: React.ActionDispatch<[action: ProductActions]>
}

const AddProduct = ({ productDispatch }: AddProductProps) => {
  const [displayAddForm, setDisplayAddForm] = useState(false);

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setDisplayAddForm(!displayAddForm);
  };

  if (displayAddForm) {
    return <AddForm
      handleClick={handleClick}
      productDispatch={productDispatch} />
  } else {
    return <AddButton handleClick={handleClick} />
  };
};

export default AddProduct;
