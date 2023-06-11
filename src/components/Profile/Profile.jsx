import React, { useEffect, useRef, useState } from "react";
import st from './Profile.module.css';
import UserProfile from "./UserProfile/UserProfile";
import MyPostContainer from "./MyPost/MyPostContainer";
import Preloader from "../general/Preloader/Preloader";
import { subscribeScroll } from "../../utils/helpers";
import ButtonToTop from "../general/ButtonToTop/ButtonToTop";

export default function Profile({ profile, status, setCurrentStatusThunk, savePhotoThunk, isMyPages, myProfile, updateInfoProfileThunk, authenticationId }) {
  const [isBtn, setIsBtn] = useState(false);
  const refList = useRef(null);
  useEffect(()=>{
    window.addEventListener('scroll', ()=> subscribeScroll(refList, setIsBtn));
    return ()=>{
        window.removeEventListener('scroll',  ()=> subscribeScroll(refList, setIsBtn));
    }
})
  if (!profile) return <Preloader />
  return (
    <div className={st.content} ref={refList}>
      <UserProfile 
      profile={profile} 
      status={status} 
      setCurrentStatusThunk={setCurrentStatusThunk} 
      updateInfoProfileThunk={updateInfoProfileThunk}
      savePhotoThunk={savePhotoThunk} 
      isMyPages={isMyPages} 
      authenticationId={authenticationId}
      myProfile={myProfile}/>
      <MyPostContainer />
      <ButtonToTop isBtn={isBtn}/>
    </div>
  )
}
