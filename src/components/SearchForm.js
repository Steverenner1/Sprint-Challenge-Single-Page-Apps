import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {withFormik, Form, Field} from "formik";


const SearchForm = ({values, errors, touched, status}) => {
  const [users, setUsers] = useState([])
  // useEffect(() => {
  //     status && setUsers(users => [...users, status]);
  // }, [status])
  
  return(
        <div className="search-form">
            <form>
                <input type="text" id="filter" placeholder="Search for..."/>
            </form>
            {users.map(user => (
                <ul key={user.id}></ul>
            ))}  
            <button type="submit">Submit</button>
            </div>
  );        
};  



export default SearchForm;
