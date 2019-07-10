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
    ]
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

  render() {
    return (
      <div className="App" id="good">
        <h1>Hi, This is my first project on React !!!</h1>
        <button onClick={this.switchNameHandle.bind(this,"Maximus")}>Swith Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
            click={ () => this.switchNameHandle("Max !!!")}>
          Occupation : Riding
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
} 

export default App;
