import React from "react";

// redux
import { useSelector } from 'react-redux';

import "./Badge.scss";

function Badge() {
  const countOfCartItems = useSelector(state => state.cart.products.length);

  return (
    <>
      {
        countOfCartItems === 0
          ? null
          : (
            <div className="badge">
              {countOfCartItems}
            </div>
          )
      }
    </>
  )
}

export default Badge;
