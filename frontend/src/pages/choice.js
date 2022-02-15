import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import "./choiceComponent/choiceComponent.css";
import { StackedLineChartTwoTone } from "@mui/icons-material";
const images = [
  {
    url: "img/MBTI.png",
    title: "MBTI",
    width: "100%",
    link: "mbti",
  },
  {
    url: "img/lifestyle.jpg",
    title: "Life Style",
    width: "100%",
    link: "lifeStyle",
  },
  {
    url: "img/dog.png",
    title: "Dog",
    width: "100%",
    link: "dogTrait",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 250,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 10,
  bottom: 10,
  backgroundSize: "cover",
  backgroundPosition: "center 50%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 10,
  bottom: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 10,
  bottom: 10,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Choice() {
  return (
    <Stack
      height="85vh"
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1, overflow: "hidden", px: 0 }}
    >
      {images.map((image) => (
        <ImageButton
          onClick={() => {
            console.log(image.link);
          }}
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <Link
            to={`/recommend/${image.link}`}
            style={{ textDecoration: "none" }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </Link>
        </ImageButton>
      ))}
    </Stack>
  );
}
