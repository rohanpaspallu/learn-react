// commit to check if git works

import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component{

  state=
    {
      persons: [
        { id: 1, name : 'Rohan', age : 24},
        { id: 2, name : 'Nisarg', age : 23},
        {id: 3, name : 'Alay', age : 24}
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id ===id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];

    
    persons[personIndex]=person;

    this.setState({
      persons: persons 
    });
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person 
            click={()=>this.deletePersonHandler(index)} 
            name = {person.name} 
            age = {person.age}
            key = {person.id}
            changed = {(event)=>this.nameChangedHandler(event, person.id)}></Person>
          })}
        </div>
      );
      style.backgroundColor= 'red';
    }


    const classes = [];

    if(this.state.persons.length<=2){
      classes.push('red');
    }

    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>hello this is a react application created by Rohan</h1>

        <p className={classes.join(' ')}> This actually works.</p>
        <button onClick={this.togglePersonsHandler} style={style}>Submit here</button>
        {persons}   
      </div>
    );
  }
    

    // return(React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello Rohan')));
}

export default App;


