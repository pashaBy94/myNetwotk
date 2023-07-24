import React from 'react';
import st from './PostList.module.css';
import Post from "./Post/Post";
import { listComponentWritePosts } from "../../../../utils/helpers";
import { PropMyPostType } from "../../../../typeAndInterface/typeAndInterface";

const PostList = (props: PropMyPostType) => {
    const listPost = listComponentWritePosts(props, Post);
    return (
        <div>
            <section className={st.post__items}>
                {listPost}
            </section>
        </div>
    )
}
export default PostList;