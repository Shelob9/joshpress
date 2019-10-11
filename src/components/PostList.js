import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image';
function Featured({post}){

  if( ! post.hasOwnProperty('featured_media') || null === post.featured_media) {
    return <React.Fragment />
  }
  const {
    fixed
  } = post.featured_media.localFile.childImageSharp;
  return (
    <Img
      src={post.featured_media.source_url} 
      alt={post.featured_media.alt_text} 
      title={post.featured_media.title}
      fixed={fixed}
      objectFit="cover"
      objectPosition="100% 50%"

  />

    
  )
}
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
              style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
              key={post.id}
            >
              <Featured post={post} />
              <p>
                <Link className="has-text-primary" to={post.slug}>
                  {post.title}
                </Link>
                <span> &bull; </span>
                <small>
                  {post.date} - posted by{' '}
                  <Link to={`/author/${post.author.slug}`}>
                    {post.author.name}
                  </Link>
                </small>
              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                  }}
                />
                <Link className="button is-small" to={post.slug}>
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
