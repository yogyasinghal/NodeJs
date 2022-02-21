let obj1 = {a: {b:2} }
let arr = [1,2,3]
console.log(obj1);
let obj2 = [...arr,4];

// let obj3 = obj1
let obj3 = {...obj1};
// console.log(obj2);

obj3.a.b = 5
console.log(obj3);
console.log(obj1);


