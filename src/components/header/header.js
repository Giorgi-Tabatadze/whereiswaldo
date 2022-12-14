/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Characters from "./gameHeader";
import logo from "./logo2.png";

const HeaderDiv = styled.div`
  position: sticky;
  z-index: 50;
  top: 0;
  width: 100vw;
  max-width: 100%;
  min-height: 70px;
  background-color: black;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  align-items: center;
  justify-items: center;
`;

const Logo = styled.img`
  width: 200px;
`;

function Header(props) {
  const { characters, leaderboard } = props;

  let header = (
    <HeaderDiv className="header">
      <Link to="/leaderboard">
        <button type="button">Leaderboard</button>
      </Link>
      <Logo src={logo} alt="Game Logo" />
    </HeaderDiv>
  );

  if (characters) {
    header = (
      <HeaderDiv className="header">
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <Characters characters={characters} />
      </HeaderDiv>
    );
  } else if (leaderboard) {
    header = (
      <HeaderDiv className="header">
        <Link to="/">
          <button type="button">Home</button>
        </Link>
        <h2>LeaderBoard</h2>
      </HeaderDiv>
    );
  }

  return header;
}

export default Header;
