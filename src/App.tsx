import Dialog from "./components/Dialog";
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import PencilIconButton from "./components/PencilIconButton";
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
        <PencilIconButton size="sm" />
        <PencilIconButton size="md" />
        <PencilIconButton size="lg" />
      </div>
    </div>
  );
}

export default App;
