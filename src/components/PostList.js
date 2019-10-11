import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Featured from './Featured';
export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          {posts.map(({ node: post }) => (
            <div
              className="content"
              style={{ border: '1px solid #d3d3d3', padding: '2em 4em' }}
              key={post.id}
            >
              <Featured post={post} />
              <p>
                <Link className="has-text-primary" to={post.slug}>
                  {post.title}
                </Link>
                <span> &bull; </span>
              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                  }}
                />
                <Link className="button is-large" to={post.slug}>
                  Keep Reading →
                </Link>
              </div>
            </div>
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
