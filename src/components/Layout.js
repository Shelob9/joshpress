import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar'
import Helmet from 'react-helmet'
import './all.sass'
import './josh.css'

export default function Layout({ children, title }) {
	const { site } = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					description
				}
			}
		}
	`)
	const { description } = site.siteMetadata
	return (
		<Fragment>
			<Helmet
				title={title}
				meta={[{ name: 'description', content: description }]}
			>
				<html lang="en" />
			</Helmet>
			<div>
				<Navbar />
				<main role="main">{children}</main>
			</div>
		</Fragment>
	)
}
