import React from "react";
import "./postFolder.css";

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
    const url = "http://localhost:8000/folders";
    // const test = JSON.stringify(newFolder);
    // console.log(test);
    const options = {
      method: "POST",
      body: JSON.stringify(newFolder),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
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
        <header className="folderTitle">New Folder</header>
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
