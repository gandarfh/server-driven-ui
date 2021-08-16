const HttpBackend = require("i18next-http-backend/cjs");

module.exports = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["en", "pt-BR"],
  },
  // react: {
  // useSuspense: false,
  // wait: true,
  // },
  // localePath: "https://housi-assets.s3.amazonaws.com/jaum-test",
  // localePath: "public/locales",
  // localeStructure: "{{lng}}/{{ns}}",

  backend: {
    loadPath:
      "https://housi-assets.s3.amazonaws.com/jaum-test/{{lng}}/{{ns}}.json",
    addPath: "https://housi-assets.s3.amazonaws.com/jaum-test/{{lng}}/{{ns}}",
  },
  debug: false,
  // ns: ["common", /[a-z]/],
  serializeConfig: false,

  use: [HttpBackend],
};
