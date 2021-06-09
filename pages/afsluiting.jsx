import styled from "styled-components";
import Layout from "../components/Layout/Layout";

import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: "800px",
  height: ["350px", "230px"],
  layout: [1, 4],
  photos: [
    {
      source: "https://reganstein.com/wp-content/uploads/2019/04/Colour.png",
    },
    {
      source:
        "https://www.e-zigurat.com/blog/wp-content/uploads/sites/2/2019/04/markus-spiske-666905-unsplash-759x500.jpg",
    },
    {
      source:
        "https://i.pinimg.com/originals/e3/b4/b9/e3b4b9dafde868172246fe56a0128f27.jpg",
    },
    {
      source:
        "https://reisorganisaties.startpagina.be/images/upload/0c/0ca549d83e348a8bdc2ec1661f498b67/bigthumbs/discover-the-world-JSL.jpg",
    },
    {
      source:
        "https://i.pinimg.com/originals/8c/6c/af/8c6caf1c029b9081fe31675c9e2833d6.jpg",
    },
  ],
  showNumOfRemainingPhotos: false,
};

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
        <ReactPhotoCollage {...setting} />
      </AfsluitingContainer>
    </Layout>
  );
};

export default Afsluiting;
