import React from 'react'

function NewsCard(props) {
    return (
        <div className="news"  >
            <img src={props.data.imageUrl} alt="" />
            <div>
                <h4>{props.data.title}</h4>
                <p>{props.data.summary}</p>
                <h5>{props.data.publishedAt}</h5>
            </div>
        </div>
    )
}

export default NewsCard