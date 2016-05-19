import React from "react";
import { Pane, NavGroup, NavTitle } from "react-photonkit";

import NavGroupItemLink from "../containers/NavGroupItemLink"

class Sidebar extends React.Component {
  onSelect(index) {
    console.log(`sidebar clicked with ${index}`)
  }

  render() {
    console.log("active", this.props.activeKey);
    return (
      <Pane ptSize="sm" sidebar>
        <NavGroup>
          <NavTitle>nav group icon &amp; text</NavTitle>
          <NavGroupItemLink glyph="home" text="Show All" filter="SHOW_ALL" />
          <NavGroupItemLink glyph="home" text="Show Active" filter="SHOW_ACTIVE" />
          <NavGroupItemLink glyph="home" text="Show Completed" filter="SHOW_COMPLETED" />
        </NavGroup>
      </Pane>
    );
  }
}

export default Sidebar;
