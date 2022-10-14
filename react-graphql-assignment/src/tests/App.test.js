import App, { GET_TOPIC_DETAILS } from "../App";
import { MockedProvider } from "@apollo/client/testing";
import { fireEvent, render, screen } from "@testing-library/react";

const topicMock = {
  request: {
    query: GET_TOPIC_DETAILS,
    variables: {
      name: "react",
    },
  },
  result: {
    data: {
      topic: {
        relatedTopics: [
          { id: 1, name: "angular", stargazerCount: 5 },
          { id: 2, name: "react-native", stargazerCount: 10 },
        ],
      },
    },
  },
};

test("Render App Component", async () => {
  render(
    <MockedProvider mocks={[topicMock]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const cards = await screen.findAllByTestId("card");
  expect(cards).toHaveLength(2);
  expect(cards[0].getElementsByTagName("h5")[0]).toHaveTextContent("angular");
  expect(cards[0].getElementsByTagName("p")[0]).toHaveTextContent(
    "Stargazer Count: 5"
  );

  expect(cards[1].getElementsByTagName("h5")[0]).toHaveTextContent(
    "react-native"
  );
  expect(cards[1].getElementsByTagName("p")[0]).toHaveTextContent(
    "Stargazer Count: 10"
  );
});

test("Search Topics", async () => {
  render(
    <MockedProvider mocks={[topicMock]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  const searchField = await (
    await screen.findByTestId("search-input")
  ).getElementsByTagName("input")[0];
  fireEvent.change(searchField, { target: { value: "react-native" } });
  const cards = await screen.findAllByTestId("card");
  expect(cards).toHaveLength(1);

  expect(cards[0].getElementsByTagName("h5")[0]).toHaveTextContent(
    "react-native"
  );
  expect(cards[0].getElementsByTagName("p")[0]).toHaveTextContent(
    "Stargazer Count: 10"
  );
});
