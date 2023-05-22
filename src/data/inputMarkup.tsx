const inputMarkup = (): string => {
  return `
  <div class="flex flex-col space-y-6">
  <input class=
     "w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
     placeholder="you@example.com"
     />
  <input class=
     "w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-md"
     placeholder="you@example.com"
     />
  <input class=
     "w-96 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full"
     placeholder="you@example.com"
     />
</div>
  `;
};

export default inputMarkup;
