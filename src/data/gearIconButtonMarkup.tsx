const gearIconButtonMarkup = (): string => {
  return `
  import classNames from "classnames";

type EditButtonType = {
  size?: "lg" | "md" | "sm";
  rounded?: "none" | "md" | "full";
};
const EditButton = ({ size = "sm", rounded = "none" }: EditButtonType) => {
  return (
    <button
      className={classNames(
        "border-black border-2 rounded bg-[#FFF59F] hover:bg-[#FFF066] active:bg-[#FFE500]",
        {
          "w-10 h-10 p-2.5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]":
            size === "sm",
        },
        {
          "w-14 h-14 p-4 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]":
            size === "md",
        },
        {
          "w-24 h-24 p-9  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]":
            size === "lg",
        },
        { "rounded-none": rounded === "none" },
        { "rounded-md": rounded === "md" },
        { "rounded-full": rounded === "full" }
      )}
    >
      {size === "lg" ? (
        <svg
          width="28"
          height="28"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.59 1.38501L26.615 3.41001C27.8 4.58001 27.8 6.48501 26.615 7.65501L6.77 27.5H0.5V21.23L16.1 5.61501L20.345 1.38501C21.515 0.215007 23.42 0.215007 24.59 1.38501ZM3.5 24.5L5.615 24.59L20.345 9.84501L18.23 7.73001L3.5 22.46V24.5Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.06 0.590001L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L4.18 18H0V13.82L10.4 3.41L13.23 0.590001C14.01 -0.189999 15.28 -0.189999 16.06 0.590001ZM2 16L3.41 16.06L13.23 6.23L11.82 4.82L2 14.64V16Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  );
};

export default EditButton;



  `;
};

export default gearIconButtonMarkup;
