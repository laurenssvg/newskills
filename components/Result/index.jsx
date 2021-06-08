import styled from "styled-components";

const ResultContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  border-bottom: 1px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;

  &:hover {
    background-color: #d8d8d852;
    cursor: pointer;
  }
`;

const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;

  img {
    width: auto;
    height: 100%;
  }
`;

const Name = styled.h3`
  font-size: 15px;
  color: black;
  margin-left: 9px;
  flex: 1;
  display: flex;
`;

const Result = (props) => {
  const { thumbnailSrc, name } = props;

  return (
    <ResultContainer>
      <Thumbnail>
        <img src={thumbnailSrc} />
      </Thumbnail>
      <Name>{name}</Name>
    </ResultContainer>
  );
};

export default Result;
