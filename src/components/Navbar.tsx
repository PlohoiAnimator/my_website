import React from "react"
import { FC } from "react"
import '../style/navbar.css'

const Navbar: FC = () => {
    return(
        <header>
            <nav className='navbar'>

            <a href="#" className='logo'>Musorka</a>

                <ul className='nav__links'>
                    <li className='nav_item'>
                        <a className='nav_link'>Домой</a>
                    </li>
                    <li className='nav_item'>
                        <a className='nav_link'>Новости</a>
                    </li>
                    <li className='nav_item'>
                        <a className='nav_link'>Личный кабинет</a>
                    </li>
                    <li className='nav_item'>
                        <a className='nav_link'>О нас</a>
                    </li>
                </ul>

                <div className='btn-container'>
                    <button className='btn btn-login'>Авторизация</button>
                    <button className='btn btn-register'>Регистрация</button>
                </div>

            </nav>

        </header>
    )
}

export default Navbar