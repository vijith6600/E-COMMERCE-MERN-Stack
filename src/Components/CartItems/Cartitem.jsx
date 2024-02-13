import React, { useContext } from 'react'
import './Cartitem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const Cartitem = () => {
    const {all_product,Cartitem,removeFromCart} = useContext(ShopContext);


  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Produce</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
            <div className="cartitems-format">
                <img src="" alt="" className="cart-product-icon" />
                <p></p>
                <p></p>
                <button></button>
                <p></p>
                <img src="remove_icon" onClick={()=>{removeFromCart()}} alt="" />
               
            </div>
            <hr />
        </div>
    </div>
  )
}

export default Cartitem