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

function changeParams(a: IA, b: IB): TObj {
  const newObj = {} as TObj;

  (Object.keys(a) as (keyof IA)[]).forEach((key) => {
    if (!(key in b)) {
      if (key === "age") {
        newObj.age = a.age;
      }
    }
  });

  return newObj;
}

console.log(changeParams(obj1, obj2));
