let arr = [];

function createObj(name, phase, gender) {
  const obj = {
    name,
    phase,
    gender
  }

  arr.push(obj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);

function getData(name) {
  return arr.filter(el => el.name == name)[0];
}

console.log(getData('Icha'));