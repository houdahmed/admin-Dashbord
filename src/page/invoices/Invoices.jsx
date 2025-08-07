import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../componeents/Header";

export default function Invoices() {
  return (
    <div>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
      <Box sx={{ height: 650, mx: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
}
