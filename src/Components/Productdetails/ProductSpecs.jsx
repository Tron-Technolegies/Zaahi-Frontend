import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ProductSpecs({ specs }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 3,
        marginBottom: 3,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
      }}
    >
      <Table sx={""} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
            <TableCell
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Specs
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: "#eff6ff" }}>
          {specs.map((item) => {
            return (
              <TableRow
                key={item.spec}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  {item.spec}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ textAlign: "center" }}
                >
                  {item.value}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
