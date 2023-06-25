import React from "react";
import st from './MyPost.module.css';
import ProfileFormAddPost from "./ProfileFormAddPost/ProfileFormAddPost";
import PostList from "./PostList/PostList";
import { postsDataType } from "../../../typeAndInterface/typeAndInterface";

export type PropMyPostType = {
    postsData: postsDataType,
    postAdd?: any,
    postsDelete: any
};

export default class MyPost extends React.Component<PropMyPostType> {
    render() {
        return (<div>
            <section className={st.posts}>
                <h2>Add post</h2>
                <ProfileFormAddPost postAdd={this.props.postAdd} />
                <div className={st.wrap}></div>
            </section>
            <PostList postsData={this.props.postsData} postsDelete={this.props.postsDelete} />
        </div>
        )
    }
}