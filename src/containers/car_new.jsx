import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import Garage from './garage';

const required = value => value ? undefined : 'Required';

const plate = value =>
  value && !/^[A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]+$/.test(value) ?
  'Invalid plate number' : undefined;

class CarNew extends React.Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error}
  }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          className="form-control"
          type={type}
          placeholder={placeholder}
          {...input}
        />
        {touched && (error && <span><font color="red">{error}</font></span>)}
      </div>
    );
  }

  form() {
    const {invalid, pristine, submitting} = this.props;
    return(
      <div className="bg-white p-3 mx-5 mt-5">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="mb-3">
          <Field
            label="Brand"
            name="brand"
            placeholder="Aston Martin"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="Model"
            name="model"
            placeholder="DB Mark III"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="Owner"
            name="owner"
            placeholder="James"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="Plate"
            name="plate"
            placeholder="418-ED-94"
            type="text"
            component={this.renderField}
            validate={[plate, required]}
          />
          <button className="btn btn-primary" type="submit"
            disabled={invalid || pristine || submitting}>
            Add Car
          </button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="cars-index">
        <Garage action={"Back to list"} path={"/"} />
        <div className="form-container">
          {this.form()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(connect(mapStateToProps, { createCar })(CarNew) );
