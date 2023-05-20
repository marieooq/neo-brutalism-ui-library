import Card from "../components/Card";
import AddButton from "../components/AddButton";
import cardMarkup from "./cardMarkup";
import addButtonMarkup from "../data/addButtonMarkup";
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

const componentsData = [
  { name: "Card", path: "card", component: <Card />, markup: cardMarkup },
  {
    name: "AddButton",
    path: "addButton",
    component: <AddButton />,
    markup: addButtonMarkup,
  },
  {
    name: "Button",
    path: "button",
    component: <Button buttonText="Enable" />,
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
    component: <Input />,
    markup: inputMarkup,
  },
];

export default componentsData;
