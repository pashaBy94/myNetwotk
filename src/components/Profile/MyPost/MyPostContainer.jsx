import { postAdd, postsDelete } from "../../../redux/profilePageReducer.ts";
import MyPost from "./MyPost";
import { connect } from "react-redux";
import { getPostsData } from "../../../redux/selectors.ts";

const mapStateToProp = state => ({
        postsData: getPostsData(state),
    });

const MyPostContainer = connect(mapStateToProp, {postAdd, postsDelete})(MyPost);
export default MyPostContainer;