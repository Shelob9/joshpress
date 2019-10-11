import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Featured from '../components/Featured';
export const BlogPostTemplate = ({post,previewMode}) => {
  const {
      content,
      id,
      slug,
      title,
      date,
      author,
      excerpt
  } = post;
  return (
    <section className="section">
      <article className={`container content post-${id} post type-post status-publish format-standard hentry category-uncategorized entry`}>
        <div className="columns">
          <div className="column is-8">
          <header className="entry-header">
            <Featured post={post} />
            {previewMode &&
            (
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                <a href={`/${slug}`}>{title}!!!!</a>
              </h2>

            )}
            {!previewMode &&
              (
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
              )}         
            
            <div style={{ marginTop: `4rem`, marginBottom: `2rem` }}>
              <p>
                {author.name} - {date}
              </p>
            </div>
            </header>
            <div className={`entry-content`}
                dangerouslySetInnerHTML={{
                  __html: previewMode ? excerpt : content,
                }}
              />
              {previewMode && <Link className="button is-large" to={post.slug}>
                 Read More →
                </Link>
              }
            </div>

       </div>
      </article>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  post: PropTypes.object.isRequired,
  previewMode: PropTypes.bool
}

BlogPostTemplate.defeautProps = {
  previewMode: false

}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        post={post}
      />
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
  }
`
