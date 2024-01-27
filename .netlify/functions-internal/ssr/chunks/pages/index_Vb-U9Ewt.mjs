/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_Y2qDL4Fj.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
/* empty css                          */
import { g as getMovies, a as getTv, b as getPerson, $ as $$Layout } from './_id__8I3DpApg.mjs';

const $$Astro$3 = createAstro();
const $$MovieTarget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MovieTarget;
  const { title, date, poster_path, adult, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("grid grid-rows-2 rounded-xl w-48 tarjeta", "class")} data-astro-cid-fy5n2ipt> <a${addAttribute(`/movie/id/${id}`, "href")}${addAttribute(poster_path ? `grid` : `grid content-center bg-[#172d69] rounded-xl`, "class")} data-astro-cid-fy5n2ipt> <img${addAttribute(poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg", "src")}${addAttribute(title, "alt")}${addAttribute("rounded-xl", "class")} data-astro-cid-fy5n2ipt> </a> <div${addAttribute("flex flex-col px-2 py-3", "class")} data-astro-cid-fy5n2ipt> <a href="" class="w-full h-fit text-lg" data-astro-cid-fy5n2ipt> ${title} </a> <p class="h-fit flex justify-between text-sm" data-astro-cid-fy5n2ipt> <span class="text-white/40" data-astro-cid-fy5n2ipt> ${date} </span> <span data-astro-cid-fy5n2ipt> ${adult ? "\u{1F51E}" : ""} </span> </p> </div> </div> `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/MovieTarget.astro", void 0);

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
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const dataMovies = await getMovies("1");
  const dataTv = await getTv("1");
  const dataPerson = await getPerson("1");
  console.log(dataPerson);
  let contMovie = 0;
  let contTv = 0;
  let contPerson = 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Movie App.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main${addAttribute("grid justify-items-center gap-3 sm:gap-1", "class")} data-astro-cid-j7pv25f6> <h1${addAttribute("text-4xl", "class")} data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>Movies Info</span></h1> <article${addAttribute("grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3", "class")} data-astro-cid-j7pv25f6> <section${addAttribute("grid justify-items-center", "class")} data-astro-cid-j7pv25f6> <h2${addAttribute("text-3xl text-center", "class")} data-astro-cid-j7pv25f6>Movies</h2> <div${addAttribute("grid grid-cols-2 gap-8 mt-6 mb-4", "class")} data-astro-cid-j7pv25f6> ${dataMovies.map((movie) => (contMovie++, contMovie < 5 ? renderTemplate`${renderComponent($$result2, "MovieTarget", $$MovieTarget, { "title": movie.title, "date": movie.release_date, "poster_path": movie.poster_path, "adult": movie.adult, "id": movie.id, "data-astro-cid-j7pv25f6": true })}` : null))} </div> <a href="/movie" data-astro-cid-j7pv25f6> <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onclick="irMovie" data-astro-cid-j7pv25f6> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" data-astro-cid-j7pv25f6>
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
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MovieTarget as $, index as i };
