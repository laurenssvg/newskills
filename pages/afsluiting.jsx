import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const AfsluitingContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Afsluiting = () => {
  return (
    <Layout>
      <AfsluitingContainer>
        <Title>Bedankt voor het luisteren!</Title>
      </AfsluitingContainer>
    </Layout>
  );
};

export default Afsluiting;
