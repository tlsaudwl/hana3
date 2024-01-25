// primitive (call-by-value) vs. objective (call-by-reference) -> 면접 질문으로 잘 나옴
const userName = 'Hong'; // string (primitive)
let age; // declare + define -> 이 정의는 메모리가 할당되었다는 뜻 (undefined라는 값이 저장됨)
age=33;
console.log("🚀 ~ age:", age)
console.log(`Hello, ${userName}!`);


zz=9;
console.log(zz);
zz=10;
console.log(globalThis['zz']);
