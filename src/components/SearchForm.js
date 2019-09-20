import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {withFormik, Form, Field} from "formik";
import CharacterList from "./components/CharacterList";

const characters = [
  "Rick Sanchez",
  "Morty Smith",
  "Summer Smith",
  "Ben Smith",
  "Jerry Smith",
  "Abadango Cluster Princess",
  "Abradolf Lincler",
  "Adjudicator Rick",
  "Agency Director",
  "Alan Rails",
  "Albert Einstein",
  "Alexander",
  "Googah",
  "Alien Morty",
  "Alien Rick",
  "Amish Cyborg",
  "Annie",
  "Antenna Morty",
  "Antenna Rick",
  "Ants in my Eyes Johnson"
];

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = characters.filter(character =>
      character.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  // useEffect(() => {
  //     status && setUsers(users => [...users, status]);
  // }, [status])
  
  return(
        <div className="SearchForm">
            <form>
                <input type="text" id="filter" placeholder="Search for..." value={searchTerm} onChange={handleChange}/>
            </form>
            {searchResults.map(character => (
                <li>{character}</li>
            ))}  
            <button type="submit">Submit</button>
            </div>
  );        
};  



export default SearchForm;
