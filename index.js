let arr = [];

// release 0
let createObj = (name, phase, gender) => {
    arr.push({
        name,
        phase,
        gender
    })
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

//release 1
let getdata = (name) => {
    let res = null;
    arr.forEach(el => {
        if(el.name == name){
            res = el;
        }
    });
    return res;
}

console.log(getdata('Icha'));