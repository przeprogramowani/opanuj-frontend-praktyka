import { NavLink, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div className="p-2 flex flex-row justify-between items-center bg-white shadow">
        <div className="flex gap-2 ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            Home
          </NavLink>
          <NavLink
            to="/v1"
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            App v1
          </NavLink>
          <NavLink
            to="/v2"
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            App v2
          </NavLink>
          <NavLink
            to="/v3"
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
          >
            App v3
          </NavLink>
        </div>
        <p>Hello, John!</p>
      </div>
      <hr />
      <div className="p-2">
        <Outlet />
      </div>
    </>
  );
}
