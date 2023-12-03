import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="header-wrapper">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/uncontrolled" className="link">
          Uncontrolled
        </NavLink>
        <NavLink to="/controlled" className="link">
          Controlled
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};

export { Layout };
