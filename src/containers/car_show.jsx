import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCar } from '../actions';
import logo from '../logo.svg';

class CarsIndex extends React.Component {

  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.garage, this.props.match.params.id);
    }
  }

  renderCar(car) {
        return(
            <div className="card-product">
              <img src={logo} alt="logo"/>
              <div className="card-product-infos">
                <h2>{car.brand} - {car.model}</h2>
                <p><strong>Owner: </strong>{car.owner}</p>
              </div>
            </div>);
  }



  render(){
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return(
        <div className="cars-container">
          {this.renderCar(this.props.car)}
          <Link to='/'>
            Back
          </Link>
        </div>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar },
    dispatch
  );
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  return {
    garage: state.garage,
    car: state.cars.find(p => p.id === idFromUrl)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
