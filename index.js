const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
  id: "org.streamuj.tv",
  version: "1.2.0",
  name: "StreamujTV (Demo)",
  description: "Demo addon pre Stremio - iba testovací stream",
  catalogs: [
    {
      type: "movie",
      id: "streamuj-catalog",
      name: "Streamuj.tv",
      extra: [{ name: "search" }]
    }
  ],
  resources: ["catalog", "stream"],
  types: ["movie"],
  idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler((args) => {
  // Demo: prázdny katalóg
  return Promise.resolve({ metas: [] });
});

builder.defineStreamHandler(async ({ id }) => {
  // Demo: vždy vráti testovací stream
  return {
    streams: [{
      title: "Test Stream",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }]
  };
});

module.exports = builder.getInterface();
