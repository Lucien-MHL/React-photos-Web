import React from "react";

const ThreeColumnsPicture = ({ data }) => {
  if (data) {
    let firstArr = [];
    let secondArr = [];
    let thirdArr = [];

    let i = 0;
    let j = 1;
    let k = 2;

    data.forEach((item, index) => {
      if (index == i) {
        firstArr.push(item);
        i += 3;
      } else if (index == j) {
        secondArr.push(item);
        j += 3;
      } else if (index == k) {
        thirdArr.push(item);
        k += 3;
      }
    });

    return (
      <div className="row pictures">
        <div className="col-4 px-2">
          {firstArr.map((item) => (
            <article
              key={item.id}
              className="w-100 mb-sm-4 mb-1 overflow-hidden"
            >
              <img src={item.src.large} className="w-100" />
              <a
                href={item.photographer_url}
                className="photographer"
                target="_blank"
              >
                拍攝者: {item.photographer}
              </a>
              <a
                href={`https://www.pexels.com/photo/${item.id}/download/`}
                className="downloadBtn"
                target="_blank"
              ></a>
            </article>
          ))}
        </div>
        <div className="col-4 px-2">
          {secondArr.map((item) => (
            <article
              key={item.id}
              className="w-100 mb-sm-4 mb-1 overflow-hidden"
            >
              <img src={item.src.large} className="w-100" />
              <a
                href={item.photographer_url}
                className="photographer"
                target="_blank"
              >
                拍攝者: {item.photographer}
              </a>
              <a
                href={`https://www.pexels.com/photo/${item.id}/download/`}
                className="downloadBtn"
                target="_blank"
              ></a>
            </article>
          ))}
        </div>
        <div className="col-4 px-2">
          {thirdArr.map((item) => (
            <article
              key={item.id}
              className="w-100 mb-sm-4 mb-1 overflow-hidden"
            >
              <img src={item.src.large} className="w-100" />
              <a
                href={item.photographer_url}
                className="photographer"
                target="_blank"
              >
                拍攝者: {item.photographer}
              </a>
              <a
                href={`https://www.pexels.com/photo/${item.id}/download/`}
                className="downloadBtn"
                target="_blank"
              ></a>
            </article>
          ))}
        </div>
      </div>
    );
  }
};

export default ThreeColumnsPicture;
