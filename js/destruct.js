const user = {id: 1, name: 'P', age: 33};
const {name:n, age = 30} = {name: 'Lee'};  // n = ?, age = ?

const fn = ({age}) => age;
// function fn({age}){
//     return age;
// }
// line 4과 동일
const {age2:age3 = fn(user)} = {age22: 20};  // age2 = 30, age3 = 33


class Dog{}

const lucy= new Dog();

function f(a,b,...c){
    console.log("🚀 a:", [...arguments]);
    console.log("🚀 c:", c);
    for(const x of c){
        console.log('ccc>>',x);
    }
}

f(1,2,3,4);

const arr =[1,2,3,4,5,6,7,8,9];
for (let i of arr){
    //if(i>5) break;
    console.log(i);
    if(i>5) break;
}

