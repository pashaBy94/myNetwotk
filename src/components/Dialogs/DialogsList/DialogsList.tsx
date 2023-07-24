import React from "react";
import { FC } from "react"
import DialogItem from "./DialogItem/Dialogt";
import st from './DialogsList.module.css';
import { listComponentWriteDialog } from "../../../utils/helpers";
import { DialogsType } from "../../../typeAndInterface/typeAndInterface";

export type DialosListType = {
  listUs: Array<DialogsType>
};
const DialogsList:FC<DialosListType> = ({listUs})=>{
  return(
    <div className={st.dialog__items}>
       {listComponentWriteDialog(listUs, DialogItem)}
    </div> 
  )
}
export default DialogsList