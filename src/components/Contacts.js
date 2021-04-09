import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tan",
    borderColor: "tan",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#c1b202",
    },
    "& label": {
      color: "#c1b202",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#c1b202",
      },
      "&:hover fieldset": {
        borderColor: "#c1b202",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#c1b202",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();

  return (
    <Box component="div" style={{ background: "black", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "#c1b202",
              textAlign: "center",
              textTransform: "upperCase",
            }}
          >
            contact me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />

          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
