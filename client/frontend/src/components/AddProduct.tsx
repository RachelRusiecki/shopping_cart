import { useState } from 'react';
import AddButton from './AddButton';
import AddForm from './AddForm';
import type { Product } from '../types';

interface AddProductProps {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const AddProduct = ({ products, setProducts }: AddProductProps) => {
  const [displayAddForm, setDisplayAddForm] = useState(false)

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setDisplayAddForm(!displayAddForm);
  }

  if (displayAddForm) {
    return <AddForm
      handleClick={handleClick}
      products={products}
      setProducts={setProducts} />
  } else {
    return <AddButton handleClick={handleClick} />
  }
}

export default AddProduct;
