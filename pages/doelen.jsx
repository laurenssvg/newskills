import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const DoelenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const Doelen = () => {
  return (
    <Layout>
      <DoelenContainer>
        <Title>Doelen</Title>
      </DoelenContainer>
    </Layout>
  );
};

export default Doelen;
