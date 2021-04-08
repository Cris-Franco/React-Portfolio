import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/avatar.png";

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Cris Franco" />
    </Box>
  );
};

export default Header;
