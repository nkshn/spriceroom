import React from "react";

// redux
import { connect } from 'react-redux';

import "./Badge.scss";

function Badge(props) {
  const { len } = props;

  return (
    <>
      {
        len === 0
          ? null
          : (
            <div className="badge">{len}</div>
          )
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    len: state.cart.products.length
  };
};

export default connect(mapStateToProps)(Badge);
