import React, { FC, useEffect, useState } from "react";
import st from "./Paginator.module.css";
import { initId } from "../../../utils/helpers";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/usersPageReducer";
import { getLengthCountPage } from "../../../redux/selectors";

type PropsType = {
    numberCurrentPage: number,
    setAjaxAndWriteUser: (numPage: number) => void
};

const Paginator: FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const lengthCountPage = useSelector(getLengthCountPage);
    const setCurrentPa = (e: number) => {
        dispatch(setCurrentPage(e))
    }

    const getNumberCountPages = (numberCurrentPage: number, callBack: (numPage: number) => void, clName: any, lengthCountPage: Array<Array<number>>) => {
        if (lengthCountPage.length > 0) {
            const arr = lengthCountPage[count];
            const arrUsers: Array<JSX.Element> = [];
            arr.forEach(el => {
                arrUsers.push((<span
                    className={numberCurrentPage === el ? clName.steps__current : clName.steps__nocurrent}
                    key={initId()}
                    onClick={() => {
                        callBack(el);
                        setCurrentPa(el);
                    }}
                >{el}</span>))
            });
            return arrUsers;
        }
    }
    function setPrev(): void {
        setCount(el => el - 1);
    }
    function setNext(): void {
        setCount(el => el + 1);
    }
    useEffect(() => {
        setCurrentPa(1);
        props.setAjaxAndWriteUser(1);
    }, [])
    return (
        <div className={st.steps}>
            <button
                onClick={setPrev}
                disabled={count === 1}
                className={cn({ [st.no__active]: count === 1, [st.steps__button]: true })}
            >prev</button>
            {getNumberCountPages(props.numberCurrentPage, props.setAjaxAndWriteUser, st, lengthCountPage)}
            <button
                onClick={setNext}
                disabled={count === lengthCountPage.length}
                className={cn({ [st.no__active]: count === lengthCountPage.length, [st.steps__button]: true })}
            >next</button>
        </div>
    )
}

export default Paginator