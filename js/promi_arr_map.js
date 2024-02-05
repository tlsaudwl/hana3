const afterTime = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000, sec));

const rets1 = [1, 2, 1].map((sec) => afterTime(sec));
console.log("🚀 ~ rets1:", rets1);

const rets2 = [];
for await (const ret of rets1) {
  rets2.push(ret);
}
console.log("🚀 ~ forawait ~ rets2:", rets2);
