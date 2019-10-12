import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Tag = props => {
	const { data, pageContext } = props
	const { edges: posts } = data.allWordpressPost
	const { title: siteTitle } = data.site.siteMetadata
	const { name: tag } = pageContext
	return (
		<Layout title={`${tag} | ${siteTitle}`}>
			<PostList posts={posts} title={tag} />
		</Layout>
	)
}

export default Tag

export const pageQuery = graphql`
	query TagPage($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		allWordpressPost(
			filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
		) {
			totalCount
			edges {
				node {
					...PostListFields
				}
			}
		}
	}
`
