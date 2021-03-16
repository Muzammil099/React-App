import './App.css';
import PersonCard from './Components/PersonCard';
import React from 'react';

import { isArrayEmpty  } from './UTIL/Utils.js';

const personObj1 = {name: "Nabeel Khan", age: "29", gender: "Male", likeCount: 0}
const personObj2 = {name: "Arsal Khan", age: "27", gender: "Male", likeCount: 0}
const personObj3 = {name: "Hafiz Muzammil Arif", age: "25", gender: "Male", likeCount: 0}







class App extends React.Component {

  state = {
    showPersons: true,
    personArray: [personObj1 , personObj2, personObj3]
  }

  onLikeButtonClick = (pos) => {
    const updatedArray = this.state.personArray;
    const updatedObj = updatedArray[pos];

    updatedObj.likeCount = updatedObj.likeCount + 1;

    updatedArray[pos] = updatedObj;

    this.setState((prevState,prevProps) => {
      return {personArray: updatedArray}
    });

};


  

  onHideButtonClick = () => {
    this.setState((prevState, prevProps) => {
      return {showPersons: !prevState.showPersons};
    });

  }

  render(){

    const personCards = isArrayEmpty(this.state.personArray) ? [] :  this.state.personArray.map((person,pos) => {
      return(
        <PersonCard key={person.name} name={person.name} age={person.age} likeCount={person.likeCount} gender={person.gender} onLikeButtonClick={() => this.onLikeButtonClick(pos)}/>
      )
    });

    return (
      <div className="App">
        <button onClick={this.onHideButtonClick}>{this.state.showPersons ? 'Hide List' : 'Show List'}</button>
        <br></br>
        {this.state.showPersons ? personCards : null}
      </div>
    );
  }
  
}

export default App;
