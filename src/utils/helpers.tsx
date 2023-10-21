import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DialogsType, MessagType, FriendPropType, PropMyPostType } from "../typeAndInterface/typeAndInterface";
export const followUnfollowHelper = (users:any[] , id:number, desc:boolean):void => {
  let el = users.find(us => us.id === id);
  if(el)
  el.followed = desc;
}
export const listComponentWriteDialog = (list:Array<DialogsType>, Elem:any) => list.map(us => <Elem id={us.id} title={us.name} key={initId()} />);

export const listComponentWriteMessag = (list:Array<MessagType>, Elem:any) => list.map(el => <Elem messag={el.messag} itIs={el.itIs} time={el.time} key={initId()} />);

export const listComponentWriteFriends = (list:Array<FriendPropType>, Elem:any) => list.map(el => <Elem key={initId()} name={el.name} id={el.id} imag={el.img} />);

export const listComponentWritePosts = (list:PropMyPostType, Elem:any) => {
  const result = [...list.postsData];
  return result.reverse().map(el => <Elem post={el.post} id={el.id} likescount={el.likescount} postsDelete={list.postsDelete} key={initId()} />);
}

export const listComponentWriteUsers = (users:any, Elem:any) => users.map(el => <Elem key={initId()} user={el} />);

export function withRouter(Component:any) {
  function ComponentWithRouterProp(props:any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}

export function initId():number {
  return ~~(Date.now() / 1000) * (Math.random())
}

export const getNumberCountPages = (countPage:number, numberCurrentPage:number, callBack:any, clName:any) => {
  const arrUsers = [];
  for (let i = 1; i <= countPage; i++) {
    arrUsers.push((<span
      className={numberCurrentPage === i ? clName.steps__current : clName.steps__nocurrent}
      key={initId()}
      onClick={() => callBack(i)}
    >{i}</span>))
  }
  return arrUsers;
}

export function parseStatus(status:any) {
  if (!status) return
  const errors = status.errors;
  const regExp = /(?<=Contacts->)[\w]+/ig;
  let res = errors.match(regExp)[0].toLowerCase();
  return res
}

let frame:boolean;
function readAndUpdate(){
  frame = false;
}
export const subscribeScroll = function(refList:any, setIsBtn:any){
  if(frame) return
    if(refList.current){
        let coord = refList.current.getBoundingClientRect();
        console.log(coord.top);
        
        if(coord.top < 0){
            setIsBtn(true);
        } else{
            setIsBtn(false);
        }
    }
    frame = true;
    requestAnimationFrame(readAndUpdate);
};
export const filterNull = (ob:any)=> ob === null?null:ob