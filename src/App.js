import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Home, About, Contact, Navigation } from './components';
// import { Home } from "./components/Home.js";
// import { About } from "./components/About.js";
// import { Contact } from "./components/Contact.js";
// import { Navigation } from "./components/Navigation.js";

export default function App() {
  return (
    <main>
    <div>
      <Navigation />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" copmponent={Contact}/>
    </div>
    
    
      <Header />
      <CharacterList />
    </main>
  );
}
