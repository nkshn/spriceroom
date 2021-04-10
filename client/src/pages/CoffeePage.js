import React, {
  useState,
  useEffect,
} from "react";

import { useHttp } from "../hooks/http.hook";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faTimesCircle,
  faUser
} from "@fortawesome/free-regular-svg-icons";

import "./CoffeePage.scss";

function CoffeePage({ match }) {
  const { id } = match.params;

  const { request } = useHttp();

  // server data
  const [coffee, setCoffee] = useState({});

  const [isDataWasSended, setIsDataWasSended] = useState(false);
  const [isCoffeeLoaded, setIsCoffeeLoaded] = useState(false);

  // ui states
  const [isBuyPanelActive, setIsBuyPanelActive] = useState(false);
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false);

  // form states
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  useEffect(async () => {
    try {
      const data = await request(`/api/info/coffee/${id}`, "GET", null, {});
      if(data) {
        setIsCoffeeLoaded(true);
        setCoffee(data);
      }
    } catch (err) {
      console.log("err: " + err);
    }
  }, []); // get data from server

  const addToCartHandler = () => {
    console.log("add to cart coffee with id: ", coffee._id);
  };
  const buyHandler = () => {
    console.log("buy coffee with id: ", coffee._id);
    setIsBuyPanelActive(true);
  };

  // form inputs onChange value handlers
  const onNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const onPhoneChange = (event) => {
    setPhoneValue(event.target.value);
  };

  // close buy in one click pop up
  const closePopUp = () => {
    setIsBuyPanelActive(false);
    setIsDataWasSended(false);
  }

  const submitHandler = async () => {
    try {
      const data = await request(
        "/api/buy/",
        "POST",
        { 
          name: nameValue,
          phone: phoneValue,
          coffeName: coffee.name,
          coffePrice: coffee.price
        },
        {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        "cors"
      );
      if (data) {
        setIsDataWasSended(true);
      }
    } catch (err) {
      console.log("err: " + err);
    }

    setNameValue("");
    setPhoneValue("");
  };

  // form validation
  useEffect(() => {
    if (nameValue === "" || phoneValue === "") {
      setIsSubmitButtonActive(true);
    } else {
      setIsSubmitButtonActive(false);
    }
  }, [nameValue, phoneValue]);

  return (
    <>
      {
        isCoffeeLoaded === true
          ? (
            <div className="coffee-container">
              <h3>{coffee.name}</h3>
              <p>{coffee.fullName}</p>
              <div className="coffee-container_buttons">
                <div className="coffee-addToCart-btn" onClick={addToCartHandler}>
                  <h3>Add to cart</h3>
                  <FontAwesomeIcon icon={faShoppingCart} color="#373a40" size="lg" />
                </div>
                <button
                  className={isBuyPanelActive === true ? "coffee-buy-btn button-disabled" : "coffee-buy-btn"}
                  onClick={buyHandler}
                  disabled={isBuyPanelActive}
                >
                  <h3>Buy in 1 click</h3>
                </button>
              </div>
              {
                isBuyPanelActive === false
                  ? null
                  : (
                    <div className="coffee-buy_popup">
                      <div className="coffee-buy_header">
                        <h3>buy in one click</h3>
                        <div onClick={closePopUp}>
                          <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                        </div>
                      </div>
                      {
                        isDataWasSended === false
                          ? (
                            <>
                              <div className="coffee-buy_center">
                                <h3>{coffee.name}</h3>
                                <img src={coffee.images[0].sm} />
                                <h4>{coffee.price} uah.</h4>
                              </div>
                              <div className="coffee-buy_forms">
                                <div className="coffee-buy_form-item">
                                  <FontAwesomeIcon icon={faUser} size="lg" />
                                  <div className="coffee-buy-input-div">
                                    <label>Name:</label>
                                    <input value={nameValue} onChange={onNameChange} type="text" placeholder="Enter name" />
                                  </div>
                                </div>
                                <div className="coffee-buy_form-item">
                                  <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                                  <div className="coffee-buy-input-div">
                                    <label>Phone Number:</label>
                                    <input value={phoneValue} onChange={onPhoneChange} type="tel" placeholder="Enter phone number" />
                                  </div>
                                </div>
                                <button
                                  disabled={isSubmitButtonActive}
                                  className={isSubmitButtonActive === true ? "coffee-buy_form-button button-disabled" : "coffee-buy_form-button"}
                                  onClick={submitHandler}
                                >
                                  <h3>send</h3>
                                </button>
                              </div>
                            </>
                          )
                          : (
                            <div className="coffee-buy-success">
                              <h3>Congratulations!</h3>
                              <h4>Soon we will call you!</h4>
                              <button className="coffee-buy_form-button" onClick={closePopUp}>Ok</button>
                            </div>
                          )
                      }
                    </div>
                  )
              }
            </div>
          )
          : <p>hyak</p>
      }
    </>
  )
}

export default CoffeePage;
