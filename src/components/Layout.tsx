import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="wrapper">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/uncontrolled" className="link">
          Uncontrolled
        </Link>
        <Link to="/controlled" className="link">
          Controlled
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export { Layout };
