

var array = [];

function creatObj(name, phase, gender){
    var object ={
        name,
        phase,
        gender
    }

    array.push(object)
}


creatObj(`Akbar`,1,`male`)
creatObj(`Icha`,1,`female`)
creatObj(`Adhit`,2,`male`)
creatObj(`Tama`,2,`male`)
creatObj(`Rifky`,3,`male`)


console.log(array)