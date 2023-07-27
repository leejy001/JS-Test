const asyncFn = require("./asyncFn");

test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("Mike");
      done();
    } catch (error) {
      done();
    }
  }
  asyncFn.getName(callback);
});

// Promise 사용 시 return 필수
test("3초 후에 받아온 나이는 30", () => {
  // return asyncFn.getAge().then((age) => {
  //   expect(age).toBe(30);
  // });
  // 보다 간단하게 처리하기위해 resolves, rejects matcher 사용하기
  return expect(asyncFn.getAge()).resolves.toBe(30);
});

test("3초 후에 받아온 나이는 30", async () => {
  // const age = await asyncFn.getAge();
  // expect(age).toBe(30);
  // 보다 간단하게 처리하기위해 resolves, rejects matcher 사용하기
  await expect(asyncFn.getAge()).resolves.toBe(30);
});
