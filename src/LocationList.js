import React, { Component } from "react";

export default class LocationList extends Component {
  state = {
    locations: [
      { name: "Nashville North" },
      { name: "Nashville South" }
    ]
  }
  render() {
    return (
      <React.Fragment>
        {
          this.state.locations.map(location =>
            <div>
              {location.name}
            </div>)
        }
      </React.Fragment>
    );
  }
}