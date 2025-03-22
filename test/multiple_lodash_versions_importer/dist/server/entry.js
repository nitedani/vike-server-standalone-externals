import { setGlobalContext_buildEntry } from "vike/__internal";
/* virtual:vike:importUserCode:server [vike:pluginModuleBanner] */
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/src/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedAtLocation": "/src/pages/index/" },
    loadConfigValuesAll: () => ({ moduleId: "virtual:vike:pageConfigValuesAll:server:/src/pages/index", moduleExports: import("./entries/src_pages_index.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: false
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const virtualFileExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
/* virtual:@brillout/vite-plugin-server-entry:serverEntry [vike:pluginModuleBanner] */
{
  const assetsManifest = {
  "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "file": "assets/entries/entry-server-routing.lCwni81v.js",
    "name": "entries/entry-server-routing",
    "src": "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/src/pages/index"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/index": {
    "file": "assets/entries/src_pages_index.BVWHN_ai.js",
    "name": "entries/src/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/index",
    "isEntry": true,
    "isDynamicEntry": true
  }
};
  const buildInfo = {
    "versionAtBuildTime": "0.4.226",
    "usesClientRouter": false,
    "viteConfigRuntime": {
      "_baseViteOriginal": "/__UNSET__",
      "vitePluginServerEntry": {}
    }
  };
  setGlobalContext_buildEntry({
    virtualFileExports,
    assetsManifest,
    buildInfo
  });
}
