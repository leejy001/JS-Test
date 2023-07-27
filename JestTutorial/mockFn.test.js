// mock function
const mockFunc = require("./mockFn");

const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });

// test("2번째로 호추된 함수에 첫번째 인수는 1 입니다.", () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1);
// });

function forEachAdd1(arr) {
  arr.forEach((num) => {
    mockFn(num + 1);
  });
}

forEachAdd1([10, 20, 30]);

test("함수 호출은 3번 됩니다", () => {
  expect(mockFn.mock.calls.length).toBe(3);
});
test("전달된 값은 11, 21, 31 입니다.", () => {
  expect(mockFn.mock.calls[0][0]).toBe(11);
  expect(mockFn.mock.calls[1][0]).toBe(21);
  expect(mockFn.mock.calls[2][0]).toBe(31);
});

const mockFn2 = jest.fn((num) => num + 1);

mockFn2(10);
mockFn2(20);
mockFn2(30);

test("10에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn2.mock.results[0].value).toBe(11);
});
test("20에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn2.mock.results[1].value).toBe(21);
});
test("30에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn2.mock.results[2].value).toBe(31);
});

// 수행할 때마다 다른 값 리턴 가능

const mockFn3 = jest.fn();

mockFn3
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

const result = [1, 2, 3, 4, 5].filter((num) => mockFn3(num));

test("홀수는 1,3,5", () => {
  expect(result).toStrictEqual([1, 3, 5]);
});

// "mockResolvedValue"를 사용하여 비동기 처리

const mockFn4 = jest.fn();

mockFn4.mockResolvedValue({ name: "Mike" });

test("받아온 이름은 Mike", () => {
  mockFn4().then((res) => {
    expect(res.name).toBe("Mike");
  });
});

// 실제 유저가 생성되지 않도록 mocking 모듈로 만들어줌
jest.mock("./mockFn");

mockFunc.createUser.mockReturnValue({ name: "Mike" });

test("유저를 만든다", () => {
  const user = mockFunc.createUser("Mike");
  expect(user.name).toBe("Mike");
});
