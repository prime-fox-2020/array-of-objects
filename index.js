//Release 1

let arr = []
function createObj(name,phase,gender){
    arr.push({
        name:name,
        phase:phase,
        gender:gender
    })
}

createObj('Akbar', 1,'male')
createObj('Icha', 1,'female')
createObj('Udin', 2,'male')
createObj('Esa', 2,'male')
createObj('Olla', 3,'female')
// console.log(arr)

//Release 2
function getData(name){
    for (let i = 0; i < arr.length; i++) {
        if(name == arr[i].name){
            return arr[i]
        }
    }
}

console.log(getData('Icha'));