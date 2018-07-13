export default class APIManager {
  static getEmployees = () => {
    return fetch("http://localhost:5002/employees").then(e => e.json());
  };
  static getAnimals = () => {
    return fetch("http://localhost:5002/animals").then(e => e.json());
  };
  static getLocations = () => {
    return fetch("http://localhost:5002/locations").then(e => e.json());
  };
}
