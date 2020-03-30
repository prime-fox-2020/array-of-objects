var arr = []
function createObj(name, phase, gender) {
    // YOUR CODE HERE...
    let obj = {}
    obj.name = name
    obj.phase = phase
    obj.gender = gender

    arr.push(obj)
    return obj
}
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
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

//Release 1
function getData(name) {
    // YOUR CODE HERE...
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == name) {
            return arr[i]
        }

    }
}
console.log(getData('Icha'))
  // { name: 'Icha', phase: 1, gender: 'female' }