const user = {
    name: "Vasiliy",
    age: 8,
    skills: ["typescript", "javascript"],
};
function pickObjectKeys(user, arr) {
    const obj = {};
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
