import React from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class ImageBrowser extends React.Component {
  render() {
    const {images} = this.props;

    return (
      <div className="nav mt-4 mb-4">
        <TransitionGroup >
          {images.map(image => {
            return (
              <CSSTransition timeout={1000} classNames="fade" key={image.id}>
                <div className="col-md-6 col-lg-4">
                  <div className="mt-2 mb-2">
                    <img
                      src={`http://localhost:8000/${image.url}`}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </div>
    )
  }
}

export default ImageBrowser;