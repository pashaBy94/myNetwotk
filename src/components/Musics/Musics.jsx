import React, { useEffect, useRef, useState } from "react";
import { subscribeScroll } from "../../utils/helpers";
import ButtonToTop from "../general/ButtonToTop/ButtonToTop";
import st from './Musics.module.css';
import useSound from "use-sound";
import { IconContext } from "react-icons"; 
import { BiCaretRightCircle, BiDownload, BiPauseCircle } from "react-icons/bi";
import { initId } from "../../utils/helpers";
import Players from "./Players/Players";

function MusicItem(props) {
    console.log(props);
    return (
        <div className={`${st.musics__item} ${(props.ind === props.isPress) ? st.music__current : null}`}>
            <div onClick={() => props.setSound(props.ind)} className={st.music__play}>
                <IconContext.Provider value={{ size: "3em", color: "#4A76A8" }}>
                    {(props.ind === props.isPress) ? <BiPauseCircle /> : <BiCaretRightCircle />}
                </IconContext.Provider>
            </div>
            <div>{props.el.name}</div>
            <div>
            <a href={props.el.content} target="_top" download title="Скачать песню">
                <IconContext.Provider value={{ size: "3em", color: "#4A76A8" }}>
                    <BiDownload />
                </IconContext.Provider>
                </a>
            </div>
        </div>
    )
}

export default function Musics(props) {
    const [isPress, setPress] = useState(null);
    const [openPlayers, setOpenedPlayers] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(props.listMusics[isPress || 0].content);
    const [isBtn, setIsBtn] = useState(false);
    const refList = useRef(null);
    useEffect(()=>{
      window.addEventListener('scroll', ()=> subscribeScroll(refList, setIsBtn));
      return ()=>{
          window.removeEventListener('scroll',  ()=> subscribeScroll(refList, setIsBtn));
      }
     })
    function setSound(ind) {
        if (ind === isPress) {
            setPress(null);
            setOpenedPlayers(false);
            pause();
            setIsPlaying(false)
        }
        else {
            pause();
            setPress(ind);
            setOpenedPlayers(true);
            setIsPlaying(false)
        }
    }
    return (<div className={st.musics} ref={refList}>
        {/* <a href={props.listMusics[0].content} target="_top" download title="Скачать песню">Скачать песню</a> */}
        {openPlayers?<Players 
        setOpenedPlayers={setOpenedPlayers} 
        setPress={setPress} 
        play={play}
        pause={pause}
        duration={duration}
        sound={sound}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        maxCount = {props.listMusics.length}
        />:null}
        <h3 className={st.musics__title}>Musics</h3>
        <div className={st.musics__items}>
            {props.listMusics.map((el, ind) => (
                <MusicItem el={el} ind={ind} key={initId()} setSound={setSound} isPress={isPress}/>
            ))}
        </div>
        <ButtonToTop isBtn={isBtn}/>
    </div>
    )
}

