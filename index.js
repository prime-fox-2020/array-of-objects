var arr = []
function createObj(name, phase, gender){
    let obj = {}
    obj.name = name
    obj.phase = phase
    obj.gender = gender
    arr.push(obj)
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')

console.log(arr)

function getData(name){
    for (let a = 0; a<arr.length; a++){
        if (name === arr[a].name){
            return arr[a]
        }
    }
    
}

console.log(getData('Icha'))
