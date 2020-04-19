var arr = []

function createObject(name,phase,gender){
    var obj ={
      name: name,
      phase: phase,
      gender: gender
    }

    arr.push(obj)
}

createObject('Akbar','1','Male')
createObject('Icha','1','Female')

console.log(arr)

function getData(name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i]
    }
  }
}

console.log(getData('Icha'));
