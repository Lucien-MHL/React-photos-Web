import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
// 測試用
import TwoCols from "../components/TwoCols";
// 測試用

const Home = () => {
  let [data, setData] = useState(null);
  const auth = "563492ad6f91700001000001babf8b50cdf54de59b175b239ac34ce1";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  let [input, setInput] = useState("");
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: auth,
      },
    });

    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div className="container-lg">
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <Picture data={data} />
    </div>
  );
};

export default Home;
