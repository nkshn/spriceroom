import React, {
  useState,
  useEffect,
} from "react";

import "./Assortment.scss";

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
                      link={`/coffee/${item._id}`}
                      name={item.name}
                      fullName={item.fullName}
                      desc={item.desc}
                      img={item.images[0].sm}
                      price={item.price}
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
