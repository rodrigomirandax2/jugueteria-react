import React from 'react'
import { useState } from 'react';
import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
  const [numberItems, setNumberItems] = useState(0);

  return (
    <>
        <ShoppingCartIcon className='ShoppingCartIcon'/> <label className='label'>{numberItems}</label>
    </>
  )
}

export default CartWidget