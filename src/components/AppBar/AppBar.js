import { Header, LinkContainer, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <Header>
        <LinkContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favourite</StyledLink>
        </LinkContainer>
      </Header>
      <hr />
    </>
  );
};
