import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col flex-1 p-4" data-svelte-h="svelte-1cd4ntb"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md: text-6xl">Hi! I&#39;m <span class="poppins text-blue-400">Ash J Yaw</span> <br></h2> <p class="text-base sm:text-lg md:text-xl">Some of my <span class="text-blue-400">favorite languages</span> and
				<span class="text-blue-400">Libraries </span>include
				<span class="text-yellow-200">Javascript/Typescript (Next.js, React.js SvelteKit), TailwindCSS, Graphql, Node.js,
					Express.js, PostgreSQL, C, Java</span></p></div></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
