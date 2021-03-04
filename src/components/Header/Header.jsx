import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
            <img src='https://www.vectorlogo.zone/logos/telegram/telegram-tile.svg' />
        </NavLink>
        <span className={s.title}>FakeTelegram</span>
        <div className={s.loginBlock}> <NavLink to="/login"> {props.isAuth 
        ? <div>{props.login} <button onClick={props.logout}>Log Out</button></div>  
        : 'Log In'}</NavLink></div>
    </header>
}

export default Header;