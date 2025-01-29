import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");

  const addPassword = () => {
    Axios.post(
      "http://localhost:3001/addpassword",
      { password: password, title: title },
      { headers: { "Content-Type": "application/json" } }
    ).then((res) => console.log("success", res.data))
    .catch((err) => console.error("Axios Error:", err.response ? err.response.data : err.message));
  };

  return (
    <div className="App">
      <div className="adding-password">
        <input
          type="text"
          placeholder="Ex. password123"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ex. instagram"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button onClick={addPassword}> Add Password </button>
      </div>
    </div>
  );
}

export default App;
