import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
      <header>
        <h1>Список и детали</h1>
        <nav>
          <NavLink to="/" className="active">
            На главную
          </NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer>@2024</footer>
    </>
  );
};

export default Layout;
