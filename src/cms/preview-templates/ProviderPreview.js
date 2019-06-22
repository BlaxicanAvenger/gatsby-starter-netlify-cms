import React from 'react'
import PropTypes from 'prop-types'
import { ProviderTemplate } from '../../templates/provider'

const ProviderPreview = ({ entry, widgetFor }) => (
  <ProviderTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ProviderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProviderPreview
