import React from "react";
import "./showFolder.css";
import { API_BASE_URL } from "../config";
import { Link } from "react-router-dom";

class showAllFolders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: []
    };
  }

  componentDidMount() {
    const url = `${API_BASE_URL}folders`;
    fetch(url)
      .then(results => results.json())
      .then(results => this.setState({ name: results }))
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li className="goHome">
              <Link to="/" className="linkFolders">
                Home
              </Link>
            </li>

            <li className="PostNote">
              <Link to="/folder" className="linkFolders">
                Create a Folder
              </Link>
            </li>
          </ul>
        </nav>
        <header className="folderTitle"> All Folders:</header>
        <ul>
          {this.state.name.map((name, index) => {
            return (
              <div key={index}>
                <li className="folderItems">Folder Name: {name.name}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default showAllFolders;
