// Написать функцию, которая меняет местами ключи и значения в объекте. При этом они там одного типа.
const obj = {
    a: 1,
    b: 2,
};
function swapKeysAndValues(obj) {
    let newObject = {};
    for (let key in obj) {
        newObject[obj[key]] = key;
    }
    return newObject;
}
const res = swapKeysAndValues(obj);
/*
{
  1: 'a',
  2: 'b'
}
*/
