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
    return (
      <div className="App" id="good">
        <h1>Hi, This is my first project on React !!!</h1>
        <button style={style} onClick={this.tooglePersonsHandler}>Swith Name</button>
        {
          this.state.showPersons ?
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
                  click={ () => this.switchNameHandle("Max !!!")}
                  changed={this.nameChange}>
                Occupation : Riding
              </Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
          : null
        }
      </div>
    );
  }
} 

export default App;
