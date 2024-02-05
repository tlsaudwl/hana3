// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);

// console.log("START!", new Date());

// function time(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// console.log("START!", new Date());

// time(1000)
//   .then(() => {
//     console.log("depth1", new Date());
//     return time(2000);
//   })
//   .then(() => {
//     console.log("depth2", new Date());
//     return time(3000);
//   })
//   .then(() => {
//     console.log("depth3", new Date());
//     throw new Error("Already 3-depth!!");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const depthTime = (depth) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => console.log("depth" + depth, new Date()), depth * 1000);
//     resolve(1);
//     console.log("******************");
//   });

// depthTimer(1)
//   .then(depthTimer)
//   .then(depthTimer)
//   .catch((err) => console.error(err));

// console.log("START!", new Date());

getposts(1);
