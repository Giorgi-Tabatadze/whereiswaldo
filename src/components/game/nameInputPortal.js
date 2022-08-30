/* eslint-disable jsx-a11y/label-has-associated-control */
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 50px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  text-align: center;
  gap: 10px;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

function NameInputPortal(props) {
  const { timeElapsed, setUserName } = props;

  const [nameInput, setNameInput] = useState("");

  if (!timeElapsed) {
    return null;
  }

  const modal = (
    <>
      <ModalOverlay />
      <ModalDiv>
        <h2>Enter your name so we can display it on our Leaderboard</h2>
        <p>Your result is: {timeElapsed} seconds!</p>
        <label>
          Name:
          <input
            type="text"
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
          />
        </label>
        <button
          type="button"
          onClick={() => {
            setUserName(nameInput);
          }}
        >
          Submit
        </button>
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
      </ModalDiv>
    </>
  );

  return ReactDOM.createPortal(modal, document.getElementById("portal"));
}

export default NameInputPortal;
