import React, { FC } from "react";
import Users from "./UsersC";
import { useSelector } from "react-redux";
import Preloader from "../general/Preloader/Preloader";
import { getIsLoader } from "../../redux/selectors";


export type UsersType = {
    followed: boolean,
    id: number,
    name: string,
    photos: { small: string | null, large: string | null },
    status: string | null,
    uniqueUrlName: string | null
};

type UsersPagePropsType = {};

export const UsersContainer:FC<UsersPagePropsType> = ()=>{
    const isLoader = useSelector(getIsLoader);
    return (
        <>
            {isLoader ? <Preloader /> : null}
            <Users/>
        </>)
}
