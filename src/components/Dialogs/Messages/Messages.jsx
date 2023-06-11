import Messag from "./Messag/Messag";
import st from './Messages.module.css'
import { listComponentWriteMessag } from "../../../utils/helpers";
import { useEffect, useRef } from "react";


export default function Messages({messages}){
  const refs = useRef(null);
  useEffect(()=>{
      console.log(refs.current);
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