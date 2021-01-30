import React, { Component } from 'react';
import "./style.css";
// import "./style.css";
// Using the datalist element we can create autofill suggestions based on the props.breeds array
// function SearchForm(props) {
class SearchForm extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      search: null,
    };
  }

  // searchSpace = (event) => {
  //   let keyword = event.target.value;
  //   this.setState({ search: keyword });
  //   console.log('keyword : ', keyword);
  // };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                ref={(input) => {
                  // console.log('input:', input);
                  input && input.focus();
                }}
                // className="form-control"
                placeholder="Type in a search term to begin"
                // id="term"
                onChange={(e) => this.props.search(e)}
                // onChange={(e) => this.searchSpace(e)}
                // ref={this.inputRef}
              />
            </div>
          </form>
        </nav>
      </>
    );
  }
}
export default SearchForm;