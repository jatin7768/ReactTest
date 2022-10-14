import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

test("Render SearchBar Component", () => {
  render(<SearchBar value="something" />);

  const search = screen.getByTestId("search-input");
  expect(search.getElementsByTagName("label")[0]).toHaveTextContent("Search");
  expect(search.getElementsByTagName("input")[0]).toHaveValue("something");
});

test("Invoke onChange when typed in search bar", async () => {
  const onChange = jest.fn();
  render(<SearchBar title="title" value="" onChange={onChange} />);
  const search = screen.getByTestId("search-input");
  await fireEvent.change(search.getElementsByTagName("input")[0], {
    target: { value: "new" },
  });
  expect(onChange).toBeCalledWith("new");
});
