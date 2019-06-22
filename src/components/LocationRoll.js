import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class LocationRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: locations } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {locations &&
          locations.map(({ node: location }) => (
            <div className="is-parent column is-6" key={location.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  location.frontmatter.featuredlocation ? 'is-featured' : ''
                }`}
              >
                <header>
                  {location.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: location.frontmatter.featuredimage,
                          alt: `featured image thumbnail for location ${
                            location.title
                          }`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="location-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={location.fields.slug}
                    >
                      {location.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {location.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {location.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={location.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

LocationRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query LocationRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-location" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredlocation
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <LocationRoll data={data} count={count} />}
  />
)
