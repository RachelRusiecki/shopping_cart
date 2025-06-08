import { useState } from "react";
import { updateProduct } from "../services";
import type { Product } from "../types";

interface EditFormProps {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  _id: string,
  title: string,
  price: number,
  quantity: number,
  toggleEditForm: () => void
};

const EditForm = ({
  products,
  setProducts,
  _id,
  title,
  price,
  quantity,
  toggleEditForm
}: EditFormProps) => {

  const [formData, setFormData] = useState({ title, price, quantity });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const updatedProduct = {
      title: formData["title"],
      price: formData["price"],
      quantity: formData["quantity"],
    };

    const response = await updateProduct(_id, updatedProduct);
    toggleEditForm();
    setProducts(products.map(product => {
      return product._id === _id ? response : product;
    }));
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">{title}</label>
          <input
            onChange={handleChange}
            name="title"
            type="text"
            id="product-name"
            value={formData.title}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            onChange={handleChange}
            name="price"
            type="number"
            id="product-price"
            value={formData.price.toFixed(2)}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            onChange={handleChange}
            name="quantity"
            type="number"
            id="product-quantity"
            value={formData.quantity}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={toggleEditForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditForm;
