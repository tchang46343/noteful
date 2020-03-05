import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header className="title"> Welcome To The Noteful Home Page</header>
        <main className="container">
          <section className="options">
            <Link to="/note" className="noteTag">
              Add Note
            </Link>

            <Link to="/folder" className="folderTag">
              Add Folder
            </Link>
          </section>
        </main>
      </div>
    );
  }
}

export default HomePage;
