import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const IntroductieContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const Introductie = () => {
  return (
    <Layout>
      <IntroductieContainer>
        <Title>1. Introductie</Title>
      </IntroductieContainer>
    </Layout>
  );
};

export default Introductie;
