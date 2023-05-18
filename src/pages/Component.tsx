import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Card from "../components/Card";
import ReactDOMServer from "react-dom/server";
import logo from "../assets/neo-bg-image.png";

const Component = () => {
  const { id } = useParams();
  return (
    <div>
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
          <div>
            <SyntaxHighlighter
              language="javascript"
              style={a11yDark}
              className="rounded-lg w-full break-words"
              wrapLongLines={true}
              lineProps={{ style: { flexWrap: "wrap" } }}
            >
              {ReactDOMServer.renderToStaticMarkup(<Card />)}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </div>
  );
};

export default Component;
