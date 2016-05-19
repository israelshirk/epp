import React from 'react'
import { NavGroupItem } from "react-photonkit";

const FilterNavItem = ({ active, onClick, glyph, text, filter }) => {
  return (
    <NavGroupItem active={ active } glyph={ glyph } text={ text } filter={ filter } onClick={
      e => {
        e.preventDefault()
        onClick()
      }} />
  )
}

FilterNavItem.propTypes = {
  active: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
  glyph: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  filter: React.PropTypes.string.isRequired
}

export default FilterNavItem
