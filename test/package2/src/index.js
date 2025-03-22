import something from "../something.json" with { type: "json" };
console.log(something);
import { one } from "../../non_package/test-utils.js";
console.log(`one: ${one}`);
import { four } from "../../../non_package2/test-utils.js";
console.log(`four: ${four}`);
import lodash from "lodash";
export default lodash;
