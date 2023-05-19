const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const express = require("express");
const { connectDb } = require("./path/to/connectDb");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await connectDb();
  // https://demos.buddyboss.com/online-communities/?boss-preview=direct
  app.prepare().then(() => {
    const server = express();

    server.all("*", (req, res) => {
      const parsedUrl = parse(req.url, true);
      return handle(req, res, parsedUrl);
    });

    const httpServer = createServer(server);

    httpServer.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });

    const shutdown = () => {
      console.log("Closing server...");
      httpServer.close(() => {
        console.log("Server closed.");
        process.exit(0);
      });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);

    console.log("Server started.");
  });
})();
