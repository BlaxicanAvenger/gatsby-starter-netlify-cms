import React from 'react'
import PropTypes from 'prop-types'
import { ProviderTemplate } from '../../templates/provider'

const ProviderPreview = ({ entry, widgetFor }) => (
  <ProviderTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    name={entry.getIn(['data', 'name'])}
  />
)

ProviderPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProviderPreview
