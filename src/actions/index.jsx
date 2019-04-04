export const FETCH_CARS = 'FETCH_CARS';
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

export function createCar(garage, owner, brand) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const body = { garage: garage, owner: owner, brand: brand};
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: CREATE_CAR,
    payload: promise
  }
}
