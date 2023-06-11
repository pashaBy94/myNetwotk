import React from "react";
import st from './Post.module.css';

export default function Post(props){
    
    function deletePost(e){
        e.preventDefault();
        props.postsDelete(props.id)
    }
    return(
            <div className={st.post__item}>
                <div className={`${st.post__tilda}`}><img src="noava.png"  alt=""/></div>
                <p className={st.post__item_text}>{props.post}</p>
                <button onClick={deletePost} className={st.post__button}>X</button>
            </div>
    )
}