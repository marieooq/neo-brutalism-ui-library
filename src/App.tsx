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
import "./App.css";

function App() {
  return (
    <div className="grid gap-8 grid-cols-3 grid-rows-3">
      <div>
        <Dialog />
      </div>
      <div className="flex justify-evenly items-center">
        <Button buttonText="Confirm" rounded="none" />
        <Button buttonText="Confirm" rounded="md" />
        <Button buttonText="Confirm" rounded="full" />
        <Button buttonText="Confirm" rounded="none" disabled />
      </div>
      <div className="flex">
        <DropDown />
      </div>
      <div className="flex justify-evenly items-center">
        <EditButton size="sm" rounded="none" />
        <EditButton size="md" rounded="md" />
        <EditButton size="lg" rounded="full" />
      </div>
      <div className="flex justify-evenly items-center">
        <AddButton size="sm" rounded="none" />
        <AddButton size="md" rounded="md" />
        <AddButton size="lg" rounded="full" />
      </div>
      <div className="flex space-x-4 items-center">
        <HomeIconButton />
        <GearIconButton />
      </div>
      <div className="flex flex-col space-y-4">
        <Input />
        <Input rounded="md" />
        <Input rounded="full" />
      </div>
      <div className="flex flex-col justify-items-start items-start space-y-4">
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </div>
      <div className="flex  space-y-4">
        <Card />
      </div>
    </div>
  );
}

export default App;
