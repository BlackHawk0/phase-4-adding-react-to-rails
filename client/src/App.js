import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() =>{
    fetch('/movies')
    .then(res => res.json())
    .then(res => console.log(res))
  })
  return (
    <h1>Integration Testing</h1>
  );
}

export default App;
