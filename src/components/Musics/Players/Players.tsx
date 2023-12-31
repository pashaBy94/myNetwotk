import React, { FC } from "react";
import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineCloseCircle } from "react-icons/ai"; // иконки для воспроизведения и паузы
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import st from './Players.module.css';

type PlayersType = {
  setOpenedPlayers: any,
  setPress: any,
  play: any,
  pause: any,
  duration: any,
  sound: any,
  setIsPlaying: any,
  isPlaying: boolean,
  maxCount: number
};

const Players: FC<PlayersType> = (props) => {
  const playingButton = () => {
    if (props.isPlaying) {
      props.pause();
      props.setIsPlaying(false);
    } else {
      props.play();
      props.setIsPlaying(true);
    }
  };
  const previusSound = ():void => {
    props.setPress((pr: null | number) => Math.max(((pr || 0) - 1), 0));
    props.pause();
    props.setIsPlaying(false);
  }
  const nextSound = ():void => {
    props.setPress((pr: null | number) => Math.min(((pr || 0) + 1), props.maxCount - 1));
    props.pause();
    props.setIsPlaying(false);
  }
  const closen = ():void => {
    props.setOpenedPlayers(false);
    props.pause();
    props.setPress(null);
  }
  return (
    <div className={st.component}>
      <h2>Playing Now</h2>
      <div className={st.close} onClick={closen}>
        <IconContext.Provider value={{ size: "2em", color: "#27AE60" }}>
          <AiOutlineCloseCircle />
        </IconContext.Provider>
      </div>
      <div className={`${props.isPlaying ? st.img_animation : null} ${st.img_block}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <h3 className={st.title}>Rubaiyyan</h3>
        <p className={st.subTitle}>Qala</p>
      </div>
      <div>
        <button className={st.playButton} onClick={() => previusSound()}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!props.isPlaying ? (
          <button className={st.playButton} onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className={st.playButton} onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className={st.playButton} onClick={() => { nextSound() }}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
export default Players;
