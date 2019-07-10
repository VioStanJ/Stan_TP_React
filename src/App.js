import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState , setPersonsState] = useState({
    persons:[
      {name:"Max" , age:28},
      {name:"Manu" , age:29},
      {name:"Stephanie" , age:26},
    ]
  });

    const switchNameHandle = () =>{
      setPersonsState({
        persons : [
          {name : "Maximilian", age : 28},
          {name : "Manu", age : 29},
          {name : "Stephanie", age : 24}
        ]
      });
    }

    return (
      <div className="App" id="good">
        <h1>Hi, This is my first project on React !!!</h1>
        <button onClick={switchNameHandle}>Swith Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
} 

export default App;