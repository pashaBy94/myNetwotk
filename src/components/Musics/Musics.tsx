import React, { FC, useEffect, useRef, useState } from "react";
import { subscribeScroll } from "../../utils/helpers";
import ButtonToTop from "../general/ButtonToTop/ButtonToTop";
import st from './Musics.module.css';
import useSound from "use-sound";
import { IconContext } from "react-icons";
import { BiCaretRightCircle, BiDownload, BiPauseCircle } from "react-icons/bi";
import { initId } from "../../utils/helpers";
import Players from "./Players/Players";
import { MusicStateType } from "../../typeAndInterface/typeAndInterface";

type PropsMusicItem = {
    el: {content: string, name: string}
    ind: number,
    key: number,
    setSound: (ind:number)=>void
    isPress: null | number
};

const MusicItem:FC<PropsMusicItem> = (props)=> {
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

const  Musics:FC<MusicStateType> = (props) => {
    const [isPress, setPress] = useState<null | number>(null);
    const [openPlayers, setOpenedPlayers] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(props.listMusics[isPress || 0].content);
    const [isBtn, setIsBtn] = useState(false);
    const refList = useRef(null);
    useEffect(() => {
        const changeURL = () => {
            const newUrl = `/${777}`;
            window.history.replaceState({ detail: 'update' }, '', newUrl);
        };
        changeURL();
    });
    useEffect(() => {
        window.addEventListener('scroll', () => subscribeScroll(refList, setIsBtn));
        return () => {
            window.removeEventListener('scroll', () => subscribeScroll(refList, setIsBtn));
        }
    })
    function setSound(ind:number):void {
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
        {openPlayers ? <Players
            setOpenedPlayers={setOpenedPlayers}
            setPress={setPress}            
            play={play}
            pause={pause}
            duration={duration}
            sound={sound}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            maxCount={props.listMusics.length}
        /> : null}
        <h3 className={st.musics__title}>Musics</h3>
        <div className={st.musics__items}>
            {props.listMusics.map((el, ind) => (
                <MusicItem el={el} ind={ind} key={initId()} setSound={setSound} isPress={isPress} />
            ))}
        </div>
        <ButtonToTop isBtn={isBtn} />
    </div>
    )
}
export default Musics;

