import React, { memo, useEffect } from "react";
import st from "./Users.module.css"
import Paginator from "./Paginator/Paginator";
import ListUsers from "./ListUsers/ListUsers";
import SearchFriend from "./SearchFriend/SearchFriend";
import { useDispatch, useSelector } from "react-redux";
import { getCountUsersPage, getFriend, getIsLoader, getNumberCurrentPage, getTerm } from "../../redux/selectors";
import { filterNull } from "../../utils/helpers";
import { thunkAddNextUsers, thunkAddUsers } from "../../redux/thankCreator";

export default memo(function Users() {
    const numberCurrentPage = useSelector(getNumberCurrentPage);
    const countUsersPage = useSelector(getCountUsersPage);
    const isLoader = useSelector(getIsLoader);
    const friend = useSelector(getFriend);
    const term = useSelector(getTerm);
    const dispatch = useDispatch();
    const  setAjaxAndWriteUser = (numPage: number)=> {
        dispatch(thunkAddNextUsers(numPage, countUsersPage, filterNull(friend), term ));
    };
    useEffect(()=>{
        dispatch(thunkAddUsers(countUsersPage, numberCurrentPage, isLoader, filterNull(friend), term));
    },[])
    return (
        <div className={st.users}>
            <div className={st.users__title}>
                <h2 className={st.users__title_text}>Friends</h2>
                <SearchFriend 
                countUsersPage={countUsersPage}
                isLoader={isLoader}
                friend={friend}
                term={term}/>
            </div>
            <Paginator 
                numberCurrentPage={numberCurrentPage} 
                setAjaxAndWriteUser={setAjaxAndWriteUser} 
            />
            <div className={st.users__content}>
                <ListUsers />
                <div className={st.users__show}>
                    <div className={st.users__show_vrap}>
                        <button className={st.users__btn}>Show more</button>
                    </div>
                </div>
            </div>
        </div>
    )
})