/** @format */

import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Title from "./Title";
import photoGrid from "../../assets/images/photoGrid.png";

const CoachingAdvertisement = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <h1 className={classes.title__description}>
          Best Online Coaching
          <br /> for UPSC Preparation
        </h1>
      </Grid>
      <Grid item xs={12} className={classes.asspirants__container}>
        <img
          src={photoGrid}
          alt='aspirants'
          className={classes.asspirants__image}
        />
        <p className={classes.asspirants__description}>
          Thousands of Students from all over India
          <br /> trust UPSC Pathshala for IAS preparation,
          <br /> Now it's <strong>your</strong> chance to clear UPSC!
        </p>
      </Grid>
    </>
  );
};

const useStyles = makeStyles(() => ({
  title__description: {
    fontWeight: 500,
    fontSize: "46px",
  },
  asspirants__container: {
    position: "relative",
  },
  asspirants__image: {
    width: "100%",
    height: "100%",
    filter: "brightness(12%)",
  },
  asspirants__description: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -80%)",
    width: "90%",
    textAlign: "center",
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "300",
  },
}));

export default CoachingAdvertisement;
