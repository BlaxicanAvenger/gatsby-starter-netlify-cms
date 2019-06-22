import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const LocationTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const LocationContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <LocationContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

LocationTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Location = ({ data }) => {
  const { markdownRemark: location } = data

  return (
    <Layout>
      <LocationTemplate
        content={location.html}
        contentComponent={HTMLContent}
        description={location.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Locations">
            <title>{`${location.frontmatter.title}`}</title>
            <meta
              title="description"
              content={`${location.frontmatter.description}`}
            />
          </Helmet>
        }
        title={location.frontmatter.title}
      />
    </Layout>
  )
}

Location.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Location

export const pageQuery = graphql`
  query LocationByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
