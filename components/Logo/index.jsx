import styled from "styled-components";
import Image from "next/image";

const LogoContainer = styled.div`
  padding-bottom: 10px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image
        src="/images/NewSkillsGoogle.png"
        alt="logo"
        width={500}
        height={175}
      />
    </LogoContainer>
  );
};

export default Logo;
