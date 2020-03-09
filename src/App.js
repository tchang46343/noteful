import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./homePage/homePage";
import PostNote from "./postNotes/postNote";
import PostFolder from "./postFolder/postFolder";
import showFolders from "./showFolder/showFolders";
import showNotes from "./showNotes/showNotes";
//import ErrorBoundary from "./ErrorBoundary";

export default class App extends React.Component {
  render() {
    return (
      <div className="landingLayout">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/note" component={PostNote} />
            <Route exact path="/folder" component={PostFolder} />
            <Route exact path="/showFolder" component={showFolders} />
            <Route exact path="/showNotes" component={showNotes} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
