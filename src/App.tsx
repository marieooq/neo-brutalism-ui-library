import Dialog from "./components/Dialog";
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import EditButton from "./components/EditButton";
import AddButton from "./components/AddButton";
import HomeIconButton from "./components/HomeIconButton";
import GearIconButton from "./components/GearIconButton";
import Input from "./components/Input";
import CheckBoxLarge from "./components/CheckboxLarge";
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
            <nav className="w-1/2">
              <ul className="flex justify-between items-center">
                <li className="inliine-block hover:underline hover:underline-offset-8">
                  <a href="#">Link 1</a>
                </li>
                <li className="inliine-block hover:underline hover:underline-offset-8">
                  <a href="#">Link 2</a>
                </li>
                <li className="inliine-block hover:underline hover:underline-offset-8">
                  <a href="#">Link 3</a>
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
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <section className="bg-green-200 w-full h-screen">
        <div className="w-10/12 h-full m-auto py-20 flex justify-between items-center">
          <div className="flex-1 pr-12">
            <h2 className="text-7xl mb-12">
              Check the box that applies to your situation.
            </h2>
            <div className="flex mb-4">
              <CheckBoxLarge />
              <p className="text-2xl ml-3">I want to build cool UIs.</p>
            </div>
            <div className="flex  mb-4">
              <CheckBoxLarge />
              <p className="text-2xl ml-3">
                However, I don't want to spend too much time.
              </p>
            </div>
            <div className="flex">
              <CheckBoxLarge />
              <p className="text-2xl ml-3">
                I am familiar with Tailwind CSS or I want to make the most out
                of it.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full h-full border-black border-2 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <img
              src={SampleImage}
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-yellow-200 w-full h-screen">
        <div className="w-10/12 h-full m-auto py-20">
          <h2 className="text-7xl mb-12 tracking-tight font-bold">
            Tailwind based components
          </h2>
          <div className="flex justify-between items-center">
            <div className="w-[30%]">
              <Card />
            </div>
            <div className="w-[30%]">
              <Card />
            </div>
            <div className="w-[30%]">
              <Card />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pink-200 w-full h-screen">Section</section>
    </div>
  );
}

export default App;
