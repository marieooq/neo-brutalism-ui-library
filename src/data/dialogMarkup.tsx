const dialogMarkup = (): string => {
  return `
  <div class="w-96 px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center">
   <div>
      <h1 class="text-2xl mb-4">The message you want goes in here.</h1>
      <div class="flex space-x-2 mx-auto w-32">
         <button class="text-base">Cancel</button>
         <button
            class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full"
            >
         Enable
         </button>
      </div>
   </div>
  </div>
  `;
};

export default dialogMarkup;
