import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const KompasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: auto 20vh auto;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
`;

const KompasImg = styled.img`
  border-radius: 50%;
  width: 100%;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
`;

const KompasTopLeft = styled.div``;
const KompasTopMid = styled.div``;
const KompasTopRight = styled.div``;
const KompasMidLeft = styled.div``;
const KompasMidRight = styled.div``;
const KompasBottomLeft = styled.div``;
const KompasBottomMid = styled.div``;
const KompasBottomRight = styled.div``;

const KompasDefinitief = () => {
  return (
    <Layout>
      <Title>Definitieve Kompas</Title>
      <KompasContainer>
        <KompasTopLeft>
          <h3>True nature</h3>
          <List>
            <li>Ruimdenkende, open-minded persoon.</li>
            <li>Sociaal en betrokken, als collega maar ook als vriend.</li>
            <li>Perfectionist</li>
            <li>Soms een dromer (grote binnenwereld)</li>
            <li>Observerend</li>
            <li>Nauwkeurig</li>
            <li>Rationeel </li>
            <li>Behulpzaam </li>
            <li>Respectvol</li>
            <li>Een blauw-groene persoonlijkheid</li>
          </List>
        </KompasTopLeft>
        <KompasTopMid></KompasTopMid>
        <KompasTopRight>
          <h3>Unique talents</h3>
          <div>
            Ik kan <b>gepassioneerd</b> en met kennis van zaken mijn standpunt
            overbrengen, waarbij ik in de communicatie inspeel op en rekening
            houd met de mensen om mij heen. Ik kan goed <b>luisteren</b> naar
            anderen. Ik kan de <b>schakel vormen</b> tussen techniek en klant,
            kan techniek vertalen naar begrijpbare taal en vice versa. Ik kan{" "}
            <b>anderen goed helpen</b>, dingen uitleggen en het hierdoor naar
            hun zin maken. Ik houd ook altijd <b>overzicht</b> op het grotere
            plaatje, en verlies mezelf niet in details. Ik kan goed{" "}
            <b>analytisch</b> denken en gedachtes omzetten in bruikbare code. Ik
            kan succesvol een <b>patroon doorbreken</b> door het stellen van
            kleine doelen, om uiteindelijk een groter doel te bereiken. Hiermee
            kan ik succesvol <b>verandering</b> bij mezelf bewerkstelligen.
          </div>
        </KompasTopRight>
        <KompasMidLeft></KompasMidLeft>
        <KompasImg src="https://scx2.b-cdn.net/gfx/news/hires/2015/1-researchersf.jpg" />
        <KompasMidRight></KompasMidRight>
        <KompasBottomLeft>
          <h3>Most important principles, moral values</h3>
          <List>
            <li>Eerlijkheid</li>
            <li>Integriteit</li>
            <li>Verantwoordelijkheid</li>
            <li>Tolerant</li>
          </List>
        </KompasBottomLeft>
        <KompasBottomMid></KompasBottomMid>
        <KompasBottomRight>
          <h3>Heart’s wishes, desire</h3>
          <List>
            <li>
              Een gedreven developer zijn met kennis van zaken van de nieuwste
              technologieën en methodes. Breed inzetbaar en onafhankelijk.
            </li>
            <li>Zoveel mogelijk van de wereld zien.</li>
          </List>
        </KompasBottomRight>
      </KompasContainer>
    </Layout>
  );
};

export default KompasDefinitief;
