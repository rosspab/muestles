import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import NavBar from './components/NavBar/NavBar';
import EsUnHero from './components/Hero/Hero';
import ListContainer from './components/ItemListContainer/ItemListContainer'


library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <EsUnHero/>
      <ListContainer/>
    </React.Fragment>
  );
}

export default App;
