import React from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { useFetch } from "./useFetch";

let color = '';
let oneHChangeIcon = '';

const selectColorAndIcon = (OneHChange) => {
    if(OneHChange.startsWith('-') && OneHChange !== '-0.0%') {
        color = '#ff0000'; // red
        oneHChangeIcon = <FaLongArrowAltDown style={{color:'red'}} />;
        return OneHChange = OneHChange.substring(1);
    } else if(OneHChange === '-0.0%') {
        color = '#FFFFFF'; //white
        oneHChangeIcon = '';
        return OneHChange = OneHChange.substring(1);
    } else if (OneHChange === '0.0%') {
        color = '#FFFFFF'; //white
        oneHChangeIcon = '';
        return OneHChange;
    } else {
        color = '#008000'; // green
        oneHChangeIcon = <FaLongArrowAltUp style={{color:'green'}} />;
        return OneHChange;
    }
}

const MainCrypto = ({cryptoName}) => {
    const {crypto} = useFetch();
    if(!crypto.result){
        return;
    }

    let mainCrypto = crypto.result.filter(item => item.CoinName.toLowerCase() === cryptoName.toLowerCase());
    if(!mainCrypto[0]){
        // crypto not supported by API
        alert(`Sorry, '${cryptoName.charAt(0).toUpperCase() + cryptoName.slice(1)}' Crypto Is Not Supported`);
        return;
    }
    let {Id, CoinName, Price, OneHChange} = mainCrypto[0];

    // price color and percentage icon
    OneHChange = selectColorAndIcon(OneHChange);

    return (
        <article key={Id} className="main-crypto">
            <ul>
                <li className="name-li">{CoinName}</li>
                <li style={{color}} className="price-li">
                    {parseFloat(Price.substring(1).replace(',', '')).toFixed(2)}
                </li>
                <li className="points-perc-li">
                    <div id="arrow">
                        {oneHChangeIcon}
                    </div>
                    <div id="percentage-div">{OneHChange}</div>
                </li>
            </ul>
        </article>
    );
}

export default MainCrypto;