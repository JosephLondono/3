/* empty css                          */
import 'html-escaper';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_ksA69i4q.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                          */
/* empty css                          */

const $$Astro$9 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white dark:bg-gray-900"> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="/" class="flex items-center" target="_blank"> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" class="h-8 me-3" alt="FlowBite Logo"> <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Movie Info</span> </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 justify-items-center"> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Recursos</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="https://flowbite.com/" class="hover:underline" target="_blank">Flowbite</a> </li> <li> <a href="https://www.themoviedb.org/" class="hover:underline" target="_blank">The Movie DB</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sigueme</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="https://github.com/JosephLondono" class="hover:underline " target="_blank">Github</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Joseph Londoño</a>. Pagina hecha para fines educativos.
</span> <div class="flex mt-4 sm:justify-center sm:mt-0"> <a href="https://github.com/JosephLondono" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">GitHub account</span> </a> </div> </div> </div> </footer>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/footer.astro", void 0);

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute("w-full flex justify-between py-2 px-16 flex-col gap-10 text-center items-center md:flex-row", "class")}> <a href="/"> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo Page"${addAttribute("w-52", "class")}> </a> <nav> <ol${addAttribute("flex flex-col gap-2 [&>li]:text-xl justify-around md:flex-row md:gap-14 lg:gap-28", "class")}> <li> <a href="/movie/">
Peliculas
</a> </li> <li> <a href="/tv/">
Tv
</a> </li> <li> <a href="/person/">
Personas
</a> </li> </ol> </nav> </header>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/header.astro", void 0);

const $$Astro$7 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, metaImage, metaImageAlt } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="robots" content="index, follow"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(metaImage, "content")}><meta property="og:image:alt"${addAttribute(metaImageAlt, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/layouts/Layout.astro", void 0);

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
  const infoMovie = await response.json().catch((err) => console.error(err));
  return infoMovie;
}
async function getVideosById(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGU5MmNmMmJlYjIwNzBkZDQwM2EwNjlhNTQ0ZWU1MCIsInN1YiI6IjY1YWZlN2ExZjhhZWU4MDEwYjIwMGU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZoTDO5cAPWdRGa0770WzSUbEjEdrQGIeezTnehAC8s"
    }
  };
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  const { results } = await response.json().catch((err) => console.error(err));
  console.log(results);
  return results;
}
async function getTv(page) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGU5MmNmMmJlYjIwNzBkZDQwM2EwNjlhNTQ0ZWU1MCIsInN1YiI6IjY1YWZlN2ExZjhhZWU4MDEwYjIwMGU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZoTDO5cAPWdRGa0770WzSUbEjEdrQGIeezTnehAC8s"
    }
  };
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?language=es-US&page${page}1`, options);
  const { results } = await response.json().catch((err) => console.error(err));
  return results;
}
async function getPerson(page) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGU5MmNmMmJlYjIwNzBkZDQwM2EwNjlhNTQ0ZWU1MCIsInN1YiI6IjY1YWZlN2ExZjhhZWU4MDEwYjIwMGU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jZoTDO5cAPWdRGa0770WzSUbEjEdrQGIeezTnehAC8s"
    }
  };
  const response = await fetch(`https://api.themoviedb.org/3/person/popular?language=es-US&page=${page}`, options);
  const { results } = await response.json().catch((err) => console.error(err));
  return results;
}

