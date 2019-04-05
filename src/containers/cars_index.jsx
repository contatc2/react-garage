import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
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
            <div className="card-product">
              <img src={logo} alt="logo"/>
              <div className="card-product-infos">
                <h2>{car.brand} - {car.model}</h2>
                <p><strong>Owner:</strong>{car.owner}</p>
              </div>
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
