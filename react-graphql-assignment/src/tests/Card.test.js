import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../components/Card";

test("Render Card Component", () => {
  render(<Card title="title" stargazerCount={5} />);

  const title = screen.getByTestId("card").getElementsByTagName("h5")[0];
  expect(title).toHaveTextContent("title");

  const stargazerCount = screen
    .getByTestId("card")
    .getElementsByTagName("p")[0];
  expect(stargazerCount).toHaveTextContent("Stargazer Count: 5");
});

test("Invoke onClick when card is clicked", async () => {
  const onClick = jest.fn();
  render(<Card title="title" stargazerCount={5} onClick={onClick} />);
  const card = screen.getByTestId("card");
  await fireEvent.click(card);
  expect(onClick).toBeCalled();
});
