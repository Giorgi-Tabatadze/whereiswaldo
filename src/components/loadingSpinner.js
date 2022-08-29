/* eslint-disable react/jsx-boolean-value */
import { ThreeDots } from "react-loader-spinner";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";
import { CSSProperties } from "react";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2000;
`;
const override = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "z-index": "2000",
  scale: "2",
};

function LoadingSpinner(props) {
  const { Loading } = props;

  if (!Loading) {
    return null;
  }

  const modal = (
    <>
      <ModalOverlay />
      <ScaleLoader
        color="gray"
        loading={true}
        cssOverride={override}
        size={300}
      />
    </>
  );

  return modal;
}

export default LoadingSpinner;
