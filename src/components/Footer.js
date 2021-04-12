import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      "&:hover": {
        fontSize: "2.1rem",
      },
    },
  },
});

const Footer = () => {
  const [state, setState] = useState({
    isLinkedInClicked: false,
    isGitHubClicked: false,
  });

  const urlClicked = (action, value) => () => {
    setState({ ...state, [action]: value });
  };

  if (state.isGitHubClicked === true || state.isLinkedInClicked === true) {
    const linkedInUrl = "https://www.linkedin.com/";
    const gitHubUrl = "https://www.linkedin.com/in/cris-franco-8401671b7/";

    window.location.href =
      state && state.isGitHubClicked
        ? gitHubUrl
        : state.isLinkedInClicked
        ? linkedInUrl
        : "/";
  }
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#c1b202" }}>
      <BottomNavigationAction
        onClick={urlClicked("isGitHubClicked", true)}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        onClick={urlClicked("isLinkedInClicked", true)}
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
      />
    </BottomNavigation>
  );
};

export default Footer;
