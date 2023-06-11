import React from "react";
import st from './NavBar.module.css'
import { NavLink } from "react-router-dom";
export default class NavBar extends React.Component{
    render(){
        return(
            <nav className={st.nav}>
                <ul>
                    <li><NavLink to='/profile' className={nD =>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="home.png" className={st.nav__imag__item} alt=""/></div>Профиль</NavLink></li>
                    <li><NavLink to='/dialogs' className={nD=>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="message.png" className={st.nav__imag__item} alt=""/></div>Сообщения</NavLink></li>
                    <li><NavLink to='/users' className={nD=>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="friends.png" className={st.nav__imag__item} alt=""/></div>Друзья</NavLink></li>
                    <li><NavLink to='/news' className={nD=>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="news.png" className={st.nav__imag__item} alt=""/></div>Новости</NavLink></li>
                    <li><NavLink to='/musics' className={nD=>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="music.png" className={st.nav__imag__item} alt=""/></div>Музыка</NavLink></li>
                    <li><NavLink to='/photos' className={nD=>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="photo.png" className={st.nav__imag__item} alt=""/></div>Фотографии</NavLink></li>
                    <li><NavLink to='/videos' className={nD=>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="video-player.png" alt="" className={st.nav__imag__item}/></div>Видео</NavLink></li>
                    <li><NavLink to='/games' className={nD=>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="game.png" className={st.nav__imag__item} alt=""/></div>Игры</NavLink></li>
                    <li><hr /></li>
                    <li><NavLink to='/webmoney' className={nD=>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="wallet.png" className={st.nav__imag__item} alt=""/></div>Webmoney</NavLink></li>
                    <li><hr /></li>
                    <li><NavLink to="/settings" className={nD=>nD.isActive?st.active: ''}><div className={st.nav__imag}><img src="setting.png" className={st.nav__imag__item} alt=""/></div>Настройки</NavLink></li>
                </ul>
            </nav>
        )
    }
}

