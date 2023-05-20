import { useCallback, useContext, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopiedCodeDispatchContext } from "../context/CopiedCodeContext";
import copyIcon from "../assets/copy.svg";
import logo from "../assets/neo-bg-image.png";
import Card from "../components/Card";
import AddButton from "../components/AddButton";
import cardMarkup from "../data/cardMarkup";
import addButtonMarkup from "../data/addButtonMarkup";

type displayingComponentType = {
  component: React.ReactNode;
  markup: () => string;
};

const Component = () => {
  const [text, setText] = useState("");
  const [displayingComponent, setDisplayingComponent] =
    useState<displayingComponentType>({
      component: <Card />,
      markup: cardMarkup,
    });
  const dispatch = useContext(CopiedCodeDispatchContext);

  const { id } = useParams();

  const onCopy = useCallback(() => {
    dispatch &&
      dispatch({
        type: "copied",
      });
  }, [dispatch]);

  const switchComopnents = (id: string) => {
    switch (id) {
      case "card":
        setDisplayingComponent({ component: <Card />, markup: cardMarkup });
        break;
      case "addButton":
        setDisplayingComponent({
          component: <AddButton />,
          markup: addButtonMarkup,
        });
        break;
      default:
        setDisplayingComponent({ component: <Card />, markup: cardMarkup });
    }
  };
  useEffect(() => {
    setText(cardMarkup());
  }, []);

  useEffect(() => {
    id && switchComopnents(id);
  }, [id]);

  return (
    <div className="relative">
      <h1 className="font-bold capitalize text-4xl mb-8">{id}</h1>
      <>
        <div
          className="flex justify-center items-center border-black border-2 rounded mb-12 bg-[#CA8AE0] bg-repeat"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <div className="w-96 py-10">{displayingComponent?.component}</div>
        </div>
        <div className="flex justify-end mb-3">
          <CopyToClipboard onCopy={onCopy} text={text}>
            <button className="flex items-center h-12 border-black border-2 p-2.5 bg-lime-200 hover:bg-lime-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-lime-400">
              <img src={copyIcon} alt="coopy" className="w-5 h-5 mr-2" />
              Copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
        <div>
          <SyntaxHighlighter
            language="javascript"
            style={a11yDark}
            wrapLongLines={true}
            lineProps={{ style: { flexWrap: "wrap" } }}
          >
            {displayingComponent.markup()}
          </SyntaxHighlighter>
        </div>
      </>
    </div>
  );
};

export default Component;
