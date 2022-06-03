import { useEffect, useState, useCallback } from "react";
import { API_URL } from "../constants";
const CSR = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    setData(json);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main>
      <h1>Client Side Rendering</h1>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </main>
  );
};

export default CSR;
