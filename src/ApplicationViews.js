import { Route } from "react-router-dom";
import React, { Component } from "react";
import Animal from "./Animal";
import Employee from "./Employee";
import Location from "./Location";
import AnimalList from "./AnimalList";
import LocationList from "./LocationList";
import EmployeeList from "./EmployeeList";

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={LocationList} />
        <Route
          path="/locations/:locationId"
          render={props => {
            return <Location location={props.location.state.location} />;
          }}
        />

        <Route exact path="/animals" component={AnimalList} />
        <Route
          path="/animals/:animalId"
          render={props => {
            return <Animal animal={props.location.state.animal} />;
          }}
        />

        <Route exact path="/employees" component={EmployeeList} />
        <Route
          path="/employees/:employeeId"
          render={props => {
            return <Employee employee={props.location.state.employee} />;
          }}
        />
      </React.Fragment>
    );
  }
}
