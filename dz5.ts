// Написать функцию получения нужных данных из объектов
interface IUser {
  name: string;
  age: number;
  skills: string[];
}

const user = {
  name: "Vasiliy",
  age: 8,
  skills: ["typescript", "javascript"],
};

function pickObjectKeys<T, K extends keyof T>(
  user: T,
  arr: readonly K[],
): Pick<T, K> {
  const obj = {} as Pick<T, K>;

  arr.forEach((el) => {
    obj[el] = user[el];
  });

  return obj;
}
const res = pickObjectKeys(user, ["age", "skills"]);
/*
{
  age: 8,
  skills: ['typescript', 'javascript']
}
*/
