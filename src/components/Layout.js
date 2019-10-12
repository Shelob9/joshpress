import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Helmet from 'react-helmet'

import './all.sass'
const TemplateWrapper = ({ children, title }) => (
	<Fragment>
		<Helmet
			title={title}
			meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
		>
			<html lang="en" />
		</Helmet>
		<div>
			<Navbar />
			<main role="main">{children}</main>
		</div>
	</Fragment>
)

export default TemplateWrapper
