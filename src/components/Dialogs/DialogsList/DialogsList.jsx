import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import st from './DialogsList.module.css';
import { listComponentWriteDialog } from "../../../utils/helpers";

export default function DialogsList({listUs}){
  return(
    <div className={st.dialog__items}>
      {listComponentWriteDialog(listUs, DialogItem)}
    </div> 
  )
}