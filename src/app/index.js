import React, { Component } from "react";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* Props details */}
        {this.props ? <p> {JSON.stringify(this.props)} </p> : <p>connect not working</p>}
        {/* Form */}
        <Form />
        {/*Body*/}
        {this.props.data.isFetching ? <h3>Loading...</h3> : null}
        {this.props.data.isError ? (<h3 className="error">No such User exists.</h3>) : null}
        {Object.keys(this.props.data.userData).length > 0 ? (<UserInfo user={this.props.data.userData} />) : null}
      </div>
    );
  }
}

//
const mapStateToProps = state => {
  return { data: state };
};
export default connect(mapStateToProps)(App);