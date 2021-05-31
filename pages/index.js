import styled from "styled-components";
import Logo from "../components/Logo";
import SearchBar from "../components/searchBar";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
`;

export default function Home() {
  return (
    <AppContainer>
      <Logo />
      <SearchBar />
    </AppContainer>
  );
}
