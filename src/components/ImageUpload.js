import React from "react";
import { connect } from 'react-redux';
import {imageUpload} from '../actions';
import './ImageUpload.css';

class ImageUpload extends React.Component {
  onChange = e => {
    const file = e.target.files[0];
    this.props.imageUpload(file);
  }

  render() {
    return (
      <div className="form-group nice-image-upload">
        <input type="file"
           onChange={this.onChange}
           className="form-control-file text-primary font-weight-bold"
           data-title="Click me or drag and drop file"
        />
      </div>
    )
  }
}

export default connect(
  null,
  {imageUpload}
)(ImageUpload);