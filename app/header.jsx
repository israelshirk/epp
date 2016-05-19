import React from "react";
import { Toolbar, Actionbar, Button, ButtonGroup } from "react-photonkit";
import AddTodo from "./containers/AddTodo"

class Header extends React.Component {
  render() {
    return (
      <Toolbar title="epp">
        <Actionbar>
          <ButtonGroup>
            <Button glyph="home" />
            <Button glyph="github" />
          </ButtonGroup>
        </Actionbar>
        <Actionbar>
          <AddTodo />
        </Actionbar>
      </Toolbar>
    );
  }
}

export default Header;
