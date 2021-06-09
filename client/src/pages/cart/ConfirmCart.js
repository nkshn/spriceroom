import React, { useState, useEffect } from "react";

// redux
import { connect } from 'react-redux';
import * as cartActions from "../../redux/actions/cart";

// libs
import MaskedInput from "react-text-mask";

function ConfirmCart(props) {
  const {
    products,
    cancelHandler, // function
    submitCart, // function
    totalCost
  } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);

  const maskPhone = [
    '+',
    '3',
    '8',
    ' ',
    '(',
    /[0-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];

  // form inputs onChange value handlers
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  // form validation
  useEffect(() => {
    if (name === "" || phone === "") {
      setIsSubmitButtonActive(true);
    } else {
      setIsSubmitButtonActive(false);
    }
  }, [name, phone]);

  return (
    <>
      <div className="confirmCart-container">
        <div className="confirmCart-container-left">
          {
            products.map((item, index) => {
              return (
                <div className="confirmCart-item">
                  <div className="confirmCart-item_left">
                    <img src={item.img} />
                    <p>{item.qty}</p>
                  </div>
                  <div className="confirmCart-item_center">
                    <h4>{item.name}</h4>
                    <h5>250 гр.</h5>
                  </div>
                  <div className="confirmCart-item_rigth">{item.totalPrice.toLocaleString("de-DE")} грн.</div>
                </div>
              )
            })
          }
        </div>
        <div className="confirmCart-container-rigth">
          <div className="confirmCart-form">
            <span>ім'я</span>
            <input
              value={name}
              onChange={onNameChange}
              type="text"
              placeholder="введіть ім'я" />
          </div>
          <div className="confirmCart-form">
            <span>номер телефону</span>
            <MaskedInput
              value={phone}
              onChange={onPhoneChange}
              guide={true}
              showMask={true}
              type="tel"
              mask={maskPhone}
            />
          </div>
          <div className="confirmCart-delivery">
            <h4>умови доставки</h4>
            <ul>
              <li>
                <p>Відділення Нової Пошти</p>
                <p>від 50 грн</p>
              </li>
              <li>
                <p>Кур’єр Нової Пошти</p>
                <p>від 60 грн</p>
              </li>
              <li>
                <p>Укрпошта</p>
                <p>від 35 грн</p>
              </li>
              <li>
                <p>Justin</p>
                <p>від 45 грн</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="confirmCart-totalPrice">
        вартість: {totalCost.toLocaleString("de-DE")} грн.
      </div>
      <div className="confirmCart-btns">
        <button onClick={cancelHandler}>скасувати</button>
        <button onClick={() => submitCart(name, phone)}>замовити</button>
      </div>
    </>
  )
}
// fuctions to manipulate redux store
const mapDispatchToProps = (dispatch) => {
  return {
    submitCart: (name, phone) => dispatch(cartActions.submitCart(name, phone))
  };
};

export default connect(null, mapDispatchToProps)(ConfirmCart);
