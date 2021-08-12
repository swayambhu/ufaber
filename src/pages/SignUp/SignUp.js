/** @format */

import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Container } from "@material-ui/core";
import CoachingAdvertisement from "./CoachingAdvertisement";
import Input from "../../components/Input";

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        alignContent='center'
        spacing={5}
        className={classes.mainContainer}
      >
        <Grid item xs={12} md={6} className={classes.grid}>
          <CoachingAdvertisement />
        </Grid>

        <Grid item xs={12} md={6} className={classes.grid}>
          <Paper elevation={3} className={classes.signUp__container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1 className={classes.signUp__title}>
                  Book a Free Demo Class
                </h1>
                <h3 className={classes.signUp__description}>
                  Limited Seats Only!
                </h3>
              </Grid>
              <Grid item xs={12}>
                <Container>
                  <form>
                    <Input name="Mobile Number" label="Mobile Number"/>
                  </form>
                </Container>
              </Grid>
            </Grid>

            
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  mainContainer: {
    padding: "5%",
  },
  signUp__container: {
    padding: "3%",
    borderRadius: "15px",
  },
  signUp__title: {
    textAlign: "center",
    fontSize: "24px",
  },
  signUp__description: {
    color: "red",
    textAlign: "center",
    marginBottom: '20px'
  },
}));
export default SignUp;
