// 1. ES5 //
let Airplane = {};
Airplane.myAirplane = 'StarJet';

module.exports = Airplane;

// 2. ES5 //
let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function () {
    return this.myAirplane;
  }
};

// 3. Export Default ES6 (exports one module per file) //
let Airplane = {};

Airplane.availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800
},
{
  name: 'SkyJet',
  fuelCapacity: 500
}
];

export default Airplane;

// 4. Named Exports ES6 //
let availableAirplanes = [{
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  name: 'AeroJet',
  fuelCapacity: 800
},
{
  availableStaff: ['pilots', 'flightAttendants'],
  name: 'SkyJet',
  fuelCapacity: 500
}
];

let flightRequirements = {
  requiredStaff: 4
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

export {
  availableAirplanes,
  flightRequirements,
  meetsStaffRequirements
};

// 5. Export Named Exports ES6 //
export let availableAirplanes = [
  {
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    name: 'AeroJet',
    fuelCapacity: 800,
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    availableStaff: ['pilots', 'flightAttendants'],
    name: 'SkyJet',
    fuelCapacity: 500,
    maxSpeed: 800,
    minSpeed: 200
  }
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
}

// 6. Export As ES6//
let availableAirplanes = [
  {
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    name: 'AeroJet',
    fuelCapacity: 800,
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    availableStaff: ['pilots', 'flightAttendants'],
    name: 'SkyJet',
    fuelCapacity: 500,
    maxSpeed: 800,
    minSpeed: 200
  }
];

let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
}

export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };