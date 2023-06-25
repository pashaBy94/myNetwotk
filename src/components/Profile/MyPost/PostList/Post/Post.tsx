import React, { FC } from "react";
import st from './Post.module.css';

type PropsPostType = {
    post: string,
    id: number,
    likescount: number,
    postsDelete: any,
    key: number,
};

const Post: FC<PropsPostType> = (props) => {
    function deletePost(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        props.postsDelete(props.id)
    }
    return (
        <div className={st.post__item}>
            <div className={`${st.post__tilda}`}><img src="noava.png" alt="" /></div>
            <p className={st.post__item_text}>{props.post}</p>
            <button onClick={deletePost} className={st.post__button}>X</button>
        </div>
    )
}
export default Post;