import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";

const GettingStarted = () => {
  return (
    <div>
      <h1 className="font-bold capitalize text-4xl mb-12"> Getting Started</h1>
      <section className="mb-12">
        <h2 className="text-2xl mb-6">
          Get ready to revolutionize your web design with Neo-Brutalism UI
          library, the amazing solution for creating stunning webpages. Here's
          why you'll love it!
        </h2>
        <div className="mb-8">
          <div className="mb-4 leading-relaxed flex">
            <Checkbox />
            <p className="ml-2 -mt-1.5 align-top">
              <strong>Dazzling Eye-Catching Design:</strong> Ignite your website
              with a burst of vibrant colors and bold shapes. This library
              offers a mesmerizing range of attention-grabbing elements that
              will make your webpages truly stand out from the crowd.
            </p>
          </div>
          <div className="mb-4 leading-relaxed flex">
            <Checkbox />
            <p className="ml-2 -mt-1.5 align-top">
              <strong>Powered by Tailwind CSS:</strong> Harness the power of
              Tailwind CSS, the industry-leading framework for rapid UI
              development. Seamlessly integrate Neo-Brutalism components with
              your project and enjoy the flexibility and efficiency it brings.
              <p>
                <strong>Note:</strong> This library is intended to be used with
                Tailwind CSS. If you haven't installed it yet, please refer to{" "}
                <a
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                  className="underline font-bold"
                >
                  the installation instructions
                </a>
                .
              </p>
            </p>
          </div>
          <div className="leading-relaxed flex">
            <Checkbox />
            <p className="ml-2  -mt-1.5 align-top">
              <strong>Completely Free:</strong> Yes, you read that right!
              Neo-Brutalism UI library is absolutely free. Enhance your webpages
              with stunning designs without spending a dime. Unlock your
              creativity and create impactful websites without breaking your
              budget.
            </p>
          </div>
        </div>
        <div className="mb-4 leading-relaxed">
          <p className="leading-relaxed">
            Get started today and experience the seamless fusion of captivating
            design, Tailwind CSS, ease of use, and affordability – all in one
            incredible package. Don't miss out on this opportunity to elevate
            your web design game.
          </p>
        </div>
        <div className="mb-16 leading-relaxed">
          <p className="leading-relaxed">
            <strong>Note:</strong> If you are a React user, I highly recommend
            cloning{" "}
            <a
              href="https://github.com/marieooq/neo-brutalism-ui-library"
              target="_blank"
              className="underline font-bold "
            >
              the GitHub repository
            </a>{" "}
            and running Storybook. The instructions for how it works are
            described in{" "}
            <a
              href="https://github.com/marieooq/neo-brutalism-ui-library"
              target="_blank"
              className="underline font-bold "
            >
              the README file
            </a>
            .
          </p>
        </div>

        <Link to="/components/card" className="flex justify-end">
          <button className="w-[200px] h-12 border-black border-2 p-2.5 bg-[#A8A6FF] hover:bg-[#918efa] active:bg-[#807dfa] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-full">
            Browse Components
          </button>
        </Link>
      </section>
    </div>
  );
};

export default GettingStarted;
