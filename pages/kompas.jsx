import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const KompasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 2fr 1fr 2fr;
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

const Kompas = () => {
  return (
    <Layout>
      <Title>Kompas</Title>
      <KompasContainer>
        <KompasTopLeft>
          <h3>True nature</h3>
          <List>
            <li>Ruimdenkende, open-minded persoon.</li>
            <li>Sociaal en betrokken, als collega maar ook als vriend.</li>
            <li>Perfectionist</li>
          </List>
        </KompasTopLeft>
        <KompasTopMid></KompasTopMid>
        <KompasTopRight>
          <h3>Unique talents</h3>
          <div>
            Ik kan <b>gepassioneerd</b> en met kennis van zaken mijn standpunt
            overbrengen, waarbij ik in de communicatie inspeel op en rekening
            houd met de mensen om mij heen. Ik kan goed <b>luisteren</b> naar
            anderen. Ik houd ook altijd overzicht op het <b>grotere plaatje</b>,
            en verlies mezelf niet in details. Ik kan goed <b>analytisch</b>{" "}
            denken en gedachtes omzetten in bruikbare code.
          </div>
        </KompasTopRight>
        <KompasMidLeft></KompasMidLeft>
        <Link href="/kompasDefinitief">
          <a>
            <KompasImg src="https://scx2.b-cdn.net/gfx/news/hires/2015/1-researchersf.jpg" />
          </a>
        </Link>
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

export default Kompas;
