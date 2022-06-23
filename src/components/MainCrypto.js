import React from "react";

const MainCrypto = ({name, price, points, percentage}) => {
    return (
        <article className="main-crypto">
            <ul>
                <li className="name-li">{name}</li>
                <li className="price-li">{price}</li>
                <li className="points-li">{points}</li>
                <li className="percentage-li">{percentage}</li>
            </ul>
        </article>
    );
}

export default MainCrypto;