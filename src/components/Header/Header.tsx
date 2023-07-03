import React, { FC } from "react";
import st from './Header.module.css'
import { HeaderPropType } from "./HeaderContainer";
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";

const Header:FC<HeaderPropType> = (props)=> {
  return (
    <header className={st.header}>
      <div className={st.header__wrap}>
        <LeftBar />
        <RightBar props={props} />
      </div>
    </header>
  )
}

export default Header;