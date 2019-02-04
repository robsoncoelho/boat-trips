import React, { Component } from "react";
import Column from "./column";
import { connect } from "react-redux";
import MdDirectionsBoat from "react-icons/lib/md/directions-boat";
import FaAnchor from "react-icons/lib/fa/anchor";
import MdCloudOff from "react-icons/lib/md/cloud-off";
import IoIosRefreshEmpty from "react-icons/lib/io/ios-refresh-empty";

import "./style.scss";

class Results extends Component {
  render() {
    const { data, requestError, isLoading } = this.props;
    return (
      <section className="results">
        {data && data.length > 1 && !isLoading && (
          <div className="table">
            <Column type="boat" data={data} />
            <div className="dates">
              <Column type="date" data={data} />
            </div>
            <div className="scrollMore" />
          </div>
        )}
        {!isLoading && !data && !requestError && <MdDirectionsBoat className="placeholder" />}
        {isLoading && <IoIosRefreshEmpty className="placeholder loading" />}
        {data && data.length < 1 && (
          <div className="error">
            <p>Sorry, no results found.</p>
            <FaAnchor className="placeholder" />
          </div>
        )}
        {requestError && (
          <div className="error">
            <p>Ops! Our service is down.</p>
            <MdCloudOff className="placeholder" />
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  data: state.main.data,
  requestError: state.main.requestError,
  isLoading: state.main.isLoading
});

export default connect(mapStateToProps)(Results);
