import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/gametagr.jpeg";
import project2 from "../images/querycuisine.jpeg";
import project3 from "../images/weatherdashboard.jpeg";
import project4 from "../images/passwordgenerator.jpeg";
import project5 from "../images/workouttracker.jpeg";
import project6 from "../images/notetaker.jpeg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#5d5d58",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/*Project 1*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  GameTagr
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The following application is a video game review page that
                  allows the user to search for games that have reviews from
                  real gamers.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Github Repo
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Project 2*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Query Cuisine
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A simple food app that allows users to search for recipes
                  based on ingredients that they have on hand.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Github Repo
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Project 3*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Weather Dashboard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Weather-Dashboard is an application to find a weather
                  condition of a given city both the current and 5-Days forecast
                  at the same time.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Github Repo
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Project 4*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Password Generator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A password generator application that uses a series of prompts
                  and alerts to guide the user through entering valid password
                  parameters. It then generates a password that fits those
                  constraints using random number generation.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Github Repo
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Project 5*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project5"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Workout Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This application helps the user track their progress through
                  daily workouts. A user can log any number of exercises for the
                  day's workout. They can then see stats and graphs for their
                  completed workouts on the stats page.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Github Repo
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Project 6*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project6"
                height="140"
                image={project6}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Note Taker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The following application uses node js to create a webpage
                  that displays a note taking service. It allows for the user to
                  save their notes, create new notes, and delete old ones.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Github Repo
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
