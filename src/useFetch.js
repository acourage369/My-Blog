import { useEffect, useState } from "react";

const useFetch = (URL) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //useEffect hook run on every render.
    useEffect(() => {
        //An abort 
        const abortCont = new AbortController();
        //Dont use the setTimeout when fetching from a real server
        setTimeout(() => {
            fetch(URL, { singal: abortCont.signal })
            .then((res) => {
                //Throws error from the server
                if(!res.ok) {
                    throw Error('Could not fetch data for that resource.');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            //Catches network connection errors
            .catch((err)=>{
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } 
                else {
                    setError(err.message);
                    setIsPending(false);
                }
                
            });
        }, 1000);

        return () => abortCont.abort();
    },[URL]);

    return { data, isPending, error };
} 

export default useFetch;