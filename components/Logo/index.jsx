import styled from "styled-components";
import Image from "next/image";

const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image
        src="/images/NewSkillsGoogle.png"
        alt="logo"
        width={500}
        height={150}
      />
    </LogoContainer>
  );
};

export default Logo;
