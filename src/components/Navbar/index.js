import React from "react";
import "./style.css";

function Navbar(props) {
  const employees = props.employees;
  console.log("employees: ", employees);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = employees.filter(person =>
      person.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
  }, [searchTerm]);

  console.log("person array: ", searchResults);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <form className="search">
          <div className="form-group">
            <label htmlFor="language">Search Employee:</label>
            <input
              type="text"
              placeholder="Search Employee"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
