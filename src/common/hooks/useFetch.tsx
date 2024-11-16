import axios, { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"

interface FetchResult {
    data: any | null;
    loading: boolean;
    error: string | null;
}

const API = 'http://127.0.0.1:3000/'

const useFetch = (url: string, config?: AxiosRequestConfig<any>) => {
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: FetchResult = await axios.get(API + url, config);
                setData(response?.data?.data);
            } catch (error) {
                setError("Error fetching data");
            }
        };

        fetchData();
    }, [data]);

    return { data, error };
};

export default useFetch;
