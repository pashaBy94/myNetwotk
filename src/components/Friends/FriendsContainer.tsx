import React, { FC, memo } from "react";
import { getTopFriends } from "../../redux/selectors";
import Friends from "./Friends";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "../../utils/helpers";
import { FriendsPropType, GlobalStateType } from "../../typeAndInterface/typeAndInterface";


const FriendsContainer:FC<FriendsPropType> = ({topFriends})=>{
  
  return(
      <Friends topFriends={topFriends}/>
  )
}

const FriendsContainerMemo = memo(FriendsContainer);

const mapStateToProps = (state: GlobalStateType) => ({
  topFriends: getTopFriends(state)
});

export default compose(
  connect(mapStateToProps,{}),
  withRouter
  )(FriendsContainerMemo)