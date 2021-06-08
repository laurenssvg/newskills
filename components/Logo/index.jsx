import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const LogoContainer = styled.div`
  padding-bottom: 10px;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Link href="/">
        <Image
          src="/images/NewSkillsGoogle.png"
          alt="logo"
          width={500}
          height={175}
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
