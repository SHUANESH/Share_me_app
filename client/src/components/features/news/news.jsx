// import React from 'react'

// import CircularProgress from '@material-ui/core/CircularProgress'

import React from "react";
import "./news.scss";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const   News= ()=>{
  const [newsData, setNewsData] = useState([]);
  // const [move, setMove] = useState(true);
  const newsApi = process.env.REACT_APP_NEWS_API;
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    fetch(`${newsApi}${newsApiKey}&pageSize=4`)
      .then((response) => response.json())
      
      .then((response) => {return response, console.log(response ,setNewsData(response?.articles))})
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
               
               <button class="btn" onClick={newsData[index]?.url}  >
              {/* /<a href={newsData[index]?.url}></a> */}
              </button>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default  News() 
 
