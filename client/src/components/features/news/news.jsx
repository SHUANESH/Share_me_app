import "./news.scss";
import { useState, useEffect } from "react";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const newsApi = process.env.REACT_APP_NEWS_API;
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    fetch(`${newsApi}${newsApiKey}&pageSize=6`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response, setNewsData(response?.articles));
      })
      .catch((err) => console.log(err));
  }, [newsApi, newsApiKey]);

  return (
    <>
      <h1 className=" mainTitle">השארו מעודכנים</h1>
      <main class="page-content">
        {newsData?.map((item, index) => {
          return (
            
            <div class="card">
              <div class="content">
                <h2 class="title"> {newsData[index]?.title}</h2>
                <img
                  className="imgNews"
                  src={newsData[index]?.urlToImage}
                  alt=""
                />
                <p class="copy">{newsData[index]?.description}</p>
                {/* {newsData[index]?.source?.name} */}

                {/* <button > */}
                  <a  class="btn" href={newsData[index]?.url}>READ</a>
                {/* </button> */}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default News;
