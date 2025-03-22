import { dangerouslySkipEscape } from "vike/server";
import "lodash";
import "package1";
import { hashSync } from "package3";
import { one } from "../../../non_package/test-utils.js";
console.log(`one: ${one}`);
import { four } from "../../../../non_package2/test-utils.js";
console.log(`four: ${four}`);
console.log(`one: ${one}`);
import { two } from "package999";
console.log(`two: ${two}`);

export const onRenderHtml = () => {
  return {
    documentHtml: dangerouslySkipEscape(`
    <html>
      <head>
        <title>My SSR App</title>
      </head>
      <body>
        <div id="page-root">${hashSync("test")}</div>
      </body>
    </html>
  `),
  };
};
