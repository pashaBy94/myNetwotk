import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import st from './CrossOrZero.module.css'
import ModalStart from './ModalStart/ModalStart';
import { IconContext } from "react-icons"; 
import { FiFlag } from "react-icons/fi";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";


export default function CrossOrZero(props){
  const [numbMove, setNumbMove] = useState(1);
  const [play, setPlay] = useState(true);
  // const [theEnd, setTheEnd] = useState(false);
  const ref = useRef(null);
  useEffect(()=>{
    if(props.currentVictori) {
      props.setNewGameCrossOrZero();
      setPlay(true);
      setNumbMove(1);
      setTimeout(newGame,300);
    }
  },[props.currentVictori]);
  function newGame(){
    const child = ref.current.children;
    for (let i = 0; i < child.length; i++) {
      for (let j = 0; j < child[i].children.length; j++) {
        console.log(child[i].children[j]);
        child[i].children[j].className = '';
      }
    }
  }
  function clickTable(ev){
    setNumbMove(p=>p+1);
    ev.target.className = st[props.currentMove];
    if(props.countMove-1 >= numbMove){
      setPlay(p=>!p);
      props.setCurrentMove(play?'blue':'red');
      play?props.setCombinationRed(ev.target.dataset.num):props.setCombinationBlue(ev.target.dataset.num);
      props.examination();
      props.crossOrZeroExamination();
    }else{
      props.setNewGameCrossOrZero();
      setPlay(true);
      setNumbMove(1);
      setTimeout(newGame,300)

    }
  }
  if(!props.nameRed) return <ModalStart setNameRed={props.setNameRed}
  setNameBlue={props.setNameBlue}/>
  // if(!theEnd) return (
  //   <div className={st.game__crosszero}>
  //     <div className={st.wins}>
  //       {props.currentVictori==='red'
  //       ?<IconContext.Provider value={{ size: "7em", color: "rgb(227, 136, 136)" }}>
  //         <FiFlag />
  //       </IconContext.Provider>
  //       :<IconContext.Provider value={{ size: "7em", color: "rgb(136, 151, 227)" }}>
  //         <FiFlag />
  //       </IconContext.Provider>}
  //     </div>
  //   </div>
  // )
  return (
    <div className={st.game__crosszero}>
      <div className={st.game__crosszero__wrap}>
        <div className={st.game__wrap}>
          <h2 className={st.game__crosszero__title}>Cross or zero</h2>
          <div className={st.game__crosszero__body}>
            <div className={st.game__crosszero__info}>
              <div className={st.info__red__players}>
              <IconContext.Provider value={{ size: "3em", color: "rgb(227, 136, 136)" }}>
                <FiFlag />
              </IconContext.Provider>
              <span className={st.name__players}>{props.nameRed}</span>
              <span className={st.name__count}>Count victori: {props.victoriRed}</span>
              </div>
              {play
              ?<IconContext.Provider value={{ size: "3em", color: "rgb(227, 136, 136)" }}>
                <ImArrowLeft />
              </IconContext.Provider>
              :<IconContext.Provider value={{ size: "3em", color: "rgb(136, 151, 227)" }}>
              <ImArrowRight />
            </IconContext.Provider>}
              <div className={st.info__blue__players}>
              <span className={st.name__players}>{props.nameBlue}</span>
              <IconContext.Provider value={{ size: "3em", color: "rgb(136, 151, 227)" }}>
                <FiFlag />
              </IconContext.Provider>
              <span className={st.name__count}>Count victori: {props.victoriBlue}</span>
              </div>
            </div>
            <div className={st.game__crosszero__plac}>
                <table onMouseDown={clickTable} cellSpacing='0' className={st.game__crosszero__table}>
                  <thead></thead>
                  <tbody ref={ref}>
                    <tr>
                      <td data-num='11'></td>
                      <td data-num='12'></td>
                      <td data-num='13'></td>
                    </tr>
                    <tr>
                      <td data-num='21'></td>
                      <td data-num='22'></td>
                      <td data-num='23'></td>
                    </tr>
                    <tr>
                      <td data-num='31'></td>
                      <td data-num='32'></td>
                      <td data-num='33'></td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}