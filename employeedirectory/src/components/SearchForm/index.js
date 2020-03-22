import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Employees by Name: </label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="term"
        />
        <br/>
        <button onClick={()=> props.filterFriend(props.name)} className="btn btn-primary">
          Search
        </button>
      </div>
      <button onClick={props.sortAZ}>Sort By: A-Z</button>
      <button>Sort By: Z-A</button>
    </form>
  );
}

export default SearchForm;
