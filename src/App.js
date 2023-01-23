import './App.css';
import data from "./data.json"
import Nav from "./componentes/nav/nav"
import Home from "./componentes/Home/Home"
import Details from "./componentes/details/details"
import { Route, Routes } from 'react-router-dom';
import Cards from "./componentes/Cards/Cards"
import CardSearch from './componentes/nav/CardSearch';
import Details2 from './componentes/nav/details/details';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/:temporada' element={<Cards characters={data}></Cards>}></Route>
        <Route path=':temporada/:personaje' element={<Details propiedad={data}/>}></Route>
        <Route path='/search/:personaje' element={<CardSearch></CardSearch>}></Route>
        <Route path='search/:personaje/:details' element={<Details2 propiedad={data}></Details2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
