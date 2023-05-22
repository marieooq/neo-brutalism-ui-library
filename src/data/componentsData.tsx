import Card from "../components/Card";
import AddButton from "../components/AddButton";
import cardMarkup from "./cardMarkup";
import IconButtonMarkup from "../data/iconButtonMarkup";
import Button from "../components/Button";
import buttonMarkup from "./buttonMarkup";
import CheckBox from "../components/Checkbox";
import checkboxMarkup from "./checkboxMarkup";
import Dialog from "../components/Dialog";
import dialogMarkup from "./dialogMarkup";
import DropDown from "../components/DropDown";
import dropdownMarkup from "./dropdownMarkup";
import EditButton from "../components/EditButton";
import editButtonMarkup from "./editButtonMarkup";
import GearIconButton from "../components/GearIconButton";
import gearIconButtonMarkup from "./gearIconButtonMarkup";
import Input from "../components/Input";
import inputMarkup from "./inputMarkup";
import IconButton from "../components/IconButton";
import addIcon from "../assets/add.svg";
import editIcon from "../assets/edit.svg";
import gearIcon from "../assets/gear.svg";

const componentsData = [
  { name: "Card", path: "card", component: <Card />, markup: cardMarkup },
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
    name: "AddButton",
    path: "addButton",
    component: (
      <div className="flex justify-evenly space-x-8">
        <AddButton />
        <AddButton rounded="md" />
        <AddButton rounded="full" />
      </div>
    ),
    markup: IconButtonMarkup,
  },
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
    name: "EditButton",
    path: "editButton",
    component: <EditButton />,
    markup: editButtonMarkup,
  },
  {
    name: "GearIconButton",
    path: "gearIconButton",
    component: <GearIconButton />,
    markup: gearIconButtonMarkup,
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
