import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';

const Poduct = ()=> {

    const {all_product}= useContext(ShopContext);
    const {productId}= useParams();
    const product = all_product.find((e=>e.id=== Number(productId)) )

  return (<>
  </>
  )
}

export default Poduct