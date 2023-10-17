import Messag from "./Messag/Mes";
import st from './Messages.module.css'
import { listComponentWriteMessag } from "../../../utils/helpers";
import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getMessag } from "../../../redux/selectors";

type MessagesType = {
};

const Messages:FC<MessagesType> = ()=>{
  const messages = useSelector(getMessag);
  const refs = useRef<HTMLHRElement>(null);
  useEffect(()=>{
      if(refs.current)
      refs.current.scrollIntoView();
  })
  return (
    <div className={st.dialog__messages}>
      <div className={st.dialog__messages_wrap}>
        {listComponentWriteMessag(messages, Messag)}
      </div>
        <hr ref={refs} />
    </div>
  )
}
export default Messages;