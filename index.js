
// release 0
let arr = [];
function createObject(name, phase, gender) {
  let obj = {};
  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;
  return arr.push(obj);
}

createObject("elvan", 0, "male");
createObject("airell", 1, "male");
createObject("michael", 2, "male");
createObject("raka", 3, "male");
createObject("andre", 0, "male");
createObject("afif", 1, "male");
createObject("rino", 2, "male");
createObject("adib", 3, "male");

console.log(arr);

// release 1
function getData(name){
  for (let i = 0; i < arr.length; i++){
    if (arr[i].name == name){
      return arr[i]
    }
  }
  return 'Data Tidak Ditemukan'
}

console.log(getData('rino'));