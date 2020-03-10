import React from "react";
import "./postNote.css";
import { API_BASE_URL } from "../config";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class PostNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      folder: "",
      folders: []
    };
  }

  componentDidMount() {
    fetch(`${API_BASE_URL}folders`)
      .then(res => res.json())
      .then(folders => {
        this.setState({
          folders
        });
      })
      .catch(err => console.log(err));
  }

  nameChange(name) {
    this.setState({
      name
    });
  }

  contentChange(content) {
    this.setState({
      content
    });
  }

  folderChange(folder) {
    this.setState({
      folder
    });
  }

  generateFolderOptions = e => {
    const folders = this.state.folders;
    console.log(folders);
    return folders.map(folder => {
      return (
        <option key={folder.id} value={folder.name}>
          {folder.name}
        </option>
      );
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, content, folder } = this.state;
    const newNote = { name, content, folder };
    //const url = "http://localhost:8000/note";
    // const test = JSON.stringify(newNote);
    // console.log(newNote);

    const options = {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(`${API_BASE_URL}note`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return alert("Your note has been posted");
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };

  render() {
    const folderOptions = this.generateFolderOptions();

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
              <Link to="/showNotes" className="linkFolders">
                View All Notes
              </Link>
            </li>
          </ul>
        </nav>
        <header className="noteTitle">New Note</header>
        <form className="noteForm" onSubmit={e => this.handleSubmit(e)}>
          <label className="noteTitle"> Please enter Note name:</label>
          <div className="inputControls">
            <input
              className="noteName"
              placeholder="cats"
              value={this.state.name}
              onChange={e => this.nameChange(e.target.value)}
              required
            ></input>
          </div>

          <label className="noteTitle"> Please enter Content:</label>
          <div className="inputControls">
            <textarea
              className="noteContent"
              placeholder="cats"
              value={this.state.content}
              onChange={e => this.contentChange(e.target.value)}
              required
              autoFocus
            ></textarea>
          </div>

          <label className="noteTitle"> Choose a folder:</label>
          <div className="inputControls">
            <select
              className="noteName"
              placeholder="cats"
              value={this.state.folder}
              onChange={e => this.folderChange(e.target.value)}
              required
            >
              {folderOptions}
            </select>
          </div>

          <div className="buttonContainerNote">
            <button className="noteClick">Add Note</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostNote;
PostNote.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  folder: PropTypes.string.isRequired
};

PostNote.defaultProps = {
  name: "Name must be a string",
  content: "Content must be a string",
  folder: "Folder must be a string"
};
