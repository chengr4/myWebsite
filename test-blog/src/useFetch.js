// custom hook
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  /*
  1. Runs a function every render of the components (Without a dependency array)
  2. With a dependency array (trigger)
  */
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }, 1000);

    // why return a function?
    return () => abortCont.abort();
  }, [url]); // an empty dependency array

  return { data, isPending };
};

export default useFetch;
