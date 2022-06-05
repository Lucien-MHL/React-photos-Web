import React from "react";

const About = () => {
  return (
    <div className="container pb-5 px-5 about">
      <h3 className="mt-4">關於本站</h3>
      <div className="mt-3">
        <p>
          透過 React
          撰寫的網站，讓使用者可以透過關鍵字搜尋想要的照片，照片的來源是串接
          <a href="https://www.pexels.com" className="pexels fw-bold ps-1">
            Pexels API
          </a>
          ，版面由 Bootstrap 5 及 SCSS 所寫成。
        </p>
        <p>學習及參考資源如下:</p>
        <ul className="mt-1">
          <li>
            <a
              target="_blank"
              href="https://www.udemy.com/course/html5-css3-z/"
            >
              Udemy
            </a>
          </li>
          <li>
            <a target="_blank" href="https://zh-hant.reactjs.org/">
              React js 官網
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://reactrouter.com/docs/en/v6/getting-started/overview#quick-start-overview"
            >
              React Router
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://upmostly.com/tutorials/build-an-infinite-scroll-component-in-react-using-react-hooks"
            >
              Upmostly
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia"
            >
              MDN
            </a>
          </li>
        </ul>
      </div>
      <h3 className="mt-5">心得</h3>
      <div className="mt-3">
        <p>製作本站的目的是為了學習 React 的框架，以及 Fetch 的使用。</p>

        <ol>
          <li>
            <span className="fw-bold">React component:</span>
            <p className="lh-lg">
              可以把會重複出現的東西都放進 component
              裡，像是導覽列、尾頁，如此一來就不用在每個 html
              裡面都加上一樣的程式碼。
            </p>
          </li>
          <li>
            <span className="fw-bold">React router:</span>
            <p className="lh-lg">
              透過 router 可以切換到不同的頁面，像是首頁、關於...等等，在 v6
              版本中 Switch 被拿掉了改用 Routes，另外在 Route 裡面不用加上 exact
              也能切換到指定的路徑。
            </p>
          </li>
          <li>
            <span className="fw-bold">React hook:</span>
            <p className="lh-lg">
              根據我查到的資料 Hook 是用來簡化 Class 的寫法，而 Hook 在 Class
              裡面沒有辦法使用，在 React function component 可以。
              <br />
              本作品的 Infinite Scrolling 是透過 useSate 及 useEffect 寫成的。
            </p>
          </li>
          <li>
            <span className="fw-bold">Fetch:</span>
            <p className="lh-lg">
              使用 Fetch從 Pexels API
              獲取資料，因為資料是非同步的關係，所以使用時需要放進 Async
              function 裡面，接著要使用 await
              等待回傳的資料，並放進一個變數裡，在透過 json( ) 去 parse 資料。
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
