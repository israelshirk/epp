import React from "react";
import ReactDom from "react-dom";
import { Window, Content, PaneGroup ,Pane } from "react-photonkit";

import Header from "./header.jsx"
import Footer from "./footer.jsx";
import SidebarContainer from "./containers/SidebarContainer.jsx"
import App from "./components/App.jsx"

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combinedReducer from './reducers'
import VisibleTodoList from './containers/VisibleTodoList'

require('../index.scss');

let store = createStore(combinedReducer)

ReactDom.render(
	<Provider store={store}>
	  <Window>
	    <Header />
	    <Content>
	      <PaneGroup>
	        <SidebarContainer />
	        <Pane className="padded-more">
            Hello, react-photonkit!!!
            <VisibleTodoList />
	        </Pane>
	      </PaneGroup>
	    </Content>
	    <Footer />
	  </Window>
	</Provider>
  , document.querySelector("#main"));
