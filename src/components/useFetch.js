import { useState, useEffect, useCallback } from 'react';

const url = 'https://live-crypto-prices.p.rapidapi.com/pricefeed';
const keys = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e057127e3mshb8e73eb9ef18053p19c719jsnfc7279dfcba3',
		'X-RapidAPI-Host': 'live-crypto-prices.p.rapidapi.com'
	}
};
export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [crypto, setCrypto] = useState([]);

    const getCrypto = useCallback(async () => {
    const response = await fetch(url, keys);
    const result = await response.json();
    setCrypto(result);
    setLoading(false);
    }, [url]);

    useEffect(() => {
        getCrypto();
    }, [url, getCrypto]);

    return { loading, crypto };
};
