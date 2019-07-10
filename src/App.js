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

  nameChange = (event) => {
    this.setState({
      persons : [
        {name : "Max", age : 28},
        {name : event.target.value, age : 29},
        {name : "Stephanie", age : 24}
      ]
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
        <button style={style} onClick={this.switchNameHandle.bind(this,"Maximus")}>Swith Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
            click={ () => this.switchNameHandle("Max !!!")}
            changed={this.nameChange}>
          Occupation : Riding
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
} 

export default App;
