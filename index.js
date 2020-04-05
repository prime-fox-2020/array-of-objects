var arr = []

function createObject(name,phase,gender){
    var obj ={}

    obj.name = name
    obj.phase = phase
    obj.gender = gender

    arr.push(obj)
}

createObject('Akbar','1','Male')
createObject('Icha','1','Female')

console.log(arr)
