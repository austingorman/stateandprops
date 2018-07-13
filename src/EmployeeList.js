import React, { Component } from "react";
import Employee from "./Employee";
import APIManager from "./APIManager";

export default class EmployeeList extends Component {
  state = { employees: [] };

  componentDidMount() {
    APIManager.getEmployees().then(employees =>
      this.setState({
        employees: employees
      })
    );
  }
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.employees.map(employee => (
            <Employee key={employee.id} employee={employee}>
              {employee.name}
            </Employee>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
