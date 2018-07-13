import React, { Component } from "react";
import Location from "./Location";
import APIManager from "./APIManager";

export default class LocationList extends Component {
  state = { locations: [] };

  componentDidMount() {
    APIManager.getLocations().then(locations =>
      this.setState({
        locations: locations
      })
    );
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
