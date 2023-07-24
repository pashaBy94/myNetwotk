import Messag from "./Messag/Mes";
import st from './Messages.module.css'
import { listComponentWriteMessag } from "../../../utils/helpers";
import React, { FC, useEffect, useRef } from "react";
import { MessagType } from "../../../typeAndInterface/typeAndInterface";

type MessagesType = {
  messages: Array<MessagType>
};

const Messages:FC<MessagesType> = ({messages})=>{
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