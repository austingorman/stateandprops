import React, { Component } from "react";
import Location from "./Animal";

export default class LocationList extends Component {
  state = {
    locations: [{ name: "Nashville North" }, { name: "Nashville South" }]
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.locations.map(location => <li>{location.name}</li>)}
        </ul>
      </React.Fragment>
    );
  }
}
