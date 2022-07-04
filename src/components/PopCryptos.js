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


const PopCryptos = () => {

    const popCryptos = ['ethereum', 'dogecoin', 'cardano', 'litecoin'];
    const {loading, crypto} = useFetch();
    if(!crypto.result){
        return;
    }
    let cryptoArr = crypto.result.filter(item => popCryptos.includes(item.CoinName.toLowerCase()));

    if(loading){
        return <><h1>Hello</h1></>
    }

    return (
        <>
        {loading ? <h1>Loading...</h1>:
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
        }
        </>
    );
}

export default PopCryptos;
