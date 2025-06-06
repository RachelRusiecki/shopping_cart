import type { AddProps } from "../types";

const AddButton = ({ handleClick }: AddProps) => {
  return (
    <p>
      <button onClick={handleClick} className="add-product-button">
        Add A Product
      </button>
    </p>
  )
}

export default AddButton;
