let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';
spaceship.numEngines = 7;
delete spaceship['Secret Mission'];

console.log(spaceship);

/* Console output:
{ 'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'glorious gold',
  numEngines: 7 }
*/