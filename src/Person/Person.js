import React from 'react';

import classes from './Person.css';

<<<<<<< HEAD
const person = ( props ) => {
    const rnd = Math.random();

    // if ( rnd > 0.7 ) {
    //     throw new Error( 'Something went wrong' );
    // }
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
=======
const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
>>>>>>> af44a7ae24fcbf6f71294dd53d8a00e1fe797689
