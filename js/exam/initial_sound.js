const s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];
searchByKoreanInitialSound(s, "ㄱㅅ");

const results = s.filter((s) => s.match(/[ㄱ가-깋][ㅅ사-싷]/));
console.log("🚀 ~ results:", results);

assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅇ"), ["강원도 고성군"]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), ["강원도 고성군", "고성군 토성면"]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), ["고성군 토성면", "토성면 북면"]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), ["토성면 북면", "북면"]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), []);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);
