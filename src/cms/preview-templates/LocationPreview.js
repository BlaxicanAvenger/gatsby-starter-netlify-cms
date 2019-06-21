import React from 'react'
import PropTypes from 'prop-types'
import { LocationTemplate } from '../../templates/location'

const LocationPreview = ({ entry, widgetFor }) => (
  <LocationTemplate
    content={widgetFor('bio')}
    description={entry.getIn(['data', 'description'])}
    name={entry.getIn(['data', 'name'])}
  />
)

LocationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LocationPreview
