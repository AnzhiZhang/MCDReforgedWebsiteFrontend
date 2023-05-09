const baseURL = "https://www.mcdreforged.org";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {charset: "utf-8"},
        {name: "description", content: "MCDReforged Website"},
        {
          name: "keywords",
          content: "MCDReforged, MCDR, Minecraft"
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://avatars.githubusercontent.com/u/63280128"
        },
      ],
    },
  },

  css: [
    // project css
    "assets/css/main.scss",

    // bytemd
    "bytemd/dist/index.css",
    "github-markdown-css/github-markdown-light.css",
    "highlight.js/styles/github.css",
    "katex/dist/katex.css",

    // element plus
    "element-plus/theme-chalk/display.css",

    // open-props
    "open-props/style",
  ],

  imports: {
    dirs: [
      "stores",
    ]
  },

  modules: [
    "@element-plus/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/robots",
    "@pinia/nuxt",
    "nuxt-simple-sitemap",
  ],

  runtimeConfig: {
    public: {
      baseURL: baseURL,
      leanCloud: {
        appId: "DFlxCu7mQRyfVOVeMnJsreh4-MdYXbMMI",
        appKey: "mxyNDiUvRTsN5UPyANTvTr5v",
        serverURL: "https://dflxcu7m.api.lncldglobal.com",
      },
    },
  },

  telemetry: false,

  // modules options
  googleFonts: {
    families: {
      "Noto+Sans+SC": true,
      Raleway: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  i18n: {
    baseUrl: baseURL,
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
      {
        code: "zh-CN",
        iso: "zh-CN",
        file: "zh-CN.js",
        name: "简体中文",
      },
    ],
    defaultLocale: "en-US",
    strategy: "no_prefix",
    langDir: "locales",
    vueI18n: "./i18n.config.ts",
  },

  pinia: {
    autoImports: [
      "defineStore",
      "storeToRefs",
    ],
  },

  sitemap: {
    siteUrl: baseURL,
    autoLastmod: false,
  },
});
