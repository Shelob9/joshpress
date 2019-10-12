import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/icon.png'
const Navbar = () => (
	<header className="navbar is-transparent" role="banner">
		<div className="container">
			<div className="navbar-brand">
				<Link to="/" className="navbar-item">
					<img
						src={logo}
						alt={
							'Two dimensional depiction of an impossible shape -- the Penrose Triangle'
						}
						style={{ marginRight: '.5em' }}
					/>
					<h1 className="has-text-weight-bold is-size-2">
						Josh Pollock
					</h1>
				</Link>
			</div>
			<div className="navbar-end">
				<a
					className="navbar-item"
					href="https://github.com/github.com/shelob9"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="icon">
						<img src={github} alt="Github" />
					</span>
				</a>
			</div>
		</div>
	</header>
)

export default Navbar
