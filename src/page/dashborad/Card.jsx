import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export default function Card({
  icon,
  title,
  seheme,
  subtitle,
  increase,
  data,
}) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        minWidth: "333px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <Stack direction={"column"} gap={1}>
        {icon}
        <Typography> {title}</Typography>
        <Typography>{subtitle}</Typography>
      </Stack>
      <Stack direction={"column"} alignItems={"center"}>
        <Box height={"70px"} width={"70px"}>
          <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.7}
            theme={{
              // @ts-ignore
              textColor: theme.palette.text.primary,
              fontSize: 11,
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: theme.palette.text.primary,
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.secondary,
                  },
                },
              },
              grid: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                  },
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: theme.palette.text.primary,
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  fill: theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: "#000000",
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                container: {
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
            padAngle={0.6}
            cornerRadius={2}
            colors={{ scheme: seheme }}
            enableArcLinkLabels={false}
            enableArcLabels={false}
          />
        </Box>
        <Typography>{increase}</Typography>
      </Stack>
    </Paper>
  );
}
