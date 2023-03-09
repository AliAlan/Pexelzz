import { useState, useEffect } from "react";

const useFetch = (param) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchdata() {
    const data = await fetch(`https://api.pexels.com/${param}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "5bviQ5ICPc6ly6AG3PjflyDOtrdtLfsyYc7xVt7doiKV2TozgGnJa5QJ",
      },
    });
    const response = await data.json();
    setResponse(response);
  }
  useEffect(() => {
    fetchdata(param);
  }, [param]);

  return { response };
};

export default useFetch;
