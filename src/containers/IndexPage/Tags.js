import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styled from 'styled-components'

const Tag = styled.span`
  color: #4dabf7
`
function Tags({ tags }) {
  return (
    <>
      {tags.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(String).isRequired,
}

export default memo(Tags)
