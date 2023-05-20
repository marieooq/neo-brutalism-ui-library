import { useCallback, useContext, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactDOMServer from "react-dom/server";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopiedCodeDispatchContext } from "../context/CopiedCodeContext";
import copyIcon from "../assets/copy.svg";
import logo from "../assets/neo-bg-image.png";
import Card from "../components/Card";
import cardMarkup from "../data/cardMarkup";

const Component = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(CopiedCodeDispatchContext);

  const { id } = useParams();

  const onCopy = useCallback(() => {
    dispatch({
      type: "copied",
    });
  }, [dispatch]);

  useEffect(() => {
    setText(ReactDOMServer.renderToStaticMarkup(<Card />));
  }, []);

  return (
    <div className="relative">
      <h1 className="font-bold capitalize text-4xl mb-8">{id}</h1>
      {id === "card" && (
        <>
          <div
            className="flex justify-center items-center border-black border-2 rounded mb-12 bg-[#CA8AE0] bg-repeat"
            style={{ backgroundImage: `url(${logo})` }}
          >
            <div className="w-96 py-10">
              <Card />
            </div>
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
              className="rounded-lg w-full break-words"
              wrapLongLines={true}
              lineProps={{ style: { flexWrap: "wrap" } }}
            >
              {/* {ReactDOMServer.renderToStaticMarkup(<Card />)} */}
              {cardMarkup()}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </div>
  );
};

export default Component;
