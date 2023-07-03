import React from "react";
import st from "./ButtonToTop.module.css"
import { IconContext } from "react-icons";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ButtonToTop = ({ isBtn }) => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      {isBtn ? <div className={st.arrow__top} onClick={scrollToTop}>
        <IconContext.Provider value={{ size: "4em", color: "#4A76A8" }}>
          <BsFillArrowUpCircleFill />
        </IconContext.Provider>
      </div> : null}
    </>
  )
}
export default ButtonToTop;