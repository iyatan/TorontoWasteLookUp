import React from "react";
import Icon from "./Icon";
import convert from "htmr";
import renderHTML from "react-render-html";

const SingleSelect = props => {
  return (
    <div key={props.index} style={DivStyles}>
      <div style={LeftStyles}>
        <Icon color={props.color} onClick={() => props.favorite(props.item)} />{" "}
        {props.item.title}{" "}
      </div>
      <div style={RightStyles} id="html">
        {convert(renderHTML(props.item.body))}
      </div>
    </div>
  );
};

const DivStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "100%"
};
const LeftStyles = {
  width: "35%",
  marginRight: "10%"
};
const RightStyles = {
  width: "55%",
  marginTop: "-1em"
};

export default SingleSelect;
