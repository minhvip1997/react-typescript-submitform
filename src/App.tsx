import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css'


export interface IState {
  people:{
    name: string,
    age: number,
    bio: string
  }[]
}

function App() {
  

  const [age,setAge] = useState(25);
  const [name,setName] = useState("nhat minh");
  const [inputData, setInputData] = useState({name: "", age: ""});
  const [size,setSize] = useState<string|number>("Xl");
  const [people, setPeople] = useState<IState["people"]>([{name: "Nhat minh", age: 25, bio:"coder"}]);

  return (
    <div className='container'>
      <Form people = {people} setPeople={setPeople}/>
      <List people = {people}/>
    </div>
  );
}

export default App;
