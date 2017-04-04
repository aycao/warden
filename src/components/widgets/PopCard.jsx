import React from 'react';
import {Divider, Paper} from "material-ui";

const PopCard = (props) => {
  let {className, pop, body, footer} = props;

  className = (className || '') + ' pop-card';
  return (
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <Paper className={className} style={{borderRadius: props.rounded? '6px': 'none'}}>
          <div className="pop-card--upper-container">
            <Paper className="pop-card--icon-container" style={{borderRadius: props.rounded? '6px': 'none'}}>
              {pop}
            </Paper>
            <div className="pop-card--body-container">
              {body}
            </div>
          </div>
          <Divider/>
          <div className="pop-card--footer-container">
            {footer}
          </div>
        </Paper>
      </div>
  );
};

PopCard.propTypes = {
  className: React.PropTypes.string,
  pop: React.PropTypes.node.isRequired,
  body: React.PropTypes.node,
  footer: React.PropTypes.node,
};

export default PopCard;