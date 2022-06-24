import React from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { useFetch } from "./useFetch";


const url = '';

const MainCrypto = ({name, price, points, percentage}) => {
    const {crypto} = useFetch(url);
    return (
        <article className="main-crypto">
            <ul>
                <li className="name-li">{name}</li>
                <li className="price-li">{price}</li>
                <li className="points-perc-li">
                    <div id="arrow"><FaLongArrowAltUp /></div>
                    <div id="percentage-div">{percentage}%</div>
                    <div id="points-div">{points}</div>
                </li>
            </ul>
        </article>
    );
}

export default MainCrypto;