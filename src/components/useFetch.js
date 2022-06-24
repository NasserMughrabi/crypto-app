import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url, keys) => {
    const [crypto, setCrypto] = useState([]);

    const getProducts = useCallback(async () => {
    const response = await fetch(url, keys);
    const result = await response.json();
    setCrypto(result);
    }, [url]);

    useEffect(() => {
        getProducts();
    }, [url, getProducts]);

    return {crypto};
};
