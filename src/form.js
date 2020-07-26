import React from "react";

export const renderField = ({ input, label, type, meta: {error} }) => {
  return (
    <div className="form-group">
      {label !== null && label !== '' && <label>{ label }</label>}
      {type !== 'textarea' && <input type={type} { ...input } className="form-control"/>}
      {type === 'textarea' && <textarea { ...input } className="form-control"/>}
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  )
}