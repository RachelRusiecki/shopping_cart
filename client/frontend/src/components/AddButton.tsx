export interface AddButtonProps {
  handleClick: (event: React.SyntheticEvent) => void
};

const AddButton = ({ handleClick }: AddButtonProps) => {
  return (
    <p>
      <button onClick={handleClick} className="add-product-button">
        Add A Product
      </button>
    </p>
  )
}

export default AddButton;
