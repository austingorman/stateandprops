import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Location = ({ location, children }) => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{children}</h5>

        {
          <Link
            className="card-link"
            to={{
              pathname: `/locations/${location.id}`,
              state: { location: location }
            }}
          >
            Details
          </Link>
        }
      </div>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.object,
  foo: PropTypes.string.isRequired
};

export default Location;
