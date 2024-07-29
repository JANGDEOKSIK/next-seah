import React from 'react';

const Row = ({ children, thTit, isRequired = false, inputId }) => {
  return (
    <div className="row">
      <div className="th">
        <p className="tit"><label htmlFor={inputId}>{thTit}</label></p>
        {isRequired && <span className="required">*</span>}
      </div>
      <div className="td">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              inputId
            });
          }
          return child;
        })}
      </div>
    </div>
  )
}

export default Row;