import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];

  test("잠시 후 제목이 나타납니다.", async () => {
    render(<UserList users={users} />);
    const titleEl = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록"
      },
      {
        timeout: 2000
      }
    );
    expect(titleEl).toBeInTheDocument();
  });

  test("ul 이 있다.", () => {
    render(<UserList users={users} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("li는 3개가 나옵니까?", () => {
    render(<UserList users={users} />);
    const liElements = screen.getAllByRole("listitem");
    expect(liElements).toHaveLength(users.length);
  });

  test("li는 비어있습니까?", () => {
    render(<UserList users={[]} />);
    // const liElements = screen.queryByRole("listitem");
    // expect(liElements).not.toBeInTheDocument();
    const liElements = screen.queryAllByRole("listitem");
    expect(liElements).toHaveLength(0);
  });
});
