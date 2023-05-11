import Dialog from "./components/Dialog";
import Button from "./components/Button";
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
    </div>
  );
}

export default App;
