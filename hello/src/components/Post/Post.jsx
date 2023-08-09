import React from "react";

const Post = (props) => {
    return(
        <div className="post">
                <div className="img-thumb">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img"></img>
                </div>
                <div className="content">
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                </div>
            </div>
    )
}

export default Post;