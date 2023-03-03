import React, { useState } from 'react'
import axios from "axios"
import NewsCard from './NewsCard'
function News() {
    const [news, setnews] = useState([])
    async function view() {
        let response = await axios.get("https://api.spaceflightnewsapi.net/v3/articles?_limit=4")
        console.log(response);
        setnews(response.data)
    }
    return (<>
        <h1>Get Today News</h1>
        <button onClick={view} >view</button>
        {
            news.map((singlenews)=>{
                return(
                 <NewsCard data={singlenews}/>
                )
            })
        }
    </>
    )
}

export default News