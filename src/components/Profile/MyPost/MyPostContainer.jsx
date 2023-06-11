import { postAdd, postsDelete } from "../../../redux/profilePageReducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";
import { getPostsData } from "../../../redux/selectors";

const mapStateToProp = state => ({
        postsData: getPostsData(state),
    });

const MyPostContainer = connect(mapStateToProp, {postAdd, postsDelete})(MyPost);
export default MyPostContainer;