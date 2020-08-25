import React from "react";
import Hero from "./Hero";
import ContentCard from "./ContentCard";
import { Container } from "@material-ui/core";
import "./Home.css";

import heart from "./img/feature_importance_Heart.jpg";

const pages = [
  {
    cardImage: heart,
    typeOfProblem: "Classification",
    title: "Heart Disease Predictor",
    description:
      "Using various heart readings and health metrics, this will show if you have a heart disease",
    to: "/heart-disease",
  },
  // {
  //   cardImage: "",
  //   typeOfProblem: "Regression",
  //   title: "Bull dozer",
  //   description:
  //     "Using various heart readings and health metrics, this will show if you have a heart disease",
  //   to: "/heart-disease",
  // },
  // {
  //   cardImage: "/static/static/media/Mitanshu.ab894f6f.jpg",
  //   typeOfProblem: "Regression",
  //   title: "Bull dozer",
  //   description:
  //     "Using various heart readings and health metrics, this will show if you have a heart disease",
  //   to: "/heart-disease",
  // },
];

function Home() {
  return (
    <div id="home">
      <Hero />
      <Container id="home__latest">
        <ContentCard
          cardImage={pages[0].cardImage}
          typeOfProblem={pages[0].typeOfProblem}
          title={pages[0].title}
          description={pages[0].description}
          to={pages[0].to}
        />
      </Container>
      <Container id="home__list">
        {pages.slice(1).map((page, key) => {
          console.log(key);
          return (
            <ContentCard
              key={key}
              cardImage={page.cardImage}
              typeOfProblem={page.typeOfProblem}
              title={page.title}
              description={page.description}
              to={page.to}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default Home;
