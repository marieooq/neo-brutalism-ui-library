import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SampleImage from "../assets/neo-brutalism-image3.jpg";
import Button from "../components/Button";
import Card from "../components/Card";
import CheckBoxLarge from "../components/CheckboxLarge";
import cardMarkup from "../data/cardMarkup";

const Home = () => {
  return (
    <div className="snap-mandatory snap-y overflow-scroll">
      <section className="bg-teal-200 w-full  h-[calc(100vh-80px)] snap-start snap-always shrink-0">
        <div className="w-full h-full bg-pink-200 relative">
          <img
            src={SampleImage}
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-[36px] right-0 left-0 m-auto w-[200px] h-12 block md:hidden">
            <Link to="overview">
              <button className="w-[200px] h-12 border-black border-2 p-2.5 bg-[#FFF59F] hover:bg-[#FFF066] active:bg-[#FFE500] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-full">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-green-200 w-full md:h-screen snap-start snap-always shrink-0 ">
        <div className="px-5 md:px-24 h-full py-20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 md:mr-12 mb-12 md:mb-0">
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
      <section className="bg-yellow-200 w-full md:h-screen snap-start snap-always shrink-0 ">
        <div className="px-5 md:px-24 h-full py-20">
          <h2 className="text-7xl mb-12 tracking-tight font-bold">
            Tailwind based components
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-[30%] mb-12 md:mb-0">
              <Card />
            </div>
            <div className="md:w-[30%] mb-12 md:mb-0">
              <Card />
            </div>
            <div className="md:w-[30%]">
              <Card />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-violet-300 w-full h-auto snap-start snap-always shrink-0 ">
        <div className="px-5 md:px-24 h-full py-20 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-6/12 md:h-full flex flex-col md:mr-12 mb-12 md:mb-0">
            <div className="w-full">
              <SyntaxHighlighter
                language="javascript"
                style={a11yDark}
                className="rounded-lg"
              >
                {cardMarkup()}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-full md:w-5/12">
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
            <Link to="overview">
              <Button buttonText="Get Started" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
