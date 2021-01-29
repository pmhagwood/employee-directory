import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import Api from "./utilities/Api";


class App extends Component  {
  state = {
    employees: [],
    search: ""
  }

  // componentDidMount is part of React. It is a lifecycle method/function. 
  componentDidMount(){
    Api.getRandomPeople()
    .then(employees => {
      this.setState({
        employees: employees.data.results
      })
    });
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
    console.log('keyword : ', keyword);
    const filteredEmployees = this.state.employees.filter(employee => {
      const query = keyword;
      console.log('inside keyword: ', keyword)

      return (
        employee.name.last.includes(query) ||
        employee.name.first.includes(query)
      )
    })
    // const filteredEmployees = this.state.employees.filter(employee => employee.name.last.includes(keyword));
    
    this.setState({ employees: filteredEmployees})
    
  };



  render (){
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
          </div>
        </div>
        <div>
          <SearchForm employees={this.state.employees} search={this.searchSpace}/>
          <Table employees={this.state.employees}/>
        </div>
      </>
    );
  }
}

export default App;
