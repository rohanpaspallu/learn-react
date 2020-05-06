// commit to check if git works

import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component{

  state=
    {
      persons: [
        { name : 'Rohan', age : 24},
        { name : 'Nisarg', age : 23},
        {name : 'Alay', age : 24}
      ],
      otherState: 'some other value'
    
    };

  switchNameHandler = (newName) =>{
    // console.log('was clicked!!');
    // this.state.persons[0].name = 'Rohan Deepak Paspallu';
    this.setState({
      persons: [
        { name : newName, age : 24},
        { name : 'Nisarg Nilesh Parikh', age : 23},
        {name : 'Alay Mukesh Parikh', age : 24}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name : 'Ronnie', age : 24},
        { name : event.target.value, age : 23},
        {name : 'Alay Mukesh Parikh', age : 24}
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <h1>hello this is a react application created by Rohan</h1>
        <button onClick={this.switchNameHandler.bind(this, 'rohan deepak paspallu')}>Submit here</button>
        <Person 
          name= {this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler}>My like to play badminton.</Person>
        <Person 
          name= {this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'ron')}
          changed = {this.nameChangedHandler}>He is a person as well.</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler}>He is a buffallo</Person>
      </div>
    );
  }
    

    // return(React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello Rohan')));
}

export default App;


