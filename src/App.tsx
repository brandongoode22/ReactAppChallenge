import React, { useState } from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import InputField from './Components/InputField';

let name: string = "Brandon";


const App: React.FC = () => {
  const [todo, settodo] = useState<string>("second")

  console.log(todo);
  return (
    <div className="App">
   <InputField todo={todo} settodo={settodo}></InputField>
    </div>
  );
}

export default App;
