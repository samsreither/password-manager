import "./App.css";
import { useState } from "react";

function App() {

  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')

  return (
    <div className="App">
      <div className="adding-password">
        <input type="text" placeholder="Ex. password123" onChange={(event) => {setPassword(event.target.value)}}/>
        <input type="text" placeholder="Ex. password123" />
        <button> Add Password </button>
      </div>
    </div>
  );
}

export default App;
