import React from "react";
import styled from "styled-components";
function Details() {
  return (
    <Container>
      <Background>
        <img src="longpond.webp" />
      </Background>

      <ImageTitle>
        <img src="folklore.webp" />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>
      </Controls>

      <Subtitles>2020</Subtitles>
      <Description>
        An intimate music concert featuring Taylor Swift
      </Description>
    </Container>
  );
}

export default Details;

const Subtitles = styled.div`
margin-left:56px;
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
`;
const Description = styled.div`
  margin-left: 56px;
  color:rgb(249,249,249);
  line-height:1.4;
font-size:20px;
min-height:20px;
margin-top:12px;
max-width:760px;
`;
const Controls = styled.div`
  margin-left: 56px;
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  display: flex;
  padding: 0 24px;
  margin-right: 22px;
  align-items: center;
  font-size: 15px;
  height: 56px;
  letter-spacing: 1.8px;
  cursor: pointer;
  border: none;
  background: rgb(249, 249, 249);
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(29, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const GroupButton = styled(AddButton)`
  //background:rgb(0,0,0)
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Container = styled.div`
  //min-height: calc(100vh-70px);
  min-height:calc(100vh - 89px);
  //min-height:100vh;
  padding:0 calc(3.5vw+5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
