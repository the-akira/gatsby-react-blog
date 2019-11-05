import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	return (
		<header className={headerStyles.header}>
			<h1 className={headerStyles.cabecalho}>
				<Link to="/" className={headerStyles.title}>
					{data.site.siteMetadata.title}
				</Link>
			</h1>
			<Link to="/">
				<img src="https://i.imgur.com/sN0XDIf.png" alt="img" />
			</Link>
			<nav>
				<ul className={headerStyles.navList}>
					<li>
						<Link 
						className={headerStyles.navItem} 
						activeClassName={headerStyles.activeNavItem} 
						to="/"
						>
						Home
						</Link>
					</li>
					<li>
						<Link 
						className={headerStyles.navItem} 
						activeClassName={headerStyles.activeNavItem} 
						to="/blog"
						>
						Blog
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header