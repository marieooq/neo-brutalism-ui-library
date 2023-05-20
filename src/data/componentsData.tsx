import Card from "../components/Card";
import AddButton from "../components/AddButton";
import cardMarkup from "./cardMarkup";
import addButtonMarkup from "../data/addButtonMarkup";

const componentsData = [
  { name: "Card", path: "card", component: <Card />, markup: cardMarkup },
  {
    name: "AddButton",
    path: "addButton",
    component: <AddButton />,
    markup: addButtonMarkup,
  },
];

export default componentsData;
