const buttonMarkup = (): string => {
  return `
  <div class="flex justify-evenly space-x-6">  
  <button
     class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
     >
  Simple Button
  </button>
  <button
     class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
     >
  Medium Rounded Button
  </button>
  <button
     class="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full"
     >
  Full Rounded Button
  </button>
</div>
        `;
};

export default buttonMarkup;
