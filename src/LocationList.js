import React, { Component } from "react";
import Location from "./Location";

export default class LocationList extends Component {
  state = {
    locations: [{ name: "Nashville North" }, { name: "Nashville South" }]
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.locations.map(location => (
            <Location key={location.id} location={location} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
