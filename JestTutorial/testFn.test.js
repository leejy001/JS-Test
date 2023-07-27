const testFn = require("./testFn");

let num = 0;

// 각 테스트 실행 전 num 초기화 "afterEach"의 경우 테스트 이후 초기화
beforeEach(() => {
  num = 0;
});

test("0 더하기 1은 1이야", () => {
  num = testFn.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 2은 2이야", () => {
  num = testFn.add(num, 2);
  expect(num).toBe(2);
});

test("0 더하기 3은 3이야", () => {
  num = testFn.add(num, 3);
  expect(num).toBe(3);
});

// test다음에 only를 붙이면 해당 테스트만 실행됨
// test.only("0 더하기 4은 4이야", () => {
//   num = testFn.add(num, 4);
//   expect(num).toBe(4);
// });

// test다음에 skip을 붙이면 해당 테스트만 제외하고 실행됨
// test.skip("0 더하기 4은 4이야", () => {
//   num = testFn.add(num, 4);
//   expect(num).toBe(4);
// });

let user;

// 각 테스트마다 db연결을 수행하는 것이 아닌
// db 연결 시 한번에 테스트를 완료하고 끊어주기
beforeAll(async () => {
  user = await testFn.connectUserDb();
});
afterAll(() => {
  return testFn.disconnectDb();
});

test("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});
test("나이는 30", () => {
  expect(user.age).toBe(30);
});
test("성별은 남성", () => {
  expect(user.gender).toBe("male");
});

describe("Car 관련 작업", () => {
  let car;

  beforeAll(async () => {
    car = await testFn.connectCarDb();
  });
  afterAll(() => {
    return testFn.disconnectCarDb();
  });

  test("이름은 z4", () => {
    expect(car.name).toBe("z4");
  });
  test("브랜드는 bmw", () => {
    expect(car.brand).toBe("bmw");
  });
  test("색상은 red", () => {
    expect(car.color).toBe("red");
  });
});

// 테스트 실행 순서

beforeAll(() => console.log("밖 beforeAll")); // 1
beforeEach(() => console.log("밖 beforeEach")); // 2, 6
afterEach(() => console.log("밖 afterEach")); // 4, 10
afterAll(() => console.log("밖 afterAll")); // 12

test("0 + 1 = 1", () => {
  expect(testFn.add(0, 1)).toBe(1); // 3
});

describe("Car 관련 작업", () => {
  beforeAll(() => console.log("안 beforeAll")); // 5
  beforeEach(() => console.log("안 beforeEach")); // 7
  afterEach(() => console.log("안 afterEach")); // 9
  afterAll(() => console.log("안 afterAll")); // 11

  test("0 + 1 = 1", () => {
    expect(testFn.add(0, 1)).toBe(1); // 8
  });
});
