import React from "react";
import "./postFolder.css";
import { API_BASE_URL } from "../config";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Folders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  folderNameChange(name) {
    this.setState({
      name
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    const newFolder = { name };

    const test = JSON.stringify(newFolder);
    console.log(test);
    const options = {
      method: "POST",
      body: JSON.stringify(newFolder),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(`${API_BASE_URL}folders`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return alert("Your folder has been posted");
      })
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
              <Link to="/showFolder" className="linkFolders">
                View All Folders
              </Link>
            </li>
          </ul>
        </nav>
        <form className="folderForm" onSubmit={e => this.handleSubmit(e)}>
          <label className="folderTitle"> Please enter folder name:</label>
          <div className="folderContainer">
            <input
              className="folderName"
              placeholder="cats"
              value={this.state.name}
              onChange={e => this.folderNameChange(e.target.value)}
              required
            ></input>
          </div>
          <div className="buttonContainer">
            <button className="folderClick">Add Folder</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Folders;

Folders.propTypes = {
  name: PropTypes.string.isRequired
};

Folders.defaultProps = {
  name: "Name Must be a string"
};
