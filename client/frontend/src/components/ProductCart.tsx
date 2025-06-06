import type { Cart } from "../types";

export interface CartProps { cart: Cart[] }

const ProductCart = ({ cart }: CartProps) => {
  if (cart.length === 0) {
    return (
      <>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
      </>
    )
  } else {
    return (
        <table className="cart-items">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(({ _id, title, price, quantity }) => {
              return (
                <tr key={_id}>
                  <td>{title}</td>
                  <td>{quantity}</td>
                  <td>${price * quantity}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="total">
                Total: ${cart.reduce((total, { price, quantity }) => {
                  return total + (price * quantity)
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
    )
  }
}

export default ProductCart;
