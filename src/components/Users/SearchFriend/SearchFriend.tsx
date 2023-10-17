import { Field, Formik } from "formik";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { thunkAddUsers } from "../../../redux/thankCreator";
import { setSearch } from "../../../redux/usersPageReducer";
import { filterNull } from "../../../utils/helpers";
import st from "./SearchFriend.module.css"

type PropsType = {
    countUsersPage: number,
    isLoader: boolean,
    friend: boolean | null,
    term: string,
}

export default memo(function SearchFriend(props:PropsType) {
    const dispatch = useDispatch();
    const setSear = (w:boolean|null,t:string)=>{
        dispatch(setSearch(w, t));
    }
    const thunkAddUse = (w:boolean|null, t:string) =>{
        dispatch(thunkAddUsers(props.countUsersPage, 1, props.isLoader, w, t));
    };
    return (
        <div className={st.users__search}>
            <Formik
                initialValues={{ title: props.term, who: props.friend?'friend':props.friend === null?'all':'notFriend' }}
                onSubmit={(val: { who: string; title: string; }) => {
                    console.log(val);
                    const whoIs = val.who==='friend'?true:val.who==='notFriend'?false:null;
                    setSear(whoIs, val.title);
                    thunkAddUse(filterNull(whoIs), val.title);
                }}
                validate={() => { }}
            >
                {(formik) => {
                    return (
                        <form onSubmit={formik.handleSubmit}>
                            <Field
                                type='text'
                                name="title"
                                id="title"
                                onChange={formik.handleChange}
                                value={formik.values.title} />
                            <select name="who" id="who" onChange={formik.handleChange} value={formik.values.who}>
                                <option value='all'>All</option>
                                <option value='friend'>Friend</option>
                                <option value='notFriend'>NotFriend</option>
                            </select>
                            <Field
                                type="submit"
                                value="Search"
                                id="btn"
                            />
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
})
