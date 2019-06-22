import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, description, content, fullImage, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className="bg-dark">
      <img src={fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage} alt={title} className="bg-image opacity-50" />
        <div className="container height-lg-30">
          <div className="row">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb p-0 bg-dark bg-transparent">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-white">Overview</Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                   {title}
                  </li>
                </ol>
              </nav>
              <h1 className="display-4 text-white">
                {title}
              </h1>
              <p className="lead mb-0 text-white">
              {description} 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">

                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        fullImage={post.frontmatter.full_image}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
