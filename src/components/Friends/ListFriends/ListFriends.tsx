import React, { memo } from "react";
import OneFriend from "./Onefrind";
import st from './ListFriends.module.css';
import { listComponentWriteFriends } from "../../../utils/helpers";
import { useSelector } from "react-redux";
import { getTopFriends } from "../../../redux/selectors";

export default memo(function ListFriends() {
    const topFriends = useSelector(getTopFriends);
    return (
        <ul className={st.top__friends}>
            {listComponentWriteFriends(topFriends, OneFriend)}
        </ul>
    )
})