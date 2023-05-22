const addButtonMarkup = (): string => {
  return `
  <div class="flex justify-evenly space-x-8">
   <!--   rectangular -->
   <button
      class=
      "border-black border-2 bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-14 h-14 p-4 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
      <svg
         width="24"
         height="24"
         viewBox="0 0 28 28"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         >
         <path
            d="M10.8425 24V0H13.1575V24H10.8425ZM0 13.1664V10.8336H24V13.1664H0Z"
            fill="black"
            />
      </svg>
   </button>
   <!--   rounded medium -->
   <button
      class=
      "border-black border-2 rounded-md bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-14 h-14 p-4 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
      <svg
         width="24"
         height="24"
         viewBox="0 0 28 28"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         >
         <path
            d="M10.8425 24V0H13.1575V24H10.8425ZM0 13.1664V10.8336H24V13.1664H0Z"
            fill="black"
            />
      </svg>
   </button>
   <!--   rounded full -->
   <button
      class=
      "border-black border-2 rounded-full bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-14 h-14 p-4 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
      <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
         d="M10.8425 24V0H13.1575V24H10.8425ZM0 13.1664V10.8336H24V13.1664H0Z"
         fill="black"
         />
   </svg>
   </button>
</div>
  `;
};

export default addButtonMarkup;
