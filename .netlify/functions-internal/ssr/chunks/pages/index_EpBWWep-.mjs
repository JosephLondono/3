/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_p63ww4Pm.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute("w-full flex justify-between py-2 px-16", "class")}> <a href="/"> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo Page"${addAttribute("w-52", "class")}> </a> <nav> <ol${addAttribute("flex gap-28 [&>li]:text-xl", "class")}> <li> <a href="/movie">
Peliculas
</a> </li> <li> <a href="">
Series
</a> </li> <li> <a href="">
Personas
</a> </li> </ol> </nav> </header>`;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/components/header.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Movie App.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main${addAttribute("grid justify-items-center gap-5", "class")} data-astro-cid-j7pv25f6> <h1${addAttribute("text-4xl", "class")} data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>Movies Info</span></h1> <article data-astro-cid-j7pv25f6> <section data-astro-cid-j7pv25f6> <h2${addAttribute("text-3xl", "class")} data-astro-cid-j7pv25f6>Movies</h2> </section> <section data-astro-cid-j7pv25f6> <h2${addAttribute("text-3xl", "class")} data-astro-cid-j7pv25f6>Series</h2> </section> <section data-astro-cid-j7pv25f6> <h2${addAttribute("text-3xl", "class")} data-astro-cid-j7pv25f6>Personas</h2> </section> </article> </main> ` })} `;
}, "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/index.astro", void 0);

const $$file = "C:/Users/USUARIO/Desktop/ADSO/Pruebas/Astro/3/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$Layout as a, index as i };
