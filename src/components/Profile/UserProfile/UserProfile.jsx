import React from "react";
import st from './UserProfile.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import AboutMy from "./AboutMy/AboutMy";
import Preloader from "../../general/Preloader/Preloader";

export default function UserProfile({ profile, status, setCurrentStatusThunk, savePhotoThunk, isMyPages, myProfile, updateInfoProfileThunk, authenticationId }) {
  function getPhoto(e){
    savePhotoThunk(e.target.files[0]);
  }
  if(!myProfile) return <Preloader />
  return (
    <section className={st.about}>
      <div className={st.about__photo}>
      <img 
      src={(isMyPages?myProfile.photos.large:profile.photos.large) || "noava.png"} 
      alt="" 
      className={st.user__imag}/>
      {isMyPages 
      && (<form action=""><label className={st.user__photo__btn}>Download your photo<input type="file" id="download__photo" className={st.photo__download} onChange={getPhoto}/>
            </label>
          </form>
      )}
      </div>
      <div className={st.about__text}>
        <h2 className={st.about__fullname}>{profile.fullName}</h2>
        <ProfileStatus status={status} setCurrentStatusThunk={setCurrentStatusThunk} isMyPages={isMyPages}/>
        <hr className={st.about__hr}/>
        <AboutMy profile={{ ...profile }} isMyPages={isMyPages} updateInfoProfileThunk={updateInfoProfileThunk} authenticationId={authenticationId} />
      </div>
    </section>
  )
}