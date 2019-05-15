import React, { Component } from 'react';
import Header from '../../containers/header'
import Form from '../../containers/form'

class LandingPage extends Component{
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default LandingPage