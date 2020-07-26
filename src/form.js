import React from "react";
import clasNames from 'classnames';

export const renderField = ({ input, label, type, meta: {error} }) => {
  const classes = clasNames(
    'form-control',
    {
      'is-invalid': error
    }
  );

  return (
    <div className="form-group">
      {label !== null && label !== '' && <label>{ label }</label>}
      {type !== 'textarea' && <input type={type} { ...input } className="form-control"/>}
      {type === 'textarea' && <textarea { ...input } className={classes}/>}
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  )
}