import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-white h-20 w-full fixed top-0 z-40">
      <div className="w-10/12 h-full m-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          NEO-UI.
        </Link>
        <nav>
          <ul className="flex justify-end items-center">
            <li className="inliine-block hover:underline hover:underline-offset-8 mr-8">
              <Link to="/components/card">Components</Link>
            </li>
            <li>
              <Link to="overview">
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
