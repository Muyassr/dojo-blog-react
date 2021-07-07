import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {

        const abortCot = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCot.signal}).then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data from the resource..');
                }
                return res.json();
            }).then(data => {
                 setData(data);
                 setisPending(false);
                 setError(null);
             }).catch(err=> {
                 if (err.name === 'AbortError') {
                     console.log(err.name);
                 } else {
                     setError(err.message);
                     setisPending(false);
                 }
            });
        }, 1000); 
        return () => abortCot.abort();
     },[url]);

     return {data, isPending, error};
}
 
export default useFetch;