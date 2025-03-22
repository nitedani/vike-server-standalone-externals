import { dangerouslySkipEscape } from "vike/server";
import "lodash";
import "lodash_exporter_1";

export const onRenderHtml = () => {
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
  `),
  };
};
