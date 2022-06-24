import React from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { useFetch } from "./useFetch";


const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const keys = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b55775101cmshf7a0fdee78a5340p11b6b4jsnc627709db9a2',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

const PopCryptos = () => {
    const popCryptos = ['Ethereum', 'Dogecoin', 'Cardano', 'Litecoin'];
    const crypto = useFetch(url, keys);
    let cryptoArr = [];
    if(crypto.crypto.data){
        cryptoArr = crypto.crypto.data.coins.filter(item => popCryptos.includes(item.name));
    }



    return (
        <article className="pop-cryptos">
            {cryptoArr.map((cryptoObj) => {
                const {uuid, name, color, price, change} = cryptoObj;
                // price color
                let hexColor = color;
                if(hexColor === '#3C3C3D') {
                    hexColor = '#008000';
                } else {
                    hexColor = '#ff0000';
                }
                return (
                    <div key={uuid} className="stock-data">
                        <div className="name-div">{name}</div>
                        <div className="nums-div">
                            <div style={{color:hexColor}} className="price-div">{parseFloat(price).toFixed(2)}</div>
                            <div className="arrow-div">
                                {color==='#3C3C3D' ? <FaLongArrowAltUp style={{color:'green'}} /> : <FaLongArrowAltDown style={{color:'red'}} /> }
                            </div>
                            <div className="percentage-div">{change}%</div>
                        </div>
                    </div>
                );
            })}
        </article>
    );
}

export default PopCryptos;
