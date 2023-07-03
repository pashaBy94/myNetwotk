import React, { memo } from "react";
import OneFriend from "./OneFriend";
import st from './ListFriends.module.css';
import { listComponentWriteFriends } from "../../../utils/helpers";
import { FriendsPropType } from "../../../typeAndInterface/typeAndInterface";

export default memo(function ListFriends({ topFriends }:FriendsPropType) {
    return (
        <ul className={st.top__friends}>
            {listComponentWriteFriends(topFriends, OneFriend)}
        </ul>
    )
})