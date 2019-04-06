export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';
export const CREATE_CAR = 'CREATE_CAR';


export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export function fetchCar(garage, id) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars/${id}`;
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  }
}


export function createCar(garage, model, owner, brand, plate) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const body = { model: model, owner: owner, brand: brand, plate: plate};
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: CREATE_CAR,
    payload: request
  }
}
