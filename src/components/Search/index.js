import React from "react";
import SearchForm from "../SearchForm";
import "./style.css";

// function Navbar(props) {

//   // handleInputChange = (event) => {
//   //   const { value } = event.target;
//   //   console.log('THE VALUE IS ', value);

//   //   this.setState({
//   //     [props.search]: value,
//   //   });

//   // };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">

//         <div className="search">
//           <SearchForm employees={props}/>
//         </div>
//       </nav>
//     </>
//   );
// }

function Navbar(props) {
  const employees = props.employees;
  console.log("employees: ", employees);
  const lastName = employees[0].name.last;
  console.log('last name is ', lastName);
  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);

  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  // };
  // React.useEffect(() => {
  //   const results = employees.filter(person =>
  //     person.toLowerCase().includes(searchTerm)
  //     );
  //     setSearchResults(results);
  // }, [searchTerm]);


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <form className="search">
          <div className="form-group">
            <label htmlFor="language">Search Employee:</label>
            <input
              type="text"
              placeholder="Search Employee"
              // value={searchTerm}
              // onChange={handleChange}
            />
          </div>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
