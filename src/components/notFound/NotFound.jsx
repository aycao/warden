import React, {Component} from 'react';

class NotFound extends Component{
  render(){
    return (
        <div className="not-found">
          <div>
            <h2>Welcome to Warden</h2>
          </div>
          <p className="not-found-message">
            ...looks like something's lost...
          </p>

        </div>
    )
  }
}

export default NotFound;