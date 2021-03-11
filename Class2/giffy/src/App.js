import React from "react"
import './App.css';
import ListOfGifs from "./components/ListOfGifs"
import { Link, Route } from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy App</h1>
        <Link to="/gif/panda">Gifs de Pandas</Link>
        <Link to="/gif/cars">Gifs de Autos</Link>
        <Link to="/gif/programming">Gifs de Desarrolladores</Link>
        <Link to="/gif/movies">Gifs de Peliculas</Link>
        <Link to="/gif/tecnology">Gifs de Tecnologia</Link>
        <Route 
        component={ListOfGifs}
        path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
