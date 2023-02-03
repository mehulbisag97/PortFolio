import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styles";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
const navlinks = [
  {
    label: "ABOUT",
    id: "about",
  },
  { label: "PORTFOLIO", id: "portfolio" },
  {
    label: "CONTACT",
    id: "contact",
  },
];
export default function Appbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h5"
          component="h6"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          {"<GreatCoders/>"}
        </Typography>
        <Box sx={{ display: { xs: "none", xl: "block", sm: "block" } }}>
          {navlinks.map((nav, index) => (
            <Button color="inherit" key={index} sx={{ fontWeight: "bold" }}>
              {nav.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: "bock", xl: "none", sm: "none" } }}>
          <IconButton color="inherit" onClick={() => console.log("Clicked...")}>
            <MenuOpenRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
