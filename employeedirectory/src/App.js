import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm"
import API from "./API";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  sortAZ(){
    const friends = this.state.friends.sort((a,b)=>{
      if(a.props.name.toLowerCase() < b.props.name.toLowerCase()) return -1;
      if(a.props.name.toLowerCase() > b.props.name.toLowerCase()) return 1;
      return 0;
    });
   this.setState({friends});
  }

  componentDidMount() {
    this.searchEmployees("Spongebob");
  }

  filterFriend = name => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.name === name);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     
      <Wrapper>
         <SearchForm></SearchForm>
        <Title>Employees List</Title>
        
        {this.state.friends.map(friend => (
          <EmployeeCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
