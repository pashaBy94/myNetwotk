import { useLocation, useNavigate, useParams } from "react-router-dom";

export const followUnfollowHelper = (users, id, desc) => {
  let el = users.find(us => us.id === id);
  el.followed = desc;
}
export const listComponentWriteDialog = (list, Elem) => list.map(us => <Elem id={us.id} title={us.name} key={initId()} />);

export const listComponentWriteMessag = (list, Elem) => list.map(el => <Elem messag={el.messag} itIs={el.itIs} time={el.time} key={initId()} />);

export const listComponentWriteFriends = (list, Elem) => list.map(el => <Elem key={initId()} name={el.name} id={el.id} imag={el.img} />);

export const listComponentWritePosts = (list, Elem) => {
  const result = [...list.postsData];
  return result.reverse().map(el => <Elem post={el.post} id={el.id} likescount={el.likescount} postsDelete={list.postsDelete} key={initId()} />);
}

export const listComponentWriteUsers = (list, Elem) => list.users.map(el => <Elem key={initId()} user={el} thunkAddFollow={list.thunkAddFollow} thunkUnFollow={list.thunkUnFollow} addUser={list.addUser} isDisabledFollowButton={list.isDisabledFollowButton} />);

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
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

export function initId() {
  return ~~(Date.now() / 1000) * (Math.random())
}

export const getNumberCountPages = (countPage, numberCurrentPage, callBack, clName) => {
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

export function parseStatus(status) {
  if (!status) return
  const errors = status.errors;
  const regExp = /(?<=Contacts->)[\w]+/ig;
  let res = errors.match(regExp)[0].toLowerCase();
  return res
}

export function subscribeScroll(refList, setIsBtn){
    if(refList.current){
        let coord = refList.current.getBoundingClientRect();
        if(coord.top < 0){
            setIsBtn(true);
        } else{
            setIsBtn(false);
        }
    }
};
