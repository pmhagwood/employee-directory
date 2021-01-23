import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    // <Router>
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </>
    // </Router>
  );
}

export default App;
