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
      otherState: 'some other value',
      showPersons: false
    
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

  togglePersonsHandler= () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  deletePersonHandler=(personIndex)=>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }


  render(){

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person click={()=>this.deletePersonHandler(index)} name = {person.name} age = {person.age}></Person>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>hello this is a react application created by Rohan</h1>
        <button onClick={this.togglePersonsHandler}>Submit here</button>
        {persons}   
      </div>
    );
  }
    

    // return(React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello Rohan')));
}

export default App;


