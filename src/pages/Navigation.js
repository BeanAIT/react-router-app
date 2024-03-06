import { Outlet, Link } from "react-router-dom";
import MuiLink from '@mui/material/Link';

export default function Navigation() {
  return (
    <>
      <nav>
        <Link to="/">
          <MuiLink variant="h5">Home</MuiLink>
        </Link>
        <Link to="/blogs">
          <MuiLink variant="h5">Blogs</MuiLink>
        </Link>
        <Link to="/contact">
          <MuiLink variant="h5">Contact</MuiLink>
        </Link>
      </nav>
      <Outlet />
    </>
  )
};