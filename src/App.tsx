import Dialog from "./components/Dialog";
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import EditButton from "./components/EditButton";
import AddButton from "./components/AddButton";
import HomeIconButton from "./components/HomeIconButton";
import GearIconButton from "./components/GearIconButton";
import Input from "./components/Input";
import CheckBox from "./components/Checkbox";
import Card from "./components/Card";
import SampleImage from "./assets/neo-brutalism-image3.jpg";
import "./App.css";

function App() {
  return (
    <div className="grid grid-rows-4">
      <div className="bg-teal-200 w-full h-screen">
        <header className="bg-white h-20">
          <div className="w-10/12 h-full m-auto flex justify-between items-center">
            <div className="text-2xl font-bold">NEO-UI.</div>
            <nav className="w-3/4">
              <ul className="flex justify-around items-center">
                <li className="inliine-block hover:underline hover:underline-offset-8">
                  <a href="#">Link 1</a>
                </li>
                <li className="inliine-block hover:underline hover:underline-offset-8">
                  <a href="#">Link 1</a>
                </li>
                <li className="inliine-block hover:underline hover:underline-offset-8">
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <Button buttonText="Get Started" />
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="w-full h-[calc(100vh-80px)] bg-pink-200">
          <img
            src={SampleImage}
            alt="thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-green-200 w-full h-screen">Section</div>
      <div className="bg-yellow-200 w-full h-screen">Section</div>
      <div className="bg-pink-200 w-full h-screen">Section</div>
    </div>
  );
}

export default App;
