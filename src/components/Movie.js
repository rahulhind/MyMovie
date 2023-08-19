import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
function Movie() {
    const movies = useSelector(selectMovies);
   // console.log("This is",movies);

  return (
    <Container>
      <h1>Recommended for you</h1>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap>
              <img src={movie.cardImg} />
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movie;
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    border: 4px solid rgba(249, 249, 249, 0.5);
    border-color: rgba(249, 249, 249, 0.5);
    transform: scale(1.05);
  }
`;
