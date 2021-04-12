import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faActiveHeart
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faNotActiveHeart
} from "@fortawesome/free-regular-svg-icons";

import "./FavBtn.scss";

function FavBtn(props) {
  const {
    isItemActive = false
  } = props;

  const favItemHandler = () => console.log("favorite");

  return (
    <button onClick={favItemHandler} className="favbtn">
      <FontAwesomeIcon
        icon={isItemActive === true ? faActiveHeart : faNotActiveHeart}
        size="lg"
      />
    </button>
  )
}

export default FavBtn;
