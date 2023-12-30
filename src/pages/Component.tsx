import { useCallback, useContext, useEffect, useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import copyIcon from "../assets/copy.svg";
import Card from "../components/Card";
import { CopiedCodeDispatchContext } from "../context/CopiedCodeContext";
import cardMarkup from "../data/cardMarkup";
import componentsData from "../data/componentsData";
import SampleImage from "../assets/neo-brutalism-image1.jpg";
import githubIcon from "../assets/github.svg";
import IconButton from "../components/IconButton";

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
      component: (
        <Card
          thumbnail={SampleImage}
          date="June 15th, 2023"
          title="Neo Brutallism"
          description="Neobrutalism is an aesthetic characterized by high contrast
              elements, bright colors, and bold shapes. It is often used to make
              a statement, as it is meant to be eye-catching and stand out to
              the viewer. It is also used in user interface and web design, with
              features such as vibrant colors and bold shapes. Neobrutalism can
              also be used in print design, with an example being a bold shape
              with a vibrant color fill applied to it."
          callToActionText="Get Started"
          calllToActionLink="/overview"
        />
      ),
      markup: cardMarkup,
    });
  const refElement = useRef<HTMLInputElement>(null);
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
    <div className="relative" ref={refElement}>
      <h1 className="font-bold capitalize text-4xl mb-8">{id}</h1>
      {displayingComponent && (
        <>
          <div className="flex justify-center items-center border-black border-2 rounded mb-12 py-10 bg-violet-100 min-h-[360px]">
            <div>{displayingComponent?.component}</div>
          </div>
          <div className="flex justify-end items-center mb-3 space-x-4">
            <div className="block cursor-pointer">
              <a
                href={`https://github.com/marieooq/neo-brutalism-ui-library/blob/main/src/components/${displayingComponent.name}.tsx`}
                target="_blank"
              >
                <IconButton icon={githubIcon} color="yellow" />
              </a>
            </div>

            <CopyToClipboard
              onCopy={onCopy}
              text={displayingComponent?.markup()}
            >
              <button className="flex items-center h-10 border-black border-2 p-2.5 bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]">
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
