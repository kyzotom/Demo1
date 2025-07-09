// api/index.js
module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ ok: true, msg: "Stremio Addon demo funguje!" }));
};
