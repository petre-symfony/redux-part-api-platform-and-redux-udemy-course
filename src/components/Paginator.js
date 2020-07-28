import React from "react";
import classNames from "classnames";

class Paginator extends React.Component{
  constructor(props) {
    super(props);

    const { pageCount } = this.props;;
    this.range = [];

    for(let i=1; i <= pageCount; i++){
      this.range.push(i);
    }
  }
  render(){
    const {currentPage, setPage, prevPage, nextPage} = this.props;

    return (
      <div className="card mb-3 mt-3 shadow-sm">
        <div className="card-body">
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link" onClick={prevPage}>Previous</button>
              </li>
              {
                this.range.map(page => {
                  const onClick = e => {
                    e.preventDefault();
                    setPage(page);
                  }
                  return (
                    <li key={ page } className={classNames('page-item', {active: currentPage === page})}>
                      <button className="page-link" onClick={onClick}>
                        {page}
                      </button>
                    </li>
                  )
                })
              }
              <li className="page-item">
                <button className="page-link" onClick={nextPage}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Paginator;