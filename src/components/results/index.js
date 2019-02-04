import React, { Component } from "react";
import Column from "./column";
import { connect } from "react-redux";
import MdDirectionsBoat from "react-icons/lib/md/directions-boat";
import FaAnchor from "react-icons/lib/fa/anchor";
import MdCloudOff from "react-icons/lib/md/cloud-off";

import "./style.scss";

class Results extends Component {
  render() {
    const { data, requestError } = this.props;
    return (
      <section className="results">
        {data && data.length > 1 && (
          <div className="table">
            <Column type="boat" data={data} />
            <Column type="date" data={data} />
          </div>
        )}
        {!data && !requestError && <MdDirectionsBoat className="placeholder" />}
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
  requestError: state.main.requestError
});

export default connect(mapStateToProps)(Results);
