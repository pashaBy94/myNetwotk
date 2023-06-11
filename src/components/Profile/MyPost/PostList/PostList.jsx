import st from './PostList.module.css';
import Post from "./Post/Post";
import { listComponentWritePosts } from "../../../../utils/helpers";

export default function PostList(props){
    const listPost = listComponentWritePosts(props, Post);
    return(
        <div>
            <section className={st.post__items}>
                {listPost}
            </section>
        </div>
        )
}