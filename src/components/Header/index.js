import React from 'react';
import './header.css';

function Header() {
	return (
		<header className="header">
			<div className="wrapper">
				<div className="logo">
					<img src="img/logo.png" alt="logo" className="logo_img"/>
					<p className="logo__text">IEO Launchpad</p>
				</div>
				<div className="login">
					<p className="login__name">Bruce Wayne</p>
					<a href="#" className="login__logout">
						<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.21875 9C4.35938 9 4.5 8.88281 4.5 8.71875V7.78125C4.5 7.64062 4.35938 7.5 4.21875 7.5H2.25C1.82812 7.5 1.5 7.17188 1.5 6.75V2.25C1.5 1.85156 1.82812 1.5 2.25 1.5H4.21875C4.35938 1.5 4.5 1.38281 4.5 1.21875V0.28125C4.5 0.140625 4.35938 0 4.21875 0H2.25C1.00781 0 0 1.00781 0 2.25V6.75C0 7.99219 1.00781 9 2.25 9H4.21875ZM6.96094 1.89844L8.78906 3.5625H4.3125C3.98438 3.5625 3.75 3.82031 3.75 4.125V4.875C3.75 5.20312 3.98438 5.4375 4.3125 5.4375H8.78906L6.96094 7.125C6.72656 7.33594 6.72656 7.71094 6.96094 7.92188L7.47656 8.4375C7.6875 8.64844 8.03906 8.67188 8.25 8.4375L11.8125 4.89844C12.0469 4.6875 12.0469 4.33594 11.8125 4.10156L8.27344 0.585938C8.03906 0.351562 7.6875 0.351562 7.47656 0.585938L6.96094 1.10156C6.72656 1.3125 6.72656 1.6875 6.96094 1.89844Z" fill="white"/>
						</svg>
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header;