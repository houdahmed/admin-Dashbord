import React from "react";
import Pie from "./pie";
import { Box } from "@mui/material";
import Header from "../../componeents/Header";

export default function PieChart() {
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Pie />
    </Box>
  );
}
