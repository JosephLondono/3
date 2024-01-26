/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderComponent } from '../astro_inONjjv8.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { $ as $$Header, a as $$Layout } from './index_yPr_KJq6.mjs';

async function getMovies(page) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGU5MmNmMmJlYjIwNzBkZDQwM2EwNjlhNTQ0ZWU1MCIsInN1YiI6IjY1YWZlN2ExZjhhZWU4MDEwYjIwMGU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZoTDO5cAPWdRGa0770WzSUbEjEdrQGIeezTnehAC8s"
    }
  };
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es-US&page=${page}`, options);
  const { results } = await response.json();
  console.log(results);
  return results;
}
async function getMovieById(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGU5MmNmMmJlYjIwNzBkZDQwM2EwNjlhNTQ0ZWU1MCIsInN1YiI6IjY1YWZlN2ExZjhhZWU4MDEwYjIwMGU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZoTDO5cAPWdRGa0770WzSUbEjEdrQGIeezTnehAC8s"
    }
  };
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-US`, options);
  const informacionPelicula = await response.json().catch((err) => console.error(err));
  console.log(informacionPelicula);
  return informacionPelicula;
}

const $$Astro$3 = createAstro();
const $$SearchMovieById = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SearchMovieById;
  const { id, adult } = Astro2.props;
  const movie = await getMovieById(id);
  console.log(movie);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("grid grid-rows-2 rounded-xl w-48 tarjeta", "class")} data-astro-cid-o42gksqe> <a href=""${addAttribute(movie.poster_path ? `grid` : `grid content-center bg-[#172d69] rounded-xl`, "class")} data-astro-cid-o42gksqe> <img${addAttribute(movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "src")}${addAttribute(movie.title, "alt")}${addAttribute("rounded-xl", "class")} data-astro-cid-o42gksqe> </a> <div${addAttribute("flex flex-col px-2 py-3", "class")} data-astro-cid-o42gksqe> <a href="" class="w-full h-fit text-lg" data-astro-cid-o42gksqe> ${movie.title} </a> <p class="h-fit flex justify-between text-sm" data-astro-cid-o42gksqe> <span class="text-white/40" data-astro-cid-o42gksqe> ${movie.release_date} </span> <span data-astro-cid-o42gksqe> ${adult ? "\u{1F51E}" : ""} </span> </p> </div> </div> `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/searchMovieById.astro", void 0);

const $$Astro$2 = createAstro();
const $$Numberpages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Numberpages;
  let { page } = Astro2.props;
  console.log(page);
  const select = "relative z-10 inline-flex items-center bg-indigo-800 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800";
  const unselect = "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-300 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 focus:z-20 focus:outline-offset-0";
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between border-y border-gray-600 bg-gray-900 px-4 py-3 sm:px-6"> <div class="flex flex-1 justify-between sm:hidden"> <a href="#" class="relative inline-flex items-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">Previous</a> <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">Next</a> </div> <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"> <div> <p class="text-sm text-gray-300">
Showing page
<span class="font-medium">${page}</span> </p> </div> <div> <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination"> <a${addAttribute(parseInt(page) != 1 ? `/movie?page=${parseInt(page) - 1}` : `/movie`, "href")} class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-600 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 focus:z-20 focus:outline-offset-0"> <span class="sr-only">Previous</span> <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path> </svg> </a> <a href="/movie"${addAttribute(page == "1" ? select : unselect, "class")}>1</a> <a href="/movie?page=2" aria-current="page"${addAttribute(page == "2" ? select : unselect, "class")}>2</a> <a href="/movie?page=3" aria-current="page"${addAttribute(page == "3" ? select : unselect, "class")}>3</a> <a href="/movie?page=4" aria-current="page"${addAttribute(page == "4" ? select : unselect, "class")}>3</a> <a href="/movie?page=5" aria-current="page"${addAttribute(page == "5" ? select : unselect, "class")}>5</a> <span${addAttribute(parseInt(page) > 5 && parseInt(page) < 498 ? select : unselect, "class")}>....</span> <a href="/movie?page=498" aria-current="page"${addAttribute(page == "498" ? select : unselect, "class")}>498</a> <a href="/movie?page=499" aria-current="page"${addAttribute(page == "499" ? select : unselect, "class")}>499</a> <a href="/movie?page=500" aria-current="page"${addAttribute(page == "500" ? select : unselect, "class")}>500</a> <a${addAttribute(`/movie?page=${1 + parseInt(page)}`, "href")} class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-600 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 focus:z-20 focus:outline-offset-0"> <span class="sr-only">Next</span> <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path> </svg> </a> </nav> </div> </div> </div> `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/Numberpages.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white dark:bg-gray-900"> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="/" class="flex items-center" target="_blank"> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" class="h-8 me-3" alt="FlowBite Logo"> <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Movie Info</span> </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="https://flowbite.com/" class="hover:underline" target="_blank">Flowbite</a> </li> <li> <a href="https://www.themoviedb.org/" class="hover:underline" target="_blank">The Movie DB</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Me</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="https://github.com/JosephLondono" class="hover:underline " target="_blank">Github</a> </li> <li> <a href="https://discord.gg/4eeurUVvTy" class="hover:underline" target="_blank">Discord</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="#" class="hover:underline">Privacy Policy</a> </li> <li> <a href="#" class="hover:underline">Terms &amp; Conditions</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
</span> <div class="flex mt-4 sm:justify-center sm:mt-0"> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"> <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">Facebook page</span> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"> <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path> </svg> <span class="sr-only">Discord community</span> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17"> <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">Twitter page</span> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">GitHub account</span> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">Dribbble account</span> </a> </div> </div> </div> </footer>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/footer.astro", void 0);

const $$Astro = createAstro();
const $$Movie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Movie;
  let page = Astro2.url.searchParams.get("page");
  page == null ? page = "1" : page = page;
  console.log(page);
  const data = await getMovies(page);
  if (parseInt(page) <= 0 || parseInt(page) > 500)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Movies | Movie Info", "data-astro-cid-6l7ewv7d": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-6l7ewv7d": true })} ${maybeRenderHead()}<main${addAttribute("grid justify-items-center gap-5", "class")} data-astro-cid-6l7ewv7d> <h1${addAttribute("text-4xl", "class")} data-astro-cid-6l7ewv7d>Welcome to <span class="text-gradient" data-astro-cid-6l7ewv7d>Movies Info</span></h1> <h2${addAttribute("text-3xl", "class")} data-astro-cid-6l7ewv7d>Movies</h2> <section${addAttribute("grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", "class")} data-astro-cid-6l7ewv7d> ${data.map((movie) => renderTemplate`${renderComponent($$result2, "SearchMovieById", $$SearchMovieById, { "id": movie.id, "adult": movie.adult, "data-astro-cid-6l7ewv7d": true })}`)} </section> </main> ${renderComponent($$result2, "Numberpages", $$Numberpages, { "page": page, "data-astro-cid-6l7ewv7d": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-6l7ewv7d": true })} ` })} `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/movie.astro", void 0);

const $$file = "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/movie.astro";
const $$url = "/movie";

export { $$Movie as default, $$file as file, $$url as url };
