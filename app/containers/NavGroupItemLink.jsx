import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import FilterNavItem from '../components/FilterNavItem';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    active: ownProps.filter === state.visibilityFilter
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log("hey in click", setVisibilityFilter(ownProps.filter));
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const NavGroupItemLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterNavItem)

export default NavGroupItemLink
