const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/publishing_planner.html") {
    const file = path.join(__dirname, "publishing_planner.html");
    if (fs.existsSync(file)) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(fs.readFileSync(file));
    } else {
      res.writeHead(404); res.end("publishing_planner.html nicht gefunden");
    }
    return;
  }

  res.writeHead(404); res.end("Not found");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Publishing Planner server running on http://localhost:${PORT}`);
});
