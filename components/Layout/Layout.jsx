import Logo from "../Logo";
import SearchBar from "../searchBar";
import styled from "styled-components";
import Footer from "../Footer";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
`;

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Logo />
      <SearchBar />
      {children}
      <Footer />
    </AppContainer>
  );
};

export default Layout;
