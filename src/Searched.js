import React, { Component } from "react";
import "./App.css";
import FaSearch from "react-icons/lib/fa/search";
import Hash from "object-hash";
import Favourites from "./Favorites";
import SingleSelect from "./SingleSelect";

class Searched extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: [],
      value: "",
      searchTerm: "",
      color: "gray",
      selected: false,
      selectedFav: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.favorite = this.favorite.bind(this);
  }

  contains;
  componentDidMount() {
    this.fetchData();
  }

  async handleChange(event) {
    const e = event.target.value;

    if (!e) {
      this.setState({ value: e, searchTerm: e, display: false });
    } else {
      this.setState({ value: e, display: true });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  fetchData() {
    fetch(
      "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ searching: response });
      })

      .catch(error => {
        console.error(error);
      });
  }
  favorite = item => {
    const { selectedFav } = this.state;
    const hash = Hash(item);
    if (selectedFav[hash]) {
      const temp = selectedFav;
      delete temp[hash];
      this.setState({ selectedFav: temp });
    } else {
      const temp = selectedFav;
      temp[hash] = item;
      this.setState({ selectedFav: temp });
    }
  };
  filter = () => {
    const { value } = this.state;
    this.setState({ searchTerm: value });
  };

  render() {
    const { searching, searchTerm, selectedFav } = this.state;

    const { favorite } = this;
    return (
      <div>
        <form className="searching" onSubmit={this.handleSubmit}>
          <input
            className="seachBar"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button className="buttonB" type="submit" onClick={this.filter}>
            <FaSearch size={25} />
          </button>
        </form>

        <div style={SearchStyles}>
          <div style={container}>
            {searchTerm &&
              searching
                .filter(item =>
                  item.keywords.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item, index) => {
                  const hash = Hash(item);
                  return (
                    <SingleSelect
                      index={index}
                      key={index}
                      color={
                        selectedFav.hasOwnProperty(hash) ? "green" : "gray"
                      }
                      item={item}
                      favorite={favorite}
                    />
                  );
                })}
          </div>
        </div>
        <Favourites selectedF={selectedFav} favorite={favorite} />
      </div>
    );
  }
}
const SearchStyles = {
  margin: "13px",
  display: "flex"
};
const container = {
  width: "100%"
};

export default Searched;
