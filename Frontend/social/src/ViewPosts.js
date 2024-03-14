import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ViewPosts() {
  const [apiData, setApiData] = useState([]);
  const [loading, isloading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      (async () => {
        try {
          const response = await axios.get("http://localhost:3000/posts", {
            headers: {
              authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          });
          //   console.log(response.data);
          setApiData(response.data);
          isloading(false);
        } catch (error) {
          setApiError(true);
        }
      })();
    } else {
      navigate("/login");
    }
  }, []);
  if (apiError) {
    return <h1>Something went wrong </h1>;
  }
  if (loading) {
    return <h1>Loading.....</h1>;
  }
  const result = apiData.map((data) => <h1 key={data.id}>{data.title}</h1>);
  return (
    <div>
      <h1>Posts:-</h1>
      {result}
    </div>
  );
}
