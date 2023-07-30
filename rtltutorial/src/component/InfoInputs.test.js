import { render, screen } from "@testing-library/react";
import InfoInputs from "./InfoInputs";

test("제목이 있다", () => {
  render(<InfoInputs />);
  // const inputEl = screen.getByRole("textbox", { name: "자기소개" });
  // const inputEl = screen.getByLabelText("자기소개", { selector: "textarea" });
  const inputEl = screen.getByDisplayValue("Tom");
  expect(inputEl).toBeInTheDocument();
});

test("my div가 있다.", () => {
  render(<InfoInputs />);
  const inputEl = screen.getByTestId("my-div");
  expect(inputEl).toBeInTheDocument();
});
