import React, { FC } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import st from './CrossOrZero.module.css'
import ModalStart from './ModalStart/ModalStart';
import { IconContext } from "react-icons";
import { FiFlag } from "react-icons/fi";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
import { CrossOrZeroType } from './CrossOrZeroContainer';

const CrossOrZero:FC<CrossOrZeroType> = (props) => {
  const [numbMove, setNumbMove] = useState(1);
  const [play, setPlay] = useState(true);
  const [theEnd, setTheEnd] = useState(false);
  const ref = useRef<HTMLTableElement | null>(null);
  useEffect(() => {
    if (props.currentVictori) {
      setPlay(true);
      setNumbMove(1);
      setTheEnd(true);
    }
  }, [props.currentVictori]);
  function newGame() {
    if (ref !== null && ref.current) {
      const child = ref.current.children;
      for (let i = 0; i < child.length; i++) {
        for (let j = 0; j < child[i].children.length; j++) {
          child[i].children[j].className = '';
        }
      }
    }
  }

  function clickTable(ev: React.MouseEvent<HTMLTableElement>): void {
    setNumbMove(p => p + 1);
    ev.target.className = st[props.currentMove];
    if (props.countMove - 1 >= numbMove) {
      setPlay(p => !p);
      props.setCurrentMove(play ? 'blue' : 'red');
      play ? props.setCombinationRed(ev.target.dataset.num) : props.setCombinationBlue(ev.target.dataset.num);
      props.examination();
      props.crossOrZeroExamination();
    } else {
      props.setNewGameCrossOrZero();
      console.log(props.currentVictori);
      setPlay(true);
      setNumbMove(1);
      setTheEnd(true);
      setTimeout(newGame, 300);
    }
  };
  if (!props.nameRed) return <ModalStart setNameRed={props.setNameRed}
    setNameBlue={props.setNameBlue} />
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
                <span className={st.name__count}>Count victori: {props.victoriRed / 2}</span>
              </div>
              {play
                ? <IconContext.Provider value={{ size: "3em", color: "rgb(227, 136, 136)" }}>
                  <ImArrowLeft />
                </IconContext.Provider>
                : <IconContext.Provider value={{ size: "3em", color: "rgb(136, 151, 227)" }}>
                  <ImArrowRight />
                </IconContext.Provider>}
              <div className={st.info__blue__players}>
                <span className={st.name__players}>{props.nameBlue}</span>
                <IconContext.Provider value={{ size: "3em", color: "rgb(136, 151, 227)" }}>
                  <FiFlag />
                </IconContext.Provider>
                <span className={st.name__count}>Count victori: {props.victoriBlue / 2}</span>
              </div>
            </div>
            <div className={st.game__crosszero__plac}>
              <table onClick={clickTable} cellSpacing='0' className={st.game__crosszero__table}>
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
      <div className={theEnd ? st.wins : st.wins_none} onClick={() => {
        setTheEnd(false);
        newGame();
        props.setNewGameCrossOrZero();
      }}><div>Victory: {props.currentVictori ? props.currentVictori : 'draw won'}</div>
        {!props.currentVictori
          ? <IconContext.Provider value={{ size: "7em", color: "rgb(72, 200, 94)" }}>
            <FiFlag />
          </IconContext.Provider>
          : (props.currentVictori === 'red')
            ? <IconContext.Provider value={{ size: "7em", color: "rgb(227, 136, 136)" }}>
              <FiFlag />
            </IconContext.Provider>
            : <IconContext.Provider value={{ size: "7em", color: "rgb(136, 151, 227)" }}>
              <FiFlag />
            </IconContext.Provider>}
      </div>
    </div>
  )
}
export default CrossOrZero;