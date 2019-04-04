import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

class CarsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchCars(this.props.garage);
  }

  // componentDidMount() {
  //   this.props.fetchCars(this.props.garage);
  // }

  renderCars() {
    return this.props.cars.map((car) => {
        return(
          <Link to={`/cars/${car.id}`} key={car.id}>
            <div className="car-container">
              <img src="" alt=""/>
              <h3>{car.brand}</h3>
              <p>{car.owner}</p>
            </div>
          </Link>);
    });
  }

  render(){
    return(
      <div>
        {this.renderCars()}
      </div>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
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
