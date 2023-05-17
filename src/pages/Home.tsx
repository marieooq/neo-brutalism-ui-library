import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SampleImage from "../assets/neo-brutalism-image3.jpg";
import Button from "../components/Button";
import Card from "../components/Card";
import CheckBoxLarge from "../components/CheckboxLarge";

const Home = () => {
  return (
    <div className="snap-mandatory snap-y overflow-scroll">
      <section className="bg-teal-200 w-full  h-[calc(100vh-80px)] snap-start snap-always shrink-0">
        <div className="w-full h-full bg-pink-200">
          <img
            src={SampleImage}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="bg-green-200 w-full h-screen snap-start snap-always shrink-0 ">
        <div className="w-10/12 h-full m-auto py-20 flex justify-between items-center">
          <div className="flex-1 mr-12">
            <h2 className="text-7xl mb-12 tracking-tight font-bold">
              Check the box that applies to your situation.
            </h2>
            <div className="flex mb-4">
              <CheckBoxLarge />
              <p className="text-2xl ml-3">I want to build cool UIs.</p>
            </div>
            <div className="flex  mb-4">
              <CheckBoxLarge />
              <p className="text-2xl ml-3">
                However, I don't want to spend too much time.
              </p>
            </div>
            <div className="flex">
              <CheckBoxLarge />
              <p className="text-2xl ml-3">
                I am familiar with Tailwind CSS or I want to make the most out
                of it.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full h-full border-black border-2 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <img
              src={SampleImage}
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-yellow-200 w-full h-screen snap-start snap-always shrink-0 ">
        <div className="w-10/12 h-full m-auto py-20">
          <h2 className="text-7xl mb-12 tracking-tight font-bold">
            Tailwind based components
          </h2>
          <div className="flex justify-between items-center">
            <div className="w-[30%]">
              <Card />
            </div>
            <div className="w-[30%]">
              <Card />
            </div>
            <div className="w-[30%]">
              <Card />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-violet-300 w-full h-auto snap-start snap-always shrink-0 ">
        <div className="w-10/12 h-full m-auto py-20 flex justify-between items-center">
          <div className="w-2/5 h-full flex flex-col mr-12">
            <div className="w-full">
              <SyntaxHighlighter
                language="javascript"
                style={a11yDark}
                className="rounded-lg"
              >
                {` <button
    className={classNames(
      "h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]",
      { "rounded-none": rounded === "none" },
      { "rounded-md": rounded === "md" },
      { "rounded-full": rounded === "full" },
      {
        "border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":
          disabled,
      }
    )}
    disabled={disabled}
  >
    {buttonText}
  </button>`}
              </SyntaxHighlighter>
            </div>
            {/* <div className="flex-1 w-full h-full border-black border-2 rounded-lg shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <img
              src={SampleImage}
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div> */}
          </div>
          <div className="w-3/5">
            <h2 className="text-7xl mb-6 tracking-tight font-bold">
              All you have to do is just copy and paste the code!
            </h2>
            <p className="text-lg mb-12">
              Elevate your website's visual appeal and leave a lasting
              impression on your audience. Let your creativity shine and create
              a stunning online presence that grabs attention and drives
              engagement. Experience the difference of our services, all at no
              cost, and take your web design to the next level!
            </p>
            <Link to="getting-started">
              <Button buttonText="Get Started" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
