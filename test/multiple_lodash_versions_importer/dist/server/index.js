import "./entry.js";
import { Hono } from "hono";
import { enhance, url, cloneRequest } from "@universal-middleware/core";
import vikeUniversalHandler from "vike/universal-middleware";
import { getGlobalContextAsync } from "vike/server";
import compressMiddlewareFactory from "@universal-middleware/compress";
import { dirname, join, isAbsolute } from "node:path";
import { fileURLToPath } from "node:url";
import { apply as apply$1 } from "@universal-middleware/hono";
import { createServer } from "http";
import { Http2ServerRequest } from "http2";
import { Readable } from "stream";
import crypto from "crypto";
import "vike/__internal";
/* node_modules/vike-server/dist/chunk-ZFDA2MRY.js [vike:pluginModuleBanner] */
var renderPageHandler = (options) => enhance(
  async (request, context, runtime) => {
    const pageContextInit = { ...context, runtime, urlOriginal: request.url, headersOriginal: request.headers };
    if (typeof options?.pageContext === "function") {
      Object.assign(pageContextInit, await options.pageContext(runtime));
    } else if (options?.pageContext) {
      Object.assign(pageContextInit, options.pageContext);
    }
    return vikeUniversalHandler(request, pageContextInit, runtime);
  },
  {
    name: "vike",
    path: "/**",
    method: "GET",
    order: 0,
    immutable: false
  }
);
async function getUniversalMiddlewares() {
  const isProduction = process.env.NODE_ENV === "production";
  const globalContext = await getGlobalContextAsync(isProduction);
  return globalContext.config.middleware?.flat(Number.POSITIVE_INFINITY) ?? [];
}
/* node_modules/vike-server/dist/chunk-Z4F6BVAV.js [vike:pluginModuleBanner] */
function isVercel() {
  return !!process.env.VERCEL;
}
var compressMiddleware = (options) => async (request, _context) => {
  const compressionType = options?.compress ?? !isVercel();
  const compressMiddlewareInternal = compressMiddlewareFactory()(request);
  return async (response) => {
    if (process.env.NODE_ENV !== "development") {
      const isAsset = new URL(request.url).pathname.startsWith("/assets/");
      const shouldCompressResponse = compressionType === true || compressionType === "static" && isAsset;
      if (shouldCompressResponse) {
        return compressMiddlewareInternal(response);
      }
    }
    return response;
  };
};
async function removeBaseUrl(req) {
  if (!req.url) return req;
  const globalContext = await getGlobalContextAsync(process.env.NODE_ENV !== "development");
  const baseAssets = globalContext.baseAssets;
  if (baseAssets === void 0) return req;
  const url$1 = url(req);
  let pathnameWithoutBase = url$1.pathname.slice(baseAssets.length);
  if (!pathnameWithoutBase.startsWith("/")) pathnameWithoutBase = `/${pathnameWithoutBase}`;
  const newUrl = new URL(pathnameWithoutBase, url$1.origin);
  newUrl.search = url$1.search;
  return cloneRequest(req, {
    url: newUrl.toString()
  });
}
function resolveStaticConfig(static_) {
  if (isVercel()) return false;
  if (static_ === false) return false;
  const argv1 = process.argv[1];
  const entrypointDirAbs = argv1 ? dirname(isAbsolute(argv1) ? argv1 : join(process.cwd(), argv1)) : dirname(fileURLToPath(import.meta.url));
  const defaultStaticDir = join(entrypointDirAbs, "..", "client");
  if (static_ === true || static_ === void 0) {
    return { root: defaultStaticDir, cache: true };
  }
  if (typeof static_ === "string") {
    return { root: static_, cache: true };
  }
  return {
    root: static_.root ?? defaultStaticDir,
    cache: static_.cache ?? true
  };
}
var serveStaticMiddleware = (options) => async (request, context, runtime) => {
  const staticConfig = resolveStaticConfig(options?.static);
  let staticMiddleware;
  async function serveStaticFiles(req) {
    const newReq = await removeBaseUrl(req);
    if (!staticMiddleware) {
      const { default: sirv } = await import("@universal-middleware/sirv");
      staticMiddleware = sirv(staticConfig.root, { etag: true });
    }
    return staticMiddleware(newReq, context, runtime);
  }
  return serveStaticFiles(request);
};
var vikeMiddlewares = await getUniversalMiddlewares();
var renderPageUniversal = (options) => [
  compressMiddleware(options),
  serveStaticMiddleware(options),
  ...vikeMiddlewares,
  renderPageHandler(options)
];
var universal_prod_default = renderPageUniversal;
/* node_modules/vike-server/dist/chunk-4VNS5WPM.js [vike:pluginModuleBanner] */
/* node_modules/vike-server/dist/hono.js [vike:pluginModuleBanner] */
function apply(app, options) {
  apply$1(app, universal_prod_default(options));
  return app;
}
/* node_modules/vike-server/dist/chunk-VAKAMLTM.js [vike:pluginModuleBanner] */
function onReady(options) {
  return () => {
    console.log(`Server running at http://localhost:${options.port}`);
  };
}
/* node_modules/vike-server/dist/hono/serve.node.js [vike:pluginModuleBanner] */
var RequestError = class extends Error {
  static name = "RequestError";
  constructor(message, options) {
    super(message, options);
  }
};
var toRequestError = (e) => {
  if (e instanceof RequestError) {
    return e;
  }
  return new RequestError(e.message, { cause: e });
};
var GlobalRequest = global.Request;
var Request = class extends GlobalRequest {
  constructor(input, options) {
    if (typeof input === "object" && getRequestCache in input) {
      input = input[getRequestCache]();
    }
    if (typeof options?.body?.getReader !== "undefined") {
      options.duplex ??= "half";
    }
    super(input, options);
  }
};
var newRequestFromIncoming = (method, url2, incoming, abortController) => {
  const headerRecord = [];
  const rawHeaders = incoming.rawHeaders;
  for (let i = 0; i < rawHeaders.length; i += 2) {
    const { [i]: key, [i + 1]: value } = rawHeaders;
    if (key.charCodeAt(0) !== /*:*/
    58) {
      headerRecord.push([key, value]);
    }
  }
  const init = {
    method,
    headers: headerRecord,
    signal: abortController.signal
  };
  if (method === "TRACE") {
    init.method = "GET";
    const req = new Request(url2, init);
    Object.defineProperty(req, "method", {
      get() {
        return "TRACE";
      }
    });
    return req;
  }
  if (!(method === "GET" || method === "HEAD")) {
    if ("rawBody" in incoming && incoming.rawBody instanceof Buffer) {
      init.body = new ReadableStream({
        start(controller) {
          controller.enqueue(incoming.rawBody);
          controller.close();
        }
      });
    } else {
      init.body = Readable.toWeb(incoming);
    }
  }
  return new Request(url2, init);
};
var getRequestCache = Symbol("getRequestCache");
var requestCache = Symbol("requestCache");
var incomingKey = Symbol("incomingKey");
var urlKey = Symbol("urlKey");
var abortControllerKey = Symbol("abortControllerKey");
var getAbortController = Symbol("getAbortController");
var requestPrototype = {
  get method() {
    return this[incomingKey].method || "GET";
  },
  get url() {
    return this[urlKey];
  },
  [getAbortController]() {
    this[getRequestCache]();
    return this[abortControllerKey];
  },
  [getRequestCache]() {
    this[abortControllerKey] ||= new AbortController();
    return this[requestCache] ||= newRequestFromIncoming(
      this.method,
      this[urlKey],
      this[incomingKey],
      this[abortControllerKey]
    );
  }
};
[
  "body",
  "bodyUsed",
  "cache",
  "credentials",
  "destination",
  "headers",
  "integrity",
  "mode",
  "redirect",
  "referrer",
  "referrerPolicy",
  "signal",
  "keepalive"
].forEach((k) => {
  Object.defineProperty(requestPrototype, k, {
    get() {
      return this[getRequestCache]()[k];
    }
  });
});
["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((k) => {
  Object.defineProperty(requestPrototype, k, {
    value: function() {
      return this[getRequestCache]()[k]();
    }
  });
});
Object.setPrototypeOf(requestPrototype, Request.prototype);
var newRequest = (incoming, defaultHostname) => {
  const req = Object.create(requestPrototype);
  req[incomingKey] = incoming;
  const host = (incoming instanceof Http2ServerRequest ? incoming.authority : incoming.headers.host) || defaultHostname;
  if (!host) {
    throw new RequestError("Missing host header");
  }
  const url2 = new URL(
    `${incoming instanceof Http2ServerRequest || incoming.socket && incoming.socket.encrypted ? "https" : "http"}://${host}${incoming.url}`
  );
  if (url2.hostname.length !== host.length && url2.hostname !== host.replace(/:\d+$/, "")) {
    throw new RequestError("Invalid host header");
  }
  req[urlKey] = url2.href;
  return req;
};
function writeFromReadableStream(stream, writable) {
  if (stream.locked) {
    throw new TypeError("ReadableStream is locked.");
  } else if (writable.destroyed) {
    stream.cancel();
    return;
  }
  const reader = stream.getReader();
  writable.on("close", cancel);
  writable.on("error", cancel);
  reader.read().then(flow, cancel);
  return reader.closed.finally(() => {
    writable.off("close", cancel);
    writable.off("error", cancel);
  });
  function cancel(error) {
    reader.cancel(error).catch(() => {
    });
    if (error) {
      writable.destroy(error);
    }
  }
  function onDrain() {
    reader.read().then(flow, cancel);
  }
  function flow({ done, value }) {
    try {
      if (done) {
        writable.end();
      } else if (!writable.write(value)) {
        writable.once("drain", onDrain);
      } else {
        return reader.read().then(flow, cancel);
      }
    } catch (e) {
      cancel(e);
    }
  }
}
var buildOutgoingHttpHeaders = (headers) => {
  const res = {};
  if (!(headers instanceof Headers)) {
    headers = new Headers(headers ?? void 0);
  }
  const cookies = [];
  for (const [k, v] of headers) {
    if (k === "set-cookie") {
      cookies.push(v);
    } else {
      res[k] = v;
    }
  }
  if (cookies.length > 0) {
    res["set-cookie"] = cookies;
  }
  res["content-type"] ??= "text/plain; charset=UTF-8";
  return res;
};
var responseCache = Symbol("responseCache");
var getResponseCache = Symbol("getResponseCache");
var cacheKey = Symbol("cache");
var GlobalResponse = global.Response;
var Response2 = class _Response {
  #body;
  #init;
  [getResponseCache]() {
    delete this[cacheKey];
    return this[responseCache] ||= new GlobalResponse(this.#body, this.#init);
  }
  constructor(body, init) {
    this.#body = body;
    if (init instanceof _Response) {
      const cachedGlobalResponse = init[responseCache];
      if (cachedGlobalResponse) {
        this.#init = cachedGlobalResponse;
        this[getResponseCache]();
        return;
      } else {
        this.#init = init.#init;
      }
    } else {
      this.#init = init;
    }
    if (typeof body === "string" || typeof body?.getReader !== "undefined") {
      let headers = init?.headers || { "content-type": "text/plain; charset=UTF-8" };
      if (headers instanceof Headers) {
        headers = buildOutgoingHttpHeaders(headers);
      }
      this[cacheKey] = [init?.status || 200, body, headers];
    }
  }
};
[
  "body",
  "bodyUsed",
  "headers",
  "ok",
  "redirected",
  "status",
  "statusText",
  "trailers",
  "type",
  "url"
].forEach((k) => {
  Object.defineProperty(Response2.prototype, k, {
    get() {
      return this[getResponseCache]()[k];
    }
  });
});
["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((k) => {
  Object.defineProperty(Response2.prototype, k, {
    value: function() {
      return this[getResponseCache]()[k]();
    }
  });
});
Object.setPrototypeOf(Response2, GlobalResponse);
Object.setPrototypeOf(Response2.prototype, GlobalResponse.prototype);
var stateKey = Reflect.ownKeys(new GlobalResponse()).find(
  (k) => typeof k === "symbol" && k.toString() === "Symbol(state)"
);
if (!stateKey) {
  console.warn("Failed to find Response internal state key");
}
function getInternalBody(response) {
  if (!stateKey) {
    return;
  }
  if (response instanceof Response2) {
    response = response[getResponseCache]();
  }
  const state = response[stateKey];
  return state && state.body || void 0;
}
var X_ALREADY_SENT = "x-hono-already-sent";
var webFetch = global.fetch;
if (typeof global.crypto === "undefined") {
  global.crypto = crypto;
}
global.fetch = (info, init) => {
  init = {
    // Disable compression handling so people can return the result of a fetch
    // directly in the loader without messing with the Content-Encoding header.
    compress: false,
    ...init
  };
  return webFetch(info, init);
};
var regBuffer = /^no$/i;
var regContentType = /^(application\/json\b|text\/(?!event-stream\b))/i;
var handleRequestError = () => new Response(null, {
  status: 400
});
var handleFetchError = (e) => new Response(null, {
  status: e instanceof Error && (e.name === "TimeoutError" || e.constructor.name === "TimeoutError") ? 504 : 500
});
var handleResponseError = (e, outgoing) => {
  const err = e instanceof Error ? e : new Error("unknown error", { cause: e });
  if (err.code === "ERR_STREAM_PREMATURE_CLOSE") {
    console.info("The user aborted a request.");
  } else {
    console.error(e);
    if (!outgoing.headersSent) {
      outgoing.writeHead(500, { "Content-Type": "text/plain" });
    }
    outgoing.end(`Error: ${err.message}`);
    outgoing.destroy(err);
  }
};
var responseViaCache = (res, outgoing) => {
  const [status, body, header] = res[cacheKey];
  if (typeof body === "string") {
    header["Content-Length"] = Buffer.byteLength(body);
    outgoing.writeHead(status, header);
    outgoing.end(body);
  } else {
    outgoing.writeHead(status, header);
    return writeFromReadableStream(body, outgoing)?.catch(
      (e) => handleResponseError(e, outgoing)
    );
  }
};
var responseViaResponseObject = async (res, outgoing, options = {}) => {
  if (res instanceof Promise) {
    if (options.errorHandler) {
      try {
        res = await res;
      } catch (err) {
        const errRes = await options.errorHandler(err);
        if (!errRes) {
          return;
        }
        res = errRes;
      }
    } else {
      res = await res.catch(handleFetchError);
    }
  }
  if (cacheKey in res) {
    return responseViaCache(res, outgoing);
  }
  const resHeaderRecord = buildOutgoingHttpHeaders(res.headers);
  const internalBody = getInternalBody(res);
  if (internalBody) {
    const { length, source, stream } = internalBody;
    if (source instanceof Uint8Array && source.byteLength !== length) ;
    else {
      if (length) {
        resHeaderRecord["content-length"] = length;
      }
      outgoing.writeHead(res.status, resHeaderRecord);
      if (typeof source === "string" || source instanceof Uint8Array) {
        outgoing.end(source);
      } else if (source instanceof Blob) {
        outgoing.end(new Uint8Array(await source.arrayBuffer()));
      } else {
        await writeFromReadableStream(stream, outgoing);
      }
      return;
    }
  }
  if (res.body) {
    const {
      "transfer-encoding": transferEncoding,
      "content-encoding": contentEncoding,
      "content-length": contentLength,
      "x-accel-buffering": accelBuffering,
      "content-type": contentType
    } = resHeaderRecord;
    if (transferEncoding || contentEncoding || contentLength || // nginx buffering variant
    accelBuffering && regBuffer.test(accelBuffering) || !regContentType.test(contentType)) {
      outgoing.writeHead(res.status, resHeaderRecord);
      await writeFromReadableStream(res.body, outgoing);
    } else {
      const buffer = await res.arrayBuffer();
      resHeaderRecord["content-length"] = buffer.byteLength;
      outgoing.writeHead(res.status, resHeaderRecord);
      outgoing.end(new Uint8Array(buffer));
    }
  } else if (resHeaderRecord[X_ALREADY_SENT]) ;
  else {
    outgoing.writeHead(res.status, resHeaderRecord);
    outgoing.end();
  }
};
var getRequestListener = (fetchCallback, options = {}) => {
  if (options.overrideGlobalObjects !== false && global.Request !== Request) {
    Object.defineProperty(global, "Request", {
      value: Request
    });
    Object.defineProperty(global, "Response", {
      value: Response2
    });
  }
  return async (incoming, outgoing) => {
    let res, req;
    try {
      req = newRequest(incoming, options.hostname);
      outgoing.on("close", () => {
        const abortController = req[abortControllerKey];
        if (!abortController) {
          return;
        }
        if (incoming.errored) {
          req[abortControllerKey].abort(incoming.errored.toString());
        } else if (!outgoing.writableFinished) {
          req[abortControllerKey].abort("Client connection prematurely closed.");
        }
      });
      res = fetchCallback(req, { incoming, outgoing });
      if (cacheKey in res) {
        return responseViaCache(res, outgoing);
      }
    } catch (e) {
      if (!res) {
        if (options.errorHandler) {
          res = await options.errorHandler(req ? e : toRequestError(e));
          if (!res) {
            return;
          }
        } else if (!req) {
          res = handleRequestError();
        } else {
          res = handleFetchError(e);
        }
      } else {
        return handleResponseError(e, outgoing);
      }
    }
    try {
      return responseViaResponseObject(res, outgoing, options);
    } catch (e) {
      return handleResponseError(e, outgoing);
    }
  };
};
var createAdaptorServer = (options) => {
  const fetchCallback = options.fetch;
  const requestListener = getRequestListener(fetchCallback, {
    hostname: options.hostname,
    overrideGlobalObjects: options.overrideGlobalObjects
  });
  const createServer$1 = options.createServer || createServer;
  const server = createServer$1(options.serverOptions || {}, requestListener);
  return server;
};
var serve = (options, listeningListener) => {
  const server = createAdaptorServer(options);
  server.listen(options?.port ?? 3e3, options.hostname, () => {
    const serverInfo = server.address();
    listeningListener && listeningListener(serverInfo);
  });
  return server;
};
function serve2(app, options) {
  function _serve() {
    return serve(
      {
        fetch: app.fetch,
        port: options.port,
        overrideGlobalObjects: false
      },
      onReady(options)
    );
  }
  {
    _serve();
  }
  return app;
}
/* src/server/index.ts [vike:pluginModuleBanner] */
function startServer() {
  const app = new Hono();
  const port = process.env.PORT || 3e3;
  apply(app);
  serve2(app, { port: +port });
}
startServer();
