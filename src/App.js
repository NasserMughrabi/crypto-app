import React from "react";
import SearchBar from "./components/SearchBar";
import {BsArrowDownUp} from 'react-icons/bs'
import icon from './favicon.png';

function App() {

  useEffect(() => {
      const favicon = document.getElementById('favicon');
      favicon.setAttribute('href', icon);
  }, []);
  
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
