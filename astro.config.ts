import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import config from "./astro-paper.config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: config.site.url,
  base: "/blog",
  integrations: [
    mdx(),
    sitemap({
      filter: page =>
        config.features?.showArchives !== false || !page.endsWith("/archives/"),
    }),
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [
        remarkMath,
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
    ],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: { light: "github-light-default", dark: "github-dark-default" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Lexend Mega",
      cssVariable: "--font-header",
      provider: fontProviders.google(),
      fallbacks: ["sans-serif"],
      weights: [700],
      styles: ["normal"],
      formats: ["woff2", "ttf"],
    },
    {
      name: "Lexend Deca",
      cssVariable: "--font-heading",
      provider: fontProviders.google(),
      fallbacks: ["sans-serif"],
      weights: [500, 600, 700],
      styles: ["normal"],
      formats: ["woff2", "ttf"],
    },
    {
      name: "Lexend Deca",
      cssVariable: "--font-body",
      provider: fontProviders.google(),
      fallbacks: ["sans-serif"],
      weights: [400, 500, 600],
      styles: ["normal"],
      formats: ["woff2", "ttf"],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      provider: fontProviders.google(),
      fallbacks: ["monospace"],
      weights: [500, 600, 700],
      styles: ["normal", "italic"],
      formats: ["woff2", "ttf"],
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
