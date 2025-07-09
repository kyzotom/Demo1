const manifest = {
  id: "org.streamuj.tv",
  version: "1.2.0",
  name: "StreamujTV (Sosac) Demo",
  description: "Demo addon pre prehrávanie streamov vo Stremio",
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

module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(manifest));
};
