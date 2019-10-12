import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Featured from '../components/Featured'
export const BlogPostTemplate = ({ post, previewMode }) => {
	const { content, id, slug, title, date, author, excerpt } = post
	return (
		<section className="section">
			<article
				className={`container content post-${id} status-publish format-standard hentry entry`}
			>
				<div className="columns">
					<div className="column">
						<header className="entry-header">
							{previewMode && (
								<Fragment>
									<Featured post={post} />
									<h2 className="title is-size-4 has-text-weight-bold is-bold-light">
										<a
											href={`/${slug}`}
											style={{ color: '#000' }}
										>
											{title}!!!!
										</a>
									</h2>
								</Fragment>
							)}
							{!previewMode && (
								<Fragment>
									<h1 className="title is-size-3 has-text-weight-bold is-bold-light">
										{title}
									</h1>
									<div
										style={{
											marginTop: `4rem`,
											marginBottom: `2rem`,
										}}
									>
										<p>
											{author.name} - {date}
										</p>
									</div>
									<div
										style={{
											marginTop: `4rem`,
											marginBottom: `2rem`,
										}}
									>
										<Featured post={post} />
									</div>
								</Fragment>
							)}
						</header>
						<div
							className={`entry-content`}
							style={{ marginBottom: '2rem' }}
							dangerouslySetInnerHTML={{
								__html: previewMode ? excerpt : content,
							}}
						/>
						{previewMode && (
							<Link className="button is-large" to={post.slug}>
								Read More →
							</Link>
						)}
					</div>
				</div>
			</article>
		</section>
	)
}

BlogPostTemplate.propTypes = {
	post: PropTypes.object.isRequired,
	previewMode: PropTypes.bool,
}

BlogPostTemplate.defeautProps = {
	previewMode: false,
}

const BlogPost = ({ data }) => {
	const { wordpressPost: post } = data

	return (
		<Layout>
			<Helmet title={`${post.title} | Josh Pollock`} />
			<BlogPostTemplate post={post} />
		</Layout>
	)
}

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
}

export default BlogPost

export const pageQuery = graphql`
	fragment PostFields on wordpress__POST {
		id
		slug
		content
		date(formatString: "MMMM DD, YYYY")
		title
	}
	query BlogPostByID($id: String!) {
		wordpressPost(id: { eq: $id }) {
			id
			title
			slug
			content
			excerpt
			date(formatString: "MMMM DD, YYYY")
			author {
				name
				slug
			}
			featured_media {
				title
				caption
				alt_text
				source_url
				localFile {
					childImageSharp {
						fluid(maxWidth: 1200, maxHeight: 400) {
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
	}
`
