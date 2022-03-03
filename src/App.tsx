import React from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import InputField from './Components/InputField';

let name: string = "Brandon";


const App: React.FC = () => {
  return (
    <div className="App">
   <InputField></InputField>
    </div>
  );
}

export default App;
