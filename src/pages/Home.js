import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import ThreeColumnsPicture from "../components/ThreeColumnsPicture";
import TwoColumnsPicture from "../components/TwoColumnsPicture";

const Home = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f91700001000001babf8b50cdf54de59b175b239ac34ce1";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  const search = async (url) => {
    setPage(2);
    let dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: auth,
      },
    });

    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
    setInput("");
  };

  //載入網頁時，先執行search函式
  useEffect(() => {
    if (currentSearch == "") {
      search(initialURL);
      currentWidth();
    } else {
      search(searchURL);
    }
  }, [currentSearch]);

  // load more pictures when detect bottom
  const morePictures = async () => {
    let newURL;
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    }
    setPage(page + 1);

    let dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Authorization: auth,
      },
    });

    let parsedData = await dataFetch.json();
    setData((prevState) => [...prevState, ...parsedData.photos]);
    setIsBottom(false);
  };

  // infinite scroll start
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isBottom) return;
    morePictures();
  }, [isBottom]);

  function handleScroll() {
    let viewPortH = window.innerHeight;
    let topToScrollTop = document.documentElement.scrollTop;
    let totalH = document.documentElement.offsetHeight;
    if (viewPortH + topToScrollTop !== totalH) return;
    setIsBottom(true);
  }
  // infinite scroll end

  // below is when window resize to render different component
  const [checkWidth, setCheckWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", currentWidth);
    return () => window.removeEventListener("resize", currentWidth);
  }, []);

  function currentWidth() {
    if (window.innerWidth < 900) {
      setCheckWidth(true);
    } else {
      setCheckWidth(false);
    }
  }

  return (
    <div className="container-lg">
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
        input={input}
      />
      {currentSearch !== "" ? (
        <p className="fs-2 text-center mb-3">
          與「{`${currentSearch}`}」相關的照片
        </p>
      ) : (
        <></>
      )}
      {checkWidth ? (
        <TwoColumnsPicture data={data} />
      ) : (
        <ThreeColumnsPicture data={data} />
      )}
    </div>
  );
};

export default Home;
