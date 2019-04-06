import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars, deleteCar } from '../actions';
import Garage from './garage';
import logo from '../logo.svg';

class CarsIndex extends React.Component {

  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCars(this.props.garage);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.car);
  }

  renderCar(car) {
        return(
            <div className="card-product">
              <img src={logo} alt="logo"/>
              <div className="card-product-infos">
                <h2>{car.brand} - {car.model}</h2>
                <p><strong>Owner: </strong>{car.owner}</p>
                <div className="border px-3 py-1 mt-2">{car.plate}</div>
              </div>
              <div className="btn btn-danger right" onClick={this.handleClick}> Delete</div>
            </div>);
  }



  render(){
    if (!this.props.car) {
      return <p>loading...</p>;
    }
    return(
      <div className="cars-index">
        <Garage action={"Back to list"} path={"/"} />
        <div className="cars-container">
          {this.renderCar(this.props.car)}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars, deleteCar },
    dispatch
  );
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  return {
    garage: state.garage,
    cars: state.cars,
    car: state.cars.find(p => p.id === idFromUrl)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
