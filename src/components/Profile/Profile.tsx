import React, { FC, useEffect, useRef, useState } from "react";
import st from './Profile.module.css';
import UserProfile from "./UserProfile/UserProfile";
import MyPostContainer from "./MyPost/MyPostContainer";
import Preloader from "../general/Preloader/Preloader";
import { subscribeScroll } from "../../utils/helpers";
import ButtonToTop from "../general/ButtonToTop/ButtonToTop";
import { profileType } from "../../typeAndInterface/typeAndInterface";
import { FloatButton } from 'antd';

export type PropProfyleType = {
  profile: profileType | null,
  status: string,
  savePhotoThunk: any,
  setCurrentStatusThunk: any,
  isMyPages: boolean,
  authenticationId: number | null,
  updateInfoProfileThunk: any
  myProfile: profileType | null,
};


const Profile:FC<PropProfyleType> = ({ profile, status, setCurrentStatusThunk, savePhotoThunk, isMyPages, myProfile, updateInfoProfileThunk, authenticationId })=> {

  const [isBtn, setIsBtn] = useState(false);
  const refList = useRef(null);
  useEffect(()=>{
    window.addEventListener('scroll', function(){subscribeScroll(refList, setIsBtn)});
    return ()=>{
      // console.log('eee');
        window.removeEventListener('scroll',  function(){subscribeScroll(refList, setIsBtn)});
    }
});

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
export default Profile;