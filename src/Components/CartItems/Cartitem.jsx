import React, { useContext } from "react";
import "./Cartitem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const Cartitem = () => {
  const { all_product, Cartitem, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Produce</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (Cartitem[e.id] > 0) {
          return 
            <div>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="cart-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartitems-quantity">{Cartitem[e.id]}</button>
                <p>{e.new_price * Cartitem[e.id]}</p>
                <img
                  src="remove_icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          
        }
      })}
    </div>
  );
};

export default Cartitem;
