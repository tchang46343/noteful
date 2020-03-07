import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./homePage/homePage";
import PostNote from "./postNotes/postNote";
import PostFolder from "./postFolder/postFolder";
import ErrorBoundary from "./ErrorBoundary";

export default class App extends React.Component {
  render() {
    return (
      <div className="landingLayout">
        <BrowserRouter>
          <Switch>
            <ErrorBoundary>
              <Route exact path="/" component={HomePage} />
            </ErrorBoundary>

            <Route exact path="/note" component={PostNote} />
            <Route exact path="/folder" component={PostFolder} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
