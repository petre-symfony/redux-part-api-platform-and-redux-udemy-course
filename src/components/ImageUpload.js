import React from "react";

export default class ImageUpload extends React.Component {
  render() {
    return (
      <div className="form-group">
        <input type="file" className="form-control-file text-primary font-weight-bold"/>
      </div>
    )
  }
}