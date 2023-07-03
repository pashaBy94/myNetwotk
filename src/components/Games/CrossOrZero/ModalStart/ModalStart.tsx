import React, { FC, useRef } from "react";
import st from './ModalStart.module.css'
import { IconContext } from "react-icons";
import { FiFlag } from "react-icons/fi";
type ModalPropType = {
    setNameRed: any,
    setNameBlue: any
};

const ModalStart:FC<ModalPropType> = (props) => {
  const refs = useRef(null);
  function toStart(e: React.MouseEvent<HTMLElement>) {
    const formData = new FormData(refs.current);
    props.setNameRed(formData.get('red'));
    props.setNameBlue(formData.get('blue'));
    e.preventDefault();
  }
  return (
    <div className={st.start}>
      <form ref={refs} className={st.start__form}>
        <h2 className={st.start__form_title}>Cross or zero</h2>
        <div className={st.start__form_subscrib}>Who plays for the reds:</div>
        <input type="text" name="red" id="red" className={st.start__form_input} placeholder='name' />
        <IconContext.Provider value={{ size: "3em", color: "rgb(227, 136, 136)" }}>
          <FiFlag />
        </IconContext.Provider>
        <div className={st.start__form_subscrib}>Who plays for the blues:</div>
        <input type="text" name="blue" id="blue" className={st.start__form_input} placeholder='name' />
        <IconContext.Provider value={{ size: "3em", color: "rgb(136, 151, 227)" }}>
          <FiFlag />
        </IconContext.Provider>
        <input type='button' value='Start' onClick={toStart} className={st.start__form_button} />
      </form>
    </div>
  )
}
export default ModalStart;