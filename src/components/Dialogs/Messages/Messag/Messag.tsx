// import React, { FC } from "react";
// import st from "./Messag.module.css";

// export type MessagTyp = {
//     messag: string,
//     itIs: boolean
//     time: string
// };

// const Messag:FC<MessagTyp> = ({ messag, itIs, time }) => {
//     return (
//         <div className={st.messag__item}>
//             {itIs
//                 ? <div className={st.messag__item__im}>
//                     <div className={st.time__im}>{time}</div>
//                     <div className={st.message__im}>{messag}</div>
//                 </div> : null}
//             {!itIs ? <div className={st.messag__item__you}>
//                 <div className={st.message__you}>{messag}</div>
//                 <div className={st.time__you}>{time}</div>
//             </div> : null}
//         </div>
//     )
// }
// export default Messag;