import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const ConclusieContainer = styled.div`
  width: 100%;
  height: 100%;
  /* justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column; */
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const Conclusie = () => {
  return (
    <Layout>
      <ConclusieContainer>
        <Title>Conclusie</Title>
        <List>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </List>
      </ConclusieContainer>
    </Layout>
  );
};

export default Conclusie;
