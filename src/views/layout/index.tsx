import { Link, Outlet } from "react-router-dom";
import style from "./style.module.css";

const index = () => {
  return (
    <>
      <header className={style.header}>
        <h1>Header</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
      <footer className={style.footer}>
        <h1>Footer</h1>
      </footer>
    </>
  );
};
export default index;
