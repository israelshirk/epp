import React from "react";
import { Pane, NavGroup, NavTitle, NavGroupItem } from "react-photonkit";

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Sidebar from '../components/Sidebar'

const mapStateToProps = (state, ownProps) => {
  return {
    activeKey: state.activeSidebarKey || 'SHOW_ALL'
    // active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: () => {
      console.log("Hit the onSelect", this);
      // dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer;
