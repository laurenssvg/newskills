import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const ResultatenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const Resultaten = () => {
  return (
    <Layout>
      <ResultatenContainer>
        <Title>Resultaten</Title>
      </ResultatenContainer>
    </Layout>
  );
};

export default Resultaten;
