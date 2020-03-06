import React from "react";
import "./postNote.css";
import { API_BASE_URL } from "./config";

class PostNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      folder: ""
    };
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

    fetch(`${API_BASE_URL}`, options)
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
  };

  render() {
    return (
      <div>
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
            <input
              className="noteName"
              placeholder="cats"
              value={this.state.folder}
              onChange={e => this.folderChange(e.target.value)}
              required
            ></input>
          </div>

          <div className="buttonContainerNote">
            <button className="noteClick">Add Folder</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostNote;
