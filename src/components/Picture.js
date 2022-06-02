import React from "react";

const Picture = ({ data }) => {
  function chunks(arr, part) {
    let result = [];
    for (let i = part; i > 0; i--) {
      result.push(arr.splice(0, Math.ceil(arr.length / i)));
    }
    return result;
  }

  if (data) {
    let copyArr = [...data];
    let newArr = chunks(copyArr, 3);
    let firstArr = newArr[0];
    let secondArr = newArr[1];
    let thirdArr = newArr[2];

    return (
      <div className="row pt-5 pictures">
        <div className="col-4 px-1 px-sm-2">
          {firstArr.map((item) => (
            <article
              key={item.id}
              className="w-100 mb-sm-4 mb-1 overflow-hidden"
            >
              <img src={item.src.large} className="w-100" />
              <a href={item.photographer_url} className="photographer">
                拍攝者: {item.photographer}
              </a>
              <a
                href={item.src.original}
                className="downloadBtn"
                target="_blank"
              ></a>
            </article>
          ))}
        </div>
        <div className="col-4 px-1 px-sm-2">
          {secondArr.map((item) => (
            <article
              key={item.id}
              className="w-100 mb-sm-4 mb-1 overflow-hidden"
            >
              <img src={item.src.large} className="w-100" />
              <a href={item.photographer_url} className="photographer">
                拍攝者: {item.photographer}
              </a>
              <a
                href={item.src.original}
                className="downloadBtn"
                target="_blank"
              ></a>
            </article>
          ))}
        </div>
        <div className="col-4 px-1 px-sm-2">
          {thirdArr.map((item) => (
            <article
              key={item.id}
              className="w-100 mb-sm-4 mb-1 overflow-hidden"
            >
              <img src={item.src.large} className="w-100" />
              <a href={item.photographer_url} className="photographer">
                拍攝者: {item.photographer}
              </a>
              <a
                href={item.src.original}
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

export default Picture;
