import React from "react";
import { useState, useRef } from "react";
import MainCrypto from "./MainCrypto";
import PopCryptos from "./PopCryptos";

const SearchBar = () => {
    
    const [mainCrypto, setMainCrypto] = useState('Bitcoin');
    const inputEl = useRef(null);

    const handleClick = () => {
        if(inputEl.current.value){
            setMainCrypto(inputEl.current.value);
        }
        inputEl.current.value = '';
        displaySearchBox();
    }

    function displaySearchBox() {
        let searchBox = inputEl.current;

        if (searchBox.style.width === "" || searchBox.style.width === "0px") {
            searchBox.style.width = "100%";
        } else {
            searchBox.style.width = "0px";
        }
    }

    return (
        <>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
            <header className="search-bar">
                <div className="search-box pheight">
                    <div className="search-btn pheight" href="#" onClick={()=> {handleClick()}}>
                        <i ref={inputEl} className="fa fa-search" ></i>
                    </div>
                    <input ref={inputEl} spellCheck="false" type="text" className="pheight" id="input-box" placeholder="Search for crypto" autoCapitalize="on" style={{width:'0px'}} ></input>
                </div>
            </header>
            <MainCrypto cryptoName={mainCrypto}/>
            <PopCryptos />
        </>
    );
}

export default SearchBar;