var arr = []
function createObj (name, phase, gender) {
  // YOUR CODE HERE...
  let obj = {
      name,
      phase,
      gender
  }
  arr.push(obj)
  return arr
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
// dan seterusnya...sesuaikan dengan hasil yang diharapkan!
console.log(arr)
// [
//   {
//     name: 'Akbar',
//     phase: 1,
//     gender: 'male'
//   },
//   {
//     name: 'Icha',
//     phase: 1,
//     gender: 'female'
//   },
//   {
//     name: 'Adhit',
//     phase: 2,
//     gender: 'male'
//   },
//   {
//     name: 'Tama',
//     phase: 2,
//     gender: 'male'
//   },
//   {
//     name: 'Rifky',
//     phase: 3,
//     gender: 'male'
//   }
// ]

function getData(name){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === name){
            return arr[i]
        }
    }
}
console.log(getData('Icha'))