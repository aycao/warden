import React from 'react';

const PopCardBody = (props) => {
  return (
      <div className="pop-card--body">
        <span className="pop-card--body--text">{props.text}</span>
        <span className="pop-card--body--number">{props.number}</span>
      </div>
  )
};

export default PopCardBody;