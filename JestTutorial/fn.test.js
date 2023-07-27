const fn = require("./fn");

test("1은 1이야.", () => {
  expect(1).toBe(1);
});

test("2더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("2더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test("3더하기 3은 5가 아니야.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

// 객체나 배열은 재귀적으로 돌며 값을 확인해야하기 때문에 "toBe" 대신 "toEqual"을 사용해야한다.
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toBe({
//     name: "Mike",
//     age: 30
//   });
// });

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30
  });
});

// 보다 엄격하게 테스트하기 위해서 "toEqual" 보다 "toStrictEqual"을 사용하는 것이 옳다.
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//   expect(fn.makeUser("Mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30
//   });
// });

// toBeNull
// toBeUndefined
// toBeDefined
test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy
test("0은 false 입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있지 않은 문자열은 true 입니다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_ORDER";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

// 자바스크립트 같은 몇몇 언어는 소수를 정확하게 표현하지 못한다.
// 소수 결과값 테스트는 "toBeCloseTo"를 이용하여 처리해준다.
test("0.1 더하기 0.2는 0.3 입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello World에 a라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/h/i);
});

test("유저 리스트에 Mike가 있나?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

// 그냥 "toThrow"만 인수 없이 사용하면 어떤 예외가 발생하든 pass
// 특정 예외를 판별하려면 인수를 넣어주기
test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr()).toThrow("xx");
});
