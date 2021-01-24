import React from "react";
import "./style.css";

function Navbar(props) {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Employee:</label>
        <input
          // value={props.search}
          // onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        />
      </div>
    </form>
  </nav>
</>
  );
}

export default Navbar;
