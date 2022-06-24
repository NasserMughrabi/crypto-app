import React from "react";
import SearchBar from "./components/SearchBar";
import {BsArrowDownUp} from 'react-icons/bs'

function App() {
  return (
    <>
    <title><BsArrowDownUp/></title>
      <section className="body-section">
        <SearchBar />
      </section>

    </>
    
  );
}

export default App;
