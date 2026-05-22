import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://ffrancoa.github.io/blog",
    title: "F. F. A.",
    description: "Geotechnics from a casual, yet technical perspective.",
    author: "Francesco Franco A.",
    profile: "https://github.com/ffrancoa",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Lima",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/ffrancoa/blog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/ffrancoa" },
    { name: "mastodon", url: "https://mastodon.social/@ffrancoa" },
    { name: "linkedin", url: "https://www.linkedin.com/in/ffrancoa" },
    { name: "mail", url: "mailto:yourmail@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
  ],
});
