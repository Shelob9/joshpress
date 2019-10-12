import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Category = props => {
	const { data, pageContext } = props
	const { edges: posts } = data.allWordpressPost
	const { title: siteTitle } = data.site.siteMetadata
	const { name: category } = pageContext
	return (
		<Layout>
			<Helmet title={`${category} | ${siteTitle}`} />
			<PostList posts={posts} title={category} />
		</Layout>
	)
}

export default Category

export const pageQuery = graphql`
	query CategoryPage($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		allWordpressPost(
			filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
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
