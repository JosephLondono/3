/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from './astro_ksA69i4q.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { g as getMovieById, a as getVideosById, $ as $$Layout } from './pages/index_5f0EMhCB.mjs';

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
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const data = await getMovieById(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.title} | Movie Info`, "description": `Ver la informacion sobre la pelicula ${data.title}`, "metaImage": `https://image.tmdb.org/t/p/original/${data.backdrop_path}`, "metaImageAlt": `${data.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid mx-auto my-10 justify-items-center gap-9"> ${renderComponent($$result2, "SkeletonMovie", $$SketeletonMovie, { "id": id })} ${renderComponent($$result2, "Slider", $$Slider, { "id": id })} </main> ` })}`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/movie/id/[id].astro", void 0);

const $$file = "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/movie/id/[id].astro";
const $$url = "/movie/id/[id]";

export { $$id as default, $$file as file, $$url as url };
