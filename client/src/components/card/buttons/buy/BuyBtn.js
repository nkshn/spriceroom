import React from "react";

import "./BuyBtn.scss";

function BuyBtn(props) {
  const {
    name = "asd"
  } = props;

  const buyItemHandler = () =>  console.log("buy in one click");

  return (
    <button className="buybtn" onClick={buyItemHandler}>buy in one click</button>
  )
}

export default BuyBtn;
