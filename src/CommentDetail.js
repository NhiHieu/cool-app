import React from 'react'
//import faker from 'faker'



const commmentDetail = (props)=>{
    //onsole.log(props);
    return (
        <div className="comment">
                <a className="avatar" href="/">
                    <img src={props.avatar} alt="avt" />
                </a>
                <div className="content">
                    <a className="author" href="/">{props.author}</a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {props.content}
                    </div>
                    <div className="actions">
                        <a className="reply" href="/">Reply</a>
                    </div>
                </div>
        </div>
    )
}

export default commmentDetail;