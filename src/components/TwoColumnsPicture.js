import React from "react";

const TwoColumnsPicture = ({ data }) => {
  if (data) {
    let firstArr = [];
    let secondArr = [];
    let i = 0;
    let j = 1;

    data.forEach((item, index) => {
      if (index == i) {
        firstArr.push(item);
        i += 2;
      } else if (index == j) {
        secondArr.push(item);
        j += 2;
      }
    });

    return (
      <div className="row pictures">
        <div className="col-6 g-1 g-sm-3">
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
        <div className="col-6 g-1 g-sm-3">
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
      </div>
    );
  }
};

export default TwoColumnsPicture;
