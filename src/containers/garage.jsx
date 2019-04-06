import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Garage extends React.Component {

  render(){
    return(
      <div className="garage-container">
        <img src={logo} alt="logo"/>
        <h2>Garage {this.props.garage}</h2>
        <p>The best place to repair your beloved car</p>
        <Link className="btn btn-primary btn-cta" to={this.props.path}>
          {this.props.action}
        </Link>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps)(Garage);
