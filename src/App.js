import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homePage/homePage";
import PostNote from "./postNotes/postNote";
import PostFolder from "./postFolder/postFolder";

export default class Home extends React.Component {
  render() {
    return (
      <div className="landingLayout">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/note" component={PostNote} />
          <Route exact path="/folder" component={PostFolder} />
        </Switch>
      </div>
    );
  }
}
