import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import Api from "./utilities/Api";


class App extends Component  {
  state = {
    employees: [],
    original: [],
    search: "",
    ascending: false
  }

  // componentDidMount is part of React. It is a lifecycle method/function. 
  componentDidMount(){
    Api.getRandomPeople()
    .then(employees => {
      this.setState({
        employees: employees.data.results,
        original: employees.data.results
      })
    });
  }

  
  // searchSpace searches based on user typing into the search field in the searchForm component.
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
    console.log('keyword : ', keyword);
    // want to filter first and last name so we need a function inside filter
    const filteredEmployees = this.state.original.filter(employee => {
      // set the query keyword may not be needed. 
      const query = keyword;
      console.log('inside keyword: ', keyword)
      // the return allows us to do an "OR" statement and get both the first and last name values
      return (
        employee.name.last.includes(query) ||
        employee.name.first.includes(query)
      )
    })
    // const filteredEmployees = this.state.employees.filter(employee => employee.name.last.includes(keyword));
    
    this.setState({ employees: filteredEmployees})
    
  };

  toggleSortName = () =>{
    // this is a flag to toggle between true and false
    if(this.state.ascending){
      this.setState({
        employees: this.state.employees.sort((a, b) => b.name.first.toLowerCase().localeCompare(a.name.first.toLowerCase())),
        ascending: false
      })
    }else{
      this.setState({
        employees: this.state.employees.sort((a, b) => a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase())),
        ascending: true
      })
    }
   
  }



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
          <Table employees={this.state.employees} toggleSortName={this.toggleSortName}/>
        </div>
      </>
    );
  }
}

export default App;
