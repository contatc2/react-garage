import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCar } from '../actions';
import logo from '../logo.svg';

class CarsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchCars(this.props.garage);
  // }

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
    return(
        <div className="cars-container">
          {this.renderCar(this.props.car)}
          <Link to='/'>
          back to all cars
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

function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
