import { TextField } from "@mui/material";

function SearchBar({ value, onChange }) {
  return (
    <TextField
      data-testid="search-input"
      label="Search"
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ width: "100%" }}
    />
  );
}

export default SearchBar;
