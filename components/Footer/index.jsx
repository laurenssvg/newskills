import styled from "styled-components";

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  word-spacing: 3px;
  font-size: 17px;
  padding-bottom: 20px;
`;

const Footer = () => {
  return <FooterContainer>NewSkills Practitioner 2021</FooterContainer>;
};

export default Footer;
