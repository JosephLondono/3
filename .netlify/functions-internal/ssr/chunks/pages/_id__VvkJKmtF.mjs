/* empty css                          */
import 'html-escaper';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_Y2qDL4Fj.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white dark:bg-gray-900"> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="/" class="flex items-center" target="_blank"> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" class="h-8 me-3" alt="FlowBite Logo"> <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Movie Info</span> </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 justify-items-center"> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Recursos</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="https://flowbite.com/" class="hover:underline" target="_blank">Flowbite</a> </li> <li> <a href="https://www.themoviedb.org/" class="hover:underline" target="_blank">The Movie DB</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sigueme</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"> <li class="mb-4"> <a href="https://github.com/JosephLondono" class="hover:underline " target="_blank">Github</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Joseph Londoño</a>. Pagina hecha para fines educativos.
</span> <div class="flex mt-4 sm:justify-center sm:mt-0"> <a href="https://github.com/JosephLondono" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">GitHub account</span> </a> </div> </div> </div> </footer>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/footer.astro", void 0);

const $$Astro$7 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute("w-full flex justify-between py-2 px-16 flex-col gap-10 text-center items-center md:flex-row", "class")}> <a href="/"> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo Page"${addAttribute("w-52", "class")}> </a> <nav> <ol${addAttribute("flex flex-col gap-2 [&>li]:text-xl justify-around md:flex-row md:gap-14 lg:gap-28", "class")}> <li> <a href="/movie/">
Peliculas
</a> </li> <li> <a href="/tv/">
Tv
</a> </li> <li> <a href="/person/">
Personas
</a> </li> </ol> </nav> </header>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/header.astro", void 0);

const $$Astro$6 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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

const $$Astro$4 = createAstro();
const $$Genres = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Genres;
  const { genres } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">${genres}</span> </div>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/genres.astro", void 0);

const $$Astro$3 = createAstro();
const $$SketeletonMovie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SketeletonMovie;
  const { id } = Astro2.props;
  const movie = await getMovieById(id);
  const rating = Math.round(movie.vote_average * 10);
  let color;
  if (rating >= 70) {
    color = "#34D399";
  } else if (rating >= 50) {
    color = "#FBBF24";
  } else {
    color = "#EF4444";
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-[100%] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative"> <img fetchpriority="high" class="w-full rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg object-cover h-[100%]"${addAttribute(movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "src")}${addAttribute(`${movie.title}`, "alt")} data-astro-prefetch> <div class="flex flex-col justify-between p-4 leading-normal"> <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">${movie.title}</h5> <div class="flex gap-0"> ${movie.genres.map((genre) => renderTemplate`${renderComponent($$result, "Genres", $$Genres, { "genres": genre.name })}`)} </div> <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">${movie.tagline}</p> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400/90 text-pretty">${movie.overview}</p> </div> <div class="w-14 absolute -ml-20 top-5 left-full"> <p class="absolute top-[26%] left-[26%] w-fit">${`${rating}%`}</p> <svg viewBox="0 0 36 36"> <path d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831" fill="#525755"${addAttribute(color, "stroke")} stroke-width="4"${addAttribute(`${rating}, 100`, "stroke-dasharray")}></path> </svg> </div> </div>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/sketeletonMovie.astro", void 0);

const $$Astro$2 = createAstro();
const $$Videos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Videos;
  const { key, cantidad } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cantidad == 1 ? `snap-center shrink-0 rounded overflow-hidden shadow-lg w-full` : `snap-center shrink-0 w-4/5 rounded overflow-hidden shadow-lg`, "class")}> ${renderComponent($$result, "lite-youtube", "lite-youtube", { "class": "", "videoid": `${key}`, "videotitle": `Videos` })} </div> `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/videos.astro", void 0);

const $$Astro$1 = createAstro();
const $$Slider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Slider;
  const { id } = Astro2.props;
  const data = await getVideosById(id);
  const cantidadPeliculas = data.length;
  let cantidad = 0;
  if (cantidadPeliculas == 1) {
    cantidad = 1;
  } else {
    cantidad = 7;
  }
  let cont = 0;
  return renderTemplate`${maybeRenderHead()}<h2>Videos</h2> <section class="snap-mandatory snap-x flex gap-4 overflow-x-auto w-11/12 md:w-9/12 lg:w-8/12"> ${data.map((video) => (cont++, cont < cantidad + 1 ? renderTemplate`${renderComponent($$result, "Videos", $$Videos, { "key": video.key, "cantidad": cantidad })}` : null))} </section>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/slider.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const data = await getMovieById(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.title} | Movie Info`, "description": `Ver la informacion sobre la pelicula ${data.title}`, "metaImage": `https://image.tmdb.org/t/p/original/${data.backdrop_path}`, "metaImageAlt": `${data.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid mx-auto my-10 justify-items-center gap-9"> ${renderComponent($$result2, "SkeletonMovie", $$SketeletonMovie, { "id": id })} ${renderComponent($$result2, "Slider", $$Slider, { "id": id })} </main> ` })}`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/movie/id/[id].astro", void 0);

const $$file = "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/movie/id/[id].astro";
const $$url = "/movie/id/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getTv as a, getPerson as b, getMovies as g };
