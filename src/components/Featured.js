import Img from 'gatsby-image'
import React from 'react'
export default function Featured({ post }) {
	if (
		!post.hasOwnProperty('featured_media') ||
		null === post.featured_media
	) {
		return <React.Fragment />
	}
	const { fluid } = post.featured_media.localFile.childImageSharp
	return (
		<Img
			src={post.featured_media.source_url}
			alt={post.featured_media.alt_text}
			title={post.featured_media.title}
			fluid={fluid}
			loading={'lazy'}
		/>
	)
}
