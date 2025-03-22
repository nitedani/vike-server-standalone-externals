import { Hono } from "hono";
import { apply } from "vike-server/hono";
import { serve } from "vike-server/hono/serve";

function startServer() {
  const app = new Hono();
  const port = process.env.PORT || 3000;

  apply(app);
  serve(app, { port: +port });
}

startServer();
