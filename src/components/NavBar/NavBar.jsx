import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
	<nav>
		<div>
			<span>
				
			</span>
		</div>
		<NavLink to='/'>Home</NavLink>
		<NavLink to='smoothie'>Smoothie</NavLink>
		<NavLink to='nutrition'>Nutrition</NavLink>
		<NavLink to='contact'>Contact</NavLink>
	</nav>
  )
}

export default NavBar