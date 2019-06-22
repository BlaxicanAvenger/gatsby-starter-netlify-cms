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
    <section className="header-3 p-0">
        {helmet || ''}
      <img className="bg-image" />
      <div className="container">
        <div className="row no-gutters justify-content-center justify-content-md-start">
          <div className="col-10 col-md-8 col-lg-7 col-xl-6 bg-white spacer-y-4 height-60 height-md-70">
            <div className="px-4">
              <h1 className="display-4 d-block">
              {title}
              </h1>
              <p className="lead">
              {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
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
