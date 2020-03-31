var arr=[]
function createObj(name,phase,gender){
    var obj={}
    obj.name = name
    obj.phase = phase
    obj.gender = gender
    arr.push(obj)    
}
createObj('Akbar',1,'Male')
createObj('Icha',0,'FeMale')

console.log(arr)
function getData(name){
    for(let i=0;i<arr.length;i++){
        if(name==arr[i].name)
            return arr[i]
    }
    return "Tidak ada nama tersebut ya."
}
console.log(getData('Icha'))