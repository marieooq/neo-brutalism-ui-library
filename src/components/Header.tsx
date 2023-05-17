import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-white h-20 w-full fixed top-0">
      <div className="w-10/12 h-full m-auto flex justify-between items-center">
        <div className="text-2xl font-bold">NEO-UI.</div>
        <nav className="w-1/2">
          <ul className="flex justify-between items-center">
            <li className="inliine-block hover:underline hover:underline-offset-8">
              <Link to="/">Home</Link>
            </li>
            <li className="inliine-block hover:underline hover:underline-offset-8">
              <Link to="/getting-started">Get Started</Link>
            </li>
            <li className="inliine-block hover:underline hover:underline-offset-8">
              <Link to="/components">Components</Link>
            </li>
            <li>
              <Link to="getting-started">
                <Button buttonText="Get Started" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
