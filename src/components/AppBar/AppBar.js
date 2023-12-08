import { Header, LinkContainer, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <Header>
        <LinkContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          {/* if logged in show favorites page */}
          <StyledLink to="/favorites">Favourite</StyledLink>
        </LinkContainer>

        {/* <div> */}
        {/* Logged in user menu */}
        {/* <div> */}
        {/* <p>Welcome, user</p> */}
        {/* <button type="submit">Logout</button> */}
        {/* </div> */}
        {/* OR */}
        {/* Register menu */}
        {/* <ul>
          <li>
            <NavLink to="/register">Sign up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul> */}
        {/* </div> */}
      </Header>
      <hr />
    </>
  );
};
