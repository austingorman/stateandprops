import React, { Component } from "react";
import Location from "./Location";

export default class LocationList extends Component {
  state = {
    locations: []
  };

  componentDidMount() {
    fetch("http://localhost:5002/locations")
      .then(e => e.json())
      .then(locations => this.setState({ locations: locations }));
  }
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.locations.map(location => (
            <Location key={location.id} location={location}>
              {location.name}
            </Location>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
