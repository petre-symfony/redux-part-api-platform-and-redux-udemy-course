import React from "react";

class LoadMore extends React.Component{
  render(){
    const {label} = this.props;

    return (
      <button className="btn btn-block btn-dark">
        { label }
      </button>
    )
  }
}

export default LoadMore;