const $$Astro$5 = createAstro();
const $$MovieTarget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MovieTarget;
  const { title, date, poster_path, adult, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("grid grid-rows-2 rounded-xl w-48 tarjeta", "class")} data-astro-cid-fy5n2ipt> <a${addAttribute(`/movie/id/${id}`, "href")}${addAttribute(poster_path ? `grid` : `grid content-center bg-[#172d69] rounded-xl`, "class")} data-astro-cid-fy5n2ipt> <img${addAttribute(poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "src")}${addAttribute(title, "alt")}${addAttribute("rounded-xl", "class")} data-astro-cid-fy5n2ipt> </a> <div${addAttribute("flex flex-col px-2 py-3", "class")} data-astro-cid-fy5n2ipt> <a href="" class="w-full h-fit text-lg" data-astro-cid-fy5n2ipt> ${title} </a> <p class="h-fit flex justify-between text-sm" data-astro-cid-fy5n2ipt> <span class="text-white/40" data-astro-cid-fy5n2ipt> ${date} </span> <span data-astro-cid-fy5n2ipt> ${adult ? "\u{1F51E}" : ""} </span> </p> </div> </div> `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/MovieTarget.astro", void 0);

const $$Astro$4 = createAstro();
const $$Numberpages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Numberpages;
  let { page } = Astro2.props;
  console.log(page);
  const select = "relative z-10 inline-flex items-center bg-indigo-800 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800";
  const unselect = "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-300 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 focus:z-20 focus:outline-offset-0";
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between border-y border-gray-600 bg-gray-900 px-4 py-3 sm:px-6"> <div class="flex flex-1 justify-between sm:hidden"> <a href="#" class="relative inline-flex items-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">Anterior</a> <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700">Siguiente</a> </div> <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"> <div> <p class="text-sm text-gray-300">
Mostrando pagina
<span class="font-extrabold">${page}</span> </p> </div> <div> <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination"> <a${addAttribute(parseInt(page) != 1 ? `/movie/index.html?page=${parseInt(page) - 1}` : `/movie`, "href")} class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-600 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 focus:z-20 focus:outline-offset-0"> <span class="sr-only">Anterior</span> <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path> </svg> </a> <a href="/movie/index.html"${addAttribute(page == "1" ? select : unselect, "class")}>1</a> <a href="/movie/index.html?page=2" aria-current="page"${addAttribute(page == "2" ? select : unselect, "class")}>2</a> <a href="/movie/index.html?page=3" aria-current="page"${addAttribute(page == "3" ? select : unselect, "class")}>3</a> <a href="/movie/index.html?page=4" aria-current="page"${addAttribute(page == "4" ? select : unselect, "class")}>4</a> <a href="/movie/index.html?page=5" aria-current="page"${addAttribute(page == "5" ? select : unselect, "class")}>5</a> <span${addAttribute(parseInt(page) > 5 && parseInt(page) < 498 ? select : unselect, "class")}>....</span> <a href="/movie/index.html?page=498" aria-current="page"${addAttribute(page == "498" ? select : unselect, "class")}>498</a> <a href="/movie/index.html?page=499" aria-current="page"${addAttribute(page == "499" ? select : unselect, "class")}>499</a> <a href="/movie/index.html?page=500" aria-current="page"${addAttribute(page == "500" ? select : unselect, "class")}>500</a> <a${addAttribute(parseInt(page) != 500 ? `/movie/index.html?page=${parseInt(page) + 1}` : `/movie/index.html?page=500`, "href")} class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-600 ring-1 ring-inset ring-gray-700 hover:bg-gray-800 focus:z-20 focus:outline-offset-0"> <span class="sr-only">Siguiente</span> <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path> </svg> </a> </nav> </div> </div> </div> `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/Numberpages.astro", void 0);

const $$Astro$3 = createAstro();
const prerender$1 = false;
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  let page = Astro2.url.searchParams.get("page");
  page == null ? page = "1" : page = page;
  console.log(page);
  if (parseInt(page) <= 0 || parseInt(page) > 500)
    return Astro2.redirect("/404");
  const data = await getMovies(page);
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Peliculas Populares | Movie Info", "description": "Ver todas las peliculas populares", "metaImage": "https://i.ibb.co/4YwJQw9/image.png", "metaImageAlt": "Pagina Principal de peliculas populares", "data-astro-cid-slfjtgyf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main${addAttribute("grid justify-items-center gap-5", "class")} data-astro-cid-slfjtgyf> <h2${addAttribute("text-3xl", "class")} data-astro-cid-slfjtgyf>Peliculas</h2> <section${addAttribute("grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", "class")} data-astro-cid-slfjtgyf> ${data.map((movie) => renderTemplate`${renderComponent($$result2, "MovieTarget", $$MovieTarget, { "title": movie.title, "date": movie.release_date, "poster_path": movie.poster_path, "adult": movie.adult, "id": movie.id, "data-astro-cid-slfjtgyf": true })}`)} </section> </main> ${renderComponent($$result2, "Numberpages", $$Numberpages, { "page": page, "data-astro-cid-slfjtgyf": true })} ` })} `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/movie/index.astro", void 0);

