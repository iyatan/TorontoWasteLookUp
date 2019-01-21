import React from "react";
import FaStar from "react-icons/lib/fa/star";

const Icon = props => {
  return (
    <span onClick={props.onClick}>
      <FaStar style={{ verticalAlign: "top" }} color={props.color} />
    </span>
  );
};

export default Icon;
