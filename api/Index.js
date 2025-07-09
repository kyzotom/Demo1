const { addonBuilder } = require("stremio-addon-sdk");
const builder = new addonBuilder({
    id: "org.streamuj.tv",
    version: "1.2.0",
    name: "StreamujTV (Sosac) Demo",
    description: "Demo addon pre prehrávanie streamov vo Stremio",
    resources: ["catalog", "stream"],
    types: ["movie"],
    idPrefixes: ["tt"],
    catalogs: [
        {
            type: "movie",
            id: "streamuj-catalog",
            name: "Streamuj.tv",
            extra: [{ name: "search" }]
        }
    ]
});

builder.defineCatalogHandler(() => Promise.resolve({ metas: [] }));
builder.defineStreamHandler(() => Promise.resolve({
    streams: [{
        title: "Test Stream (DEMO)",
        url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }]
}));

module.exports = (req, res) => iface(req, res);
