import React, { Component } from "react";
import SingleSelect from "./SingleSelect";

class Favourites extends Component {
  componentWillMount() {
    console.log({ fav: this.props.selectedF });
  }
  componentWillReceiveProps() {}
  render() {
    return (
      <div style={FavStyles}>
        <h2 style={{ color: "#14AF74", marginLeft: "13px" }}>Favourites</h2>
        <div style={{ margin: "13px" }}>
          {this.props.selectedF &&
            Object.keys(this.props.selectedF).map((item, index) => {
              return (
                <SingleSelect
                  index={index}
                  key={index}
                  color={"green"}
                  item={this.props.selectedF[item]}
                  favorite={this.props.favorite}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
const FavStyles = {
  backgroundColor: "#F5FFFA",
  position: "fixed",
  width: "100%",
  bottom: "0"
};

export default Favourites;
