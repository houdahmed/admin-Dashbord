import { Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Card from "./card";
import { data1, data2, data3, data4 } from "./data";

export default function Row1() {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      mt={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12.361"}
        subtitle={"Email Sent"}
        increase={"+14%"}
        data={data1}
        seheme={"category10"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subtitle={"Sales obtained"}
        increase={"+21%"}
        data={data2}
        seheme={"set1"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subtitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        seheme={"pastel1"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subtitle={"Traffic Received"}
        increase={"+43%"}
        data={data4}
        seheme={"accent"}
      />
    </Stack>
  );
}
