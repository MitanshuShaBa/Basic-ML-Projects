import React from "react";
import {
  Container,
  Typography,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";

import "./About.css";

import mitanshu from "./img/Mitanshu.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function About() {
  const matches = useMediaQuery("(max-width:480px)");
  const title = matches ? "h5" : "h4";
  const description = matches ? "h6" : "h5";

  return (
    <div style={{ height: "100vh" }}>
      <Container id="about">
        <img width="275vw" src={mitanshu} alt="Mitanshu" />
        <Typography
          align="center"
          variant={title}
          style={{ color: "white", marginTop: "8px" }}
        >
          My name is Mitanshu Reshamwala.
        </Typography>
        <Typography
          align="center"
          variant={description}
          style={{ color: "#C0C0C0", marginTop: "8px" }}
        >
          I am the developer of this website and the showcased projects. You can
          approach me on the following links.
        </Typography>
        <div className="flex justify-content-space-evenly ">
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/rmitanshu-0111/"
          >
            <LinkedInIcon style={{ color: "#0072b1 " }} fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Github"
            href="https://github.com/MitanshuShaBa"
          >
            <GitHubIcon style={{ color: "white" }} fontSize="large" />
          </IconButton>
        </div>
      </Container>
    </div>
  );
}

export default About;
