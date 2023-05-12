import Dialog from "./components/Dialog";
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import PencilIconButton from "./components/PencilIconButton";
import AddIconButton from "./components/AddIconButton";
import "./App.css";

function App() {
  return (
    <div className="space-y-16">
      <div>
        <Dialog />
      </div>
      <div className="flex space-x-4">
        <Button buttonText="Confirm" rounded="none" />
        <Button buttonText="Confirm" rounded="md" />
        <Button buttonText="Confirm" rounded="full" />
        <Button buttonText="Confirm" rounded="none" disabled />
      </div>
      <div className="flex">
        <DropDown />
      </div>
      <div className="flex space-x-4">
        <PencilIconButton size="sm" rounded="none" />
        <PencilIconButton size="md" rounded="md" />
        <PencilIconButton size="lg" rounded="full" />
      </div>
      <div className="flex space-x-4">
        <AddIconButton size="sm" rounded="none" />
        <AddIconButton size="md" rounded="md" />
        <AddIconButton size="lg" rounded="full" />
      </div>
    </div>
  );
}

export default App;
