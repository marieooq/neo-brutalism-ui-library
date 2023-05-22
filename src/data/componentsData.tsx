import addIcon from "../assets/add.svg";
import editIcon from "../assets/edit.svg";
import gearIcon from "../assets/gear.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import CheckBox from "../components/Checkbox";
import Dialog from "../components/Dialog";
import DropDown from "../components/DropDown";
import IconButton from "../components/IconButton";
import Input from "../components/Input";
import IconButtonMarkup from "../data/iconButtonMarkup";
import buttonMarkup from "./buttonMarkup";
import cardMarkup from "./cardMarkup";
import checkboxMarkup from "./checkboxMarkup";
import dialogMarkup from "./dialogMarkup";
import dropdownMarkup from "./dropdownMarkup";
import inputMarkup from "./inputMarkup";

const componentsData = [
  { name: "Card", path: "card", component: <Card />, markup: cardMarkup },
  {
    name: "Button",
    path: "button",
    component: (
      <div className="flex justify-evenly space-x-6">
        <Button buttonText="Simple Button" />
        <Button buttonText="Medium Rounded Button" rounded="md" />
        <Button buttonText="Full Rounded Button" rounded="full" />
      </div>
    ),
    markup: buttonMarkup,
  },
  {
    name: "IconButton",
    path: "iconButton",
    component: (
      <>
        <div className="grid grid-cols-3 gap-4">
          <IconButton icon={addIcon} color="pink" />
          <IconButton icon={addIcon} color="pink" rounded="md" />
          <IconButton icon={addIcon} color="pink" rounded="full" />

          <IconButton icon={editIcon} color="cyan" />
          <IconButton icon={editIcon} color="cyan" rounded="md" />
          <IconButton icon={editIcon} color="cyan" rounded="full" />

          <IconButton icon={gearIcon} color="lime" />
          <IconButton icon={gearIcon} color="lime" rounded="md" />
          <IconButton icon={gearIcon} color="lime" rounded="full" />
        </div>
      </>
    ),
    markup: IconButtonMarkup,
  },
  {
    name: "Checkbox",
    path: "checkbox",
    component: <CheckBox />,
    markup: checkboxMarkup,
  },
  {
    name: "Dialog",
    path: "dialog",
    component: <Dialog />,
    markup: dialogMarkup,
  },
  {
    name: "DropDown",
    path: "dropdown",
    component: <DropDown />,
    markup: dropdownMarkup,
  },
  {
    name: "Input",
    path: "input",
    component: (
      <div className="w-full flex flex-col space-y-6">
        <Input />
        <Input rounded="md" />
        <Input rounded="full" />
      </div>
    ),
    markup: inputMarkup,
  },
];

export default componentsData;
