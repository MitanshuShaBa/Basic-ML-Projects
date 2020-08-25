import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { Home, Info } from "@material-ui/icons";
import logo from "./img/pngkit_machine-learning-png_3142869.png";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((_theme) => ({
  sideBar: {
    width: 250,
    background: "#3fb0ac",
    height: "100%",
  },
  listIcon: {
    color: "#11848d",
    textDecoration: "none",
  },
  listText: {
    color: "#11848d",
    textDecoration: "none",
  },
  listItem: {
    textDecoration: "none",
  },
}));

function Navbar() {
  const classes = useStyles();
  let history = useHistory();

  const [state, setState] = useState({ right: false });
  const toggleSidebar = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const menuItems = [
    { listIcon: <Home />, listText: "Home", to: "/" },
    { listIcon: <Info />, listText: "About", to: "/about" },
  ];

  const sideBar = (slider) => (
    <Box className={classes.sideBar} onClick={toggleSidebar("right", false)}>
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem
            button
            className={classes.listItem}
            key={key}
            onClick={() => {
              toggleSidebar("right", false);
              window.scrollTo(0, 0);
              history.push(listItem.to);
            }}
          >
            <ListItemIcon className={classes.listIcon}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listText}>
              <b>{listItem.listText}</b>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "#333333", marginTop: 0 }}
      >
        <Toolbar>
          <IconButton
            style={{ marginRight: 2 }}
            onClick={() => {
              history.push("/");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="not found" height="50vh" />
          </IconButton>
          <Typography style={{ flexGrow: 1 }} variant="h5">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              style={{ textDecoration: "none", color: "white" }}
            >
              Basic ML Projects
            </Link>
          </Typography>
          <IconButton onClick={toggleSidebar("right", true)}>
            <MenuIcon fontSize="large" style={{ color: "white" }} />{" "}
          </IconButton>
          <MobilRightMenuSlider
            anchor="right"
            open={state.right}
            onClose={toggleSidebar("right", false)}
          >
            {sideBar("right")}
          </MobilRightMenuSlider>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
