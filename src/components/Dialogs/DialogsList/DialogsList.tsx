import React from "react";
import { FC } from "react"
import DialogItem from "./DialogItem/Dialogt";
import st from './DialogsList.module.css';
import { listComponentWriteDialog } from "../../../utils/helpers";
import { DialogsType } from "../../../typeAndInterface/typeAndInterface";
import { useSelector } from "react-redux";
import { getDialodsPageData } from "../../../redux/selectors";

export type DialosListType = {
  // listUs: Array<DialogsType>
};
const DialogsList:FC<DialosListType> = ()=>{
  let listUs = useSelector(getDialodsPageData);
  return(
    <div className={st.dialog__items}>
       {listComponentWriteDialog(listUs, DialogItem)}
    </div> 
  )
}
export default DialogsList