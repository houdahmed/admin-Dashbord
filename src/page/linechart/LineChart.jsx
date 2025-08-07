import { Box } from "@mui/material";
import React from "react";
import Line from "./Line";
import Header from "../../componeents/Header";

export default function LineChart() {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Line />
    </Box>
  );
}
