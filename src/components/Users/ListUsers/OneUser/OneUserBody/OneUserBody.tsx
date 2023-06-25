import React, { FC } from "react";
import { UsersType } from "../../../../../typeAndInterface/typeAndInterface";
import st from "./OneUserBody.module.css"

type PropsType = {
    user: UsersType
};

const OneUserBody: FC<PropsType> = ({ user }) => {
    return (
        <div className={st.users__point_body}>
            <div className={st.user__description}>
                <p className={st.user__name}>{user.name}</p>
                <p className={st.user__status}>{user.status}</p>
            </div>
            <div className={st.user__location}>
                <p>Minsk</p>
            </div>
        </div>
    )
}
export default OneUserBody