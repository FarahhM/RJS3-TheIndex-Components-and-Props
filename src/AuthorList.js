import React, { Component } from "react";

//components
import AuthorCard from "./AuthorCard";
class AuthorList extends Component {
  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard author={author} key={author.first_name} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}
export default AuthorList;
