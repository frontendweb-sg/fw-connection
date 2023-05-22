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
  // https://templates.iqonic.design/socialv/bs5/html/dist/dashboard/#
  // https://preview.themeforest.net/item/vogel-social-network-community-html-template/full_screen_preview/32986610?_ga=2.117148101.296772368.1684744903-1350028707.1684744903
  // https://pixner.net/circlehub/main/index.html#
  // https://wpkixx.com/html/socimo/#
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
