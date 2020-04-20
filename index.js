let arr = []

function createObj(name, phase, gender) {
    let temp = {
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(temp)
}

createObj('Akbar', 1, 'Male')
createObj('Icha', 1, 'Female')
createObj('Adhit', 2, 'Male')
createObj('Tama', 2, 'Male')
createObj('Rifky', 3, 'Male')

console.log(arr)

function getData(name) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name == name) {
            return arr[i]
        }
    }
}

console.log(getData('Icha'))