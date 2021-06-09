import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const DoelenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const List = styled.ol`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 60vw;
`;

const ListItem = styled.li`
  margin: 5px;
  transform: scale(1);
  color: black;
  transition: 150ms ease-in-out;

  &:hover {
    color: black;
    margin: 25px;
    transform: scale(1.5);
    cursor: pointer;
    border: 1px solid black;
    padding: 10px;
    background: #f1f1f1;
  }
`;

const Doelen = () => {
  return (
    <Layout>
      <DoelenContainer>
        <Title>Persoonlijke ontwikkeldoelen</Title>
        <List>
          <ListItem>
            Zichtbaarder zijn in communicatie, bijvoorbeeld in vergaderingen.
            Minder afwachtend zijn en meer het voortouw nemen.
          </ListItem>
          <ListItem>
            Meer overtuigd zijn van mijn eigen kunnen in mijn vakgebied Software
            Development en dit inzetten voor procesverbetering binnen het team.
          </ListItem>
        </List>
      </DoelenContainer>
    </Layout>
  );
};

export default Doelen;
