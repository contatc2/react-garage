import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import wagon from '../wagon.svg';

const image = "https://media-cdn.tripadvisor.com/media/photo-s/13/7b/e4/c4/pretty-garage-doors.jpg"

class Garage extends React.Component {

  render(){
    return(
      <div className="garage-container">
        <img src={image} alt="logo" className="garage-img" />
        <img src={wagon} alt="wagon" className="logo" />
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
