import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#383838",
    color: "white",
    marginBottom: "5vh",
  },
  media: {
    height: 180,
  },
});

export default function ContentCard({
  cardImage = "",
  typeOfProblem = "Type Of Problem",
  title = "Title",
  description = "Decription",
  to = "/",
}) {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          window.scrollTo(0, 0);
          history.push(to);
        }}
      >
        <CardMedia
          className={classes.media}
          image={cardImage}
          title={`Project Media ${title}`}
        />
        <CardContent>
          <Typography style={{ color: "#0a939e" }}>{typeOfProblem}</Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" style={{ color: "white" }} component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
