import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const ResultatenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  margin-top: 20px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  padding: 0 20px;
  text-align: center;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const ResultatenTopLeft = styled.div``;
const ResultatenTopMid = styled.div``;
const ResultatenTopRight = styled.div``;
const ResultatenMidLeft = styled.div``;
const ResultatenMidRight = styled.div``;

const Resultaten = () => {
  return (
    <Layout>
      <Title>Resultaten</Title>
      <ResultatenContainer>
        <ResultatenTopLeft>
          <h3>Communiceren/beïnvloeden</h3>
        </ResultatenTopLeft>
        <ResultatenTopMid>
          <h3>Samenwerken</h3>
        </ResultatenTopMid>
        <ResultatenTopRight>
          <h3>Leiderschap</h3>
        </ResultatenTopRight>
        <ResultatenMidLeft>
          <h3>Veranderen</h3>
        </ResultatenMidLeft>
        <ResultatenMidRight>
          <h3>Adviseren</h3>
        </ResultatenMidRight>
      </ResultatenContainer>
    </Layout>
  );
};

export default Resultaten;
