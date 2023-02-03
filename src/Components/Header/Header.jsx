import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./styles";
import Appbar from "./Appbar";

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Box className={classes.container}>
        <Appbar />
      </Box>
    </Box>
  );
}
