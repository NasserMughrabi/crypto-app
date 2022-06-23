import React from "react";
import { useState, useRef } from "react";
import MainCrypto from "./MainCrypto";
import PopCryptos from "./PopCryptos";

const SearchBar = () => {
    
    const defaultCrypto = {
        name:'Bitcoin',
        price:'20375',
        points:'1340',
        percentage:'3.2'
    };
    const defaultPopCryptos = [
        {
            id: 1,
            name:'Bitcoin',
            price:'20375',
            points:'1340',
            percentage:'3.2',
        }, 
        {
            id: 2,
            name:'Etheruim',
            price:'845',
            points:'54',
            percentage:'0.2',
        },
        {
            id: 3,
            name:'Dogecoin',
            price:'0.0254',
            points:'0.02',
            percentage:'1.5'
        },
        {
            id: 4,
            name:'Plata',
            price:'0.00032',
            points:'0.0003',
            percentage:'0.21'
        },
    ];
    const [mainCrypto, setMainCrypto] = useState(defaultCrypto);
    const [popCryptos, setPopCryptos] = useState(defaultPopCryptos);
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

        if (searchBox.style.width == "" || searchBox.style.width == "0px") {
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
                    <a className="search-btn pheight" href="#" onClick={()=> {handleClick()}}>
                        <i ref={inputEl} className="fa fa-search" ></i>
                    </a>
                    <input ref={inputEl} spellCheck="false" type="text" className="pheight" id="input-box" placeholder="Search for crypto" autoCapitalize="on" style={{width:'0px'}} ></input>
                </div>
                
            </header>
            <MainCrypto {...mainCrypto}/>
            <PopCryptos popCryptos={popCryptos}/>
        </>
    );
}

export default SearchBar;