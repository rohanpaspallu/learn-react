import React, { Component } from 'react';
<<<<<<< HEAD
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
=======

import classes from './App.css';
import Person from './Person/Person';
>>>>>>> af44a7ae24fcbf6f71294dd53d8a00e1fe797689

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
<<<<<<< HEAD
    this.setState( { showPersons: !doesShow } );
  }

  render () {
=======
    this.setState({ showPersons: !doesShow });
  };

  render() {
>>>>>>> af44a7ae24fcbf6f71294dd53d8a00e1fe797689
    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
<<<<<<< HEAD
          {this.state.persons.map( ( person, index ) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler( index )}
                name={person.name}
                age={person.age}
                changed={( event ) => this.nameChangedHandler( event, person.id )} />
            </ ErrorBoundary>
          } )}
=======
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
>>>>>>> af44a7ae24fcbf6f71294dd53d8a00e1fe797689
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
<<<<<<< HEAD
    if ( this.state.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
=======
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
>>>>>>> af44a7ae24fcbf6f71294dd53d8a00e1fe797689
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
<<<<<<< HEAD
        <p className={assignedClasses.join( ' ' )}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
=======
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
>>>>>>> af44a7ae24fcbf6f71294dd53d8a00e1fe797689
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
