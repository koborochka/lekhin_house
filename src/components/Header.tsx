import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';

const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname.startsWith(path) ? 'header-cont__nav-link--active' : '';
    };

    return (
        <header className="main-header">
            <div className="header-cont wrap">
                <Link className="header-cont__logo-cont" to="/">
                    <img
                        className="header-cont__logo-img"
                        src={logo}
                        alt="logo" />
                    <div>
                        <p className="header-cont__logo-name">Милый друг</p>
                        <p className="header-cont__logo-description">приют для животных</p>
                    </div>
                </Link>

                <nav className="header-cont__nav-cont">
                    <ul className="header-cont__nav">
                        <li>
                            <Link to="/shelter" className={`header-cont__nav-link ${isActive('/shelter')}`}>
                                Наш приют
                            </Link>
                        </li>
                        <li>
                            <Link to="/adopt" className={`header-cont__nav-link ${isActive('/adopt')}`}>
                                Взять питомца
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" className={`header-cont__nav-link ${isActive('/news')}`}>
                                Новости
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts" className={`header-cont__nav-link ${isActive('/contacts')}`}>
                                Контакты
                            </Link>
                        </li>
                        <li>
                            <Link to="/help" className={`header-cont__nav-link header-cont__nav-link--blue btn--blue btn ${isActive('/help')}`}>
                                Помочь приюту
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;

