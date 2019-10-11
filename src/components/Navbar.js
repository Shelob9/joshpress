import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
            <h1 className="has-text-weight-bold is-size-2">Josh Pollock</h1>
            </Link>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/github.com/shelob9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
