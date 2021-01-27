import React, { Component } from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
// function SearchForm(props) {
class SearchForm extends Component {
  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
    console.log("keyword : ", keyword)
  }



  // sortEmployees = (event) => {
  //   console.log("this should sort employees");

  //   console.log("search is ", event.target.value);
  //   this.setState({
  //     search: this.state.search + event.target.value
  //   }, console.log(this.state.search))
  // }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <form className="search">
            <div className="form-group">
              <label htmlFor="language">Search Term:</label>
              <input
                // value={this.state.search}
                // defaultValue=""
                // onClick={this.sortEmployees}
                // name="term"
                // list="term"
                type="text"
                // className="form-control"
                placeholder="Type in a search term to begin"
                // id="term"
                onChange={(e)=>this.searchSpace(e)}
              />
            </div>
          </form>
        </nav>
      </>
    );
  }
}

export default SearchForm;
