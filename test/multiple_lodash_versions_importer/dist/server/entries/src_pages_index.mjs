import { dangerouslySkipEscape } from "vike/server";
import "lodash";
import "lodash_exporter_1";
/* src/renderer/+onRenderHtml.ts [vike:pluginModuleBanner] */
const onRenderHtml = () => {
  return {
    documentHtml: dangerouslySkipEscape(`
    <html>
      <head>
        <title>My SSR App</title>
      </head>
      <body>
        <div id="page-root">OK</div>
      </body>
    </html>
  `)
  };
};
const import1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
/* src/pages/index/+Page.ts [vike:pluginModuleBanner] */
const Page = () => {
  return "Page";
};
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
/* virtual:vike:pageConfigValuesAll:server:/src/pages/index [vike:pluginModuleBanner] */
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: false
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/src/renderer/+onRenderHtml.ts", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import1
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/src/pages/index/+Page.ts", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
