import PropTypes from 'prop-types'
import React, { memo } from 'react'

function Tags({ tags }) {
  return (
    <>
      {tags.map((t) => (
        <span key={t}>{`#${t}`}</span>
      ))}
    </>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(String).isRequired,
}

export default memo(Tags)
