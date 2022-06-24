import React from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { useFetch } from "./useFetch";

let color = '';
let oneHChangeIcon = '';
const url = 'https://live-crypto-prices.p.rapidapi.com/pricefeed';
const keys = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8aec22813cmshca054c4ac68e851p105dddjsn73de4b979d9b',
		'X-RapidAPI-Host': 'live-crypto-prices.p.rapidapi.com'
	}
};

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


const PopCryptos = () => {

    const popCryptos = ['ethereum', 'dogecoin', 'cardano', 'litecoin'];
    const crypto = useFetch(url, keys);
    if(!crypto.crypto.result){
        return;
    }
    let cryptoArr = crypto.crypto.result.filter(item => popCryptos.includes(item.CoinName.toLowerCase()));

    return (
        <article className="pop-cryptos">
            {cryptoArr.map((cryptoObj) => {
                let {Id, CoinName, Price, OneHChange} = cryptoObj;

                // price color and pecentage change icon
                OneHChange = selectColorAndIcon(OneHChange);                

                return (
                    <div key={Id} className="stock-data" >
                        <div className="name-div">{CoinName}</div>
                        <div className="nums-div">
                            <div style={{color}} className="price-div">
                                {parseFloat(Price.substring(1).replace(',', '')).toFixed(2)}
                            </div>
                            <div className="arrow-div">{oneHChangeIcon}</div>
                            <div className="percentage-div">{OneHChange}</div>
                        </div>
                    </div>
                );
            })}
        </article>
    );
}

export default PopCryptos;
