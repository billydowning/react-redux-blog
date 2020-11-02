import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }

  render(){
    return (
      <div></div>

      // want to call an Action creator inside of above that will fetch
      //the correct user
      );
  }
};

export default connect(null, { fetchUser })(UserHeader);



