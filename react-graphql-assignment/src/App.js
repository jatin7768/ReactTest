import { gql, useQuery } from "@apollo/client";
import { Box } from "@mui/system";
import { useMemo, useState } from "react";
import Card from "./components/Card";
import LoadingSkeletons from "./components/LoadingSkeletons";
import SearchBar from "./components/SearchBar";

export const GET_TOPIC_DETAILS = gql`
  query GetTopic($name: String!) {
    topic(name: $name) {
      relatedTopics {
        id
        name
        stargazerCount
      }
    }
  }
`;

function App() {
  const [name, setName] = useState("react");
  const [search, setSearch] = useState("");
  const { data, loading } = useQuery(GET_TOPIC_DETAILS, {
    variables: { name },
  });

  const filteredData = useMemo(() => {
    return (
      data?.topic.relatedTopics.filter((relatedTopics) =>
        relatedTopics.name.toLowerCase().includes(search.toLocaleLowerCase())
      ) ?? []
    );
  }, [data?.topic.relatedTopics, search]);

  return (
    <>
      <Box m={4}>
        <SearchBar value={search} onChange={setSearch} />
      </Box>
      <Box display="flex" gap={4} m={4}>
        {loading && <LoadingSkeletons />}
        {filteredData.map((relatedTopic) => (
          <Card
            key={relatedTopic.id}
            onClick={() => setName(relatedTopic.name)}
            title={relatedTopic.name}
            stargazerCount={relatedTopic.stargazerCount}
          />
        ))}
      </Box>
    </>
  );
}

export default App;
