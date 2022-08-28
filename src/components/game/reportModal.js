import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  margin-left: -100px;
  z-index: 100;
  padding: 10px 50px;
  max-width: 200px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-radius: 20px;
  text-align: center;
  text-transform: capitalize;
`;

function ReportModal(props) {
  const { reportModalStatus } = props;

  const modalText =
    reportModalStatus.color === "red"
      ? "Search Again"
      : `Correct! You found ${reportModalStatus.characterName}`;

  const modal = reportModalStatus ? (
    <Modal backgroundColor={reportModalStatus.color}>{modalText}</Modal>
  ) : null;

  return modal;
}

export default ReportModal;
