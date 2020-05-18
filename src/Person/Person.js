import React from 'react';
import './Person.css';
import styled from 'styled-components';
// import Radium from 'radium';

const StyledDiv = styled.div`
    width:  60%;
    margin : 30px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    background-color: rgb(72, 255, 0);
    padding: 16px;
    text-align: center;
        
    @media (min-width: 500px){
        width: 450px;
    }
`;


const person = (props) => {

    return (
     
        // <div className="Person" style={style}>

        <StyledDiv>
            <p onClick={props.click}>I'm a person, my name is {props.name} and my age is {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </StyledDiv>
    )
};

// export default Radium(person);
export default person;