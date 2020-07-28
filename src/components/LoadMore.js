import React from "react";

class LoadMore extends React.Component{
  render(){
    const {label, disabled, onClick} = this.props;

    return (
      <button disabled={disabled} onClick={onClick} className="btn btn-block btn-dark">
        { label }
      </button>
    )
  }
}

export default LoadMore;