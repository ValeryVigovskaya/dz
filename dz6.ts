// Необходимо написать функцию, которая удаляет
// все ключи из первого объекта, которые есть во втором объекте.

interface IA {
  name: string;
  age: number;
}

interface IB {
  name: string;
  country: string;
}

type TObj = Omit<IA, "name">;

const obj1: IA = { name: "d", age: 3 };
const obj2: IB = { name: "e", country: "" };

function changeParams(a: IA, b: IB) {
  let newObj = {};
  Object.keys(a).map((el) => {
    if (!Object.keys(b).includes(el)) {
      newObj[el] = a[el];
    }
  });
  return newObj;
}

console.log(changeParams(obj1, obj2));
