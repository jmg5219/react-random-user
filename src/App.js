import React, { Component } from "react";
import { Container, Button  } from 'bloomer';
import "bulma/css/bulma.css"
import './App.css';
import RandomUser from './components/RandomUser.jsx';

class App extends Component {
  //loading data into state
  state = {
    userData: [],

  };

  //Helper function to fetch data from API
  loadData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    return data;
  };
  handleClick = async () => {
    const userData = await this.loadData();
    this.setState({
      userData: userData.results
    });
  }
  //Built is React method that acts like DOM content loaded event listener, it is listening for this PIECE of the dom is loaded (lifecycle method)
  async componentDidMount() {
    console.log("The component mounted");
    const userData = await this.loadData();

    this.setState({
      userData: userData.results
    });

  }



  render() {
    //let RenderUser;
    //if array has length
    // if(this.state.userData.length){
    //   RenderUser = <RandomUser userData={this.state.userData[0]}/>;
    // }else{
    //   RenderUser = <p>no user data</p>;
    // }
    const { userData } = this.state;
    return (
      <div className="App">
        <Container is-fluid>
          <header className="App-header">
            <h1>Random Users</h1>
          </header>
          <Button isHovered='false' className="search-button" onClick={this.handleClick}>Load More Users</Button>
          {userData.length ? (<RandomUser userData={userData} />) : <p>no user data</p>}
          {/* {RenderUser} */}

        </Container>

      </div>
      //^ passing data from parent to child as a prop
    );
  }

}

export default App;
