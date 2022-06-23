import React from "react";


const PopCryptos = ({popCryptos}) => {
    return (
        <article className="pop-cryptos">
            {popCryptos.map((cryptoObj) => {
                const {id, name, price, points, percentage} = cryptoObj;
                return (
                    <div key={id} className="stock-data">
                        <div className="name-div">{name}</div>
                        <div className="nums-div">
                            <div className="price-div">{price}</div>
                            <div className="percentage-div">{percentage}</div>
                            <div className="points-div">({points})</div>
                        </div>
                    </div>
                );
            })}
        </article>
    );
}

export default PopCryptos;
