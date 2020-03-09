import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Welcome To The Noteful Home Page"
    };
  }
  render() {
    if (this.state.title !== "Welcome To The Noteful Home Page") {
      throw new Error("hello");
    }
    return (
      <div>
        <header className="title" value={this.state.title}>
          {" "}
          Welcome To The Noteful Home Page
        </header>
        <main className="container">
          <section className="options">
            <Link to="/note" className="noteTag">
              Add Note
            </Link>

            <Link to="/folder" className="folderTag">
              Add Folder
            </Link>

            <Link to="/showNotes" className="showNote">
              View All Notes
            </Link>

            <Link to="/showFolder" className="showFolder">
              View All Folders
            </Link>
          </section>
        </main>
      </div>
    );
  }
}

export default HomePage;
