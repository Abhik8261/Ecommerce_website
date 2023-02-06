import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/abhik.8261/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dqigf7rd4/image/upload/v1667307673/avatars/joge7lgdcejhwnw5qiru.jpg"
              alt="Founder"
            />
            <Typography>Abhinav Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Abhinav kumar. Only with the
              purpose to Learn MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Profiles</Typography>
            <a
              href="https://www.linkedin.com/in/abhinav-kumar-799725228/"
              target="blank"
            >
              <LinkedIn className="LinkedInSvgIcon" />
            </a>

            <a href="https://www.instagram.com/abhik.8261/" target="blank">
              <InstagramIcon className="instagramSvgIcon" target='_blank' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
