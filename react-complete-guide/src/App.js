import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [personsState, setPersonsState] = useState(
    {
      persons : [
        {name:'Sriram', age:'48'},
        {name:'Madhangi', age:'42'},
        {name:'Sadhu', age:'19'}
    
      ]
    }
  )

  const switchNameHandler = () => {
    //  console.log("switchNameHandler Clicked") 
    setPersonsState(
      {
        persons : [
          {name:'Sriram', age:'48'},
          {name:'Madhangi', age:'42'},
          {name:'krishna', age:'16'}
    
        ]
      }
    ) 
    };

    return (
      <div className="App">
        <h1> I am a React App</h1>
        <button onClick={switchNameHandler}>Switch Button</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler}> My Hobbies: Cooking</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
}


export default app;




