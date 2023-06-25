import React from "react";
import Users from "./UsersC";
import { connect } from "react-redux";
import { thunkAddUsers, thunkAddNextUsers, thunkAddFollow, thunkUnFollow } from "../../redux/thankCreator";
import { setCurrentPage } from "../../redux/usersPageReducer";
import Preloader from "../general/Preloader/Preloader";
import { compose } from "redux";
import { authUs } from "../../hot/authUs";
import { getCountUsersPage, getIsDisabledFollowButton, getIsLoader, getLengthCountPage, getNumberCurrentPage, getTotalCountPage, getUsers } from "../../redux/selectors";
import { GlobalStateType } from "../../typeAndInterface/typeAndInterface";

export type UsersType = {
    follower: boolean,
    id: number,
    name: string,
    photos: { small: string | null, large: string | null },
    status: string | null,
    uniqueUrlName: string | null
};

type PropsStateType = {
    countUsersPage: number,
    isDisabledFollowButton: Array<number>,
    isLoader: boolean,
    lengthCountPage: Array<Array<number>>,
    numberCurrentPage: number,
    totalCountPage: number,
    users: Array<UsersType>,
}
interface PropsDispatchType {
    setCurrentPage: (currentPage: number) => object,
    thunkAddFollow: (id: number) => (dispatch: any) => void,
    thunkUnFollow: (id: number) => (dispatch: any) => void,
    thunkAddNextUsers: (numPage: number, countUsersPage: number) => (dispatch: any) => void,
    thunkAddUsers: (countUsersPage: number, numberCurrentPage: number, isLoad: boolean) => (dispatch: any) => void
}
interface PropType {
    title: string
}
type PropsType = PropsStateType & PropsDispatchType & PropType;
class UsersContainer extends React.Component<PropsType>{
    constructor(props: PropsType) {
        super(props);
        this.setAjaxAndWriteUser = this.setAjaxAndWriteUser.bind(this);
    }
    componentDidMount() {
        this.props.thunkAddUsers(this.props.countUsersPage, this.props.numberCurrentPage, this.props.isLoader);
    }
    setAjaxAndWriteUser(numPage: number) {
        this.props.thunkAddNextUsers(numPage, this.props.countUsersPage);
    }
    render() {
        return (
            <>
                {this.props.isLoader ? <Preloader /> : null}
                <Users
                    setCurrentPage={this.props.setCurrentPage}
                    numberCurrentPage={this.props.numberCurrentPage}
                    setAjaxAndWriteUser={this.setAjaxAndWriteUser}
                    countUsersPage={this.props.countUsersPage}
                    users={this.props.users}
                    isDisabledFollowButton={this.props.isDisabledFollowButton}
                    thunkAddFollow={this.props.thunkAddFollow}
                    thunkUnFollow={this.props.thunkUnFollow}
                    totalCountPage={this.props.totalCountPage}
                    lengthCountPage={this.props.lengthCountPage}
                />
            </>)
    }
}


const mapStateToProps = (state: GlobalStateType): PropsStateType => {
    return ({
        users: getUsers(state),
        numberCurrentPage: getNumberCurrentPage(state),
        countUsersPage: getCountUsersPage(state),
        totalCountPage: getTotalCountPage(state),
        isLoader: getIsLoader(state),
        isDisabledFollowButton: getIsDisabledFollowButton(state),
        lengthCountPage: getLengthCountPage(state),
    })
};

export default compose(connect<PropsStateType, PropsDispatchType, PropType, GlobalStateType>(mapStateToProps, { setCurrentPage, thunkAddUsers, thunkAddNextUsers, thunkAddFollow, thunkUnFollow }), authUs)(UsersContainer)
