import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,

    headers: {
      "X-RapidAPI-Key": "b4a4db7e1fmsh29de89e63d8042cp1afac8jsn9231a30a47ba",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      // alert("good");
      // console.log(response.data.data);
      setIsLoading(false);
    } catch (error) {
      // alert(error);
      console.log("error", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetchData = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, reFetchData };
};

export default useFetch;
