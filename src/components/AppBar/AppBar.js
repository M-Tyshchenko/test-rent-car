import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        {/* if logged in show favorites page */}
        <NavLink to="/favorites">Favourite</NavLink>
      </div>

      <div>
        {/* Logged in user menu */}
        <div>
          <p>Welcome, user</p>
          <button type="submit">Logout</button>
        </div>
        {/* OR */}
        {/* Register menu */}
        <ul>
          <li>
            <NavLink to="/register">Sign up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
