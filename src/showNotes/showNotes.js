import React from "react";
import "./showNotes.css";
import { API_BASE_URL } from "../config";
import { Link } from "react-router-dom";

class showAllFolders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      name: "",
      content: "",
      folder: ""
    };
  }

  componentDidMount() {
    const url = `${API_BASE_URL}note`;
    fetch(url)
      .then(results => results.json())
      .then(results => this.setState({ notes: results }))
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
              <Link to="/note" className="linkFolders">
                Create a Note
              </Link>
            </li>
          </ul>
        </nav>

        <header className="noteTitle"> Notes:</header>
        <ul>
          {this.state.notes.map((notes, index) => {
            return (
              <div className="container" key={index}>
                <li className="noteNumber">{notes.id}.</li>

                <li className="noteItems">Name: {notes.name}</li>

                <li className="noteItems">Content: {notes.content}</li>

                <li className="noteItems">Folder Owner:{notes.folder}</li>
                <br></br>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default showAllFolders;
