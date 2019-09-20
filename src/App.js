import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import SearchForm from "./components/SearchForm";
import "./index.css";
import WelcomePage from "./components/WelcomePage.js";

// import { Home } from "./Home";
// import { About } from "./About";
// import { Contact } from "./Contact";
// import { Navigation } from "./Navigation";

export default function App() {
  return (
    <main>
    <Navigation />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    <div>
    <WelcomePage/>
    </div>
    <div>
      <SearchForm />
    </div>
    
      <Header />
      <CharacterList />
    </main>
  );
}
