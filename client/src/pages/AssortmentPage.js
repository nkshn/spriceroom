import React, {
  useState,
  useEffect,
} from "react";

import "./Assortment.scss";
import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http.hook";
import Card from "../components/card/Card";

function AssortmentPage() {
  const { loading, request } = useHttp();

  const [coffees, setCoffees] = useState([]);

  useEffect(async () => {
    try {
      const data = await request(`/api/info/coffee`, "GET", null, {});
      setCoffees(data);
    } catch (err) {
      console.log("err: " + err);
    }
  }, []);

  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    console.log("cart: " + cart[0])
  }, [cart]);

  return (
    <>
      {
        loading === false
          ? (
            <div className="assortment-container">
              {
                coffees.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      id={item._id}
                      link={`/coffee/${item._id}`}
                      name={item.name}
                      fullName={item.fullName}
                      desc={item.desc}
                      img={item.images[0].sm}
                      price={item.price}
                      isInCart={
                        cart.findIndex(cartItem => cartItem.id === item._id) >= 0
                          ? true
                          : false
                      }
                    />
                  )
                })
              }
            </div>
          )
          : <p>loading</p>
      }
    </>
  );
}

export default AssortmentPage;
