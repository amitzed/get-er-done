import React, { Component } from "react";
import { connect } from "react-redux";


import {
  deleteGet,
  toggleGet,
  setVisibilityFilter
} from "../actions/actionMake";


import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsSort";
import { bindActionCreators } from "redux";

class View extends Component {
  render() {
    return (
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
        <nav style={{ marginTop: "25px" }}>
          <ol className="breadcrumb">
            <li
              className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ALL ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
            >
             See All
            </li>
            <li
               className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
            >
              See All Done &#10004;
            </li>
            <li
               className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
            >
              Still to Do
            </li>
          </ol>
        </nav>
        {this.props.gets.length !== 0 ? (
          <table
            style={{ marginTop: "60px" }}
            className="table table-hover table-dark"
          >
            <thead>
              <tr>
                <th scope="col">Not Yet Done</th>
                <th scope="col">Delete or Mark as Done</th>
              </tr>
            </thead>
            <tbody>
              {this.props.gets.map(get => (
                <tr key={get.id}>
                  <td
                    style={{
                      textDecoration: get.completed ? "line-through" : "none"
                    }}
                  >
                    {get.text} {get.completed === true ? "** Got It Done!" : ""}
                  </td>
                  <td>

                    <span
                      className="fas fa-check-double"
                      onClick={() => this.props.toggleGet(get.id)}
                      style={{
                        color: "#FF6138",
                        fontSize: "24pt"
                      }}
                    />

                    <span
                      className="fas fa-trash-alt"
                      onClick={() => this.props.deleteGet(get.id)}
                      style={{
                        color: "yellow",
                        fontSize: "24pt",
                        marginLeft: "20px"
                      }}
                    />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div
            style={{ marginTop: "50px" }}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
          >
            <div className="alert alert-warning" role="alert">
              Empty List, Add Things to Get Done Above &#9757;
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}

const getVisibleGets = (gets, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return gets;
    case SHOW_COMPLETED:
      return gets.filter(t => t.completed);
    case SHOW_ACTIVE:
      return gets.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { gets: getVisibleGets(state.gets, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteGet,
      toggleGet,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
