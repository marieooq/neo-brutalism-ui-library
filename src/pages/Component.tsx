import { useCallback, useContext, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import copyIcon from "../assets/copy.svg";
import Card from "../components/Card";
import { CopiedCodeDispatchContext } from "../context/CopiedCodeContext";
import cardMarkup from "../data/cardMarkup";
import componentsData from "../data/componentsData";

type displayingComponentType = {
  name: string;
  path: string;
  component: React.ReactNode;
  markup: () => string;
};

const Component = () => {
  const [displayingComponent, setDisplayingComponent] =
    useState<displayingComponentType>({
      name: "Card",
      path: "card",
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
    const selectedData = componentsData.find((obj) => obj.path === id);
    selectedData && setDisplayingComponent(selectedData);
  };

  useEffect(() => {
    id && switchComopnents(id);
  }, [id]);

  return (
    <div className="relative">
      <h1 className="font-bold capitalize text-4xl mb-8">{id}</h1>
      {displayingComponent && (
        <>
          <div
            className="flex justify-center items-center border-black border-2 rounded mb-12 bg-violet-300 min-h-[360px]"
            // style={{ backgroundImage: `url(${logo})` }}
          >
            <div className="py-10">{displayingComponent?.component}</div>
          </div>
          <div className="flex justify-end mb-3">
            <CopyToClipboard
              onCopy={onCopy}
              text={displayingComponent?.markup()}
            >
              <button className="flex items-center h-12 border-black border-2 p-2.5 bg-[#FFF59F] hover:bg-[#FFF066] active:bg-[#FFE500] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <img src={copyIcon} alt="coopy" className="w-5 h-5 mr-2" />
                Copy to clipboard
              </button>
            </CopyToClipboard>
          </div>
          <div>
            <SyntaxHighlighter
              language="javascript"
              style={a11yDark}
              lineProps={{ style: { flexWrap: "wrap" } }}
            >
              {displayingComponent?.markup()}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </div>
  );
};

export default Component;
