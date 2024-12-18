import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const closeMenu = () => setIsMenuOpen(false);

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

				<input
					className="hidden"
					type="checkbox"
					name="menu"
					id="menu"
					checked={isMenuOpen}
					onChange={() => setIsMenuOpen(!isMenuOpen)}
				/>
				<label htmlFor="menu">
					<FaBars className='header-cont__fa-bars' />
				</label>
				<nav className="header-cont__nav-cont">
					<ul className="header-cont__nav">
						<li>
							<Link to="/shelter" onClick={closeMenu} className={`header-cont__nav-link ${isActive('/shelter')}`}>
								Наш приют
							</Link>
						</li>
						<li>
							<Link to="/adopt" onClick={closeMenu} className={`header-cont__nav-link ${isActive('/adopt')}`}>
								Подопечные
							</Link>
						</li>
						<li>
							<Link to="/how-to-adopt" onClick={closeMenu} className={`header-cont__nav-link ${isActive('/how-to-adopt')}`}>
								Как взять питомца
							</Link>
						</li>
						<li>
							<Link to="/news" onClick={closeMenu} className={`header-cont__nav-link ${isActive('/news')}`}>
								Новости
							</Link>
						</li>
						<li>
							<Link to="/contacts" onClick={closeMenu} className={`header-cont__nav-link ${isActive('/contacts')}`}>
								Контакты
							</Link>
						</li>
						<li>
							<Link to="/help" onClick={closeMenu} className={`header-cont__nav-link header-cont__nav-link--blue btn--blue btn ${isActive('/help')}`}>
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

