import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
    persons : [
      { id: "90jokd", name : "Max", age : 28},
      { id: "dls7e", name : "Manu", age : 29},
      { id: "sdpo32", name : "Stephanie", age : 26}
    ],
    otherState : "some other state",
    showPersons : false
  }

  switchNameHandle = (event,id) =>{

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }) ;   

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});

  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  deletePerson = (personIndex) =>{
    // const persons = this.state.persons.slice(); OR
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
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
            this.state.persons.map((person,index) => {
              return <Person 
                      name={person.name} 
                      age={person.age} 
                      click={() => this.deletePerson(index)}
                      changed={(event) => this.switchNameHandle(event,person.id)}
                      key={person.id}/>
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