const $$file$1 = "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/movie/index.astro";
const $$url$1 = "/movie";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$PersonTarget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PersonTarget;
  const { name, id, profile_path, movies } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("grid grid-rows-2 rounded-xl w-48 tarjeta", "class")} data-astro-cid-a3vsyell> <a${addAttribute(`/person/id/${id}`, "href")}${addAttribute(profile_path ? `grid` : `grid content-center bg-[#172d69] rounded-xl`, "class")} data-astro-cid-a3vsyell> <img${addAttribute(profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "src")}${addAttribute(name, "alt")}${addAttribute("rounded-xl", "class")} data-astro-cid-a3vsyell> </a> <div${addAttribute("flex flex-col px-2 py-3", "class")} data-astro-cid-a3vsyell> <a href="" class="w-full h-fit text-lg" data-astro-cid-a3vsyell> ${name} </a> <p class="h-fit flex justify-between text-sm" data-astro-cid-a3vsyell> <span class="text-white/40" data-astro-cid-a3vsyell> ${movies.map((movie) => {
    return movie.title ? `${movie.title}, ` : `${movie.name}, `;
  })} </span> </p> </div> </div> `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/personTarget.astro", void 0);

const $$Astro$1 = createAstro();
const $$TvTarget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TvTarget;
  const { title, date, poster_path, adult, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("grid grid-rows-2 rounded-xl w-48 tarjeta", "class")} data-astro-cid-tnaluw7w> <a${addAttribute(`/tv/id/${id}`, "href")}${addAttribute(poster_path ? `grid` : `grid content-center bg-[#172d69] rounded-xl`, "class")} data-astro-cid-tnaluw7w> <img${addAttribute(poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "src")}${addAttribute(title, "alt")}${addAttribute("rounded-xl", "class")} data-astro-cid-tnaluw7w> </a> <div${addAttribute("flex flex-col px-2 py-3", "class")} data-astro-cid-tnaluw7w> <a href="" class="w-full h-fit text-lg" data-astro-cid-tnaluw7w> ${title} </a> <p class="h-fit flex justify-between text-sm" data-astro-cid-tnaluw7w> <span class="text-white/40" data-astro-cid-tnaluw7w> ${date} </span> <span data-astro-cid-tnaluw7w> ${adult ? "\u{1F51E}" : ""} </span> </p> </div> </div> `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/tvTarget.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const dataMovies = await getMovies("1");
  const dataTv = await getTv("1");
  const dataPerson = await getPerson("1");
  let contMovie = 0;
  let contTv = 0;
  let contPerson = 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Movie Info.", "description": "Pagina para buscar infomracion de peliculas nuevas, antiguas y populares", "metaImage": "https://i.ibb.co/2Wq16xL/image.png", "metaImageAlt": "Pagina Principal de Movies Info", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main${addAttribute("grid justify-items-center gap-3 sm:gap-1", "class")} data-astro-cid-j7pv25f6> <h1${addAttribute("text-4xl", "class")} data-astro-cid-j7pv25f6>Bienvenido a <span class="text-gradient" data-astro-cid-j7pv25f6>Movies Info</span></h1> <article${addAttribute("grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3", "class")} data-astro-cid-j7pv25f6> <section${addAttribute("grid justify-items-center", "class")} data-astro-cid-j7pv25f6> <h2${addAttribute("text-3xl text-center", "class")} data-astro-cid-j7pv25f6>Movies</h2> <div${addAttribute("grid grid-cols-2 gap-8 mt-6 mb-4", "class")} data-astro-cid-j7pv25f6> ${dataMovies.map((movie) => (contMovie++, contMovie < 5 ? renderTemplate`${renderComponent($$result2, "MovieTarget", $$MovieTarget, { "title": movie.title, "date": movie.release_date, "poster_path": movie.poster_path, "adult": movie.adult, "id": movie.id, "data-astro-cid-j7pv25f6": true })}` : null))} </div> <a href="/movie" data-astro-cid-j7pv25f6> <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" data-astro-cid-j7pv25f6> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" data-astro-cid-j7pv25f6>
Ver Mas
</span> </button> </a> </section> <section${addAttribute("grid justify-items-center", "class")} data-astro-cid-j7pv25f6> <h2${addAttribute("text-3xl text-center", "class")} data-astro-cid-j7pv25f6>Tv</h2> <div${addAttribute("grid grid-cols-2 gap-8 mt-6 mb-4", "class")} data-astro-cid-j7pv25f6> ${dataTv.map((tv) => (contTv++, contTv < 5 ? renderTemplate`${renderComponent($$result2, "TvTarget", $$TvTarget, { "title": tv.name, "date": tv.first_air_date, "poster_path": tv.poster_path, "adult": tv.adult, "id": tv.id, "data-astro-cid-j7pv25f6": true })}` : null))} </div> <a href="/tv/" data-astro-cid-j7pv25f6> <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" data-astro-cid-j7pv25f6> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" data-astro-cid-j7pv25f6>
Ver Mas
</span> </button> </a> </section> <section${addAttribute("grid justify-items-center", "class")} data-astro-cid-j7pv25f6> <h2${addAttribute("text-3xl text-center", "class")} data-astro-cid-j7pv25f6>Person</h2> <div${addAttribute("grid grid-cols-2 gap-8 mt-6 mb-4", "class")} data-astro-cid-j7pv25f6> ${dataPerson.map((Person) => (contPerson++, contPerson < 5 ? renderTemplate`${renderComponent($$result2, "PersonTarget", $$PersonTarget, { "name": Person.name, "id": Person.id, "profile_path": Person.profile_path, "movies": Person.known_for, "data-astro-cid-j7pv25f6": true })}` : null))} </div> <a href="/tv/" data-astro-cid-j7pv25f6> <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" data-astro-cid-j7pv25f6> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" data-astro-cid-j7pv25f6>
Ver Mas
</span> </button> </a> </section> </article> </main> ` })} `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/index.astro", void 0);

const $$file = "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, getVideosById as a, index as b, getMovieById as g, index$1 as i };
