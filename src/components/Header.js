import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

import {
  selectUserName,
  selectEmail,
  setUserLogout,
  selectPhoto,
  setUserLogin,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function Header() {
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectPhoto);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      navigate("/");
    });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogout());
      navigate("/login");
    });
  };
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg"></img>
              <span>HOME</span>
            </a>

            <a>
              <img src="/images/search-icon.svg"></img>
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg"></img>
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg"></img>
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg"></img>
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg"></img>
              <span>SERIES</span>
            </a>
          </NavMenu>

          <UserImg onClick={signOut} src="photo.jpg" />
        </>
      )}
    </Nav>
  );
}

export default Header;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Login = styled.div`
  cursor: pointer;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const Nav = styled.div`
  overflow-x: hidden;
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 12px;
      letter-spacing: 1.42px;
      position: relative;
      //after->it creates animation line which is showing while hovering, it's like a div block
      &:after {
        content: "";
        color: white;
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
