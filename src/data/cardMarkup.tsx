const cardMarkup = (): string => {
  return `
  <div class="w-80 h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
   <a href="" class="block cursor-pointer">
      <article class="w-full h-full">
         <figure class="w-full h-1/2 border-black border-b-2">
            <img
               src="https://neo-brutalism-ui-library.vercel.app/assets/neo-brutalism-image3-6c6a875b.jpg"
               alt="thumbnail"
               class="w-full h-full object-cover"
               />
         </figure>
         <div class="px-6 py-5 text-left h-full">
            <p class="text-base mb-4">May 15th, 2023</p>
            <h1 class="text-[32px] mb-4">Neo Brutallism</h1>
            <p class="text-xs mb-4 line-clamp-4">
               Neobrutalism is an aesthetic characterized by high contrast
               elements, bright colors, and bold shapes. It is often used to make
               a statement, as it is meant to be eye-catching and stand out to
               the viewer. It is also used in user interface and web design, with
               features such as vibrant colors and bold shapes. Neobrutalism can
               also be used in print design, with an example being a bold shape
               with a vibrant color fill applied to it.
            </p>
            <strong>Read More</strong>
         </div>
      </article>
   </a>
</div>
        `;
};

export default cardMarkup;
