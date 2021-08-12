import React from 'react';
import { makeStyles } from "@material-ui/styles";



const Title = () => {
    const classes = useStyles();
    return (
      <h1 className={classes.title}>
        <strong>upsc</strong> pathshala
      </h1>
    );
}
 
const useStyles = makeStyles(() => ({
  title: {
    textTransform: "uppercase",
    fontWeight: 400,
    strong: {
      fontWeight: 900,
    },
  },
}));
export default Title;