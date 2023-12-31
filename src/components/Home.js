import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movie from "./Movie";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempmovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      //console.log("Here",tempmovies);
      dispatch(setMovies(tempmovies));
    });
  });
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movie />
    </Container>
  );
}

export default Home;

//main is also like a div but it tells browser it is the main div
const Container = styled.main`
  overflow-x: hidden;
  //min-height:calc(100vh-70px);
  min-height: 100vh;
  padding: 0 calc(3.5vw+5px);
  position: relative;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
