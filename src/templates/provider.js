import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ProviderTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const ProviderContent = contentComponent || Content

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
            <ProviderContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

ProviderTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Provider = ({ data }) => {
  const { markdownRemark: provider } = data

  return (
    <Layout>
      <ProviderTemplate
        content={provider.html}
        contentComponent={HTMLContent}
        description={provider.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Providers">
            <title>{`${provider.frontmatter.title}`}</title>
            <meta
              title="description"
              content={`${provider.frontmatter.description}`}
            />
          </Helmet>
        }
        title={provider.frontmatter.title}
      />
    </Layout>
  )
}

Provider.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Provider

export const pageQuery = graphql`
  query ProviderByID($id: String!) {
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
