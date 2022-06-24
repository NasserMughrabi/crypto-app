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

const MainCrypto = ({cryptoName}) => {
    const {crypto} = useFetch(url, keys);
    if(!crypto.data){
        return;
    }
    const mainCrypto = crypto.data.coins.filter(item => item.name === cryptoName);
    const {uuid, name, color, price, change} = mainCrypto[0];

    // price color
    let hexColor = color;
    if(hexColor === '#3C3C3D') {
        hexColor = '#008000';
    } else {
        hexColor = '#ff0000';
    }
    

    return (
        <article key={uuid} className="main-crypto">
            <ul>
                <li className="name-li">{name}</li>
                <li style={{color:hexColor}} className="price-li">{parseFloat(price).toFixed(1)}</li>
                <li className="points-perc-li">
                    <div id="arrow">
                        {color==='#3C3C3D' ? <FaLongArrowAltUp style={{color:'green'}} /> : <FaLongArrowAltDown style={{color:'red'}} /> }
                    </div>
                    <div id="percentage-div">{change}%</div>
                </li>
            </ul>
        </article>
    );
}

export default MainCrypto;