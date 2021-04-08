import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../images/avatar.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#000",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "gray",
  },
}));

// Array which contains text links & icons
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.menuSliderContainer} component="div">
        <Avatar className={classes.avatar} src={avatar} alt="Cris Franco" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
