import './App.css';
import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthorsList from './components/AuthorsList';
import AuthorsCreate from './components/AuthorsCreate';
import AuthorsEdit from './components/AuthorsEdit';


const App = () => {
  const [authors, setAuthors] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorsList authors={authors} setAuthors={setAuthors} />} path="/" />
          <Route element={<AuthorsCreate authors={authors} setAuthors={setAuthors} />} path="/authors/new" />
          <Route element={<AuthorsEdit/>} path="/authors/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
