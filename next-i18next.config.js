const HttpBackend = require("i18next-http-backend/cjs");

module.exports = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["en", "pt-BR"],
  },
  backend: {
    loadPath:
      "https://housi-assets.s3.amazonaws.com/jaum-test/{{lng}}/{{ns}}.json",
  },
  debug: false,
  ns: ["joao"],
  serializeConfig: false,
  use: [HttpBackend],
};
