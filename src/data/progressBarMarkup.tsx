const checkboxMarkup = (): string => {
  return `
     <div
        class="w-72 md:w-full max-w-md border-black border-2 focus:outline-none h-9 overflow-hidden shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-white rounded-full"
      >
        <div
          class="w-[70%] h-full flex flex-row items-center justify-end overflow-hidden bg-lime-200 hover:bg-lime-300 rounded-full"
        >
          <h1 class="mr-2 font-bold opacity-60">70%</h1>
        </div>
      </div>

  `;
};

export default checkboxMarkup;
