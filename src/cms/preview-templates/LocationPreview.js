import React from 'react'
import PropTypes from 'prop-types'
import { LocationTemplate } from '../../templates/location'

const LocationPreview = ({ entry, widgetFor }) => (
  <LocationTemplate
    content={widgetFor('bio')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
    fullImage={entry.getIn(['data', 'full_image'])}

  />
)

LocationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LocationPreview
