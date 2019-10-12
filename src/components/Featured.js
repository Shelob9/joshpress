import Img from 'gatsby-image'
import React from 'react'
export default function Featured({ post }) {
	if (
		!post.hasOwnProperty('featured_media') ||
		null === post.featured_media
	) {
		return <React.Fragment />
	}
	const { fixed } = post.featured_media.localFile.childImageSharp
	return (
		<Img
			className={'-full-width-image-container'}
			src={post.featured_media.source_url}
			alt={post.featured_media.alt_text}
			title={post.featured_media.title}
			fixed={fixed}
			objectFit="cover"
			objectPosition="100% 50%"
		/>
	)
}
