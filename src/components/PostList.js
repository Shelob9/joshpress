import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Featured from './Featured'
import { BlogPostTemplate } from '../templates/post'
export default class IndexPage extends React.Component {
	render() {
		const { posts, title } = this.props
		return (
			<section className="section">
				<div className="container">
					<div className="content">
						<h1 className="has-text-weight-bold is-size-3">
							{title}
						</h1>
					</div>
					{posts.map(({ node: post }) => (
						<BlogPostTemplate
							post={post}
							key={post.id}
							previewMode={true}
						/>
					))}
				</div>
			</section>
		)
	}
}

IndexPage.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
}

export const pageQuery = graphql`
	fragment PostListFields on wordpress__POST {
		id
		title
		excerpt
		author {
			name
			slug
			avatar_urls {
				wordpress_48
			}
		}
		date(formatString: "MMMM DD, YYYY")
		slug
		featured_media {
			title
			caption
			alt_text
			source_url
			localFile {
				childImageSharp {
					fluid(maxWidth: 1200, maxHeight: 300) {
						src
						sizes
						srcSet
						srcWebp
						srcSetWebp
						tracedSVG
						aspectRatio
						presentationWidth
						presentationHeight
						base64
					}
				}
			}
		}
	}
`
