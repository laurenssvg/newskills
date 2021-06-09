import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const KompasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const Kompas = () => {
  return (
    <Layout>
      <KompasContainer>
        <Title>Kompas</Title>
      </KompasContainer>
    </Layout>
  );
};

export default Kompas;
