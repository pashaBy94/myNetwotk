import { postAdd, postsDelete } from "../../../redux/profilePageReducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";
import { getPostsData } from "../../../redux/selectors";
import { GlobalStateType, postsDataType } from "../../../typeAndInterface/typeAndInterface";

const mapStateToProp = (state: GlobalStateType): { postsData: postsDataType } => ({
    postsData: getPostsData(state),
});

const MyPostContainer = connect(mapStateToProp, { postAdd, postsDelete })(MyPost);
export default MyPostContainer;