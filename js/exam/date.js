const d1 = new Date();
d1.setFullYear(1970);
d1.setMonth(0);
d1.setDate(1);
console.log("🚀 ~ d1:", d1);

const d2 = new Date();
d2.setFullYear(1970);
d2.setMonth(0);
d2.setDate(2);
console.log("🚀 ~ d2:", d2);

console.log(Math.floor((d2.getTime() - d1.getTime()) / 1000));

const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

const lastDate = new Date();
lastDate.setDate(1);
lastDate.setMonth(lastDate.getMonth() + 1);
lastDate.setDate(-1);
console.log("🚀 ~ lastDate:", lastDate, lastDate.getDate());
console.log("rand>>", rand(1, lastDate.getDate()));
console.log("rand>>", rand(1, lastDate.getDate()));
console.log("rand>>", rand(1, lastDate.getDate()));
console.log("rand>>", rand(1, lastDate.getDate()));
console.log("rand>>", rand(1, lastDate.getDate()));
