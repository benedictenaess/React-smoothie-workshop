import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import Logo from '../../assets/icons/logo.svg';

function NavBar() {
	const navLinkActiveHandler = ({isActive}) =>{
		return {
			color: isActive ?  "#7FFFD4" : "",
		}
	}

  return (
	<nav className={styles.navbar_container}>
		<div className={styles.logo_container}>
			<span>
				<img src={Logo} alt="Website logo" className={styles.logo} />
			</span>
		</div>
		<div className={styles.links_container}>
			<NavLink style={navLinkActiveHandler} to='/'>Home</NavLink>
			<NavLink style={navLinkActiveHandler} to='smoothie'>Smoothie</NavLink>
			<NavLink style={navLinkActiveHandler} to='nutrition'>Nutrition</NavLink>
			<NavLink style={navLinkActiveHandler} to='contact'>Contact</NavLink>
		</div>
	</nav>
  )
}

export default NavBar