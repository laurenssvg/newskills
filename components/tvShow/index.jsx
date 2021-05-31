import styled from "styled-components";

const TvShowContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  border-bottom: 1px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;

  img {
    width: auto;
    height: 100%;
  }
`;

const Name = styled.h3`
  font-size: 15px;
  color: black;
  margin-left: 9px;
  flex: 2;
  display: flex;
`;

const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;

const TvShow = (props) => {
  const { thumbnailSrc, name, rating } = props;

  return (
    <TvShowContainer>
      <Thumbnail>
        <img src={thumbnailSrc} />
      </Thumbnail>
      <Name>{name}</Name>
      <Rating> {rating || "N/A"} </Rating>
    </TvShowContainer>
  );
};

export default TvShow;
