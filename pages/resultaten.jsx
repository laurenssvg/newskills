import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const ResultatenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 10px;
  margin: 20px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  padding: 0 75px;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  padding: 5px;
  justify-content: center;
  display: flex;
  text-align: center;
`;

const ResultatenItem = styled.div`
  border: 1px solid black;
  transform: scale(1);
  transition: 100ms ease-in-out;
  cursor: pointer;
  position: relative;
  padding: 5px;

  &:hover {
    transform: scale(1.3);
    z-index: 10;
    background: white;
  }
`;

const Resultaten = () => {
  return (
    <Layout>
      <Title>Resultaten</Title>
      <h2>Belangrijkste nieuwe inzichten per onderwerp</h2>
      <ResultatenContainer>
        <ResultatenItem>
          <SubTitle>Communiceren/beïnvloeden</SubTitle>
          <List>
            <ListItem> Mezelf beter profileren.</ListItem>
            <ListItem>
              Meer mijn mening laten blijken en niet te snel afhaken.
            </ListItem>
            <ListItem>
              Mensen directer aanspreken en meer betrekken bij mijn verhaal.
            </ListItem>
          </List>
        </ResultatenItem>
        <ResultatenItem>
          <SubTitle>Samenwerken</SubTitle>
          <List>
            <ListItem>Observerend</ListItem>
            <ListItem>
              Proberen om mijn binnenwereld meer met de buitenwereld te
              verbinden.
            </ListItem>
            <ListItem>
              Soms dingen herhalen in een gesprek zodat het binnenkomt bij de
              ander.
            </ListItem>
          </List>
        </ResultatenItem>
        <ResultatenItem>
          <SubTitle>Leiderschap</SubTitle>
          <List>
            <ListItem>BLAUW EN GROEN</ListItem>
            <ListItem>Nauwkeurigheid</ListItem>
            <ListItem>Rationaliteit</ListItem>
            <ListItem>Weloverwogen</ListItem>
            <ListItem>Behulpzaam</ListItem>
          </List>
        </ResultatenItem>
        <ResultatenItem>
          <SubTitle>Veranderen</SubTitle>
          <List>
            <ListItem>Veranderen in kleine stappen</ListItem>
          </List>
        </ResultatenItem>
        <ResultatenItem>
          <SubTitle>Adviseren</SubTitle>
          <List>
            <ListItem>Je rust pakken</ListItem>
            <ListItem>Voel mij het prettigst in de expertrol.</ListItem>
            <ListItem>
              Ik kan de schakel vormen tussen techniek en klant, kan techniek
              vertalen naar begrijpbare taal en vice versa.
            </ListItem>
          </List>
        </ResultatenItem>
      </ResultatenContainer>
    </Layout>
  );
};

export default Resultaten;
