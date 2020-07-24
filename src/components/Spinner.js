import React from "react";

class Spinner extends React.Component {
  render(){
    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <i className="fa fa-spinner fa-spin"></i>
        </div>
      </div>
    );
  }
}

export default Spinner;