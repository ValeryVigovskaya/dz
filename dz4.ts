// Написать функцию, которая меняет местами ключи и значения в объекте. При этом они там одного типа.
const obj: Record<string, number> = {
  a: 1,
  b: 2,
};

function swapKeysAndValues(
  obj: Record<string, number>,
): Record<number, string> {
  let newObject: Record<number, string> = {};
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
