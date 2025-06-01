// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Ian Watkins Stories",
      logo: {
        src: "./src/assets/ian.png",
      },
      customCss: ["./src/styles/custom.css"],
      plugins: [
        catppuccin({
          dark: { flavor: "frappe", accent: "mauve" },
          light: { flavor: "latte", accent: "teal" },
        }),
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/MistbornOne",
        },
        {
          icon: "seti:powershell",
          label: "Terminal",
          href: "https://ianwatkins.pro",
        },
        {
          icon: "laptop",
          label: "Blog",
          href: "https://ianwatkins.dev",
        },
        {
          icon: "email",
          label: "Email",
          href: "mailto: info@ianwatkins.dev",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          collapsed: false,
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Start Here", slug: "guides/example" },
          ],
        },

        {
          label: "Short Stories",
          collapsed: true,
          autogenerate: { directory: "short-stories" },
        },
        {
          label: "The Rifflebum Case: Leviathan Jones Chronicles, Book 1",
          collapsed: true,
          autogenerate: { directory: "caveumbria" },
        },
      ],
    }),
  ],
});
