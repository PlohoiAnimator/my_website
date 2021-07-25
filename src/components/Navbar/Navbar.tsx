import './navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navLeft'>
                <i className="navIcon fab fa-facebook"></i>
                <i className="navIcon fab fa-instagram"></i>
                <i className="navIcon fab fa-vk"></i>
                <i className="navIcon fab fa-twitter"></i>
    
            </div>

            <div className="navCenter">
                <ul className="navLinks">
                    <li className="navLink">Домой</li>
                    <li className="navLink">О нас</li>
                    <li className="navLink">Контакты</li>
                    <li className="navLink">Написать</li>
                    <li className="navLink">Выйти</li>
                </ul>
            </div>

            <div className="navRight">
                <img
                    className='navImg'
                    src="https://64.media.tumblr.com/6e07a77955759da4509acf2fb1414c08/a8dd71779b6be4f8-5c/s250x400/f43441b31fb56d46385a120e0f66c9ff9a5dad1e.png"
                    alt=""
                />
                <i className="navSeartch fas fa-search"></i>
            </div>
        </div>
    )
}
