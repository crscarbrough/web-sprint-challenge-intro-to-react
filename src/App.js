import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((resp) => {
        // console.log(resp.data);
        setUsers(resp.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      <Characters users={users} />
    </div>
  );
}

export default App;
