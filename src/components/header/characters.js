import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  color: white;
  align-items: center;
`;

const Img = styled.img`
  width: 50px;
  height: auto;
  transition: width 1s;
  &:hover {
    cursor: pointer;
    width: 100px;
  }
`;
const Span = styled.span`
  display: inline-block;
`;

function Charater(props) {
  const { id, name, image } = props;

  return (
    <Div>
      <Img src={image} alt={name} /> <Span>{name}</Span>
    </Div>
  );
}

export default Charater;
