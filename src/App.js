import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
    persons : [
      {name : "Max", age : 28},
      {name : "Manu", age : 29},
      {name : "Stephanie", age : 26}
    ],
    otherState : "some other state",
    showPersons : false
  }

  switchNameHandle = (newName) =>{
    this.setState({
      persons : [
        {name : newName, age : 28},
        {name : "Manu", age : 29},
        {name : "Stephanie", age : 24}
      ]
    });
  }

  nameChange = (event) => {
    this.setState({
      persons : [
        {name : "Max", age : 28},
        {name : event.target.value, age : 29},
        {name : "Stephanie", age : 24}
      ]
    });
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  render() {

    const style = {
      backgroundColor:'white',
      font : 'inheerit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person name={person.name} age={person.age} />
            })
          }
        </div>
      );
    }
    
    return (
      <div className="App" id="good">
        <h1>Hi, This is my first project on React !!!</h1>
        <button style={style} onClick={this.tooglePersonsHandler}>Swith Name</button>
        {persons}
      </div>
    );
  }
} 

export default App;
