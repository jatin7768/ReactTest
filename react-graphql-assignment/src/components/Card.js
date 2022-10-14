import React from "react";
import { Card as MuiCard, CardContent, Typography } from "@mui/material";

function Card({ title, stargazerCount, onClick }) {
  return (
    <MuiCard onClick={onClick} sx={{ cursor: "pointer" }} data-testid="card">
      <CardContent>
        <Typography variant="h5" align="left">
          {title}
        </Typography>
        <Typography variant="body2" color="grey" align="left" mt={1}>
          Stargazer Count: {stargazerCount}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export default Card;
