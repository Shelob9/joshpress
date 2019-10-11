import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Blog from './Blog';
import Paper from '@material-ui/core/Paper'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props
    return (
      <Paper className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          <Blog posts={posts} />
        </div>
      </Paper>
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
          fixed(width: 900, height: 400) {
            src
            srcSet
            srcSetWebp
            height
            width
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  }
`
