// Необходимо написать функцию, которая удаляет
// все ключи из первого объекта, которые есть во втором объекте.
const obj1 = { name: "d", age: 3 };
const obj2 = { name: "e", country: "" };
function changeParams(a, b) {
    let newObj = {};
    Object.keys(a).forEach((el) => {
        if (!Object.keys(a).includes(el)) {
            newObj[el] = 10;
        }
    });
    return newObj;
}
console.log(changeParams(obj1, obj2));
