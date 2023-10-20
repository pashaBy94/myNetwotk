import { Field, Formik } from "formik";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { thunkAddUsers } from "../../../redux/thankCreator";
import { setCurrentPage, setSearch } from "../../../redux/usersPageReducer";
import { filterNull } from "../../../utils/helpers";
import st from "./SearchFriend.module.css"
import { useLocation, useNavigate } from "react-router-dom";

var parse = require('url-parse');

type PropsType = {
    countUsersPage: number,
    isLoader: boolean,
    friend: boolean | null,
    term: string,
    numberCurrentPage: number
}

export default memo(function SearchFriend(props:PropsType) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [formTerm, setFormTerm] = useState(props.term);
    const [formTFriend, setFormFriend] = useState(props.friend);    
    const setSear = (w:boolean|null,t:string)=>{
        dispatch(setSearch(w, t));
    }
    useEffect(()=>{
        navigate(`/users?term=${props.term}&friend=${props.friend}&page=${props.numberCurrentPage}`);
        setFormTerm(props.term);
        setFormFriend(props.friend);
    },[props.friend, props.term, props.numberCurrentPage]);
    useEffect(()=>{
        
        const url = parse(location.search, true);
        
        if(Object.keys(url.query).length > 0){
            const isFriend = url.query.friend === 'null'?null:url.query.friend === 'false'?false:true;
            const page = url.query.page === 1?1:url.query.page;
            console.log(page);
            dispatch(thunkAddUsers(props.countUsersPage, 
                page, 
                props.isLoader, 
                isFriend, 
                url.query.term));
                setSear(isFriend, url.query.term);
                dispatch(setCurrentPage(Number(page)));
        }
    },[]);
    const thunkAddUse = (w:boolean|null, t:string) =>{        
        dispatch(thunkAddUsers(props.countUsersPage, props.numberCurrentPage, props.isLoader, w, t));
    };
    return (
        <div className={st.users__search}>
            <Formik
            enableReinitialize = {true}
                initialValues={{ title: formTerm, who: formTFriend?'friend':formTFriend === null?'all':'notFriend' }}
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
