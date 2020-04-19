//RELEASE 0
const arr = []

function createObj (name, phase, gender) {
  //YOUR CODE HERE...
  arr.push({name, phase, gender})
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr)

//RELEASE 1
function getData(name){
  //YOUR CODE HERE...
  for(let array of arr){
    if(array.name === name) return array
  }
}

console.log(getData('Icha'))