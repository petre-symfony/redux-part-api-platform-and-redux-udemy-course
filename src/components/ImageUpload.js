import React from "react";
import './ImageUpload.css';

export default class ImageUpload extends React.Component {
  render() {
    return (
      <div className="form-group nice-image-upload">
        <input type="file"
           className="form-control-file text-primary font-weight-bold"
           data-title="Click me or drag and drop file"
        />
      </div>
    )
  }
}