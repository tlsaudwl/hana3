// // if (isAsyncAwait){
// //     const res = await fetch(sampleUrl);
// //     const data = await res.json();
// //     console.log("🚀 ~ data:", data)
// // } else{
// //     fetch(sampleUrl)
// //     .then(res=>res.json())
// //     .then(data=>console.log('data>>', data))
// // }

// const promiFetch = (url) =>
//   new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then(resolve);
//     // .then(data=>resolve(data))
//   });

// const asyncFetch = async (url) => {};

// // const fn = promiFetch;
// // const fn = asyncFetch;

// const data = await promiFetch(sampleUrl);
// console.log("🚀 ~ data:", data);

const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) throw new Error("Failt to Fetch!!");

  // <2초 sleep하도록 이 부분을 작성해 보세요!>
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await res.json();

  return data.name;
};

console.log("Username");
