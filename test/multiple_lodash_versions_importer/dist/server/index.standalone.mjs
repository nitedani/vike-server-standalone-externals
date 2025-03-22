import { dirname as dirname987 } from 'path';
import { fileURLToPath as fileURLToPath987 } from 'url';
import { createRequire as createRequire987 } from 'module';
var require = createRequire987(import.meta.url);
var __filename = fileURLToPath987(import.meta.url);
var __dirname = dirname987(__filename);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/vike/dist/esm/utils/isBrowser.js
function isBrowser() {
  return typeof window !== "undefined" && typeof window.scrollY === "number";
}
var init_isBrowser = __esm({
  "node_modules/vike/dist/esm/utils/isBrowser.js"() {
  }
});

// node_modules/vike/dist/esm/utils/isCallable.js
function isCallable(thing) {
  return thing instanceof Function || typeof thing === "function";
}
var init_isCallable = __esm({
  "node_modules/vike/dist/esm/utils/isCallable.js"() {
  }
});

// node_modules/vike/dist/esm/utils/unique.js
function unique(arr) {
  return Array.from(new Set(arr));
}
var init_unique = __esm({
  "node_modules/vike/dist/esm/utils/unique.js"() {
  }
});

// node_modules/vike/dist/esm/utils/getGlobalObject.js
function getGlobalObject(key, defaultValue2) {
  const globalObjects = getGlobalObjects();
  const globalObject10 = globalObjects[key] = globalObjects[key] || defaultValue2;
  return globalObject10;
}
function getGlobalObjects() {
  const projectKey = "_vike";
  const globalObjects = globalThis[projectKey] = globalThis[projectKey] || {};
  return globalObjects;
}
var init_getGlobalObject = __esm({
  "node_modules/vike/dist/esm/utils/getGlobalObject.js"() {
    init_assert();
  }
});

// ../../node_modules/@brillout/picocolors/dist/esm/picocolors.js
function isBrowser2() {
  return Object.getOwnPropertyDescriptor(globalThis, "window")?.get?.toString().includes("[native code]") ?? false;
}
function getAnsiRegex() {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, "g");
}
var p, argv, env, isColorSupported, formatter, replaceClose, createColors, pc, picocolors_default, ansiRegex;
var init_picocolors = __esm({
  "../../node_modules/@brillout/picocolors/dist/esm/picocolors.js"() {
    if (isBrowser2())
      throw new Error("This file should never be included in the browser.");
    p = typeof process === "undefined" ? {} : process;
    argv = p.argv || [];
    env = p.env || {};
    isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    replaceClose = (string, close, replace, index) => {
      let start = string.substring(0, index) + replace;
      let end = string.substring(index + close.length);
      let nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    };
    createColors = (enabled = isColorSupported) => {
      const cyan = formatter("\x1B[36m", "\x1B[39m");
      return {
        isColorSupported: enabled,
        code: enabled ? cyan : (s) => `\`${s}\``,
        string: enabled ? cyan : (s) => `'${s}'`,
        reset: enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String,
        bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
        dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
        italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
        underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
        inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
        hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
        strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
        black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
        red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
        green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
        yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
        blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
        magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
        cyan: enabled ? cyan : String,
        white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
        gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
        bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
        bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
        bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
        bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
        bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
        bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
        bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
        bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
      };
    };
    pc = createColors();
    picocolors_default = pc;
    ansiRegex = getAnsiRegex();
  }
});

// node_modules/vike/dist/esm/utils/PROJECT_VERSION.js
var PROJECT_VERSION;
var init_PROJECT_VERSION = __esm({
  "node_modules/vike/dist/esm/utils/PROJECT_VERSION.js"() {
    PROJECT_VERSION = "0.4.226";
  }
});

// node_modules/vike/dist/esm/utils/assertSingleInstance.js
function assertSingleInstance() {
  {
    const versions = unique(globalObject.instances);
    assertWarning(
      versions.length <= 1,
      // Do *NOT* patch Vike to remove this warning: you *will* eventually encounter the issues listed at https://vike.dev/warning/version-mismatch
      // - This happened before: https://github.com/vikejs/vike/issues/1108#issuecomment-1719061509
      `vike@${picocolors_default.bold(versions[0])} and vike@${picocolors_default.bold(versions[1])} loaded which is highly discouraged, see ${picocolors_default.underline("https://vike.dev/warning/version-mismatch")}`,
      { onlyOnce: true, showStackTrace: false }
    );
  }
  if (globalObject.checkSingleInstance && globalObject.instances.length > 1) {
    assertWarning(false, clientNotSingleInstance, { onlyOnce: true, showStackTrace: true });
  }
}
function assertSingleInstance_onAssertModuleLoad() {
  globalObject.instances.push(PROJECT_VERSION);
  assertSingleInstance();
}
function assertWarning(condition, errorMessage, { onlyOnce, showStackTrace }) {
  if (condition) {
    return;
  }
  const msg = `[Vike][Warning] ${errorMessage}`;
  if (onlyOnce) {
    const { alreadyLogged } = globalObject;
    const key = onlyOnce === true ? msg : onlyOnce;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  if (showStackTrace) {
    console.warn(new Error(msg));
  } else {
    console.warn(msg);
  }
}
var globalObject, clientNotSingleInstance;
var init_assertSingleInstance = __esm({
  "node_modules/vike/dist/esm/utils/assertSingleInstance.js"() {
    init_unique();
    init_getGlobalObject();
    init_picocolors();
    init_PROJECT_VERSION();
    globalObject = getGlobalObject("utils/assertSingleInstance.ts", {
      instances: [],
      alreadyLogged: /* @__PURE__ */ new Set()
    });
    clientNotSingleInstance = "Client runtime loaded twice https://vike.dev/client-runtime-duplicated";
  }
});

// node_modules/vike/dist/esm/utils/isNodeJS.js
function isNodeJS() {
  if (typeof process === "undefined")
    return false;
  if (!process.cwd)
    return false;
  if (!process.versions || typeof process.versions.node === "undefined")
    return false;
  if (!process.release || process.release.name !== "node")
    return false;
  return true;
}
var init_isNodeJS = __esm({
  "node_modules/vike/dist/esm/utils/isNodeJS.js"() {
  }
});

// node_modules/vike/dist/esm/utils/createErrorWithCleanStackTrace.js
function createErrorWithCleanStackTrace(errorMessage, numberOfStackTraceLinesToRemove3) {
  const err = new Error(errorMessage);
  if (isNodeJS()) {
    err.stack = clean(err.stack, numberOfStackTraceLinesToRemove3);
  }
  return err;
}
function clean(errStack, numberOfStackTraceLinesToRemove3) {
  if (!errStack) {
    return errStack;
  }
  const stackLines = splitByLine(errStack);
  let linesRemoved = 0;
  const stackLine__cleaned = stackLines.filter((line) => {
    if (line.includes(" (internal/") || line.includes(" (node:internal")) {
      return false;
    }
    if (linesRemoved < numberOfStackTraceLinesToRemove3 && isStackTraceLine(line)) {
      linesRemoved++;
      return false;
    }
    return true;
  }).join("\n");
  return stackLine__cleaned;
}
function isStackTraceLine(line) {
  return line.startsWith("    at ");
}
function splitByLine(str) {
  return str.split(/\r?\n/);
}
var init_createErrorWithCleanStackTrace = __esm({
  "node_modules/vike/dist/esm/utils/createErrorWithCleanStackTrace.js"() {
    init_isNodeJS();
  }
});

// node_modules/vike/dist/esm/utils/isObject.js
function isObject(value) {
  return typeof value === "object" && value !== null;
}
var init_isObject = __esm({
  "node_modules/vike/dist/esm/utils/isObject.js"() {
  }
});

// node_modules/vike/dist/esm/utils/assert.js
function assert(condition, debugInfo) {
  if (condition)
    return;
  const debugStr = (() => {
    if (!debugInfo) {
      return null;
    }
    const debugInfoSerialized = typeof debugInfo === "string" ? debugInfo : JSON.stringify(debugInfo);
    return picocolors_default.dim(`Debug info (for Vike maintainers; you can ignore this): ${debugInfoSerialized}`);
  })();
  const link = picocolors_default.underline("https://github.com/vikejs/vike/issues/new?template=bug.yml");
  let errMsg = [
    `You stumbled upon a Vike bug. Go to ${link} and copy-paste this error. A maintainer will fix the bug (usually within 24 hours).`,
    debugStr
  ].filter(Boolean).join(" ");
  errMsg = addWhitespace(errMsg);
  errMsg = addPrefixAssertType(errMsg, bugTag);
  errMsg = addPrefixProjctName(errMsg, true);
  const internalError = createErrorWithCleanStackTrace(errMsg, numberOfStackTraceLinesToRemove);
  globalObject2.onBeforeLog?.();
  throw internalError;
}
function assertUsage(condition, errMsg, { showStackTrace, exitOnError } = {}) {
  if (condition)
    return;
  showStackTrace = showStackTrace || globalObject2.alwaysShowStackTrace;
  errMsg = addWhitespace(errMsg);
  errMsg = addPrefixAssertType(errMsg, "Wrong Usage");
  errMsg = addPrefixProjctName(errMsg);
  const usageError = createErrorWithCleanStackTrace(errMsg, numberOfStackTraceLinesToRemove);
  if (showStackTrace) {
    globalObject2.showStackTraceList.add(usageError);
  }
  globalObject2.onBeforeLog?.();
  if (!exitOnError) {
    throw usageError;
  } else {
    console.error(showStackTrace ? usageError : errMsg);
    process.exit(1);
  }
}
function getProjectError(errMsg) {
  errMsg = addWhitespace(errMsg);
  errMsg = addPrefixAssertType(errMsg, "Error");
  errMsg = addPrefixProjctName(errMsg);
  const projectError = createErrorWithCleanStackTrace(errMsg, numberOfStackTraceLinesToRemove);
  return projectError;
}
function assertWarning2(condition, msg, { onlyOnce, showStackTrace }) {
  if (condition)
    return;
  showStackTrace = showStackTrace || globalObject2.alwaysShowStackTrace;
  msg = addWhitespace(msg);
  msg = addPrefixAssertType(msg, "Warning");
  msg = addPrefixProjctName(msg);
  if (onlyOnce) {
    const { alreadyLogged } = globalObject2;
    const key = onlyOnce === true ? msg : onlyOnce;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  globalObject2.onBeforeLog?.();
  if (showStackTrace) {
    const err = createErrorWithCleanStackTrace(msg, numberOfStackTraceLinesToRemove);
    globalObject2.showStackTraceList.add(err);
    globalObject2.logger(err, "warn");
  } else {
    globalObject2.logger(msg, "warn");
  }
}
function assertInfo(condition, msg, { onlyOnce }) {
  if (condition) {
    return;
  }
  msg = addWhitespace(msg);
  msg = addPrefixProjctName(msg);
  if (onlyOnce) {
    const { alreadyLogged } = globalObject2;
    const key = msg;
    if (alreadyLogged.has(key)) {
      return;
    } else {
      alreadyLogged.add(key);
    }
  }
  globalObject2.onBeforeLog?.();
  globalObject2.logger(msg, "info");
}
function addPrefixAssertType(msg, tag) {
  let prefix2 = `[${tag}]`;
  const color = tag === "Warning" ? "yellow" : "red";
  prefix2 = picocolors_default.bold(picocolors_default[color](prefix2));
  return `${prefix2}${msg}`;
}
function addWhitespace(msg) {
  if (msg.startsWith("[")) {
    return msg;
  } else {
    return ` ${msg}`;
  }
}
function addPrefixProjctName(msg, showProjectVersion = false) {
  const prefix2 = showProjectVersion ? projectTagWithVersion : projectTag;
  return `${prefix2}${msg}`;
}
function isBug(err) {
  return String(err).includes(`[${bugTag}]`);
}
function setAlwaysShowStackTrace() {
  globalObject2.alwaysShowStackTrace = true;
}
var globalObject2, projectTag, projectTagWithVersion, bugTag, numberOfStackTraceLinesToRemove;
var init_assert = __esm({
  "node_modules/vike/dist/esm/utils/assert.js"() {
    init_assertSingleInstance();
    init_createErrorWithCleanStackTrace();
    init_getGlobalObject();
    init_isObject();
    init_PROJECT_VERSION();
    init_picocolors();
    globalObject2 = getGlobalObject("utils/assert.ts", {
      alreadyLogged: /* @__PURE__ */ new Set(),
      // Production logger. Overwritten by loggerNotProd.ts in non-production environments.
      logger(msg, logType) {
        if (logType === "info") {
          console.log(msg);
        } else {
          console.warn(msg);
        }
      },
      showStackTraceList: /* @__PURE__ */ new WeakSet()
    });
    assertSingleInstance_onAssertModuleLoad();
    projectTag = `[vike]`;
    projectTagWithVersion = `[vike@${PROJECT_VERSION}]`;
    bugTag = "Bug";
    numberOfStackTraceLinesToRemove = 2;
  }
});

// node_modules/vike/dist/esm/utils/objectAssign.js
function objectAssign(obj, objAddendum, objAddendumCanBePageContextObject) {
  if (objAddendum) {
    if (!objAddendumCanBePageContextObject) {
      assert(!("_isPageContextObject" in objAddendum));
    }
    Object.defineProperties(obj, Object.getOwnPropertyDescriptors(objAddendum));
  }
}
var init_objectAssign = __esm({
  "node_modules/vike/dist/esm/utils/objectAssign.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/esm/utils/checkType.js
function checkType(_) {
}
var init_checkType = __esm({
  "node_modules/vike/dist/esm/utils/checkType.js"() {
  }
});

// node_modules/vike/dist/esm/utils/getTerminWidth.js
function getTerminalWidth() {
  return typeof process !== "undefined" && typeof process.stdout !== "undefined" && process.stdout.columns || void 0;
}
var init_getTerminWidth = __esm({
  "node_modules/vike/dist/esm/utils/getTerminWidth.js"() {
  }
});

// node_modules/vike/dist/esm/utils/isArray.js
function isArray(value) {
  return Array.isArray(value);
}
var init_isArray = __esm({
  "node_modules/vike/dist/esm/utils/isArray.js"() {
  }
});

// node_modules/vike/dist/esm/utils/debug.js
function createDebugger(flag, optionsGlobal) {
  checkType(flag);
  assert(flags.includes(flag));
  const debugWithOptions = (optionsLocal) => {
    return (...msgs) => {
      const options = { ...optionsGlobal, ...optionsLocal };
      debug_(flag, options, ...msgs);
    };
  };
  const debug5 = (...msgs) => debugWithOptions({})(...msgs);
  objectAssign(debug5, { options: debugWithOptions, isActivated: isDebugActivated(flag) });
  return debug5;
}
function debug_(flag, options, ...msgs) {
  if (!isDebugActivated(flag))
    return;
  let [msgFirst, ...msgsRest] = msgs;
  const padding = " ".repeat(flag.length + 1);
  msgFirst = formatMsg(msgFirst, options, padding, "FIRST");
  msgsRest = msgsRest.map((msg, i) => {
    const position = i === msgsRest.length - 1 ? "LAST" : "MIDDLE";
    return formatMsg(msg, options, padding, position);
  });
  let logFirst;
  let logsRest;
  const noNewLine = msgsRest.length <= 1 && [msgFirst, ...msgsRest].every((m) => typeof m === "string" && !m.includes("\n"));
  if (noNewLine) {
    logFirst = [msgFirst, ...msgsRest].map((m) => String(m).trim());
    logsRest = [];
  } else {
    logFirst = [msgFirst];
    logsRest = msgsRest;
  }
  console.log("\x1B[1m%s\x1B[0m", flag, ...logFirst);
  logsRest.forEach((msg) => {
    console.log(msg);
  });
}
function isDebugActivated(flag) {
  checkType(flag);
  assert(flags.includes(flag));
  const { flagsActivated, all } = getFlagsActivated();
  const isActivated = flagsActivated.includes(flag) || all && !flagsSkipWildcard.includes(flag);
  return isActivated;
}
function formatMsg(info, options, padding, position) {
  if (info === void 0) {
    return void 0;
  }
  let str = position === "FIRST" ? "" : padding;
  if (typeof info === "string") {
    str += info;
  } else if (isArray(info)) {
    if (info.length === 0) {
      str += options.serialization?.emptyArray ?? "[]";
    } else {
      str += info.map(strUnknown).join("\n");
    }
  } else {
    str += strUnknown(info);
  }
  str = pad(str, padding);
  if (position !== "LAST" && position !== "FIRST") {
    str += "\n";
  }
  return str;
}
function pad(str, padding) {
  const terminalWidth = getTerminalWidth();
  const lines = [];
  str.split("\n").forEach((line) => {
    if (!terminalWidth) {
      lines.push(line);
    } else {
      chunk(line, terminalWidth - padding.length).forEach((chunk2) => {
        lines.push(chunk2);
      });
    }
  });
  return lines.join("\n" + padding);
}
function chunk(str, size) {
  if (str.length <= size) {
    return [str];
  }
  const chunks = str.match(new RegExp(".{1," + size + "}", "g"));
  assert(chunks);
  return chunks;
}
function strUnknown(thing) {
  return typeof thing === "string" ? thing : strObj(thing);
}
function strObj(obj, newLines = true) {
  return JSON.stringify(obj, replaceFunctionSerializer, newLines ? 2 : void 0);
}
function replaceFunctionSerializer(_key, value) {
  if (isCallable(value)) {
    return value.toString().split(/\s+/).join(" ");
  }
  return value;
}
function assertFlagsActivated() {
  const { flagsActivated } = getFlagsActivated();
  flagsActivated.forEach((flag) => {
    assertUsage(flags.includes(flag), `Unknown DEBUG flag ${picocolors_default.cyan(flag)}. Valid flags:
${flags.map((f) => `  ${picocolors_default.cyan(f)}`).join("\n")}`);
  });
}
function getFlagsActivated() {
  const flagsActivated = DEBUG.match(flagRegex) ?? [];
  const all = DEBUG.includes("vike:*");
  return { flagsActivated, all };
}
function getDEBUG() {
  let DEBUG3;
  try {
    DEBUG3 = process.env.DEBUG;
  } catch {
  }
  return DEBUG3;
}
var DEBUG, flags, flagsSkipWildcard, flagRegex;
var init_debug = __esm({
  "node_modules/vike/dist/esm/utils/debug.js"() {
    init_isBrowser();
    init_isCallable();
    init_objectAssign();
    init_assert();
    init_checkType();
    init_getTerminWidth();
    init_picocolors();
    init_isArray();
    assert(!isBrowser());
    globalThis.__brillout_debug_createDebugger = createDebugger;
    DEBUG = getDEBUG() ?? "";
    flags = [
      "vike:crawl",
      "vike:error",
      "vike:esbuild-resolve",
      "vike:extractAssets",
      "vike:extractExportNames",
      "vike:glob",
      "vike:globalContext",
      "vike:log",
      "vike:optimizeDeps",
      "vike:outDir",
      "vike:pageFiles",
      "vike:pointer-imports",
      "vike:routing",
      "vike:setup",
      "vike:stream",
      "vike:virtual-files"
    ];
    flagsSkipWildcard = ["vike:log"];
    flagRegex = /\bvike:[a-zA-Z-]+/g;
    assertFlagsActivated();
  }
});

// node_modules/vike/dist/esm/utils/assertIsNotBrowser.js
function assertIsNotBrowser() {
  assert(!isBrowser());
}
var init_assertIsNotBrowser = __esm({
  "node_modules/vike/dist/esm/utils/assertIsNotBrowser.js"() {
    init_isBrowser();
    init_assert();
  }
});

// node_modules/vike/dist/esm/utils/trackLogs.js
function trackLogs() {
  const logOriginal = process.stdout.write;
  const log = (msg) => logOriginal.call(process.stdout, msg + "\n");
  ["stdout", "stderr"].forEach((stdName) => {
    var methodOriginal = process[stdName].write;
    process[stdName].write = function(...args) {
      log(picocolors_default.bold(picocolors_default.blue("*** LOG ***")));
      methodOriginal.apply(process[stdName], args);
      log(new Error().stack.replace(/^Error(\:|)/, picocolors_default.magenta("*** LOG ORIGIN ***")));
    };
  });
  Error.stackTraceLimit = Infinity;
}
var init_trackLogs = __esm({
  "node_modules/vike/dist/esm/utils/trackLogs.js"() {
    init_debug();
    init_picocolors();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
    if (isDebugActivated("vike:log")) {
      trackLogs();
    }
  }
});

// node_modules/vike/dist/esm/utils/assertVersion.js
function assertVersion(dependencyName, versionActual, versionExpected) {
  assert(versionActual);
  assert(versionExpected);
  assertUsage(isVersionOrAbove(versionActual, versionExpected), `${dependencyName} ${versionActual} isn't supported, use ${dependencyName} >= ${versionExpected} instead.`);
}
function isVersionOrAbove(versionActual, versionExpected) {
  const p1 = parseVersion(versionActual);
  const p2 = parseVersion(versionExpected);
  if (p1[0] !== p2[0])
    return p1[0] > p2[0];
  if (p1[1] !== p2[1])
    return p1[1] > p2[1];
  if (p1[2] !== p2[2])
    return p1[2] > p2[2];
  return true;
}
function parseVersion(version) {
  version = version.split("-")[0];
  let partsStr = version.split(".");
  partsStr = partsStr.slice(0, 3);
  assert(partsStr.length === 3);
  assert(partsStr.every((s) => s.length > 0));
  const parts = partsStr.map((s) => parseInt(s, 10));
  return parts;
}
var init_assertVersion = __esm({
  "node_modules/vike/dist/esm/utils/assertVersion.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/esm/utils/assertNodeVersion.js
function assertNodeVersion() {
  if (!isNodeJS())
    return;
  const version = process.versions.node;
  assertVersion("Node.js", version, "18.0.0");
}
var init_assertNodeVersion = __esm({
  "node_modules/vike/dist/esm/utils/assertNodeVersion.js"() {
    init_isNodeJS();
    init_assertVersion();
  }
});

// ../../node_modules/@brillout/require-shim/dist/utils.cjs
var require_utils = __commonJS({
  "../../node_modules/@brillout/require-shim/dist/utils.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGlobalObject = exports.isVitest = exports.pathJoin = exports.assertIsNotBrowser = exports.assert = exports.assertPosixPath = exports.toPosixPath = void 0;
    function toPosixPath3(path) {
      const pathPosix = path.split("\\").join("/");
      assertPosixPath3(pathPosix);
      return pathPosix;
    }
    exports.toPosixPath = toPosixPath3;
    function assertPosixPath3(path) {
      const errMsg = (msg) => `Not a posix path: ${msg}`;
      assert3(path !== null, errMsg("null"));
      assert3(typeof path === "string", errMsg(`typeof path === '${typeof path}'`));
      assert3(path !== "", errMsg("(empty string)"));
      assert3(path);
      assert3(!path.includes("\\"), errMsg(path));
    }
    exports.assertPosixPath = assertPosixPath3;
    function assert3(condition, debugInfo) {
      if (condition)
        return;
      const githubRepository = "https://github.com/brillout/require-shim";
      let errMsg = [
        "[@brillout/require-shim]",
        "You stumbled upon a bug.",
        `Go to ${githubRepository}/issues/new and copy-paste this error.`,
        "A maintainer will fix the bug.",
        debugInfo
      ].filter(Boolean).join(" ");
      throw new Error(errMsg);
    }
    exports.assert = assert3;
    function assertIsNotBrowser2() {
      assert3(!isBrowser3());
    }
    exports.assertIsNotBrowser = assertIsNotBrowser2;
    function isBrowser3() {
      return typeof window !== "undefined" && typeof window.scrollY === "number";
    }
    function pathJoin(path1, path2) {
      assert3(!path1.includes("\\"));
      assert3(!path2.includes("\\"));
      let joined = [...path1.split("/"), ...path2.split("/")].filter(Boolean).join("/");
      if (path1.startsWith("/"))
        joined = "/" + joined;
      return joined;
    }
    exports.pathJoin = pathJoin;
    function isVitest2() {
      return typeof process !== "undefined" && typeof process.env !== "undefined" && "VITEST" in process.env;
    }
    exports.isVitest = isVitest2;
    function getGlobalObject2(key, defaultValue2) {
      const allGlobalObjects = globalThis.__brillout_require_shim = globalThis.__brillout_require_shim || {};
      const globalObject10 = allGlobalObjects[key] = allGlobalObjects[key] || defaultValue2;
      return globalObject10;
    }
    exports.getGlobalObject = getGlobalObject2;
  }
});

// ../../node_modules/@brillout/require-shim/dist/runtime-test.cjs
var require_runtime_test = __commonJS({
  "../../node_modules/@brillout/require-shim/dist/runtime-test.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_cjs_1 = require_utils();
    testRequireShim();
    function testRequireShim() {
      let req;
      try {
        req = __require;
      } catch (_a) {
      }
      if (!req)
        return;
      (0, utils_cjs_1.assert)(!("_is_brillout_require_shim" in __require));
    }
  }
});

// ../../node_modules/@brillout/require-shim/dist/index.cjs
var require_dist = __commonJS({
  "../../node_modules/@brillout/require-shim/dist/index.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.installRequireShim_setUserRootDir = exports.installRequireShim = void 0;
    var utils_cjs_1 = require_utils();
    var globalObject10 = (0, utils_cjs_1.getGlobalObject)("utils/require-shim.ts", {});
    (0, utils_cjs_1.assertIsNotBrowser)();
    function installRequireShim2() {
      if (globalObject10.alreadyCalled)
        return;
      globalObject10.alreadyCalled = true;
      let requireLocal;
      try {
        requireLocal = __require;
      } catch (_a) {
      }
      if (!requireLocal)
        return;
      let module2;
      try {
        module2 = requireLocal("module");
      } catch (_b) {
        return;
      }
      if (globalThis.require === void 0) {
        install();
      }
      testShim();
      return;
      function install() {
        Object.defineProperty(globalThis, "require", {
          get() {
            let callsites;
            {
              const prepareStackTraceOrg = Error.prepareStackTrace;
              Error.prepareStackTrace = (_, stack) => stack;
              const err = new Error();
              callsites = err.stack;
              Error.prepareStackTrace = prepareStackTraceOrg;
            }
            const callerFile = getCallerFile(callsites);
            const callerFileFallback = __filename;
            const requireContextFile = callerFile || callerFileFallback;
            (0, utils_cjs_1.assert)(requireContextFile);
            const requireUserLand = module2.createRequire(requireContextFile);
            requireUserLand._is_brillout_require_shim = true;
            return requireUserLand;
          }
        });
      }
      function getCallerFile(callsites) {
        const caller = callsites[1];
        (0, utils_cjs_1.assert)(caller);
        if (!caller.getFileName)
          return null;
        {
          const filePath = caller.getFileName();
          (0, utils_cjs_1.assert)(typeof filePath === "string" && filePath || filePath === void 0);
          if (filePath)
            return filePath;
        }
        {
          const filePath = deriveFilePath(caller);
          if (filePath) {
            return filePath;
          }
        }
        return null;
      }
      function deriveFilePath(caller) {
        let filePath = caller.getEvalOrigin();
        if (!filePath)
          return null;
        if (doesPathExist(filePath)) {
          return filePath;
        }
        const { userRootDir } = globalObject10;
        if (!userRootDir)
          return null;
        let filePathAbsolute = (0, utils_cjs_1.toPosixPath)(filePath);
        (0, utils_cjs_1.assertPosixPath)(userRootDir);
        filePathAbsolute = (0, utils_cjs_1.pathJoin)(userRootDir, filePathAbsolute);
        if (doesPathExist(filePathAbsolute)) {
          return filePathAbsolute;
        }
        return null;
      }
      function doesPathExist(filePath) {
        (0, utils_cjs_1.assert)(requireLocal);
        try {
          requireLocal.resolve(filePath);
          return true;
        } catch (_a) {
          return false;
        }
      }
    }
    exports.installRequireShim = installRequireShim2;
    function testShim() {
      if ((0, utils_cjs_1.isVitest)())
        return;
      (0, utils_cjs_1.assert)(__require !== globalThis.require);
      (0, utils_cjs_1.assert)(!("_is_brillout_require_shim" in __require));
      Promise.resolve().then(() => __toESM(require_runtime_test()));
    }
    function installRequireShim_setUserRootDir(userRootDir) {
      globalObject10.userRootDir = userRootDir;
    }
    exports.installRequireShim_setUserRootDir = installRequireShim_setUserRootDir;
  }
});

// node_modules/vike/dist/esm/utils/slice.js
function slice(thing, from, to) {
  if (typeof thing === "string") {
    return sliceArray(thing.split(""), from, to).join("");
  } else {
    return sliceArray(thing, from, to);
  }
}
function sliceArray(list, from, to) {
  const listSlice = [];
  let start = from >= 0 ? from : list.length + from;
  assert(start >= 0 && start <= list.length);
  let end = to >= 0 ? to : list.length + to;
  assert(end >= 0 && end <= list.length);
  while (true) {
    if (start === end) {
      break;
    }
    if (start === list.length) {
      start = 0;
    }
    if (start === end) {
      break;
    }
    const el = list[start];
    assert(el !== void 0);
    listSlice.push(el);
    start++;
  }
  return listSlice;
}
var init_slice = __esm({
  "node_modules/vike/dist/esm/utils/slice.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/esm/utils/getFileExtension.js
function getFileExtension(id) {
  id = id.split("?")[0];
  const fileName = slice(id.split("/"), -1, 0)[0];
  if (!fileName) {
    return null;
  }
  const fileExtension = slice(fileName.split("."), -1, 0)[0];
  if (!fileExtension) {
    return null;
  }
  return fileExtension;
}
var init_getFileExtension = __esm({
  "node_modules/vike/dist/esm/utils/getFileExtension.js"() {
    init_slice();
  }
});

// node_modules/vike/dist/esm/utils/isPlainObject.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  return (
    /* Doesn't work in Cloudflare Pages workers
    value.constructor === Object
    */
    value.constructor.name === "Object"
  );
}
var init_isPlainObject = __esm({
  "node_modules/vike/dist/esm/utils/isPlainObject.js"() {
  }
});

// node_modules/vike/dist/esm/utils/isArrayOfStrings.js
function isArrayOfStrings(val) {
  return isArray(val) && val.every((v) => typeof v === "string");
}
var init_isArrayOfStrings = __esm({
  "node_modules/vike/dist/esm/utils/isArrayOfStrings.js"() {
    init_isArray();
  }
});

// node_modules/vike/dist/esm/utils/isObjectOfStrings.js
function isObjectOfStrings(val) {
  return isObject(val) && Object.values(val).every((v) => typeof v === "string");
}
var init_isObjectOfStrings = __esm({
  "node_modules/vike/dist/esm/utils/isObjectOfStrings.js"() {
    init_isObject();
  }
});

// node_modules/vike/dist/esm/utils/hasProp.js
function hasProp(obj, prop, type) {
  if (!isObject(obj))
    return false;
  if (!(prop in obj)) {
    return type === "undefined";
  }
  if (type === void 0) {
    return true;
  }
  const propValue = obj[prop];
  if (type === "undefined") {
    return propValue === void 0;
  }
  if (type === "array") {
    return isArray(propValue);
  }
  if (type === "object") {
    return isObject(propValue);
  }
  if (type === "string[]") {
    return isArrayOfStrings(propValue);
  }
  if (type === "string{}") {
    return isObjectOfStrings(propValue);
  }
  if (type === "function") {
    return isCallable(propValue);
  }
  if (isArray(type)) {
    return typeof propValue === "string" && type.includes(propValue);
  }
  if (type === "null") {
    return propValue === null;
  }
  if (type === "true") {
    return propValue === true;
  }
  if (type === "false") {
    return propValue === false;
  }
  return typeof propValue === type;
}
var init_hasProp = __esm({
  "node_modules/vike/dist/esm/utils/hasProp.js"() {
    init_isCallable();
    init_isObject();
    init_isArrayOfStrings();
    init_isObjectOfStrings();
    init_isArray();
  }
});

// node_modules/vike/dist/esm/utils/parseUrl.js
function parseUrl(url3, baseServer2) {
  assert(isUrl(url3), url3);
  assert(baseServer2.startsWith("/"));
  const { hashString: hashOriginal, withoutHash: urlWithoutHash } = extractHash(url3);
  assert(hashOriginal === null || hashOriginal.startsWith("#"));
  const hash = hashOriginal === null ? "" : decodeSafe(hashOriginal.slice(1));
  const { searchString: searchOriginal, withoutSearch: urlWithoutHashNorSearch } = extractSearch(urlWithoutHash);
  assert(searchOriginal === null || searchOriginal.startsWith("?"));
  let searchString = "";
  if (searchOriginal !== null) {
    searchString = searchOriginal;
  } else if (url3.startsWith("#")) {
    const baseURI = getBaseURI();
    searchString = baseURI && extractSearch(baseURI).searchString || "";
  }
  const search = {};
  const searchAll = {};
  Array.from(new URLSearchParams(searchString)).forEach(([key, val]) => {
    search[key] = val;
    searchAll[key] = [...searchAll.hasOwnProperty(key) ? searchAll[key] : [], val];
  });
  let { protocol, origin, pathnameAbsoluteWithBase } = getPathnameAbsoluteWithBase(urlWithoutHashNorSearch, baseServer2);
  const pathnameOriginal = urlWithoutHashNorSearch.slice((origin || "").length);
  assertUrlComponents(url3, origin, pathnameOriginal, searchOriginal, hashOriginal);
  let { pathname, isBaseMissing } = removeBaseServer(pathnameAbsoluteWithBase, baseServer2);
  const href = createUrlFromComponents(origin, pathname, searchOriginal, hashOriginal);
  const host = !origin ? null : origin.slice(protocol.length);
  const { hostname, port } = parseHost(host, url3);
  pathname = decodePathname(pathname);
  assert(pathname.startsWith("/"));
  return {
    href,
    protocol,
    hostname,
    port,
    origin,
    pathname,
    pathnameOriginal,
    isBaseMissing,
    search,
    searchAll,
    searchOriginal,
    hash,
    hashOriginal
  };
}
function extractHash(url3) {
  const [withoutHash, ...parts] = url3.split("#");
  const hashString = ["", ...parts].join("#") || null;
  return { hashString, withoutHash };
}
function extractSearch(url3) {
  const [withoutSearch, ...parts] = url3.split("?");
  const searchString = ["", ...parts].join("?") || null;
  return { searchString, withoutSearch };
}
function decodeSafe(urlComponent) {
  try {
    return decodeURIComponent(urlComponent);
  } catch {
  }
  try {
    return decodeURI(urlComponent);
  } catch {
  }
  return urlComponent;
}
function decodePathname(urlPathname) {
  urlPathname = urlPathname.replace(/\s+$/, "");
  urlPathname = urlPathname.split("/").map((dir) => decodeSafe(dir).split("/").join("%2F")).join("/");
  return urlPathname;
}
function getPathnameAbsoluteWithBase(url3, baseServer2) {
  assert(!url3.includes("?") && !url3.includes("#"));
  {
    const { protocol, origin, pathname } = parseOrigin(url3);
    if (origin) {
      return { protocol, origin, pathnameAbsoluteWithBase: pathname };
    }
    assert(pathname === url3);
  }
  if (url3.startsWith("/")) {
    return { protocol: null, origin: null, pathnameAbsoluteWithBase: url3 };
  } else {
    const baseURI = getBaseURI();
    let base;
    if (baseURI) {
      base = parseOrigin(baseURI.split("?")[0].split("#")[0]).pathname;
    } else {
      base = baseServer2;
    }
    const pathnameAbsoluteWithBase = resolveUrlPathnameRelative(url3, base);
    return { protocol: null, origin: null, pathnameAbsoluteWithBase };
  }
}
function getBaseURI() {
  const baseURI = typeof window !== "undefined" ? window?.document?.baseURI : void 0;
  return baseURI;
}
function parseOrigin(url3) {
  if (!isUrlWithProtocol(url3)) {
    return { pathname: url3, origin: null, protocol: null };
  } else {
    const { protocol, uriWithoutProtocol } = parseProtocol(url3);
    assert(protocol);
    const [host, ...rest] = uriWithoutProtocol.split("/");
    const origin = protocol + host;
    const pathname = "/" + rest.join("/");
    return { pathname, origin, protocol };
  }
}
function parseHost(host, url3) {
  const ret = { hostname: null, port: null };
  if (!host)
    return ret;
  const parts = host.split(":");
  if (parts.length > 1) {
    const port = parseInt(parts.pop(), 10);
    assert(port || port === 0, url3);
    ret.port = port;
  }
  ret.hostname = parts.join(":");
  return ret;
}
function parseProtocol(uri) {
  const SEP = ":";
  const [before, ...after] = uri.split(SEP);
  if (after.length === 0 || // https://github.com/vikejs/vike/commit/886a99ff21e86a8ca699a25cee7edc184aa058e4#r143308934
  // https://en.wikipedia.org/wiki/List_of_URI_schemes
  // https://www.rfc-editor.org/rfc/rfc7595
  !/^[a-z][a-z0-9\+\-]*$/i.test(before)) {
    return { protocol: null, uriWithoutProtocol: uri };
  }
  let protocol = before + SEP;
  let uriWithoutProtocol = after.join(SEP);
  const SEP2 = "//";
  if (uriWithoutProtocol.startsWith(SEP2)) {
    protocol = protocol + SEP2;
    uriWithoutProtocol = uriWithoutProtocol.slice(SEP2.length);
  }
  return { protocol, uriWithoutProtocol };
}
function isUrlProtocol(protocol) {
  const blacklist = [
    // https://docs.ipfs.tech/how-to/address-ipfs-on-web
    "ipfs://",
    "ipns://"
  ];
  if (blacklist.includes(protocol))
    return false;
  return protocol.endsWith("://");
}
function resolveUrlPathnameRelative(pathnameRelative, base) {
  const stack = base.split("/");
  const parts = pathnameRelative.split("/");
  let baseRestoreTrailingSlash = base.endsWith("/");
  if (pathnameRelative.startsWith(".")) {
    stack.pop();
  }
  for (const i in parts) {
    const p2 = parts[i];
    if (p2 == "" && i === "0")
      continue;
    if (p2 == ".")
      continue;
    if (p2 == "..")
      stack.pop();
    else {
      baseRestoreTrailingSlash = false;
      stack.push(p2);
    }
  }
  let pathnameAbsolute = stack.join("/");
  if (baseRestoreTrailingSlash && !pathnameAbsolute.endsWith("/"))
    pathnameAbsolute += "/";
  if (!pathnameAbsolute.startsWith("/"))
    pathnameAbsolute = "/" + pathnameAbsolute;
  return pathnameAbsolute;
}
function removeBaseServer(pathnameAbsoluteWithBase, baseServer2) {
  assert(pathnameAbsoluteWithBase.startsWith("/"));
  assert(isBaseServer(baseServer2));
  let urlPathname = pathnameAbsoluteWithBase;
  assert(urlPathname.startsWith("/"));
  assert(baseServer2.startsWith("/"));
  if (baseServer2 === "/") {
    const pathname = pathnameAbsoluteWithBase;
    return { pathname, isBaseMissing: false };
  }
  let baseServerNormalized = baseServer2;
  if (baseServer2.endsWith("/") && urlPathname === slice(baseServer2, 0, -1)) {
    baseServerNormalized = slice(baseServer2, 0, -1);
    assert(urlPathname === baseServerNormalized);
  }
  if (!urlPathname.startsWith(baseServerNormalized)) {
    const pathname = pathnameAbsoluteWithBase;
    return { pathname, isBaseMissing: true };
  }
  assert(urlPathname.startsWith("/") || urlPathname.startsWith("http"));
  assert(urlPathname.startsWith(baseServerNormalized));
  urlPathname = urlPathname.slice(baseServerNormalized.length);
  if (!urlPathname.startsWith("/"))
    urlPathname = "/" + urlPathname;
  assert(urlPathname.startsWith("/"));
  return { pathname: urlPathname, isBaseMissing: false };
}
function isBaseServer(baseServer2) {
  return baseServer2.startsWith("/");
}
function assertUrlComponents(url3, origin, pathnameOriginal, searchOriginal, hashOriginal) {
  const urlRecreated = createUrlFromComponents(origin, pathnameOriginal, searchOriginal, hashOriginal);
  assert(url3 === urlRecreated);
}
function createUrlFromComponents(origin, pathname, search, hash) {
  const urlRecreated = `${origin || ""}${pathname}${search || ""}${hash || ""}`;
  return urlRecreated;
}
function isUrl(url3) {
  return isUrlWithProtocol(url3) || url3.startsWith("/") || isUrlRelative(url3);
}
function isUrlRedirectTarget(url3) {
  return url3.startsWith("/") || isUri(url3) || isUrlWithProtocol(url3);
}
function isUrlRelative(url3) {
  return [".", "?", "#"].some((c) => url3.startsWith(c)) || url3 === "";
}
function isUrlWithProtocol(url3) {
  const { protocol } = parseProtocol(url3);
  return !!protocol && isUrlProtocol(protocol);
}
function isUri(uri) {
  const { protocol } = parseProtocol(uri);
  return !!protocol && !isUrlProtocol(uri);
}
function assertUsageUrlPathnameAbsolute(url3, errPrefix) {
  assertUsageUrl(url3, errPrefix);
}
function assertUsageUrlRedirectTarget(url3, errPrefix, isUnresolved) {
  assertUsageUrl(url3, errPrefix, { isRedirectTarget: isUnresolved ? "unresolved" : true });
}
function assertUsageUrl(url3, errPrefix, { isRedirectTarget } = {}) {
  if (url3.startsWith("/"))
    return;
  let errMsg = `${errPrefix} is ${picocolors_default.string(url3)} but it should start with ${picocolors_default.string("/")}`;
  if (isRedirectTarget) {
    if (isUrlRedirectTarget(url3))
      return;
    errMsg += ` or a protocol (${picocolors_default.string("http://")}, ${picocolors_default.string("mailto:")}, ...)`;
    if (isRedirectTarget === "unresolved") {
      if (url3 === "*")
        return;
      errMsg += `, or be ${picocolors_default.string("*")}`;
    }
  }
  assertUsage(false, errMsg);
}
var init_parseUrl = __esm({
  "node_modules/vike/dist/esm/utils/parseUrl.js"() {
    init_slice();
    init_assert();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/utils/parseUrl-extras.js
function prependBase(url3, baseServer2) {
  if (baseServer2.startsWith("http")) {
    const baseAssets = baseServer2;
    const baseAssetsNormalized = normalizeBaseAssets(baseAssets);
    assert(!baseAssetsNormalized.endsWith("/"));
    assert(url3.startsWith("/"));
    return `${baseAssetsNormalized}${url3}`;
  }
  assert(isBaseServer(baseServer2));
  const baseServerNormalized = normalizeBaseServer(baseServer2);
  if (baseServerNormalized === "/")
    return url3;
  assert(!baseServerNormalized.endsWith("/"));
  assert(url3.startsWith("/"));
  return `${baseServerNormalized}${url3}`;
}
function removeBaseServer2(url3, baseServer2) {
  const { isBaseMissing, origin, pathname, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url3, baseServer2);
  assert(!isBaseMissing);
  assertUrlComponents(url3, origin, pathnameOriginal, searchOriginal, hashOriginal);
  const urlWithoutBase = createUrlFromComponents(origin, pathname, searchOriginal, hashOriginal);
  return urlWithoutBase;
}
function normalizeBaseAssets(baseAssets) {
  let baseAssetsNormalized = baseAssets;
  if (baseAssetsNormalized.endsWith("/")) {
    baseAssetsNormalized = slice(baseAssetsNormalized, 0, -1);
  }
  assert(!baseAssetsNormalized.endsWith("/"));
  return baseAssetsNormalized;
}
function normalizeBaseServer(baseServer2) {
  let baseServerNormalized = baseServer2;
  if (baseServerNormalized.endsWith("/") && baseServerNormalized !== "/") {
    baseServerNormalized = slice(baseServerNormalized, 0, -1);
  }
  assert(!baseServerNormalized.endsWith("/") || baseServerNormalized === "/");
  return baseServerNormalized;
}
function isBaseAssets(base) {
  return base.startsWith("/") || base.startsWith("http://") || base.startsWith("https://");
}
function normalizeUrlPathname(urlOriginal, trailingSlash, baseServer2) {
  const urlNormalized = modifyUrlPathname(urlOriginal, (urlPathname) => {
    assert(urlPathname.startsWith("/"));
    let urlPathnameNormalized = normalize(urlPathname);
    if (urlPathnameNormalized === "/") {
      return urlPathnameNormalized;
    }
    if (baseServer2.endsWith("/") && baseServer2 !== "/" && normalize(baseServer2) === urlPathnameNormalized) {
      trailingSlash = true;
    }
    assert(!urlPathnameNormalized.endsWith("/"));
    if (trailingSlash) {
      urlPathnameNormalized = urlPathnameNormalized + "/";
    }
    return urlPathnameNormalized;
  });
  if (urlNormalized === urlOriginal)
    return null;
  return urlNormalized;
}
function normalize(urlPathname) {
  assert(urlPathname.startsWith("/"));
  return "/" + urlPathname.split("/").filter(Boolean).join("/");
}
function modifyUrlPathname(url3, modifier) {
  const { origin, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url3, "/");
  const pathnameModified = modifier(pathnameOriginal);
  if (pathnameModified === null)
    return url3;
  assertUrlComponents(url3, origin, pathnameOriginal, searchOriginal, hashOriginal);
  const urlModified = createUrlFromComponents(origin, pathnameModified, searchOriginal, hashOriginal);
  assert(pathnameOriginal === pathnameModified === (url3 === urlModified));
  return urlModified;
}
function removeUrlOrigin(url3) {
  const { origin, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url3, "/");
  const urlModified = createUrlFromComponents(null, pathnameOriginal, searchOriginal, hashOriginal);
  assert(urlModified.startsWith("/"));
  return { urlModified, origin };
}
function setUrlOrigin(url3, origin) {
  const { origin: originCurrent, pathnameOriginal, searchOriginal, hashOriginal } = parseUrl(url3, "/");
  if (origin === originCurrent)
    return false;
  assert(origin === null || origin.startsWith("http"));
  const urlModified = createUrlFromComponents(origin, pathnameOriginal, searchOriginal, hashOriginal);
  return urlModified;
}
function getUrlPretty(url3) {
  const { urlModified } = removeUrlOrigin(url3);
  return urlModified;
}
var init_parseUrl_extras = __esm({
  "node_modules/vike/dist/esm/utils/parseUrl-extras.js"() {
    init_parseUrl();
    init_assert();
    init_slice();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/esm/utils/isNullish.js
function isNullish(val) {
  return val === null || val === void 0;
}
function isNotNullish(p2) {
  return !isNullish(p2);
}
var init_isNullish = __esm({
  "node_modules/vike/dist/esm/utils/isNullish.js"() {
  }
});

// node_modules/vike/dist/esm/node/shared/utils.js
var init_utils = __esm({
  "node_modules/vike/dist/esm/node/shared/utils.js"() {
    init_assertIsNotBrowser();
    init_assert();
    init_getFileExtension();
    init_isPlainObject();
    init_checkType();
    init_hasProp();
    init_objectAssign();
    init_checkType();
    init_hasProp();
    init_parseUrl();
    init_parseUrl_extras();
    init_isObject();
    init_assertIsNotBrowser();
    init_isNullish();
    init_unique();
    init_debug();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/esm/node/shared/isErrorDebug.js
function isErrorDebug() {
  return isDebugActivated("vike:error");
}
var init_isErrorDebug = __esm({
  "node_modules/vike/dist/esm/node/shared/isErrorDebug.js"() {
    init_utils();
  }
});

// node_modules/vike/dist/esm/node/runtime/onLoad.js
function onLoad() {
  assertIsNotBrowser();
  assertNodeVersion();
  if (isErrorDebug())
    setAlwaysShowStackTrace();
  addEcosystemStamp();
  (0, import_require_shim.installRequireShim)();
}
function addEcosystemStamp() {
  const g = globalThis;
  g._isVikeApp = /* Don't set to true so that consumers do `!!globalThis._isVikeApp` instead of `globalThis._isVikeApp === true`.
  true
  */
  // We use an object so that we can eventually, in the future, add helpful information as needed. (E.g. the Vike version, or global settings.)
  {};
  g._isVitePluginSsr = true;
}
var import_require_shim;
var init_onLoad = __esm({
  "node_modules/vike/dist/esm/node/runtime/onLoad.js"() {
    init_assertIsNotBrowser();
    init_assertNodeVersion();
    init_assert();
    import_require_shim = __toESM(require_dist(), 1);
    init_isErrorDebug();
  }
});

// node_modules/vike/dist/esm/utils/cast.js
function cast(_thing) {
}
var init_cast = __esm({
  "node_modules/vike/dist/esm/utils/cast.js"() {
  }
});

// node_modules/vike/dist/esm/utils/isPromise.js
function isPromise(val) {
  return typeof val === "object" && val !== null && "then" in val && isCallable(val.then);
}
var init_isPromise = __esm({
  "node_modules/vike/dist/esm/utils/isPromise.js"() {
    init_isCallable();
  }
});

// node_modules/vike/dist/esm/utils/sorter.js
function higherFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    if (val1 === val2) {
      return 0;
    }
    return val1 > val2 ? -1 : 1;
  };
}
function lowerFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    if (val1 === val2) {
      return 0;
    }
    return val1 < val2 ? -1 : 1;
  };
}
function makeFirst(getValue) {
  return (element1, element2) => {
    const val1 = getValue(element1);
    const val2 = getValue(element2);
    assert([true, false, null].includes(val1));
    assert([true, false, null].includes(val2));
    if (val1 === val2) {
      return 0;
    }
    if (val1 === true || val2 === false) {
      return -1;
    }
    if (val2 === true || val1 === false) {
      return 1;
    }
    assert(false);
  };
}
function makeLast(getValue) {
  return makeFirst((element) => {
    const val = getValue(element);
    if (val === null) {
      return null;
    } else {
      return !val;
    }
  });
}
var init_sorter = __esm({
  "node_modules/vike/dist/esm/utils/sorter.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/esm/utils/objectAssignSafe.js
var init_objectAssignSafe = __esm({
  "node_modules/vike/dist/esm/utils/objectAssignSafe.js"() {
  }
});

// node_modules/vike/dist/esm/utils/objectReplace.js
var init_objectReplace = __esm({
  "node_modules/vike/dist/esm/utils/objectReplace.js"() {
  }
});

// node_modules/vike/dist/esm/utils/PromiseType.js
var init_PromiseType = __esm({
  "node_modules/vike/dist/esm/utils/PromiseType.js"() {
  }
});

// node_modules/vike/dist/esm/utils/compareString.js
function compareString(str1, str2) {
  if (str1.toLowerCase() < str2.toLowerCase())
    return -1;
  if (str1.toLowerCase() > str2.toLowerCase())
    return 1;
  return 0;
}
var init_compareString = __esm({
  "node_modules/vike/dist/esm/utils/compareString.js"() {
  }
});

// node_modules/vike/dist/esm/utils/isObjectWithKeys.js
function isObjectWithKeys(obj, keys) {
  if (!isPlainObject(obj)) {
    return false;
  }
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      return false;
    }
  }
  return true;
}
var init_isObjectWithKeys = __esm({
  "node_modules/vike/dist/esm/utils/isObjectWithKeys.js"() {
    init_isPlainObject();
  }
});

// node_modules/vike/dist/esm/utils/stringifyStringArray.js
function stringifyStringArray(stringList) {
  return "[" + stringList.map((str) => "'" + str + "'").join(", ") + "]";
}
var init_stringifyStringArray = __esm({
  "node_modules/vike/dist/esm/utils/stringifyStringArray.js"() {
  }
});

// node_modules/vike/dist/esm/utils/capitalizeFirstLetter.js
function capitalizeFirstLetter(word) {
  if (!word[0]) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1);
}
var init_capitalizeFirstLetter = __esm({
  "node_modules/vike/dist/esm/utils/capitalizeFirstLetter.js"() {
  }
});

// node_modules/vike/dist/esm/utils/debugGlob.js
var debugGlob;
var init_debugGlob = __esm({
  "node_modules/vike/dist/esm/utils/debugGlob.js"() {
    init_debug();
    debugGlob = createDebugger("vike:glob");
  }
});

// node_modules/vike/dist/esm/utils/isSameErrorMessage.js
function isSameErrorMessage(err1, err2) {
  if (!isObject(err1) || !isObject(err2))
    return false;
  return err1.message === err2.message;
}
var init_isSameErrorMessage = __esm({
  "node_modules/vike/dist/esm/utils/isSameErrorMessage.js"() {
    init_isObject();
  }
});

// node_modules/vike/dist/esm/utils/styleFileRE.js
var styleFileRE;
var init_styleFileRE = __esm({
  "node_modules/vike/dist/esm/utils/styleFileRE.js"() {
    styleFileRE = /\.(css|less|sass|scss|styl|stylus|pcss|postcss)($|\?)/;
  }
});

// node_modules/vike/dist/esm/utils/isPropertyGetter.js
function isPropertyGetter(obj, prop) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  return !!descriptor && !("value" in descriptor) && !!descriptor.get;
}
var init_isPropertyGetter = __esm({
  "node_modules/vike/dist/esm/utils/isPropertyGetter.js"() {
  }
});

// node_modules/vike/dist/esm/utils/urlToFile.js
var baseServer;
var init_urlToFile = __esm({
  "node_modules/vike/dist/esm/utils/urlToFile.js"() {
    init_assert();
    init_parseUrl();
    init_slice();
    baseServer = "/";
  }
});

// node_modules/vike/dist/esm/utils/freezePartial.js
function freezePartial(obj, allowList) {
  Object.entries(obj).forEach(([key, val]) => {
    Object.defineProperty(obj, key, {
      get() {
        return val;
      },
      set(newVal) {
        if (key in allowList) {
          const isAllowed = allowList[key](newVal);
          if (isAllowed) {
            val = newVal;
            return;
          } else {
            throw new Error(`Setting wrong value ${picocolors_default.cyan(JSON.stringify(newVal))} for property ${picocolors_default.cyan(key)}`);
          }
        }
        throw new Error(`You aren't allowed to mutate property ${picocolors_default.cyan(key)}`);
      },
      configurable: false,
      enumerable: true
    });
  });
  Object.preventExtensions(obj);
}
var init_freezePartial = __esm({
  "node_modules/vike/dist/esm/utils/freezePartial.js"() {
    init_picocolors();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/esm/utils/isNpmPackage.js
function isNpmPackageImport(str, { cannotBePathAlias }) {
  assert(cannotBePathAlias);
  return isNpmPackageImport_unreliable(str);
}
function isNpmPackageImport_unreliable(str) {
  const res = parse(str);
  return res !== null;
}
function assertIsNpmPackageImport(str) {
  assert(isNpmPackageImport(str, {
    // If `str` is a path alias that looks like an npm package => assertIsNpmPackageImport() is erroneous but that's okay because the assertion will eventually fail for some other user using a disambiguated path alias.
    cannotBePathAlias: true
  }), str);
}
function parse(str) {
  if (!str)
    return null;
  let scope = null;
  if (str.startsWith("@")) {
    if (!str.includes("/"))
      return null;
    const [scope_, ...rest] = str.split("/");
    scope = scope_;
    str = rest.join("/");
    if (!str)
      return null;
    if (scope === "@" || invalid(scope.slice(1)))
      return null;
  }
  const [name, ...importPathParts] = str.split("/");
  if (!name || invalid(name))
    return null;
  const importPath = importPathParts.length === 0 ? null : importPathParts.join("/");
  return {
    pkgName: scope ? `${scope}/${name}` : name,
    importPath
  };
}
function invalid(s) {
  const firstLetter = s[0];
  if (!firstLetter || !/[a-z0-9]/.test(firstLetter))
    return true;
  if (/[^a-z0-9_\-\.]/.test(s))
    return true;
  return false;
}
var init_isNpmPackage = __esm({
  "node_modules/vike/dist/esm/utils/isNpmPackage.js"() {
    init_assert();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/esm/utils/isScriptFile.js
function isScriptFile(filePath) {
  const yes = scriptFileExtensionList.some((ext) => filePath.endsWith("." + ext));
  if (isPlainJavaScriptFile(filePath))
    assert(yes);
  return yes;
}
function isPlainJavaScriptFile(filePath) {
  const yes1 = /\.(c|m)?(j|t)s$/.test(filePath);
  const yes2 = extJavaScript.some((ext) => filePath.endsWith("." + ext));
  assert(yes1 === yes2);
  return yes1;
}
function isTemplateFile(filePath) {
  return extTemplates.some((ext) => filePath.endsWith("." + ext));
}
var extJavaScript, extJsx, extTemplates, scriptFileExtensionList, scriptFileExtensions;
var init_isScriptFile = __esm({
  "node_modules/vike/dist/esm/utils/isScriptFile.js"() {
    init_assert();
    extJavaScript = [
      "js",
      "ts",
      "cjs",
      "cts",
      "mjs",
      "mts"
    ];
    extJsx = [
      "jsx",
      "tsx",
      "cjsx",
      "ctsx",
      "mjsx",
      "mtsx"
    ];
    extTemplates = [
      "vue",
      "svelte",
      "marko",
      "md",
      "mdx"
    ];
    scriptFileExtensionList = [...extJavaScript, ...extJsx, ...extTemplates];
    scriptFileExtensions = "(" + scriptFileExtensionList.join("|") + ")";
  }
});

// node_modules/vike/dist/esm/utils/removeFileExtention.js
var init_removeFileExtention = __esm({
  "node_modules/vike/dist/esm/utils/removeFileExtention.js"() {
  }
});

// node_modules/vike/dist/esm/utils/objectKeys.js
function objectKeys(obj) {
  return Object.keys(obj);
}
var init_objectKeys = __esm({
  "node_modules/vike/dist/esm/utils/objectKeys.js"() {
  }
});

// node_modules/vike/dist/esm/utils/objectEntries.js
var init_objectEntries = __esm({
  "node_modules/vike/dist/esm/utils/objectEntries.js"() {
  }
});

// node_modules/vike/dist/esm/utils/objectFromEntries.js
var init_objectFromEntries = __esm({
  "node_modules/vike/dist/esm/utils/objectFromEntries.js"() {
  }
});

// node_modules/vike/dist/esm/utils/isVitest.js
function isVitest() {
  return typeof process !== "undefined" && typeof process.env !== "undefined" && "VITEST" in process.env;
}
var init_isVitest = __esm({
  "node_modules/vike/dist/esm/utils/isVitest.js"() {
  }
});

// node_modules/vike/dist/esm/utils/assertSetup.js
function onSetupRuntime() {
  if (debug.isActivated)
    debug("assertSetup()", new Error().stack);
  if (isTest())
    return;
  assertNodeEnvIsNotUndefinedString();
  if (!setup.viteDevServer && setup.isViteDev === void 0) {
    assertWarning2(!isNodeEnvDev(), `The ${getEnvDescription()}, which is contradictory because the environment seems to be a production environment (Vite isn't loaded), see https://vike.dev/NODE_ENV`, { onlyOnce: true });
    assertUsage(!setup.vikeVitePlugin, `Loading Vike's Vite plugin (the ${picocolors_default.cyan("vike/plugin")} module) is prohibited in production.`);
    assert(!setup.shouldNotBeProduction);
  } else {
    if (!setup.isPreview && !setup.vitePreviewServer && !setup.isPrerendering) {
      assertWarning2(isNodeEnvDev(), `The ${getEnvDescription()}, but Vite is loaded which is prohibited in production, see https://vike.dev/NODE_ENV`, { onlyOnce: true });
    }
    assert(setup.vikeVitePlugin);
    assert(setup.shouldNotBeProduction);
  }
}
function isTest() {
  return isVitest() || isNodeEnv("test");
}
function getEnvDescription() {
  const envType = `${isNodeEnvDev() ? "development" : "production"} environment`;
  const nodeEnvDesc = `environment is set to be a ${picocolors_default.bold(envType)} by ${picocolors_default.cyan(`process.env.NODE_ENV===${JSON.stringify(getNodeEnv())}`)}`;
  return nodeEnvDesc;
}
function assertNodeEnvIsNotUndefinedString() {
  const nodeEnv = getNodeEnv();
  assertWarning2(nodeEnv !== "undefined", `${picocolors_default.cyan('process.env.NODE_ENV==="undefined"')} which is unexpected: ${picocolors_default.cyan("process.env.NODE_ENV")} is allowed to be the *value* ${picocolors_default.cyan("undefined")} (i.e. ${picocolors_default.cyan("process.env.NODE_ENV===undefined")}) but it shouldn't be the *string* ${picocolors_default.cyan('"undefined"')} ${picocolors_default.underline("https://vike.dev/NODE_ENV")}`, { onlyOnce: true });
}
function isNodeEnvDev() {
  const nodeEnv = getNodeEnv();
  return nodeEnv === void 0 || isNodeEnv(["development", "dev", ""]);
}
function isNodeEnv(value) {
  const values = Array.isArray(value) ? value : [value];
  const nodeEnv = getNodeEnv();
  return nodeEnv !== void 0 && values.includes(nodeEnv.toLowerCase());
}
function getNodeEnv() {
  let val;
  try {
    val = process.env.NODE_ENV;
  } catch {
    return void 0;
  }
  return val;
}
var debug, setup;
var init_assertSetup = __esm({
  "node_modules/vike/dist/esm/utils/assertSetup.js"() {
    init_assert();
    init_assertIsNotBrowser();
    init_debug();
    init_getGlobalObject();
    init_isVitest();
    init_picocolors();
    assertIsNotBrowser();
    debug = createDebugger("vike:setup");
    setup = getGlobalObject("utils/assertSetup.ts", {});
  }
});

// node_modules/vike/dist/esm/utils/path.js
function toPosixPath(path) {
  const pathPosix = path.split("\\").join("/");
  assertPosixPath(pathPosix);
  return pathPosix;
}
function assertPosixPath(path) {
  const errMsg = (msg) => `Not a posix path: ${msg}`;
  assert(path !== null, errMsg("null"));
  assert(typeof path === "string", errMsg(`typeof path === ${JSON.stringify(typeof path)}`));
  assert(path !== "", errMsg("(empty string)"));
  assert(path);
  assert(!path.includes("\\"), errMsg(path));
}
var init_path = __esm({
  "node_modules/vike/dist/esm/utils/path.js"() {
    init_assert();
    init_assertIsNotBrowser();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/esm/utils/isHtml.js
function isHtml(str) {
  const re = /(<\/[^<]+>)|(<[^<]+\/>)/;
  return re.test(str);
}
var init_isHtml = __esm({
  "node_modules/vike/dist/esm/utils/isHtml.js"() {
  }
});

// node_modules/vike/dist/esm/utils/warnIfErrorIsNotObject.js
function warnIfErrorIsNotObject(err) {
  if (!isObject(err)) {
    console.warn("[vike] The thrown value is:");
    console.warn(err);
    assertWarning2(false, `One of your hooks threw an error ${picocolors_default.cyan("throw someValue")} but ${picocolors_default.cyan("someValue")} isn't an object (it's ${picocolors_default.cyan(`typeof someValue === ${typeof err}`)} instead). Make sure thrown values are always wrapped with ${picocolors_default.cyan("new Error()")}, in other words: ${picocolors_default.cyan("throw someValue")} should be replaced with ${picocolors_default.cyan("throw new Error(someValue)")}. The thrown value is printed above.`, { onlyOnce: false });
  }
}
var init_warnIfErrorIsNotObject = __esm({
  "node_modules/vike/dist/esm/utils/warnIfErrorIsNotObject.js"() {
    init_assert();
    init_assertIsNotBrowser();
    init_isObject();
    init_picocolors();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/esm/utils/stripAnsi.js
function stripAnsi(string) {
  return string.replace(ansiRegex2, "");
}
function getAnsiRegex2() {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, "g");
}
var ansiRegex2;
var init_stripAnsi = __esm({
  "node_modules/vike/dist/esm/utils/stripAnsi.js"() {
    init_assertIsNotBrowser();
    assertIsNotBrowser();
    ansiRegex2 = getAnsiRegex2();
  }
});

// node_modules/vike/dist/esm/utils/truncateString.js
function truncateString(str, lenMax) {
  const lenMaxReal = lenMax - 3;
  assert(lenMaxReal >= 1);
  if (str.length < lenMax) {
    return str;
  } else {
    str = str.substring(0, lenMaxReal);
    const ellipsis = picocolors_default.dim("...");
    str = str + ellipsis;
    return str;
  }
}
var init_truncateString = __esm({
  "node_modules/vike/dist/esm/utils/truncateString.js"() {
    init_picocolors();
    init_assert();
  }
});

// node_modules/vike/dist/esm/utils/formatHintLog.js
function formatHintLog(msg) {
  assert(msg.length > 0);
  const msgLength = stripAnsi(msg).length;
  const sep = "\u2500".repeat(msgLength);
  return [
    // prettier-ignore
    // biome-ignore format:
    `\u250C\u2500${sep}\u2500\u2510`,
    `\u2502 ${msg} \u2502`,
    `\u2514\u2500${sep}\u2500\u2518`
  ].join("\n");
}
var init_formatHintLog = __esm({
  "node_modules/vike/dist/esm/utils/formatHintLog.js"() {
    init_assert();
    init_stripAnsi();
  }
});

// node_modules/vike/dist/esm/utils/joinEnglish.js
function joinEnglish(arr, conjunction, colorizer = (s) => s) {
  assert(arr.length > 0);
  if (arr.length === 1)
    return colorizer(arr[0]);
  const firsts = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];
  return firsts.map(colorizer).join(", ") + `, ${conjunction} ` + colorizer(last);
}
var init_joinEnglish = __esm({
  "node_modules/vike/dist/esm/utils/joinEnglish.js"() {
    init_assert();
  }
});

// node_modules/vike/dist/esm/utils/escapeHtml.js
function escapeHtml(unsafeString) {
  const safe = unsafeString.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  return safe;
}
var init_escapeHtml = __esm({
  "node_modules/vike/dist/esm/utils/escapeHtml.js"() {
  }
});

// node_modules/vike/dist/esm/utils/normalizeHeaders.js
function normalizeHeaders(headersOriginal) {
  let headersCleaned = headersOriginal;
  if (isObject(headersCleaned) && headersCleaned[":method"])
    headersCleaned = Object.fromEntries(Object.entries(headersCleaned).filter(([key]) => !key.startsWith(":")));
  const headersStandard = new Headers(headersCleaned);
  const headers = Object.fromEntries(headersStandard.entries());
  return headers;
}
var init_normalizeHeaders = __esm({
  "node_modules/vike/dist/esm/utils/normalizeHeaders.js"() {
    init_isObject();
  }
});

// node_modules/vike/dist/esm/utils/isVikeReactApp.js
function isVikeReactApp() {
  const g = globalThis;
  return !!g._isVikeReactApp;
}
var init_isVikeReactApp = __esm({
  "node_modules/vike/dist/esm/utils/isVikeReactApp.js"() {
  }
});

// node_modules/vike/dist/esm/utils/getPropAccessNotation.js
function getPropAccessNotation(key) {
  return typeof key === "string" && isKeyDotNotationCompatible(key) ? `.${key}` : `[${JSON.stringify(key)}]`;
}
function isKeyDotNotationCompatible(key) {
  return /^[a-z0-9\$_]+$/i.test(key);
}
var init_getPropAccessNotation = __esm({
  "node_modules/vike/dist/esm/utils/getPropAccessNotation.js"() {
  }
});

// node_modules/vike/dist/esm/utils/genPromise.js
function genPromise() {
  let resolve3;
  const promise = new Promise((r) => resolve3 = r);
  return { promise, resolve: resolve3 };
}
var init_genPromise = __esm({
  "node_modules/vike/dist/esm/utils/genPromise.js"() {
  }
});

// node_modules/vike/dist/esm/utils/makePublicCopy.js
function makePublicCopy(obj, objName, propsPublic, propsInternalNoWarning) {
  const objPublic = {};
  objectKeys(obj).forEach((key) => {
    const val = obj[key];
    if (propsPublic.includes(key)) {
      objPublic[key] = val;
    } else {
      const keyPublic = key.startsWith("_") ? key : `_${key}`;
      if (propsInternalNoWarning?.includes(key)) {
        objPublic[keyPublic] = val;
      } else {
        Object.defineProperty(objPublic, keyPublic, {
          enumerable: true,
          get() {
            assertWarning2(false, `Using internal ${objName}.${keyPublic} which may break in any minor version update. Reach out on GitHub and elaborate your use case so that the Vike team can add official support for your use case.`, { onlyOnce: true });
            return val;
          }
        });
      }
    }
  });
  return objPublic;
}
var init_makePublicCopy = __esm({
  "node_modules/vike/dist/esm/utils/makePublicCopy.js"() {
    init_assert();
    init_objectKeys();
  }
});

// node_modules/vike/dist/esm/node/runtime/utils.js
var init_utils2 = __esm({
  "node_modules/vike/dist/esm/node/runtime/utils.js"() {
    init_trackLogs();
    init_onLoad();
    init_assert();
    init_cast();
    init_checkType();
    init_isCallable();
    init_isBrowser();
    init_isPlainObject();
    init_isPromise();
    init_hasProp();
    init_parseUrl();
    init_parseUrl_extras();
    init_slice();
    init_sorter();
    init_isArray();
    init_isObject();
    init_objectAssign();
    init_objectAssignSafe();
    init_objectReplace();
    init_PromiseType();
    init_compareString();
    init_isObjectWithKeys();
    init_stringifyStringArray();
    init_unique();
    init_capitalizeFirstLetter();
    init_debugGlob();
    init_isSameErrorMessage();
    init_styleFileRE();
    init_isPropertyGetter();
    init_debug();
    init_urlToFile();
    init_getGlobalObject();
    init_freezePartial();
    init_isNpmPackage();
    init_isNullish();
    init_isScriptFile();
    init_removeFileExtention();
    init_objectKeys();
    init_objectEntries();
    init_objectFromEntries();
    init_getFileExtension();
    init_assertSetup();
    init_path();
    init_isHtml();
    init_warnIfErrorIsNotObject();
    init_stripAnsi();
    init_getTerminWidth();
    init_truncateString();
    init_formatHintLog();
    init_joinEnglish();
    init_isArrayOfStrings();
    init_escapeHtml();
    init_normalizeHeaders();
    init_isVikeReactApp();
    init_getPropAccessNotation();
    init_PROJECT_VERSION();
    init_genPromise();
    init_makePublicCopy();
    onLoad();
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/createErrorWithCleanStackTrace.js
function createErrorWithCleanStackTrace2(errorMessage, numberOfStackTraceLinesToRemove3) {
  const err = new Error(errorMessage);
  err.stack = clean2(err.stack, numberOfStackTraceLinesToRemove3);
  return err;
}
function clean2(errStack, numberOfStackTraceLinesToRemove3) {
  if (!errStack) {
    return errStack;
  }
  const stackLines = splitByLine2(errStack);
  let linesRemoved = 0;
  const stackLine__cleaned = stackLines.filter((line) => {
    if (line.includes(" (internal/") || line.includes(" (node:internal")) {
      return false;
    }
    if (linesRemoved < numberOfStackTraceLinesToRemove3 && isStackTraceLine2(line)) {
      linesRemoved++;
      return false;
    }
    return true;
  }).join("\n");
  return stackLine__cleaned;
}
function isStackTraceLine2(line) {
  return line.startsWith("    at ");
}
function splitByLine2(str) {
  return str.split(/\r?\n/);
}
var init_createErrorWithCleanStackTrace2 = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/createErrorWithCleanStackTrace.js"() {
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/PROJECT_VERSION.js
var PROJECT_VERSION2;
var init_PROJECT_VERSION2 = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/PROJECT_VERSION.js"() {
    PROJECT_VERSION2 = "0.7.1";
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/projectInfo.js
var projectInfo;
var init_projectInfo = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/projectInfo.js"() {
    init_PROJECT_VERSION2();
    projectInfo = {
      projectName: "@brillout/vite-plugin-server-entry",
      npmPackageName: "@brillout/vite-plugin-server-entry",
      projectVersion: PROJECT_VERSION2,
      githubRepository: "https://github.com/brillout/vite-plugin-server-entry"
    };
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/assert.js
function assert2(condition, debugInfo) {
  if (condition) {
    return;
  }
  const debugStr = (() => {
    if (!debugInfo) {
      return null;
    }
    const debugInfoSerialized = typeof debugInfo === "string" ? debugInfo : "`" + JSON.stringify(debugInfo) + "`";
    return `Debug info (this is for the ${projectInfo.projectName} maintainers; you can ignore this): ${debugInfoSerialized}`;
  })();
  const internalError = createErrorWithCleanStackTrace2([
    `${internalErrorPrefix} You stumbled upon a bug in the source code of ${projectInfo.projectName}.`,
    `Reach out at ${projectInfo.githubRepository}/issues/new and include this error stack (the error stack is usually enough to fix the problem).`,
    "A maintainer will fix the bug (usually under 24 hours).",
    `Don't hesitate to reach out as it makes ${projectInfo.projectName} more robust.`,
    debugStr
  ].filter(Boolean).join(" "), numberOfStackTraceLinesToRemove2);
  throw internalError;
}
function assertUsage2(condition, errorMessage) {
  if (condition) {
    return;
  }
  const errMsg = `${usageErrorPrefix} ${errorMessage}`;
  const usageError = createErrorWithCleanStackTrace2(errMsg, numberOfStackTraceLinesToRemove2);
  throw usageError;
}
var logLabel, internalErrorPrefix, usageErrorPrefix, numberOfStackTraceLinesToRemove2;
var init_assert2 = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/assert.js"() {
    init_createErrorWithCleanStackTrace2();
    init_projectInfo();
    logLabel = `[${projectInfo.npmPackageName}@${projectInfo.projectVersion}]`;
    internalErrorPrefix = `${logLabel}[Bug]`;
    usageErrorPrefix = `${logLabel}[Wrong Usage]`;
    numberOfStackTraceLinesToRemove2 = 2;
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/filesystemPathHandling.js
function toPosixPath2(path) {
  if (isPosix()) {
    assertPosixPath2(path);
    return path;
  }
  if (isWin32()) {
    const pathPosix = path.split(sepWin32).join(sepPosix);
    assertPosixPath2(pathPosix);
    return pathPosix;
  }
  assert2(false);
}
function assertPosixPath2(path) {
  assert2(path && !path.includes(sepWin32), `Wrongly formatted path: ${path}`);
}
function isWin32() {
  return process.platform === "win32";
}
function isPosix() {
  return !isWin32();
}
var sepPosix, sepWin32;
var init_filesystemPathHandling = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/filesystemPathHandling.js"() {
    init_assert2();
    sepPosix = "/";
    sepWin32 = "\\";
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/getCwdSafe.js
function getCwdSafe() {
  if (typeof process == "undefined" || !("cwd" in process))
    return null;
  return toPosixPath2(process.cwd());
}
var init_getCwdSafe = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/getCwdSafe.js"() {
    init_filesystemPathHandling();
  }
});

// ../../node_modules/@brillout/import/dist/esm/index.js
function import_(id) {
  id = fixWindowsBug(id);
  return import(
    /*webpackIgnore: true*/
    id
  );
}
function fixWindowsBug(id) {
  if (process.platform === "win32" && isAbsolute(id) && !id.startsWith(prefix)) {
    return prefix + id;
  } else {
    return id;
  }
}
function isAbsolute(path) {
  return /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/.test(path);
}
var prefix;
var init_esm = __esm({
  "../../node_modules/@brillout/import/dist/esm/index.js"() {
    prefix = "file://";
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/requireResolve.js
async function requireResolve(id, currentFilePath) {
  const req = await getRequire(currentFilePath);
  return req.resolve(id);
}
async function getRequire(currentFilePath) {
  const { createRequire } = await import_("module");
  const req = createRequire(currentFilePath);
  return req;
}
var init_requireResolve = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/requireResolve.js"() {
    init_esm();
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/isWebpackResolve.js
function isWebpackResolve(moduleResolve, cwd) {
  assert2(process);
  return (
    // Upon `require.resolve()` webpack returns a number
    typeof moduleResolve === "number" || // Upon `import.meta.resolve()` webpack returns a path such as /test/webpack/dist/server/entry.mjs which seems to be relative to the monorepo root
    getFirstDir(moduleResolve) !== getFirstDir(cwd) || // `import.meta.resolve()` + windows => webpack returns file:///D:/test/webpack/dist/server/entry.mjs
    process.platform === "win32" && getSecondDir(moduleResolve) !== getSecondDir(cwd)
  );
}
function getFirstDir(path) {
  return getDirs(path)[0];
}
function getSecondDir(path) {
  return getDirs(path)[1];
}
function getDirs(path) {
  assert2(!path.startsWith("file:"));
  return toPosixPath2(path).split("/").filter(Boolean);
}
var init_isWebpackResolve = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/utils/isWebpackResolve.js"() {
    init_assert2();
    init_filesystemPathHandling();
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/utils.js
var init_utils3 = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/utils.js"() {
    init_assert2();
    init_getCwdSafe();
    init_filesystemPathHandling();
    init_requireResolve();
    init_isWebpackResolve();
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/utils.js
var init_utils4 = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/utils.js"() {
    init_assert2();
    init_getCwdSafe();
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/debug.js
function logDebug(...msgs) {
  console.log(`${logLabel}[DEBUG]`, ...msgs);
}
var DEBUG2;
var init_debug2 = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/debug.js"() {
    init_utils4();
    DEBUG2 = false;
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/debugLogsRuntime.js
function debugLogsRuntimePre(autoImporter) {
  if (!DEBUG2)
    return;
  logDebug("DEBUG_LOGS_RUNTIME [begin]");
  try {
    logDebug("process.platform", JSON.stringify(process.platform));
  } catch {
    logDebug("process.platform", "undefined");
  }
  try {
    logDebug("process.release", JSON.stringify(process.release));
  } catch {
    logDebug("process.release", "undefined");
  }
  try {
    logDebug("navigator", JSON.stringify(navigator));
  } catch {
    logDebug("navigator", "undefined");
  }
  logDebug("cwd", getCwdSafe());
  logDebug("importer.status", autoImporter.status);
  if (autoImporter.status === "SET") {
    logDebug("importer.pluginVersion", autoImporter.pluginVersion);
    logDebug("importer.paths.autoImporterFilePathOriginal", autoImporter.paths.autoImporterFilePathOriginal);
    logDebug("importer.paths.autoImporterFilePathActual", autoImporter.paths.autoImporterFilePathActual);
    logDebug("importer.paths.serverEntryFilePathRelative", autoImporter.paths.serverEntryFilePathRelative);
    logDebug("importer.paths.serverEntryFilePathOriginal", autoImporter.paths.serverEntryFilePathOriginal);
    try {
      logDebug("importer.paths.serverEntryFilePathResolved()", autoImporter.paths.serverEntryFilePathResolved());
    } catch (err) {
      logDebug("importer.paths.serverEntryFilePathResolved() error:", err);
      logDebug("importer.paths.serverEntryFilePathResolved()", "ERRORED");
    }
  }
}
function debugLogsRuntimePost(info) {
  if (!DEBUG2)
    return;
  for (var key in info)
    logDebug(key, info[key]);
  logDebug("DEBUG_LOGS_RUNTIME [end]");
}
var init_debugLogsRuntime = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/debugLogsRuntime.js"() {
    init_utils4();
    init_debug2();
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/serverEntryFileNameBase.js
var serverEntryFileNameBase, serverEntryFileNameBaseAlternative;
var init_serverEntryFileNameBase = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/shared/serverEntryFileNameBase.js"() {
    serverEntryFileNameBase = "entry";
    serverEntryFileNameBaseAlternative = "entryOthers";
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/crawlOutDir.js
async function crawlOutDir({ outDir, tolerateDoesNotExist, outFileSearch }) {
  let path;
  let fs2;
  try {
    path = await import_("path");
    fs2 = await import_("fs");
  } catch {
    return false;
  }
  const cwd = process.cwd();
  const isPathAbsolute = (p2) => {
    if (process.platform === "win32") {
      return path.win32.isAbsolute(p2);
    } else {
      return p2.startsWith("/");
    }
  };
  if (outDir) {
    assertPosixPath2(outDir);
    assert2(isPathAbsolute(outDir), outDir);
  } else {
    if (!cwd)
      return false;
    outDir = path.posix.join(cwd, "dist");
  }
  const outDirServer = path.posix.join(outDir, "server");
  const outDirServerExists = fs2.existsSync(outDirServer);
  if (!outDirServerExists)
    return false;
  const outFileNameList = [];
  outFileSearch.forEach((outFileNameBase) => {
    outFileNameList.push(...[
      //
      `${outFileNameBase}.mjs`,
      `${outFileNameBase}.js`,
      `${outFileNameBase}.cjs`
    ]);
  });
  let outFileFound;
  const getOutFilePath = (outFileName) => path.posix.join(outDirServer, outFileName);
  for (const outFileName of outFileNameList) {
    const outFilePath = getOutFilePath(outFileName);
    assert2(isPathAbsolute(outFilePath));
    let outFilePathResolved;
    try {
      outFilePathResolved = await requireResolve(
        outFilePath,
        // Since `outFilePath` is absolute, we can pass a wrong `currentFilePath` argument value.
        // - We avoid using `__filename` because it isn't defined when this file is included in an ESM bundle.
        // - We cannot use `import.meta.filename` (nor `import.meta.url`) because there doesn't seem to be a way to safely/conditionally access `import.meta`.
        cwd
      );
    } catch {
      continue;
    }
    assert2(outFilePathResolved);
    outFileFound = {
      outFilePath: outFilePathResolved,
      outFileName
    };
  }
  if (!outFileFound) {
    if (tolerateDoesNotExist) {
      return false;
    } else {
      assert2(outDirServerExists);
      assertUsage2(false, `The server production entry is missing. If you are using rollupOptions.output.entryFileNames then make sure you don't change the file name of the production server entry. One of the following is expected to exist: 
${outFileNameList.map((outFileName) => `  ${getOutFilePath(outFileName)}`).join("\n")}`);
    }
  }
  assert2(outFileSearch.some((outFileNameBase) => outFileFound.outFileName.startsWith(outFileNameBase)));
  if (isWebpackResolve(outFileFound.outFilePath, cwd)) {
    return false;
  }
  return outFileFound.outFilePath;
}
var init_crawlOutDir = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/crawlOutDir.js"() {
    init_utils3();
    init_esm();
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/autoImporter.js
var autoImporter_exports = {};
__export(autoImporter_exports, {
  loadServerEntry: () => loadServerEntry,
  paths: () => paths,
  pluginVersion: () => pluginVersion,
  status: () => status
});
var status, pluginVersion, loadServerEntry, paths;
var init_autoImporter = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/autoImporter.js"() {
    status = "SET";
    pluginVersion = "0.7.1";
    loadServerEntry = async () => {
      await Promise.resolve().then(() => (init_entry(), entry_exports));
    };
    paths = {
      autoImporterFilePathOriginal: "/home/nitedani/projects/vike-server-nft/node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/autoImporter.js",
      autoImporterFilePathActual: (() => {
        try {
          return import.meta.url;
        } catch {
          return null;
        }
      })(),
      serverEntryFilePathRelative: "../../../../../../test/multiple_lodash_versions_importer/dist/server/entry.js",
      serverEntryFilePathOriginal: "/home/nitedani/projects/vike-server-nft/test/multiple_lodash_versions_importer/dist/server/entry.js",
      serverEntryFilePathResolved: () => import.meta.resolve("../../../../../../test/multiple_lodash_versions_importer/dist/server/entry.js")
    };
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/importServerProductionEntry.js
async function importServerProductionEntry(args = {}) {
  const autoImporter = await Promise.resolve().then(() => (init_autoImporter(), autoImporter_exports));
  debugLogsRuntimePre(autoImporter);
  let success = false;
  let requireError;
  let isOutsideOfCwd = null;
  if (autoImporter.status === "SET") {
    isOutsideOfCwd = isServerEntryOutsideOfCwd(autoImporter.paths);
    if (isOutsideOfCwd === false || isOutsideOfCwd === null) {
      try {
        await autoImporter.loadServerEntry();
        success = true;
      } catch (err) {
        if (!DEBUG2) {
          throw err;
        } else {
          requireError = err;
        }
      }
    }
  }
  if (!success) {
    const outFilePath = await crawlOutDir({
      ...args,
      outFileSearch: [serverEntryFileNameBase, serverEntryFileNameBaseAlternative]
    });
    if (outFilePath) {
      await import_(outFilePath);
      success = true;
    }
  }
  debugLogsRuntimePost({ success, requireError, isOutsideOfCwd, ...args });
  if (args.tolerateDoesNotExist) {
    return success;
  } else {
    assertUsage2(success, wrongUsageNotBuilt);
    return null;
  }
}
function isServerEntryOutsideOfCwd(paths2) {
  const cwd = getCwdSafe();
  if (!cwd)
    return null;
  let serverEntryFilePath;
  try {
    serverEntryFilePath = paths2.serverEntryFilePathResolved();
  } catch {
    return null;
  }
  serverEntryFilePath = removeFilePrefix(serverEntryFilePath);
  if (isWebpackResolve(serverEntryFilePath, cwd))
    return null;
  serverEntryFilePath = toPosixPath2(serverEntryFilePath);
  assertPosixPath2(cwd);
  return !serverEntryFilePath.startsWith(cwd);
}
function removeFilePrefix(filePath) {
  assert2(process);
  const filePrefix = process.platform === "win32" ? "file:///" : "file://";
  if (filePath.startsWith(filePrefix))
    filePath = filePath.slice(filePrefix.length);
  return filePath;
}
var wrongUsageNotBuilt;
var init_importServerProductionEntry = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/importServerProductionEntry.js"() {
    init_utils3();
    init_debugLogsRuntime();
    init_debug2();
    init_serverEntryFileNameBase();
    init_crawlOutDir();
    init_esm();
    wrongUsageNotBuilt = "The server production entry is missing. (Re-)build your app and try again. If you still get this error, then you need to manually import the server production entry, see https://github.com/brillout/vite-plugin-server-entry#manual-import";
  }
});

// ../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/index.js
var init_runtime = __esm({
  "../../node_modules/@brillout/vite-plugin-server-entry/dist/esm/runtime/index.js"() {
    init_importServerProductionEntry();
  }
});

// node_modules/vike/dist/esm/node/shared/virtual-files.js
function getVirtualFileId(id) {
  return removeVirtualIdTag(id);
}
function removeVirtualIdTag(id) {
  if (id.startsWith(virtualIdTag)) {
    id = id.slice(virtualIdTag.length);
  }
  assert(!id.startsWith(virtualIdTag));
  return id;
}
var virtualIdTag;
var init_virtual_files = __esm({
  "node_modules/vike/dist/esm/node/shared/virtual-files.js"() {
    init_picocolors();
    init_utils();
    virtualIdTag = "\0";
  }
});

// node_modules/vike/dist/esm/node/shared/virtual-files/virtualFileImportUserCode.js
var idBase, virtualFileIdImportUserCodeServer, virtualFileIdImportUserCodeClientSR, virtualFileIdImportUserCodeClientCR;
var init_virtualFileImportUserCode = __esm({
  "node_modules/vike/dist/esm/node/shared/virtual-files/virtualFileImportUserCode.js"() {
    init_utils();
    init_virtual_files();
    idBase = "virtual:vike:importUserCode";
    virtualFileIdImportUserCodeServer = `${idBase}:server`;
    virtualFileIdImportUserCodeClientSR = `${idBase}:client:server-routing`;
    virtualFileIdImportUserCodeClientCR = `${idBase}:client:client-routing`;
  }
});

// node_modules/vike/dist/esm/utils/getValuePrintable.js
function getValuePrintable(value) {
  if ([null, void 0].includes(value))
    return String(value);
  if (["boolean", "number", "string"].includes(typeof value))
    return JSON.stringify(value);
  return null;
}
var init_getValuePrintable = __esm({
  "node_modules/vike/dist/esm/utils/getValuePrintable.js"() {
  }
});

// node_modules/vike/dist/esm/utils/escapeRegex.js
function escapeRegex(str) {
  return str.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}
var init_escapeRegex = __esm({
  "node_modules/vike/dist/esm/utils/escapeRegex.js"() {
  }
});

// node_modules/vike/dist/esm/utils/changeEnumerable.js
function changeEnumerable(obj, prop, enumerable) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  Object.defineProperty(obj, prop, { ...descriptor, enumerable });
}
var init_changeEnumerable = __esm({
  "node_modules/vike/dist/esm/utils/changeEnumerable.js"() {
  }
});

// node_modules/vike/dist/esm/utils/objectDefineProperty.js
function objectDefineProperty(obj, prop, { get, ...args }) {
  Object.defineProperty(obj, prop, { ...args, get });
}
var init_objectDefineProperty = __esm({
  "node_modules/vike/dist/esm/utils/objectDefineProperty.js"() {
  }
});

// node_modules/vike/dist/esm/utils/objectFilter.js
var init_objectFilter = __esm({
  "node_modules/vike/dist/esm/utils/objectFilter.js"() {
  }
});

// node_modules/vike/dist/esm/shared/utils.js
var init_utils5 = __esm({
  "node_modules/vike/dist/esm/shared/utils.js"() {
    init_assert();
    init_parseUrl();
    init_objectAssign();
    init_isCallable();
    init_isObject();
    init_unique();
    init_slice();
    init_sorter();
    init_isBrowser();
    init_hasProp();
    init_isPlainObject();
    init_compareString();
    init_isNullish();
    init_stringifyStringArray();
    init_cast();
    init_isPropertyGetter();
    init_isPromise();
    init_checkType();
    init_getValuePrintable();
    init_escapeRegex();
    init_isArray();
    init_changeEnumerable();
    init_objectDefineProperty();
    init_isScriptFile();
    init_objectFilter();
  }
});

// node_modules/vike/dist/esm/shared/error-page.js
function getErrorPageId(pageFilesAll, pageConfigs) {
  if (pageConfigs.length > 0) {
    const errorPageConfigs = pageConfigs.filter((p2) => p2.isErrorPage);
    if (errorPageConfigs.length === 0)
      return null;
    assertUsage(errorPageConfigs.length === 1, "Only one error page can be defined");
    return errorPageConfigs[0].pageId;
  }
  const errorPageIds = unique(pageFilesAll.map(({ pageId }) => pageId).filter((pageId) => isErrorPageId(pageId, false)));
  assertUsage(errorPageIds.length <= 1, `Only one _error.page.js is allowed, but found several: ${errorPageIds.join(" ")}`);
  if (errorPageIds.length > 0) {
    const errorPageId = errorPageIds[0];
    assert(errorPageId);
    return errorPageId;
  }
  return null;
}
function isErrorPageId(pageId, _isV1Design) {
  assert(!pageId.includes("\\"));
  return pageId.includes("/_error");
}
function isErrorPage(pageId, pageConfigs) {
  if (pageConfigs.length > 0) {
    const pageConfig = pageConfigs.find((p2) => p2.pageId === pageId);
    assert(pageConfig);
    return !!pageConfig.isErrorPage;
  } else {
    return isErrorPageId(pageId, false);
  }
}
var init_error_page = __esm({
  "node_modules/vike/dist/esm/shared/error-page.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/esm/utils/assertRoutingType.js
function assertClientRouting() {
  assertNoContradiction(checkIfClientRouting());
  state.isClientRouting = true;
}
function checkIfClientRouting() {
  return state.isClientRouting !== false;
}
function assertNoContradiction(noContradiction) {
  assertUsage(isBrowser(), `${picocolors_default.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`, { showStackTrace: true });
  assertWarning2(noContradiction, "You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.", { showStackTrace: true, onlyOnce: true });
}
var state;
var init_assertRoutingType = __esm({
  "node_modules/vike/dist/esm/utils/assertRoutingType.js"() {
    init_assert();
    init_getGlobalObject();
    init_isBrowser();
    init_picocolors();
    state = getGlobalObject("utils/assertRouterType.ts", {});
  }
});

// node_modules/vike/dist/esm/shared/route/utils.js
var init_utils6 = __esm({
  "node_modules/vike/dist/esm/shared/route/utils.js"() {
    init_assertRoutingType();
    init_isBrowser();
    init_assert();
    init_hasProp();
    init_isObjectWithKeys();
    init_sorter();
    init_isPromise();
    init_isPlainObject();
    init_objectAssign();
    init_slice();
    init_unique();
    init_isBrowser();
    init_parseUrl();
    init_checkType();
    init_joinEnglish();
    init_truncateString();
    init_isCallable();
    if (isBrowser()) {
      assertClientRouting();
    }
  }
});

// node_modules/vike/dist/esm/shared/route/deduceRouteStringFromFilesystemPath.js
function deduceRouteStringFromFilesystemPath(pageId, filesystemRoots) {
  const filesystemRootsMatch = filesystemRoots.filter(({ filesystemRoot }) => pageId.startsWith(filesystemRoot)).sort(higherFirst(({ filesystemRoot }) => filesystemRoot.length));
  const fsBase = filesystemRootsMatch[0];
  let filesystemRoute;
  if (fsBase) {
    const { filesystemRoot, urlRoot } = fsBase;
    const debugInfo = { pageId, filesystemRoot, urlRoot };
    assert(urlRoot.startsWith("/") && pageId.startsWith("/") && filesystemRoot.startsWith("/"), debugInfo);
    assert(pageId.startsWith(filesystemRoot), debugInfo);
    if (filesystemRoot !== "/") {
      assert(!filesystemRoot.endsWith("/"), debugInfo);
      filesystemRoute = slice(pageId, filesystemRoot.length, 0);
    } else {
      filesystemRoute = pageId;
    }
    assert(filesystemRoute.startsWith("/"), debugInfo);
    filesystemRoute = urlRoot + (urlRoot.endsWith("/") ? "" : "/") + slice(filesystemRoute, 1, 0);
  } else {
    filesystemRoute = pageId;
  }
  assert(filesystemRoute.startsWith("/"));
  filesystemRoute = filesystemRoute.split("/").filter((dir) => dir !== "pages" && dir !== "src" && dir !== "index").join("/");
  assert(!filesystemRoute.includes(".page."));
  assert(!filesystemRoute.endsWith("."));
  if (filesystemRoute.endsWith("/index")) {
    filesystemRoute = slice(filesystemRoute, 0, -"/index".length);
  }
  if (filesystemRoute === "") {
    filesystemRoute = "/";
  }
  assert(filesystemRoute.startsWith("/"));
  assert(!filesystemRoute.endsWith("/") || filesystemRoute === "/");
  return filesystemRoute;
}
var init_deduceRouteStringFromFilesystemPath = __esm({
  "node_modules/vike/dist/esm/shared/route/deduceRouteStringFromFilesystemPath.js"() {
    init_utils6();
  }
});

// node_modules/vike/dist/esm/shared/page-configs/getExportPath.js
function getExportPath(fileExportPathToShowToUser, configName) {
  if (!fileExportPathToShowToUser)
    return null;
  let [exportName, ...exportObjectPath] = fileExportPathToShowToUser;
  if (!exportName)
    return null;
  if (exportObjectPath.length === 0 && ["*", "default", configName].includes(exportName))
    return null;
  assert(exportName !== "*");
  let prefix2 = "";
  let suffix = "";
  if (exportName === "default") {
    prefix2 = "export default";
  } else {
    prefix2 = "export";
    exportObjectPath = [exportName, ...exportObjectPath];
  }
  exportObjectPath.forEach((prop) => {
    prefix2 = `${prefix2} { ${prop}`;
    suffix = ` }${suffix}`;
  });
  const exportPath = prefix2 + suffix;
  return exportPath;
}
var init_getExportPath = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/getExportPath.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/esm/shared/page-configs/getConfigDefinedAt.js
function getConfigDefinedAt(sentenceBegin, configName, definedAtData) {
  return `${begin(sentenceBegin, configName)} at ${getDefinedAtString(definedAtData, configName)}`;
}
function getConfigDefinedAtOptional(sentenceBegin, configName, definedAtData) {
  if (!definedAtData) {
    return `${begin(sentenceBegin, configName)} internally`;
  } else {
    return `${begin(sentenceBegin, configName)} at ${getDefinedAtString(definedAtData, configName)}`;
  }
}
function begin(sentenceBegin, configName) {
  return `${sentenceBegin} ${picocolors_default.cyan(configName)} defined`;
}
function getDefinedAtString(definedAtData, configName) {
  let files;
  if (isArray(definedAtData)) {
    files = definedAtData;
  } else {
    files = [definedAtData];
  }
  assert(files.length >= 1);
  const definedAtString = files.map((definedAt) => {
    if (definedAt.definedBy)
      return getDefinedByString(definedAt, configName);
    const { filePathToShowToUser, fileExportPathToShowToUser } = definedAt;
    let s = filePathToShowToUser;
    const exportPath = getExportPath(fileExportPathToShowToUser, configName);
    if (exportPath) {
      s = `${s} > ${picocolors_default.cyan(exportPath)}`;
    }
    return s;
  }).join(" / ");
  return definedAtString;
}
function getDefinedByString(definedAt, configName) {
  if (definedAt.definedBy === "api") {
    return `API call ${picocolors_default.cyan(`${definedAt.operation}({ vikeConfig: { ${configName} } })`)}`;
  }
  const { definedBy } = definedAt;
  if (definedBy === "cli") {
    return `CLI option ${picocolors_default.cyan(`--${configName}`)}`;
  }
  if (definedBy === "env") {
    return `environment variable ${picocolors_default.cyan(`VIKE_CONFIG="{${configName}}"`)}`;
  }
  checkType(definedBy);
  assert(false);
}
var init_getConfigDefinedAt = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/getConfigDefinedAt.js"() {
    init_utils5();
    init_picocolors();
    init_getExportPath();
  }
});

// node_modules/vike/dist/esm/shared/page-configs/getConfigValueTyped.js
function getConfigValueTyped(configValue, configName, type) {
  const { value, definedAtData } = configValue;
  if (type)
    assertConfigValueType(value, type, configName, definedAtData);
  return configValue;
}
function assertConfigValueType(value, type, configName, definedAtData) {
  assert(value !== null);
  const typeActual = typeof value;
  if (typeActual === type)
    return;
  const valuePrintable = getValuePrintable(value);
  const problem = valuePrintable !== null ? `value ${picocolors_default.cyan(valuePrintable)}` : `type ${picocolors_default.cyan(typeActual)}`;
  const configDefinedAt = getConfigDefinedAtOptional("Config", configName, definedAtData);
  const errMsg = `${configDefinedAt} has an invalid ${problem}: it should be a ${picocolors_default.cyan(type)} instead`;
  assertUsage(false, errMsg);
}
var init_getConfigValueTyped = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/getConfigValueTyped.js"() {
    init_utils5();
    init_picocolors();
    init_getConfigDefinedAt();
  }
});

// node_modules/vike/dist/esm/shared/page-configs/getConfigValueRuntime.js
function getConfigValueRuntime(pageConfig, configName, type) {
  const configValue = pageConfig.configValues[configName];
  if (!configValue)
    return null;
  return getConfigValueTyped(configValue, configName, type);
}
var init_getConfigValueRuntime = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/getConfigValueRuntime.js"() {
    init_getConfigValueTyped();
  }
});

// node_modules/vike/dist/esm/shared/getPageContextUrlComputed.js
function getPageContextUrlComputed(pageContext) {
  assert(typeof pageContext.urlOriginal === "string");
  assertPageContextUrlComputed(pageContext);
  const pageContextUrlComputed = {};
  objectDefineProperty(pageContextUrlComputed, "urlPathname", {
    get: urlPathnameGetter,
    enumerable: true,
    configurable: true
  });
  objectDefineProperty(pageContextUrlComputed, "url", {
    get: urlGetter,
    enumerable: false,
    configurable: true
  });
  objectDefineProperty(pageContextUrlComputed, "urlParsed", {
    get: urlParsedGetter,
    enumerable: true,
    configurable: true
  });
  return pageContextUrlComputed;
}
function getUrlParsed(pageContext) {
  const assertUrlResolved = (src) => assert(
    typeof urlResolved === "string",
    // TODO/eventually: remove debug logs, see:
    // - https://github.com/vikejs/vike/issues/2138#issuecomment-2631713411
    // - https://github.com/vikejs/vike/commit/5c7810f3080ab62536950f26e019bb2a3a517082
    { src, urlResolved }
  );
  let urlResolved;
  let isBaseToBeRemoved;
  if (pageContext.urlLogical) {
    urlResolved = pageContext.urlLogical;
    isBaseToBeRemoved = false;
    assertUrlResolved(1);
  } else if (pageContext._urlRewrite) {
    urlResolved = pageContext._urlRewrite;
    isBaseToBeRemoved = false;
    assertUrlResolved(2);
  } else {
    urlResolved = pageContext.urlOriginal;
    isBaseToBeRemoved = true;
    assertUrlResolved(3);
  }
  assertUrlResolved(4);
  let urlHandler = pageContext._urlHandler;
  if (!urlHandler)
    urlHandler = (url3) => url3;
  urlResolved = urlHandler(urlResolved);
  const baseServer2 = !isBaseToBeRemoved ? "/" : pageContext._baseServer;
  return parseUrl(urlResolved, baseServer2);
}
function urlPathnameGetter() {
  const { pathname } = getUrlParsed(this);
  const urlPathname = pathname;
  assert(urlPathname.startsWith("/"));
  return urlPathname;
}
function urlGetter() {
  assertWarning2(false, "`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vike.dev/migration/0.4.23 for more information.)", { onlyOnce: true, showStackTrace: true });
  return urlPathnameGetter.call(this);
}
function urlParsedGetter() {
  const {
    // remove isBaseMissing as it isn't part of UrlPublic
    isBaseMissing: _,
    ...urlParsed
  } = getUrlParsed(this);
  const hashIsAvailable = isBrowser();
  const warnHashNotAvailable = (prop) => {
    assertWarning2(hashIsAvailable, `pageContext.urlParsed.${prop} isn't available on the server-side (HTTP requests don't include the URL hash)`, { onlyOnce: true, showStackTrace: true });
  };
  const urlParsedEnhanced = {
    ...urlParsed,
    get hash() {
      warnHashNotAvailable("hash");
      return urlParsed.hash;
    },
    get hashOriginal() {
      warnHashNotAvailable("hashOriginal");
      return urlParsed.hashOriginal;
    },
    // TODO/next-major-release: remove
    get hashString() {
      assertWarning2(false, "pageContext.urlParsed.hashString has been renamed to pageContext.urlParsed.hashOriginal", {
        onlyOnce: true,
        showStackTrace: true
      });
      warnHashNotAvailable("hashString");
      return urlParsed.hashOriginal;
    },
    // TODO/next-major-release: remove
    get searchString() {
      assertWarning2(false, "pageContext.urlParsed.searchString has been renamed to pageContext.urlParsed.searchOriginal", { onlyOnce: true, showStackTrace: true });
      return urlParsed.searchOriginal;
    }
  };
  changeEnumerable(urlParsedEnhanced, "hashString", false);
  changeEnumerable(urlParsedEnhanced, "searchString", false);
  if (!hashIsAvailable) {
    changeEnumerable(urlParsedEnhanced, "hash", false);
    changeEnumerable(urlParsedEnhanced, "hashOriginal", false);
  }
  return urlParsedEnhanced;
}
function assertPageContextUrl(pageContext) {
  assert(typeof pageContext.urlOriginal === "string");
  assert(typeof pageContext.urlPathname === "string");
  assert(isPlainObject(pageContext.urlParsed));
  assert(pageContext.urlPathname === pageContext.urlParsed.pathname);
  assertPageContextUrlComputed(pageContext);
}
function assertPageContextUrlComputed(pageContext) {
  if ("urlPathname" in pageContext) {
    assert(typeof pageContext.urlPathname === "string");
    assert(isPropertyGetter(pageContext, "urlPathname"));
    assert(isPropertyGetter(pageContext, "urlParsed"));
    assert(isPropertyGetter(pageContext, "url"));
  } else {
    assert(!("urlParsed" in pageContext));
    assert(!("url" in pageContext));
  }
}
var init_getPageContextUrlComputed = __esm({
  "node_modules/vike/dist/esm/shared/getPageContextUrlComputed.js"() {
    init_objectDefineProperty();
    init_utils5();
  }
});

// node_modules/vike/dist/esm/shared/route/resolveRouteFunction.js
async function resolveRouteFunction(routeFunction, pageContext, routeDefinedAtString) {
  assertPageContextUrl(pageContext);
  let result = routeFunction(pageContext);
  assertSyncRouting(result, `The Route Function ${routeDefinedAtString}`);
  result = await result;
  if (result === false) {
    return null;
  }
  if (result === true) {
    result = {};
  }
  assertUsage(isPlainObject(result), `The Route Function ${routeDefinedAtString} should return a boolean or a plain JavaScript object (but it's ${picocolors_default.cyan(`typeof result === ${JSON.stringify(typeof result)}`)} instead)`);
  if ("match" in result) {
    const { match } = result;
    assertUsage(typeof match === "boolean", `The ${picocolors_default.cyan("match")} value returned by the Route Function ${routeDefinedAtString} should be a boolean.`);
    if (!match) {
      return null;
    }
  }
  let precedence = null;
  if ("precedence" in result) {
    precedence = result.precedence;
    assertUsage(typeof precedence === "number", `The ${picocolors_default.cyan("precedence")} value returned by the Route Function ${routeDefinedAtString} should be a number.`);
  }
  assertRouteParams(result, `The ${picocolors_default.cyan("routeParams")} object returned by the Route Function ${routeDefinedAtString} should`);
  const routeParams = result.routeParams || {};
  assertUsage(!("pageContext" in result), `Providing ${picocolors_default.cyan("pageContext")} in Route Functions is prohibited, see https://vike.dev/route-function#cannot-provide-pagecontext`);
  assert(isPlainObject(routeParams));
  Object.keys(result).forEach((key) => {
    assertUsage(key === "match" || key === "routeParams" || key === "precedence", `The Route Function ${routeDefinedAtString} returned an object with an unknown property ${picocolors_default.cyan(key)} (the known properties are ${picocolors_default.cyan("match")}, ${picocolors_default.cyan("routeParams")}, and ${picocolors_default.cyan("precedence")})`);
  });
  return {
    precedence,
    routeParams
  };
}
function assertSyncRouting(res, errPrefix) {
  assertWarning2(!isPromise(res), `${errPrefix} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vike.dev/route-function#async`, { onlyOnce: true });
}
function warnDeprecatedAllowKey() {
  const allowKey = picocolors_default.cyan("iKnowThePerformanceRisksOfAsyncRouteFunctions");
  assertWarning2(false, `${allowKey} is deprecated and will be removed in the next major release`, { onlyOnce: true });
}
function assertRouteParams(result, errPrefix) {
  assert(errPrefix.endsWith(" should"));
  if (!hasProp(result, "routeParams")) {
    return;
  }
  assert(errPrefix.endsWith(" should"));
  assertUsage(hasProp(result, "routeParams", "string{}"), `${errPrefix} be an object holding string values.`);
}
var init_resolveRouteFunction = __esm({
  "node_modules/vike/dist/esm/shared/route/resolveRouteFunction.js"() {
    init_getPageContextUrlComputed();
    init_utils6();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/shared/page-configs/helpers.js
function getPageConfig(pageId, pageConfigs) {
  const pageConfig = pageConfigs.find((p2) => p2.pageId === pageId);
  assert(pageConfigs.length > 0);
  assert(pageConfig);
  return pageConfig;
}
function getConfigValueFilePathToShowToUser(definedAtData) {
  if (!definedAtData || isArray(definedAtData) || definedAtData.definedBy)
    return null;
  const { filePathToShowToUser } = definedAtData;
  assert(filePathToShowToUser);
  return filePathToShowToUser;
}
function getHookFilePathToShowToUser(definedAtData) {
  const filePathToShowToUser = getConfigValueFilePathToShowToUser(definedAtData);
  assert(filePathToShowToUser);
  return filePathToShowToUser;
}
var init_helpers = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/helpers.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/esm/shared/hooks/getHook.js
function getHook(pageContext, hookName) {
  if (!(hookName in pageContext.exports)) {
    return null;
  }
  const { hooksTimeout } = pageContext.config;
  const hookTimeout = getHookTimeout(hooksTimeout, hookName);
  const hookFn = pageContext.exports[hookName];
  const file = pageContext.exportsAll[hookName][0];
  assert(file.exportValue === hookFn);
  if (hookFn === null)
    return null;
  const hookFilePath = file.filePath;
  assert(hookFilePath);
  assert(!hookFilePath.endsWith(" "));
  assertHookFn(hookFn, { hookName, hookFilePath });
  return { hookFn, hookName, hookFilePath, hookTimeout };
}
function getHookFromPageConfigGlobal(pageConfigGlobal, hookName) {
  const configValue = pageConfigGlobal.configValues[hookName];
  if (!configValue)
    return null;
  const hookFn = configValue.value;
  if (!hookFn)
    return null;
  const hookFilePath = getHookFilePathToShowToUser(configValue.definedAtData);
  assert(hookFilePath);
  assertHookFn(hookFn, { hookName, hookFilePath });
  const hookTimeout = getHookTimeoutDefault(hookName);
  return { hookFn, hookName, hookFilePath, hookTimeout };
}
function assertHookFn(hookFn, { hookName, hookFilePath }) {
  assert(hookName && hookFilePath);
  assert(!hookName.endsWith(")"));
  assertUsage(isCallable(hookFn), `Hook ${hookName}() defined by ${hookFilePath} should be a function`);
  checkType(hookFn);
}
function getHookTimeout(hooksTimeoutProvidedByUser, hookName) {
  const hooksTimeoutProvidedbyUserNormalized = getHooksTimeoutProvidedByUserNormalized(hooksTimeoutProvidedByUser);
  if (hooksTimeoutProvidedbyUserNormalized === false)
    return { error: false, warning: false };
  const providedbyUser = hooksTimeoutProvidedbyUserNormalized[hookName];
  const hookTimeout = getHookTimeoutDefault(hookName);
  if (providedbyUser?.error !== void 0)
    hookTimeout.error = providedbyUser.error;
  if (providedbyUser?.warning !== void 0)
    hookTimeout.warning = providedbyUser.warning;
  return hookTimeout;
}
function getHooksTimeoutProvidedByUserNormalized(hooksTimeoutProvidedByUser) {
  if (hooksTimeoutProvidedByUser === void 0)
    return {};
  if (hooksTimeoutProvidedByUser === false)
    return false;
  assertUsage(isObject(hooksTimeoutProvidedByUser), `Setting ${picocolors_default.cyan("hooksTimeout")} should be ${picocolors_default.cyan("false")} or an object`);
  const hooksTimeoutProvidedByUserNormalized = {};
  Object.entries(hooksTimeoutProvidedByUser).forEach(([hookName, hookTimeoutProvidedbyUser]) => {
    if (hookTimeoutProvidedbyUser === false) {
      hooksTimeoutProvidedByUserNormalized[hookName] = { error: false, warning: false };
      return;
    }
    assertUsage(isObject(hookTimeoutProvidedbyUser), `Setting ${picocolors_default.cyan(`hooksTimeout.${hookName}`)} should be ${picocolors_default.cyan("false")} or an object`);
    const [error, warning] = ["error", "warning"].map((timeoutName) => {
      const timeoutVal = hookTimeoutProvidedbyUser[timeoutName];
      if (timeoutVal === void 0 || timeoutVal === false)
        return timeoutVal;
      const errPrefix = `Setting ${picocolors_default.cyan(`hooksTimeout.${hookName}.${timeoutName}`)} should be`;
      assertUsage(typeof timeoutVal === "number", `${errPrefix} ${picocolors_default.cyan("false")} or a number`);
      assertUsage(timeoutVal > 0, `${errPrefix} a positive number`);
      return timeoutVal;
    });
    hooksTimeoutProvidedByUserNormalized[hookName] = { error, warning };
  });
  return hooksTimeoutProvidedByUserNormalized;
}
function getHookTimeoutDefault(hookName) {
  if (hookName === "onBeforeRoute") {
    return {
      error: 5 * 1e3,
      warning: 1 * 1e3
    };
  }
  if (globalObject3.isPrerendering) {
    return {
      error: 2 * 60 * 1e3,
      warning: 30 * 1e3
    };
  } else {
    assert(!hookName.toLowerCase().includes("prerender"));
  }
  return {
    error: 30 * 1e3,
    warning: 4 * 1e3
  };
}
var globalObject3;
var init_getHook = __esm({
  "node_modules/vike/dist/esm/shared/hooks/getHook.js"() {
    init_getGlobalObject();
    init_helpers();
    init_getConfigValueRuntime();
    init_utils5();
    init_picocolors();
    globalObject3 = getGlobalObject("hooks/getHook.ts", {});
  }
});

// node_modules/vike/dist/esm/shared/route/loadPageRoutes.js
async function loadPageRoutes(pageFilesAll, pageConfigs, pageConfigGlobal, allPageIds) {
  await Promise.all(pageFilesAll.filter((p2) => p2.fileType === ".page.route").map((p2) => p2.loadFile?.()));
  const { onBeforeRouteHook, filesystemRoots } = getGlobalHooks(pageFilesAll, pageConfigs, pageConfigGlobal);
  const pageRoutes = getPageRoutes(filesystemRoots, pageFilesAll, pageConfigs, allPageIds);
  return { pageRoutes, onBeforeRouteHook };
}
function getPageRoutes(filesystemRoots, pageFilesAll, pageConfigs, allPageIds) {
  const pageRoutes = [];
  if (pageConfigs.length > 0) {
    assert(filesystemRoots === null);
    const comesFromV1PageConfig = true;
    pageConfigs.filter((p2) => !p2.isErrorPage).forEach((pageConfig) => {
      const pageId = pageConfig.pageId;
      let pageRoute = null;
      {
        const configName = "route";
        const configValue = getConfigValueRuntime(pageConfig, configName);
        if (configValue) {
          const route2 = configValue.value;
          assert(configValue.definedAtData);
          const definedAtString = getDefinedAtString(configValue.definedAtData, configName);
          if (typeof route2 === "string") {
            pageRoute = {
              pageId,
              comesFromV1PageConfig,
              routeString: route2,
              routeDefinedAtString: definedAtString,
              routeType: "STRING"
            };
          } else {
            assert(isCallable(route2));
            if (getConfigValueRuntime(pageConfig, "iKnowThePerformanceRisksOfAsyncRouteFunctions", "boolean"))
              warnDeprecatedAllowKey();
            pageRoute = {
              pageId,
              comesFromV1PageConfig,
              routeFunction: route2,
              routeDefinedAtString: definedAtString,
              routeType: "FUNCTION"
            };
          }
        }
      }
      if (!pageRoute) {
        const { routeFilesystem } = pageConfig;
        assert(routeFilesystem);
        const { routeString, definedAtLocation } = routeFilesystem;
        assert(routeFilesystem.routeString.startsWith("/"));
        pageRoute = {
          pageId,
          routeFilesystemDefinedBy: definedAtLocation,
          comesFromV1PageConfig,
          routeString,
          routeDefinedAtString: null,
          routeType: "FILESYSTEM"
        };
      }
      assert(pageRoute);
      pageRoutes.push(pageRoute);
    });
  }
  if (pageConfigs.length === 0) {
    assert(filesystemRoots);
    const comesFromV1PageConfig = false;
    allPageIds.filter((pageId) => !isErrorPageId(pageId, false)).forEach((pageId) => {
      const pageRouteFile = pageFilesAll.find((p2) => p2.pageId === pageId && p2.fileType === ".page.route");
      if (!pageRouteFile || !("default" in pageRouteFile.fileExports)) {
        const routeString = deduceRouteStringFromFilesystemPath(pageId, filesystemRoots);
        assert(routeString.startsWith("/"));
        assert(!routeString.endsWith("/") || routeString === "/");
        pageRoutes.push({
          pageId,
          comesFromV1PageConfig,
          routeString,
          routeDefinedAtString: null,
          routeFilesystemDefinedBy: `${pageId}.page.*`,
          routeType: "FILESYSTEM"
        });
      } else {
        const { filePath, fileExports } = pageRouteFile;
        assert(fileExports.default);
        if (hasProp(fileExports, "default", "string")) {
          const routeString = fileExports.default;
          assertUsage(routeString.startsWith("/"), `A Route String should start with a leading slash '/' but ${filePath} has \`export default '${routeString}'\`. Make sure to \`export default '/${routeString}'\` instead.`);
          pageRoutes.push({
            pageId,
            comesFromV1PageConfig,
            routeString,
            routeDefinedAtString: filePath,
            routeType: "STRING"
          });
          return;
        }
        if (hasProp(fileExports, "default", "function")) {
          const routeFunction = fileExports.default;
          {
            const allowKey = "iKnowThePerformanceRisksOfAsyncRouteFunctions";
            if (allowKey in fileExports) {
              warnDeprecatedAllowKey();
            }
          }
          pageRoutes.push({
            pageId,
            comesFromV1PageConfig,
            routeFunction,
            routeDefinedAtString: filePath,
            routeType: "FUNCTION"
          });
          return;
        }
        assertUsage(false, `The default export of ${filePath} should be a string or a function.`);
      }
    });
  }
  return pageRoutes;
}
function getGlobalHooks(pageFilesAll, pageConfigs, pageConfigGlobal) {
  if (pageConfigs.length > 0) {
    const hook = getHookFromPageConfigGlobal(pageConfigGlobal, "onBeforeRoute");
    return { onBeforeRouteHook: hook, filesystemRoots: null };
  }
  let onBeforeRouteHook = null;
  const filesystemRoots = [];
  pageFilesAll.filter((p2) => p2.fileType === ".page.route" && p2.isDefaultPageFile).forEach(({ filePath, fileExports }) => {
    assert(fileExports);
    if ("onBeforeRoute" in fileExports) {
      assertUsage(hasProp(fileExports, "onBeforeRoute", "function"), `\`export { onBeforeRoute }\` of ${filePath} should be a function.`);
      const { onBeforeRoute } = fileExports;
      const hookName = "onBeforeRoute";
      onBeforeRouteHook = {
        hookFilePath: filePath,
        hookFn: onBeforeRoute,
        hookName,
        hookTimeout: getHookTimeoutDefault(hookName)
      };
    }
    if ("filesystemRoutingRoot" in fileExports) {
      assertUsage(hasProp(fileExports, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${filePath} should be a string.`);
      assertUsage(hasProp(fileExports, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${filePath} is \`'${fileExports.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`);
      filesystemRoots.push({
        filesystemRoot: dirname(filePath),
        urlRoot: fileExports.filesystemRoutingRoot
      });
    }
  });
  return { onBeforeRouteHook, filesystemRoots };
}
function dirname(filePath) {
  assert(filePath.startsWith("/"));
  assert(!filePath.endsWith("/"));
  const paths2 = filePath.split("/");
  const dirPath = slice(paths2, 0, -1).join("/") || "/";
  assert(dirPath.startsWith("/"));
  assert(!dirPath.endsWith("/") || dirPath === "/");
  return dirPath;
}
var init_loadPageRoutes = __esm({
  "node_modules/vike/dist/esm/shared/route/loadPageRoutes.js"() {
    init_error_page();
    init_utils6();
    init_deduceRouteStringFromFilesystemPath();
    init_utils5();
    init_getConfigValueRuntime();
    init_getConfigDefinedAt();
    init_resolveRouteFunction();
    init_getHook();
  }
});

// node_modules/vike/dist/esm/node/shared/assertV1Design.js
function assertV1Design(pageConfigs, pageFilesAll) {
  const isOldDesign = pageFilesAll === true || pageFilesAll !== false && pageFilesAll.length > 0;
  const isV1Design = pageConfigs === true || pageConfigs !== false && pageConfigs.length > 0;
  if (isV1Design && isOldDesign) {
    const lines = ["Mixing the new V1 design with the old V0.4 design is forbidden."];
    const indent = "- ";
    if (typeof pageConfigs !== "boolean") {
      assert(pageConfigs.length > 0);
      const filesV1 = unique(pageConfigs.map((p2) => Object.values(p2.configValueSources).map((sources) => sources.map((c) => c.definedAt).map((definedAt) => definedAt.definedBy ? null : definedAt.filePathAbsoluteUserRootDir).filter(isNotNullish).map((filePathToShowToUser) => indent + filePathToShowToUser))).flat(2));
      lines.push(...["V1 design files:", ...filesV1]);
    }
    if (typeof pageFilesAll !== "boolean") {
      assert(pageFilesAll.length > 0);
      const filesOld = pageFilesAll.map((p2) => indent + p2.filePath);
      lines.push(...["Old design files:", ...filesOld]);
    }
    assertUsage(false, lines.join("\n"));
  }
  assertWarning2(!isOldDesign, "You are using Vike's deprecated design. Update to the new V1 design, see https://vike.dev/migration/v1-design for how to migrate.", { onlyOnce: true });
}
var init_assertV1Design = __esm({
  "node_modules/vike/dist/esm/node/shared/assertV1Design.js"() {
    init_utils();
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/assert_exports_old_design.js
function assertExportValues(pageFile) {
  enforceTrue.forEach((exportName) => {
    assert(pageFile.fileExports);
    if (!(exportName in pageFile.fileExports))
      return;
    const explainer = `The value of \`${exportName}\` is only allowed to be \`true\`.`;
    assertUsage(pageFile.fileExports[exportName] !== false, `${pageFile.filePath} has \`export { ${exportName} }\` with the value \`false\` which is prohibited: remove \`export { ${exportName} }\` instead. (${explainer})`);
    assertUsage(pageFile.fileExports[exportName] === true, `${pageFile.filePath} has \`export { ${exportName} }\` with a forbidden value. ${explainer}`);
  });
}
function assertDefaultExports(defaultExportName, filePath) {
  assertUsage(!forbiddenDefaultExports.includes(defaultExportName), `${filePath} has \`export default { ${defaultExportName} }\` which is prohibited, use \`export { ${defaultExportName} }\` instead.`);
}
var enforceTrue, forbiddenDefaultExports;
var init_assert_exports_old_design = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/assert_exports_old_design.js"() {
    init_utils5();
    enforceTrue = ["clientRouting"];
    forbiddenDefaultExports = ["render", "clientRouting", "prerender", "doNotPrerender"];
  }
});

// node_modules/vike/dist/esm/shared/determinePageIdOld.js
function determinePageIdOld(filePath) {
  const pageSuffix = ".page.";
  const pageId = slice(filePath.split(pageSuffix), 0, -1).join(pageSuffix);
  assert(!pageId.includes("\\"));
  return pageId;
}
var init_determinePageIdOld = __esm({
  "node_modules/vike/dist/esm/shared/determinePageIdOld.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/fileTypes.js
function determineFileType(filePath) {
  {
    const isCSS = filePath.endsWith(".css");
    if (isCSS) {
      return ".css";
    }
  }
  assert(isScriptFile(filePath), filePath);
  const fileName = filePath.split("/").slice(-1)[0];
  const parts = fileName.split(".");
  const suffix1 = parts.slice(-3)[0];
  const suffix2 = parts.slice(-2)[0];
  if (suffix2 === "page") {
    return ".page";
  }
  assert(suffix1 === "page", filePath);
  if (suffix2 === "server") {
    return ".page.server";
  }
  if (suffix2 === "client") {
    return ".page.client";
  }
  if (suffix2 === "route") {
    return ".page.route";
  }
  assert(false, filePath);
}
var fileTypes;
var init_fileTypes = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/fileTypes.js"() {
    init_utils5();
    init_isScriptFile();
    fileTypes = [
      ".page",
      ".page.server",
      ".page.route",
      ".page.client",
      // New type `.page.css`/`.page.server.css`/`.page.client.css` for `extensions[number].pageFileDist`.
      //  - Extensions using `pageFileDist` are expected to use a bundler that generates a `.css` colocated next to the original `.page.js` file (e.g. `/renderer/_default.page.server.css` for `/renderer/_default.page.server.js`.
      //  - Since these `.page.css` files Bundlers We can therefore expect that there isn't any `.page.server.sass`/...
      ".css"
    ];
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/getPageFileObject.js
function getPageFileObject(filePath) {
  const isRelevant = (pageId) => pageFile.pageId === pageId || pageFile.isDefaultPageFile && (isRendererFilePath(pageFile.filePath) || isAncestorDefaultPage(pageId, pageFile.filePath));
  const fileType = determineFileType(filePath);
  const isEnv = (env2) => {
    assert(fileType !== ".page.route");
    if (env2 === "CLIENT_ONLY") {
      return fileType === ".page.client" || fileType === ".css";
    }
    if (env2 === "SERVER_ONLY") {
      return fileType === ".page.server";
    }
    if (env2 === "CLIENT_AND_SERVER") {
      return fileType === ".page";
    }
    assert(false);
  };
  const pageFile = {
    filePath,
    fileType,
    isEnv,
    isRelevant,
    isDefaultPageFile: isDefaultFilePath(filePath),
    isRendererPageFile: fileType !== ".css" && isDefaultFilePath(filePath) && isRendererFilePath(filePath),
    isErrorPageFile: isErrorPageId(filePath, false),
    pageId: determinePageIdOld(filePath)
  };
  return pageFile;
}
function isDefaultFilePath(filePath) {
  if (isErrorPageId(filePath, false)) {
    return false;
  }
  return filePath.includes("/_default");
}
function isRendererFilePath(filePath) {
  return filePath.includes("/renderer/");
}
function isAncestorDefaultPage(pageId, defaultPageFilePath) {
  assert(!pageId.endsWith("/"));
  assert(!defaultPageFilePath.endsWith("/"));
  assert(isDefaultFilePath(defaultPageFilePath));
  const defaultPageDir = slice(defaultPageFilePath.split("/"), 0, -1).filter((filePathSegment) => filePathSegment !== "_default").join("/");
  return pageId.startsWith(defaultPageDir);
}
var init_getPageFileObject = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/getPageFileObject.js"() {
    init_determinePageIdOld();
    init_error_page();
    init_utils5();
    init_fileTypes();
  }
});

// ../../node_modules/@brillout/json-serializer/dist/cjs/types.js
var require_types = __commonJS({
  "../../node_modules/@brillout/json-serializer/dist/cjs/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.types = void 0;
    var types = [
      ts({
        is: (val) => val === void 0,
        match: (str) => str === "!undefined",
        serialize: () => "!undefined",
        deserialize: () => void 0
      }),
      ts({
        is: (val) => val === Infinity,
        match: (str) => str === "!Infinity",
        serialize: () => "!Infinity",
        deserialize: () => Infinity
      }),
      ts({
        is: (val) => val === -Infinity,
        match: (str) => str === "!-Infinity",
        serialize: () => "!-Infinity",
        deserialize: () => -Infinity
      }),
      ts({
        is: (val) => typeof val === "number" && isNaN(val),
        match: (str) => str === "!NaN",
        serialize: () => "!NaN",
        deserialize: () => NaN
      }),
      ts({
        is: (val) => val instanceof Date,
        match: (str) => str.startsWith("!Date:"),
        serialize: (val) => "!Date:" + val.toISOString(),
        deserialize: (str) => new Date(str.slice("!Date:".length))
      }),
      ts({
        is: (val) => typeof val === "bigint",
        match: (str) => str.startsWith("!BigInt:"),
        serialize: (val) => "!BigInt:" + val.toString(),
        deserialize: (str) => {
          if (typeof BigInt === "undefined") {
            throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");
          }
          return BigInt(str.slice("!BigInt:".length));
        }
      }),
      ts({
        is: (val) => val instanceof RegExp,
        match: (str) => str.startsWith("!RegExp:"),
        serialize: (val) => "!RegExp:" + val.toString(),
        deserialize: (str) => {
          str = str.slice("!RegExp:".length);
          const args = str.match(/\/(.*)\/(.*)?/);
          const pattern = args[1];
          const flags2 = args[2];
          return new RegExp(pattern, flags2);
        }
      }),
      ts({
        is: (val) => val instanceof Map,
        match: (str) => str.startsWith("!Map:"),
        serialize: (val, serializer) => "!Map:" + serializer(Array.from(val.entries())),
        deserialize: (str, deserializer) => new Map(deserializer(str.slice("!Map:".length)))
      }),
      ts({
        is: (val) => val instanceof Set,
        match: (str) => str.startsWith("!Set:"),
        serialize: (val, serializer) => "!Set:" + serializer(Array.from(val.values())),
        deserialize: (str, deserializer) => new Set(deserializer(str.slice("!Set:".length)))
      }),
      // Avoid collisions with the special strings defined above
      ts({
        is: (val) => typeof val === "string" && val.startsWith("!"),
        match: (str) => str.startsWith("!"),
        serialize: (val) => "!" + val,
        deserialize: (str) => str.slice(1)
      })
    ];
    exports.types = types;
    function ts(t) {
      return t;
    }
  }
});

// ../../node_modules/@brillout/json-serializer/dist/cjs/parse.js
var require_parse = __commonJS({
  "../../node_modules/@brillout/json-serializer/dist/cjs/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseTransform = exports.parse = void 0;
    var types_1 = require_types();
    function parse3(str) {
      const value = JSON.parse(str);
      return parseTransform2(value);
    }
    exports.parse = parse3;
    function parseTransform2(value) {
      if (typeof value === "string") {
        return reviver(value);
      }
      if (
        // Also matches arrays
        typeof value === "object" && value !== null
      ) {
        Object.entries(value).forEach(([key, val]) => {
          ;
          value[key] = parseTransform2(val);
        });
      }
      return value;
    }
    exports.parseTransform = parseTransform2;
    function reviver(value) {
      for (const { match, deserialize } of types_1.types) {
        if (match(value)) {
          return deserialize(value, parse3);
        }
      }
      return value;
    }
  }
});

// node_modules/vike/dist/esm/shared/page-configs/assertPlusFileExport.js
function assertPlusFileExport(fileExports, filePathToShowToUser, configName) {
  const exportNames = Object.keys(fileExports);
  const isValid = (exportName) => exportName === "default" || exportName === configName;
  const exportNamesValid = exportNames.filter(isValid);
  const exportDefault = picocolors_default.code("export default");
  const exportNamed = picocolors_default.code(`export { ${configName} }`);
  if (exportNamesValid.length === 0) {
    assertUsage(false, `${filePathToShowToUser} should have ${exportNamed} or ${exportDefault}`);
  }
  if (exportNamesValid.length === 2) {
    assertUsage(false, `${filePathToShowToUser} is ambiguous: remove ${exportDefault} or ${exportNamed}`);
  }
  assert(exportNamesValid.length === 1);
  const exportNamesInvalid = exportNames.filter((e) => !isValid(e)).filter((exportName) => !SIDE_EXPORTS_TOLERATE.includes(exportName));
  if (!SIDE_EXPORTS_DO_NOT_CHECK.some((ext) => filePathToShowToUser.endsWith(ext))) {
    exportNamesInvalid.forEach((exportInvalid) => {
      assertWarning2(false, `${filePathToShowToUser} unexpected ${picocolors_default.cyan(`export { ${exportInvalid} }`)}, see https://vike.dev/no-side-exports`, {
        onlyOnce: true
      });
    });
  }
}
var SIDE_EXPORTS_TOLERATE, SIDE_EXPORTS_DO_NOT_CHECK;
var init_assertPlusFileExport = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/assertPlusFileExport.js"() {
    init_utils5();
    init_picocolors();
    SIDE_EXPORTS_TOLERATE = [
      // vite-plugin-solid adds `export { $$registrations }`
      "$$registrations",
      // @vitejs/plugin-vue adds `export { _rerender_only }`
      "_rerender_only"
    ];
    SIDE_EXPORTS_DO_NOT_CHECK = [".md", ".mdx"];
  }
});

// node_modules/vike/dist/esm/shared/page-configs/serialize/parsePageConfigs.js
function parsePageConfigs(pageConfigsSerialized2, pageConfigGlobalSerialized2) {
  const pageConfigs = pageConfigsSerialized2.map((pageConfigSerialized) => {
    const configValues = parseConfigValuesSerialized(pageConfigSerialized.configValuesSerialized);
    assertRouteConfigValue(configValues);
    const pageConfig = { ...pageConfigSerialized, configValues };
    return pageConfig;
  });
  const pageConfigGlobal = { configValues: {} };
  {
    const configValues = parseConfigValuesSerialized(pageConfigGlobalSerialized2.configValuesSerialized);
    Object.assign(pageConfigGlobal.configValues, configValues);
  }
  return { pageConfigs, pageConfigGlobal };
}
function assertRouteConfigValue(configValues) {
  const configName = "route";
  const configValue = configValues[configName];
  if (!configValue)
    return;
  const { value, definedAtData } = configValue;
  const configValueType = typeof value;
  assert(definedAtData);
  const configDefinedAt = getConfigDefinedAt("Config", configName, definedAtData);
  assertUsage(configValueType === "string" || isCallable(value), `${configDefinedAt} has an invalid type '${configValueType}': it should be a string or a function instead, see https://vike.dev/route`);
}
function parseConfigValuesSerialized(configValuesSerialized2) {
  const configValues = {};
  Object.entries(configValuesSerialized2).forEach(([configName, configValueSeriliazed]) => {
    let configValue;
    if (configValueSeriliazed.type === "cumulative") {
      const { valueSerialized, ...common } = configValueSeriliazed;
      const value = valueSerialized.map((valueSerializedElement, i) => {
        const { value: value2, sideExports } = parseValueSerialized(valueSerializedElement, configName, () => {
          const definedAtFile = configValueSeriliazed.definedAtData[i];
          assert(definedAtFile);
          return definedAtFile;
        });
        addSideExports(sideExports);
        return value2;
      });
      configValue = { value, ...common };
    } else {
      const { valueSerialized, ...common } = configValueSeriliazed;
      const { value, sideExports } = parseValueSerialized(valueSerialized, configName, () => {
        assert(configValueSeriliazed.type !== "computed");
        const { definedAtData } = configValueSeriliazed;
        const definedAtFile = Array.isArray(definedAtData) ? definedAtData[0] : definedAtData;
        return definedAtFile;
      });
      addSideExports(sideExports);
      configValue = { value, ...common };
    }
    configValues[configName] = configValue;
  });
  return configValues;
  function addSideExports(sideExports) {
    sideExports.forEach((sideExport) => {
      const { configName, configValue } = sideExport;
      if (!configValues[configName]) {
        configValues[configName] = configValue;
      } else {
      }
    });
  }
}
function parseValueSerialized(valueSerialized, configName, getDefinedAtFile) {
  if (valueSerialized.type === "js-serialized") {
    let { value } = valueSerialized;
    value = (0, import_parse.parseTransform)(value);
    return { value, sideExports: [] };
  }
  if (valueSerialized.type === "pointer-import") {
    const { value } = valueSerialized;
    return { value, sideExports: [] };
  }
  if (valueSerialized.type === "plus-file") {
    const definedAtFile = getDefinedAtFile();
    const { exportValues } = valueSerialized;
    assert(!definedAtFile.definedBy);
    assertPlusFileExport(exportValues, definedAtFile.filePathToShowToUser, configName);
    let value;
    let valueWasFound = false;
    const sideExports = [];
    Object.entries(exportValues).forEach(([exportName, exportValue]) => {
      const isSideExport = exportName !== "default" && exportName !== configName;
      if (!isSideExport) {
        value = exportValue;
        assert(!valueWasFound);
        valueWasFound = true;
      } else {
        sideExports.push({
          configName: exportName,
          configValue: {
            type: "standard",
            // We don't support side exports for cumulative values. We could support it but it isn't trivial.
            value: exportValue,
            definedAtData: {
              filePathToShowToUser: definedAtFile.filePathToShowToUser,
              fileExportPathToShowToUser: [exportName]
            }
          }
        });
      }
    });
    assert(valueWasFound);
    return { value, sideExports };
  }
  assert(false);
}
var import_parse;
var init_parsePageConfigs = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/serialize/parsePageConfigs.js"() {
    init_utils5();
    init_getConfigDefinedAt();
    import_parse = __toESM(require_parse(), 1);
    init_assertPlusFileExport();
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/parseGlobResults.js
function parseGlobResults(pageFilesExports) {
  assert(hasProp(pageFilesExports, "pageFilesLazy", "object"));
  assert(hasProp(pageFilesExports, "pageFilesEager", "object"));
  assert(hasProp(pageFilesExports, "pageFilesExportNamesLazy", "object"));
  assert(hasProp(pageFilesExports, "pageFilesExportNamesEager", "object"));
  assert(hasProp(pageFilesExports.pageFilesLazy, ".page"));
  assert(hasProp(pageFilesExports.pageFilesLazy, ".page.client") || hasProp(pageFilesExports.pageFilesLazy, ".page.server"));
  assert(hasProp(pageFilesExports, "pageFilesList", "string[]"));
  assert(hasProp(pageFilesExports, "pageConfigsSerialized"));
  assert(hasProp(pageFilesExports, "pageConfigGlobalSerialized"));
  const { pageConfigsSerialized: pageConfigsSerialized2, pageConfigGlobalSerialized: pageConfigGlobalSerialized2 } = pageFilesExports;
  assertPageConfigsSerialized(pageConfigsSerialized2);
  assertPageConfigGlobalSerialized(pageConfigGlobalSerialized2);
  const { pageConfigs, pageConfigGlobal } = parsePageConfigs(pageConfigsSerialized2, pageConfigGlobalSerialized2);
  const pageFilesMap = {};
  parseGlobResult(pageFilesExports.pageFilesLazy).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const loadModule = globValue;
    assertLoadModule(loadModule);
    pageFile.loadFile = async () => {
      if (!("fileExports" in pageFile)) {
        pageFile.fileExports = await loadModule();
        assertExportValues(pageFile);
      }
    };
  });
  parseGlobResult(pageFilesExports.pageFilesExportNamesLazy).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const loadModule = globValue;
    assertLoadModule(loadModule);
    pageFile.loadExportNames = async () => {
      if (!("exportNames" in pageFile)) {
        const moduleExports = await loadModule();
        assert(hasProp(moduleExports, "exportNames", "string[]"), pageFile.filePath);
        pageFile.exportNames = moduleExports.exportNames;
      }
    };
  });
  parseGlobResult(pageFilesExports.pageFilesEager).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const moduleExports = globValue;
    assert(isObject(moduleExports));
    pageFile.fileExports = moduleExports;
  });
  parseGlobResult(pageFilesExports.pageFilesExportNamesEager).forEach(({ filePath, pageFile, globValue }) => {
    pageFile = pageFilesMap[filePath] = pageFilesMap[filePath] ?? pageFile;
    const moduleExports = globValue;
    assert(isObject(moduleExports));
    assert(hasProp(moduleExports, "exportNames", "string[]"), pageFile.filePath);
    pageFile.exportNames = moduleExports.exportNames;
  });
  pageFilesExports.pageFilesList.forEach((filePath) => {
    pageFilesMap[filePath] = pageFilesMap[filePath] ?? getPageFileObject(filePath);
  });
  const pageFilesAll = Object.values(pageFilesMap);
  pageFilesAll.forEach(({ filePath }) => {
    assert(!filePath.includes("\\"));
  });
  return { pageFilesAll, pageConfigs, pageConfigGlobal };
}
function parseGlobResult(globObject) {
  const ret = [];
  Object.entries(globObject).forEach(([fileType, globFiles]) => {
    cast(fileType);
    assert(fileTypes.includes(fileType));
    assert(isObject(globFiles));
    Object.entries(globFiles).forEach(([filePath, globValue]) => {
      const pageFile = getPageFileObject(filePath);
      assert(pageFile.fileType === fileType);
      ret.push({ filePath, pageFile, globValue });
    });
  });
  return ret;
}
function assertLoadModule(globValue) {
  assert(isCallable(globValue));
}
function assertPageConfigsSerialized(pageConfigsSerialized2) {
  assert(isArray(pageConfigsSerialized2));
  pageConfigsSerialized2.forEach((pageConfigSerialized) => {
    assert(isObject(pageConfigSerialized));
    assert(hasProp(pageConfigSerialized, "pageId", "string"));
    assert(hasProp(pageConfigSerialized, "routeFilesystem"));
    assert(hasProp(pageConfigSerialized, "configValuesSerialized"));
  });
}
function assertPageConfigGlobalSerialized(pageConfigGlobalSerialized2) {
  assert(hasProp(pageConfigGlobalSerialized2, "configValuesSerialized"));
}
var init_parseGlobResults = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/parseGlobResults.js"() {
    init_utils5();
    init_assert_exports_old_design();
    init_getPageFileObject();
    init_fileTypes();
    init_parsePageConfigs();
  }
});

// node_modules/vike/dist/esm/shared/page-configs/getPageConfigUserFriendly.js
function getPageConfigUserFriendly(pageConfigGlobalValues, pageConfig, pageConfigValues) {
  const pageConfigUserFriendly = getPageConfigUserFriendly_public({ pageConfigGlobalValues, pageConfigValues });
  let page;
  if (!pageConfig.isErrorPage) {
    const route2 = pageConfigUserFriendly.config.route ?? pageConfig.routeFilesystem.routeString;
    page = {
      ...pageConfigUserFriendly,
      route: route2
    };
  } else {
    page = {
      ...pageConfigUserFriendly,
      isErrorPage: true
    };
  }
  return [pageConfig.pageId, page];
}
function getPageConfigUserFriendly_public({ pageConfigGlobalValues, pageConfigValues }) {
  const pageConfigUserFriendly = getPageConfigUserFriendly_base({ pageConfigGlobalValues, pageConfigValues });
  return getPublicCopy(pageConfigUserFriendly);
}
function getPublicCopy(pageConfigUserFriendly) {
  const p2 = pageConfigUserFriendly;
  return {
    config: p2.config,
    _source: p2.source,
    _sources: p2.sources,
    _from: p2.from
  };
}
function getPageConfigUserFriendly_base({ pageConfigGlobalValues, pageConfigValues }) {
  const configValues = { ...pageConfigGlobalValues, ...pageConfigValues };
  return getPageConfigUserFriendly_V1Design({ configValues });
}
function getPageConfigGlobalUserFriendly({ pageConfigGlobalValues }) {
  const pageConfigGlobalUserFriendly = getPageConfigUserFriendly_V1Design({ configValues: pageConfigGlobalValues });
  return getPublicCopy(pageConfigGlobalUserFriendly);
}
function getPageConfigUserFriendly_oldDesign(pageFiles, pageConfig, pageConfigGlobal) {
  const config = {};
  const configEntries = {};
  const exportsAll = {};
  pageFiles.forEach((pageFile) => {
    const exportValues = getExportValues(pageFile);
    exportValues.forEach(({ exportName, exportValue, isFromDefaultExport }) => {
      assert(exportName !== "default");
      exportsAll[exportName] = exportsAll[exportName] ?? [];
      exportsAll[exportName].push({
        exportValue,
        exportSource: `${pageFile.filePath} > ${isFromDefaultExport ? `\`export default { ${exportName} }\`` : `\`export { ${exportName} }\``}`,
        filePath: pageFile.filePath,
        _filePath: pageFile.filePath,
        // TODO/next-major-release: remove
        _fileType: pageFile.fileType,
        _isFromDefaultExport: isFromDefaultExport
      });
    });
  });
  let source;
  let sources;
  let from;
  if (pageConfig) {
    const res = getPageConfigUserFriendly_base({
      pageConfigGlobalValues: pageConfigGlobal.configValues,
      pageConfigValues: pageConfig.configValues
    });
    source = res.source;
    sources = res.sources;
    from = res.from;
    Object.assign(config, res.config);
    Object.assign(configEntries, res.configEntries);
    Object.assign(exportsAll, res.exportsAll);
  } else {
    source = {};
    sources = {};
    from = {
      configsStandard: {},
      configsCumulative: {},
      configsComputed: {}
    };
  }
  const pageExports = createObjectWithDeprecationWarning();
  const exports = {};
  Object.entries(exportsAll).forEach(([exportName, values]) => {
    values.forEach(({ exportValue, _fileType, _isFromDefaultExport }) => {
      exports[exportName] = exports[exportName] ?? exportValue;
      if (_fileType === ".page" && !_isFromDefaultExport) {
        if (!(exportName in pageExports)) {
          pageExports[exportName] = exportValue;
        }
      }
    });
  });
  assert(!("default" in exports));
  assert(!("default" in exportsAll));
  const pageContextExports = {
    config,
    from,
    source,
    sources,
    // TODO/eventually: deprecate/remove every prop below
    configEntries,
    exports,
    exportsAll,
    pageExports
  };
  return pageContextExports;
}
function getPageConfigUserFriendly_V1Design(pageConfig) {
  const config = {};
  const configEntries = {};
  const exportsAll = {};
  const source = {};
  const sources = {};
  const from = {
    configsStandard: {},
    configsCumulative: {},
    configsComputed: {}
  };
  const addSrc = (src, configName) => {
    source[configName] = src;
    sources[configName] ?? (sources[configName] = []);
    sources[configName].push(src);
  };
  Object.entries(pageConfig.configValues).forEach(([configName, configValue]) => {
    const { value } = configValue;
    const configValueFilePathToShowToUser = getConfigValueFilePathToShowToUser(configValue.definedAtData);
    const configDefinedAt = getConfigDefinedAtOptional("Config", configName, configValue.definedAtData);
    config[configName] = config[configName] ?? value;
    configEntries[configName] = configEntries[configName] ?? [];
    assert(configEntries[configName].length === 0);
    configEntries[configName].push({
      configValue: value,
      configDefinedAt,
      configDefinedByFile: configValueFilePathToShowToUser
    });
    if (configValue.type === "standard") {
      const src = {
        type: "configsStandard",
        value: configValue.value,
        definedAt: getDefinedAtString(configValue.definedAtData, configName)
      };
      addSrc(src, configName);
      from.configsStandard[configName] = src;
    }
    if (configValue.type === "cumulative") {
      const src = {
        type: "configsCumulative",
        values: configValue.value.map((value2, i) => {
          const definedAtFile = configValue.definedAtData[i];
          assert(definedAtFile);
          const definedAt = getDefinedAtString(definedAtFile, configName);
          return {
            value: value2,
            definedAt
          };
        })
      };
      addSrc(src, configName);
      from.configsCumulative[configName] = src;
    }
    if (configValue.type === "computed") {
      const src = {
        type: "configsComputed",
        value: configValue.value
      };
      addSrc(src, configName);
      from.configsComputed[configName] = src;
    }
    const exportName = configName;
    exportsAll[exportName] = exportsAll[exportName] ?? [];
    exportsAll[exportName].push({
      exportValue: value,
      exportSource: configDefinedAt,
      filePath: configValueFilePathToShowToUser,
      _filePath: configValueFilePathToShowToUser,
      _fileType: null,
      _isFromDefaultExport: null
    });
  });
  return {
    config,
    configEntries,
    exportsAll,
    source,
    sources,
    from
  };
}
function getExportValues(pageFile) {
  const { filePath, fileExports } = pageFile;
  assert(fileExports);
  assert(isScriptFile(filePath));
  const exportValues = [];
  Object.entries(fileExports).sort(makeLast(([exportName]) => exportName === "default")).forEach(([exportName, exportValue]) => {
    let isFromDefaultExport = exportName === "default";
    if (isFromDefaultExport) {
      if (isTemplateFile(filePath)) {
        exportName = "Page";
      } else {
        assertUsage(isObject(exportValue), `The ${picocolors_default.cyan("export default")} of ${filePath} should be an object.`);
        Object.entries(exportValue).forEach(([defaultExportName, defaultExportValue]) => {
          assertDefaultExports(defaultExportName, filePath);
          exportValues.push({
            exportName: defaultExportName,
            exportValue: defaultExportValue,
            isFromDefaultExport
          });
        });
        return;
      }
    }
    exportValues.push({
      exportName,
      exportValue,
      isFromDefaultExport
    });
  });
  exportValues.forEach(({ exportName, isFromDefaultExport }) => {
    assert(!(isFromDefaultExport && forbiddenDefaultExports.includes(exportName)));
  });
  return exportValues;
}
function createObjectWithDeprecationWarning() {
  return new Proxy({}, {
    get(...args) {
      if (!isBrowser()) {
        assertWarning2(false, "`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports", { onlyOnce: true, showStackTrace: true });
      }
      return Reflect.get(...args);
    }
  });
}
var init_getPageConfigUserFriendly = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/getPageConfigUserFriendly.js"() {
    init_assert_exports_old_design();
    init_getConfigDefinedAt();
    init_helpers();
    init_utils5();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/shared/getPageConfigsRuntime.js
function getPageConfigsRuntime(virtualFileExports2) {
  const { pageFilesAll, pageConfigs, pageConfigGlobal } = parseGlobResults(virtualFileExports2);
  const allPageIds = getAllPageIds(pageFilesAll, pageConfigs);
  const globalConfig = getPageConfigGlobalUserFriendly({ pageConfigGlobalValues: pageConfigGlobal.configValues });
  const pageConfigsUserFriendly = Object.fromEntries(pageConfigs.map((pageConfig) => {
    return getPageConfigUserFriendly(pageConfigGlobal.configValues, pageConfig, pageConfig.configValues);
  }));
  return { pageFilesAll, allPageIds, pageConfigs, pageConfigGlobal, globalConfig, pageConfigsUserFriendly };
}
function getAllPageIds(pageFilesAll, pageConfigs) {
  const fileIds = pageFilesAll.filter(({ isDefaultPageFile }) => !isDefaultPageFile).map(({ pageId }) => pageId);
  const allPageIds = unique(fileIds);
  const allPageIds2 = pageConfigs.map((p2) => p2.pageId);
  return [...allPageIds, ...allPageIds2];
}
var init_getPageConfigsRuntime = __esm({
  "node_modules/vike/dist/esm/shared/getPageConfigsRuntime.js"() {
    init_parseGlobResults();
    init_getPageConfigUserFriendly();
    init_utils5();
  }
});

// node_modules/vike/dist/esm/node/shared/resolveBase.js
function resolveBase(baseViteOriginal, baseServerUnresolved, baseAssetsUnresolved) {
  if (baseViteOriginal === "/__UNSET__")
    baseViteOriginal = null;
  {
    const wrongBase = (val) => `should start with ${picocolors_default.cyan("/")}, ${picocolors_default.cyan("http://")}, or ${picocolors_default.cyan("https://")} (it's ${picocolors_default.cyan(val)} instead)`;
    assertUsage(baseViteOriginal === null || isBaseAssets(baseViteOriginal), `vite.config.js#base ${wrongBase(baseViteOriginal)}`);
    assertUsage(baseAssetsUnresolved === null || isBaseAssets(baseAssetsUnresolved), `Config ${picocolors_default.cyan("baseAssets")} ${wrongBase(baseAssetsUnresolved)}`);
    assertUsage(baseServerUnresolved === null || baseServerUnresolved.startsWith("/"), `Config ${picocolors_default.cyan("baseServer")} should start with a leading slash ${picocolors_default.cyan("/")} (it's ${picocolors_default.cyan(String(baseServerUnresolved))} instead)`);
  }
  if (baseViteOriginal) {
    if (baseViteOriginal.startsWith("http")) {
      baseAssetsUnresolved = baseAssetsUnresolved ?? baseViteOriginal;
    } else {
      baseAssetsUnresolved = baseAssetsUnresolved ?? baseViteOriginal;
      baseServerUnresolved = baseServerUnresolved ?? baseViteOriginal;
    }
  }
  const baseServer2 = baseServerUnresolved ?? "/";
  const baseAssets = baseAssetsUnresolved ?? "/";
  assert(isBaseAssets(baseAssets));
  assert(isBaseServer(baseServer2));
  return {
    baseServer: baseServer2,
    baseAssets
  };
}
var init_resolveBase = __esm({
  "node_modules/vike/dist/esm/node/shared/resolveBase.js"() {
    init_utils();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/node/runtime/globalContext.js
async function getGlobalContextInternal() {
  assert(globalObject4.isInitialized);
  assertGlobalContextIsDefined();
  if (globalObject4.isProduction !== true)
    await globalObject4.waitForUserFilesUpdate;
  const { globalContext } = globalObject4;
  assertIsDefined(globalContext);
  return globalContext;
}
function assertIsDefined(globalContext) {
  if (!globalContext) {
    debug2("globalContext", globalContext);
    debug2("assertIsDefined()", new Error().stack);
    assert(false);
  }
}
function assertGlobalContextIsDefined() {
  assertIsDefined(globalObject4.globalContext);
  assert(globalObject4.globalContext_public);
}
async function getGlobalContextAsync(isProduction) {
  debug2("getGlobalContextAsync()");
  assertUsage(typeof isProduction === "boolean", `[getGlobalContextAsync(isProduction)] Argument ${picocolors_default.cyan("isProduction")} ${isProduction === void 0 ? "is missing" : `should be ${picocolors_default.cyan("true")} or ${picocolors_default.cyan("false")}`}`);
  setIsProduction(isProduction);
  if (!globalObject4.globalContext)
    await initGlobalContext_getGlobalContextAsync();
  if (!isProduction)
    await globalObject4.waitForUserFilesUpdate;
  assertGlobalContextIsDefined();
  const { globalContext_public } = globalObject4;
  assert(globalContext_public);
  return globalContext_public;
}
function makePublic(globalContext) {
  const globalContextPublic = makePublicCopy(globalContext, "globalContext", [
    "assetsManifest",
    "config",
    "viteConfig",
    "pages",
    "baseServer",
    "baseAssets"
  ]);
  return globalContextPublic;
}
async function initGlobalContext_renderPage() {
  debug2("initGlobalContext_renderPage()");
  if (globalObject4.isProduction === void 0)
    setIsProduction(true);
  await initGlobalContext();
}
async function initGlobalContext_getGlobalContextAsync() {
  debug2("initGlobalContext_getGlobalContextAsync()");
  await initGlobalContext();
}
async function waitForViteDevServer() {
  debug2("waitForViteDevServer()");
  const waitFor = 20;
  const timeout = setTimeout(() => {
    assertWarning2(false, `Vite's development server still not created after ${waitFor} seconds.`, {
      onlyOnce: false,
      showStackTrace: true
    });
  }, waitFor * 1e3);
  await globalObject4.viteDevServerPromise;
  clearTimeout(timeout);
  assertGlobalContextIsDefined();
}
async function initGlobalContext() {
  const { isProduction } = globalObject4;
  assert(typeof isProduction === "boolean");
  if (!isProduction) {
    await waitForViteDevServer();
  } else {
    await loadBuildEntry(globalObject4.outDirRoot);
  }
  assertGlobalContextIsDefined();
  globalObject4.isInitialized = true;
}
function setIsProduction(isProduction) {
  debug2("setIsProduction", isProduction);
  assert(typeof isProduction === "boolean");
  if (globalObject4.isProduction !== void 0)
    assert(globalObject4.isProduction === isProduction);
  globalObject4.isProduction = isProduction;
}
function defineGlobalContext() {
  const globalContext = resolveGlobalContext();
  assertIsDefined(globalContext);
  const globalContext_public = makePublic(globalContext);
  objectAssign(globalContext, { globalContext_public });
  globalObject4.globalContext = globalContext;
  globalObject4.globalContext_public = globalContext_public;
  assertGlobalContextIsDefined();
  onSetupRuntime();
}
function resolveGlobalContext() {
  const { viteDevServer, viteConfig, isPrerendering, isProduction, userFiles } = globalObject4;
  assert(typeof isProduction === "boolean");
  let globalContext;
  if (!isProduction) {
    if (!viteDevServer)
      return null;
    assert(userFiles);
    assert(viteConfig);
    assert(!isPrerendering);
    const viteConfigRuntime = getViteConfigRuntime(viteConfig);
    globalContext = {
      isProduction: false,
      isPrerendering: false,
      assetsManifest: null,
      viteDevServer,
      viteConfig,
      ...userFiles,
      viteConfigRuntime,
      ...resolveBaseRuntime(viteConfigRuntime, userFiles.config)
    };
  } else {
    if (!globalObject4.buildEntry)
      return null;
    assert(userFiles);
    const { buildInfo, assetsManifest } = globalObject4;
    assert(buildInfo);
    assert(assetsManifest);
    const globalContext_ = {
      isProduction: true,
      assetsManifest,
      ...userFiles,
      viteDevServer: null,
      viteConfigRuntime: buildInfo.viteConfigRuntime,
      usesClientRouter: buildInfo.usesClientRouter,
      ...resolveBaseRuntime(buildInfo.viteConfigRuntime, userFiles.config)
    };
    if (isPrerendering) {
      assert(viteConfig);
      objectAssign(globalContext_, {
        isPrerendering: true,
        viteConfig
      });
      globalContext = globalContext_;
    } else {
      objectAssign(globalContext_, {
        isPrerendering: false,
        viteConfig: null
      });
      globalContext = globalContext_;
    }
  }
  return globalContext;
}
async function getUserFiles() {
  const globalObject_ = globalObject4;
  const { pageConfigsRuntime } = globalObject_;
  assert(pageConfigsRuntime);
  const { pageFilesAll, allPageIds, pageConfigs, pageConfigGlobal, globalConfig, pageConfigsUserFriendly } = pageConfigsRuntime;
  const { pageRoutes, onBeforeRouteHook } = await loadPageRoutes(pageFilesAll, pageConfigs, pageConfigGlobal, allPageIds);
  const userFiles = {
    pageFilesAll,
    pageConfigs,
    pageConfigGlobal,
    allPageIds,
    pageRoutes,
    onBeforeRouteHook,
    pages: pageConfigsUserFriendly,
    config: globalConfig.config
  };
  assertV1Design(
    // pageConfigs is PageConfigRuntime[] but assertV1Design() requires PageConfigBuildTime[]
    pageConfigs.length > 0,
    pageFilesAll
  );
  return userFiles;
}
function assertViteManifest(manifest) {
  assert(isPlainObject(manifest));
}
async function loadBuildEntry(outDir) {
  debug2("loadBuildEntry()");
  if (globalObject4.userFiles) {
    assert(globalObject4.buildInfo);
    assert(globalObject4.assetsManifest);
    assert(globalObject4.buildEntry);
    return;
  }
  if (!globalObject4.buildEntry) {
    debug2("importServerProductionEntry()");
    await importServerProductionEntry({ outDir });
    if (!globalObject4.buildEntry) {
      debug2("globalObject.buildEntryPrevious");
      globalObject4.buildEntry = globalObject4.buildEntryPrevious;
    }
    assert(globalObject4.buildEntry);
    assertWarning2(
      // vike-server => `vitePluginServerEntry.inject === true`
      // vike-node => `vitePluginServerEntry.inject === [ 'index' ]`
      globalObject4.buildInfo?.viteConfigRuntime.vitePluginServerEntry.inject !== true,
      /* TO-DO/eventually:
      !!globalObject.buildInfo?.viteConfigRuntime.vitePluginServerEntry.inject,
      */
      `Run the built server entry (e.g. ${picocolors_default.cyan("$ node dist/server/index.mjs")}) instead of the original server entry (e.g. ${picocolors_default.cyan("$ ts-node server/index.ts")})`,
      { onlyOnce: true }
    );
  }
  const { buildEntry } = globalObject4;
  assertBuildEntry(buildEntry);
  globalObject4.assetsManifest = buildEntry.assetsManifest;
  globalObject4.buildInfo = buildEntry.buildInfo;
  await setUserFiles(buildEntry.virtualFileExports);
}
async function setGlobalContext_buildEntry(buildEntry) {
  debug2("setGlobalContext_buildEntry()");
  setIsProduction(true);
  assertBuildEntry(buildEntry);
  globalObject4.buildEntry = buildEntry;
  globalObject4.buildEntryPrevious = buildEntry;
  assert(globalObject4.buildEntry);
  await loadBuildEntry();
  assertGlobalContextIsDefined();
}
function assertBuildEntry(buildEntry) {
  assert(isObject(buildEntry));
  assert(hasProp(buildEntry, "virtualFileExports", "object"));
  const { virtualFileExports: virtualFileExports2 } = buildEntry;
  assert(hasProp(buildEntry, "assetsManifest", "object"));
  const { assetsManifest } = buildEntry;
  assertViteManifest(assetsManifest);
  assert(hasProp(buildEntry, "buildInfo", "object"));
  const { buildInfo } = buildEntry;
  assertBuildInfo(buildInfo);
  checkType({ virtualFileExports: virtualFileExports2, assetsManifest, buildInfo });
}
function assertBuildInfo(buildInfo) {
  assert(isObject(buildInfo));
  assert(hasProp(buildInfo, "versionAtBuildTime", "string"));
  assertVersionAtBuildTime(buildInfo.versionAtBuildTime);
  assert(hasProp(buildInfo, "viteConfigRuntime", "object"));
  assert(hasProp(buildInfo.viteConfigRuntime, "_baseViteOriginal", "string"));
  assert(hasProp(buildInfo.viteConfigRuntime, "vitePluginServerEntry", "object"));
  assert(hasProp(buildInfo, "usesClientRouter", "boolean"));
  checkType({ ...buildInfo, viteConfigRuntime: buildInfo.viteConfigRuntime });
}
function assertVersionAtBuildTime(versionAtBuildTime) {
  const versionAtRuntime = PROJECT_VERSION;
  const pretty = (version) => picocolors_default.bold(`vike@${version}`);
  assertUsage(versionAtBuildTime === versionAtRuntime, `Re-build your app (you're using ${pretty(versionAtRuntime)} but your app was built with ${pretty(versionAtBuildTime)})`);
}
function getViteConfigRuntime(viteConfig) {
  assert(hasProp(viteConfig, "_baseViteOriginal", "string"));
  const viteConfigRuntime = {
    _baseViteOriginal: viteConfig._baseViteOriginal,
    vitePluginServerEntry: {
      inject: viteConfig.vitePluginServerEntry?.inject
    }
  };
  return viteConfigRuntime;
}
async function setUserFiles(virtualFileExports2) {
  globalObject4.pageConfigsRuntime = getPageConfigsRuntime(virtualFileExports2);
  const userFiles = await getUserFiles();
  globalObject4.userFiles = userFiles;
  defineGlobalContext();
  assertGlobalContextIsDefined();
}
function getInitialGlobalContext() {
  debug2("getInitialGlobalContext()");
  const { promise: viteDevServerPromise, resolve: viteDevServerPromiseResolve } = genPromise();
  return {
    viteDevServerPromise,
    viteDevServerPromiseResolve
  };
}
function resolveBaseRuntime(viteConfigRuntime, config) {
  const baseViteOriginal = viteConfigRuntime._baseViteOriginal;
  const baseServerUnresolved = config.baseServer ?? null;
  const baseAssetsUnresolved = config.baseAssets ?? null;
  return resolveBase(baseViteOriginal, baseServerUnresolved, baseAssetsUnresolved);
}
var debug2, globalObject4;
var init_globalContext = __esm({
  "node_modules/vike/dist/esm/node/runtime/globalContext.js"() {
    init_utils2();
    init_runtime();
    init_virtualFileImportUserCode();
    init_picocolors();
    init_loadPageRoutes();
    init_assertV1Design();
    init_getPageConfigsRuntime();
    init_resolveBase();
    debug2 = createDebugger("vike:globalContext");
    globalObject4 = getGlobalObject("runtime/globalContext.ts", getInitialGlobalContext());
  }
});

// node_modules/vike/dist/esm/shared/route/resolveRouteString.js
function assertRouteString(routeString, errPrefix = "Invalid") {
  let errPrefix2 = `${errPrefix} Route String ${highlight(routeString)}`;
  assertUsage(routeString !== "", `${errPrefix2} (empty string): set it to ${highlight("/")} instead`);
  assertUsage(["/", "*"].includes(routeString[0]), `${errPrefix2}: it should start with ${highlight("/")} or ${highlight("*")}`);
  assertUsage(!routeString.includes("**"), `${errPrefix2}: set it to ${highlight(routeString.split("**").join("*"))} instead`);
}
function resolveRouteString(routeString, urlPathname) {
  assertRouteString(routeString);
  const segments = parseRouteString(routeString);
  const routeRegexStrInner = segments.map((segment) => {
    if (segment.param) {
      return "[^/]+";
    }
    if (segment.glob) {
      return ".*";
    }
    return escapeRegex(segment.static);
  }).map((s) => `(${s})`).join("");
  const routeRegex = new RegExp(`^${routeRegexStrInner}/?$`);
  const routeRegexMatch = urlPathname.match(routeRegex);
  if (!routeRegexMatch)
    return null;
  const routeParams = {};
  const [_, ...segmentsValue] = routeRegexMatch;
  let globIdx = 0;
  const hasMultipleGlobs = segments.filter((segment) => segment.glob).length > 1;
  segments.forEach((segment, i) => {
    let val = segmentsValue[i];
    if (segment.param) {
      routeParams[segment.param] = val;
    }
    if (segment.glob) {
      const param = `*${hasMultipleGlobs ? ++globIdx : ""}`;
      routeParams[param] = val;
    }
  });
  return { routeParams };
}
function parseRouteString(routeString) {
  const segments = [];
  const pushStatic = (s) => {
    const segmentLast = segments[segments.length - 1];
    if (segmentLast?.static) {
      segmentLast.static += s;
    } else {
      segments.push({ static: s });
    }
  };
  const parts = routeString.split("/");
  parts.forEach((s, i) => {
    if (i !== 0)
      pushStatic("/");
    if (isParam(s)) {
      assertWarning2(!s.startsWith(PARAM_TOKEN_OLD), `Outdated Route String ${highlight(routeString)}, use ${highlight(routeString.split(PARAM_TOKEN_OLD).join(PARAM_TOKEN_NEW))} instead`, { onlyOnce: true });
      segments.push({ param: s.slice(1) });
    } else {
      if (s === "*" && i === parts.length - 1 && routeString !== "*" && routeString !== "/*") {
        segments.push({ glob: true });
      } else {
        s.split("*").forEach((s2, i2) => {
          if (i2 !== 0)
            segments.push({ glob: true });
          if (s2 !== "") {
            pushStatic(s2);
          }
        });
      }
    }
  });
  return segments;
}
function analyzeRouteString(routeString) {
  const segments = parseRouteString(routeString);
  const countStaticParts = (s) => s?.split("/").filter(Boolean).length || 0;
  let numberOfStaticPartsBeginning = 0;
  for (const segment of segments) {
    if (!segment.static)
      break;
    numberOfStaticPartsBeginning += countStaticParts(segment.static);
  }
  const numberOfStaticParts = segments.map((s) => countStaticParts(s.static)).reduce((sum, a) => sum + a, 0);
  const numberOfParams = segments.filter((s) => s.param).length;
  const numberOfGlobs = segments.filter((s) => s.glob).length;
  return { numberOfStaticPartsBeginning, numberOfStaticParts, numberOfParams, numberOfGlobs };
}
function isParam(routeSegment) {
  return routeSegment.startsWith(PARAM_TOKEN_NEW) || routeSegment.startsWith(PARAM_TOKEN_OLD);
}
function isStaticRouteString(routeString) {
  const url3 = routeString;
  const match = resolveRouteString(routeString, url3);
  assert(match);
  return Object.keys(match.routeParams).length === 0;
}
function highlight(routeString) {
  if (isBrowser()) {
    return `'${routeString}'`;
  } else {
    if (routeString === "") {
      routeString = "''";
    }
    return picocolors_default.cyan(routeString);
  }
}
var PARAM_TOKEN_NEW, PARAM_TOKEN_OLD;
var init_resolveRouteString = __esm({
  "node_modules/vike/dist/esm/shared/route/resolveRouteString.js"() {
    init_utils5();
    init_utils6();
    init_picocolors();
    PARAM_TOKEN_NEW = "@";
    PARAM_TOKEN_OLD = ":";
  }
});

// node_modules/vike/dist/esm/shared/route/resolvePrecedence.js
function resolvePrecendence(routeMatches) {
  routeMatches.sort(sortMatches).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !!routeMatch.precedence && routeMatch.precedence < 0)).sort(makeFirst((routeMatch) => routeMatch.routeType === "STRING" && isStaticRouteString(routeMatch.routeString) === false)).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !routeMatch.precedence)).sort(makeFirst((routeMatch) => routeMatch.routeType === "STRING" && isStaticRouteString(routeMatch.routeString) === true)).sort(makeFirst((routeMatch) => routeMatch.routeType === "FILESYSTEM")).sort(makeFirst((routeMatch) => routeMatch.routeType === "FUNCTION" && !!routeMatch.precedence && routeMatch.precedence > 0));
}
function sortMatches(routeMatch1, routeMatch2) {
  {
    const precedence1 = routeMatch1.precedence ?? 0;
    const precedence2 = routeMatch2.precedence ?? 0;
    if (precedence1 !== precedence2) {
      return precedence1 > precedence2 ? -1 : 1;
    }
  }
  if (!routeMatch2.routeString) {
    return 0;
  }
  if (!routeMatch1.routeString) {
    return 0;
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfStaticPartsBeginning;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfStaticParts;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfGlobs;
    const result = lowerFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  {
    const getValue = (routeString) => analyzeRouteString(routeString).numberOfParams;
    const result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
    if (result !== 0) {
      return result;
    }
  }
  return 0;
}
var init_resolvePrecedence = __esm({
  "node_modules/vike/dist/esm/shared/route/resolvePrecedence.js"() {
    init_resolveRouteString();
    init_utils6();
    init_utils6();
    init_resolveRouteString();
  }
});

// node_modules/vike/dist/esm/shared/assertPageContextProvidedByUser.js
function assertPageContextProvidedByUser(pageContextProvidedByUser, { hookName, hookFilePath }) {
  if (pageContextProvidedByUser === void 0 || pageContextProvidedByUser === null)
    return;
  assert(!hookName.endsWith(")"));
  const errPrefix = `The ${picocolors_default.cyan("pageContext")} object provided by the ${hookName}() hook defined by ${hookFilePath}`;
  assertUsage(isObject(pageContextProvidedByUser), `${errPrefix} should be an object (but it's ${picocolors_default.cyan(`typeof pageContext === ${JSON.stringify(typeof pageContextProvidedByUser)}`)} instead)`);
  assertUsage(!("_objectCreatedByVike" in pageContextProvidedByUser), `${errPrefix} shouldn't be the whole ${picocolors_default.cyan("pageContext")} object, see https://vike.dev/pageContext-manipulation#do-not-return-entire-pagecontext`);
  assertWarning2(!("pageId" in pageContextProvidedByUser), `${errPrefix} sets ${picocolors_default.cyan("pageContext.pageId")} which means that Vike's routing is overriden. This is an experimental feature: make sure to contact a vike maintainer before using this.`, { onlyOnce: true });
  assertUsage(!("is404" in pageContextProvidedByUser), `${errPrefix} sets ${picocolors_default.cyan("pageContext.is404")} which is forbidden, use ${picocolors_default.cyan("throw render()")} instead, see https://vike.dev/render`);
}
var init_assertPageContextProvidedByUser = __esm({
  "node_modules/vike/dist/esm/shared/assertPageContextProvidedByUser.js"() {
    init_utils5();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/utils/humanizeTime.js
function humanizeTime(milliseconds) {
  const seconds = milliseconds / 1e3;
  if (seconds < 120) {
    const n = round(seconds);
    return `${n} second${plural(n)}`;
  }
  {
    const minutes = seconds / 60;
    const n = round(minutes);
    return `${n} minute${plural(n)}`;
  }
}
function round(n) {
  let rounded = n.toFixed(1);
  if (rounded.endsWith(".0"))
    rounded = rounded.slice(0, -2);
  return rounded;
}
function plural(n) {
  return n === "1" ? "" : "s";
}
var init_humanizeTime = __esm({
  "node_modules/vike/dist/esm/utils/humanizeTime.js"() {
  }
});

// node_modules/vike/dist/esm/shared/hooks/executeHook.js
function isUserHookError(err) {
  if (!isObject(err))
    return false;
  return globalObject5.userHookErrors.get(err) ?? false;
}
function executeHook(hookFnCaller, hook, pageContext) {
  const { hookName, hookFilePath, hookTimeout: { error: timeoutErr, warning: timeoutWarn } } = hook;
  let resolve3;
  let reject;
  const promise = new Promise((resolve_, reject_) => {
    resolve3 = (ret) => {
      clearTimeouts();
      resolve_(ret);
    };
    reject = (err) => {
      clearTimeouts();
      reject_(err);
    };
  });
  const clearTimeouts = () => {
    if (currentTimeoutWarn)
      clearTimeout(currentTimeoutWarn);
    if (currentTimeoutErr)
      clearTimeout(currentTimeoutErr);
  };
  const currentTimeoutWarn = isNotDisabled(timeoutWarn) && setTimeout(() => {
    assertWarning2(false, `The ${hookName}() hook defined by ${hookFilePath} is slow: it's taking more than ${humanizeTime(timeoutWarn)} (https://vike.dev/hooksTimeout)`, { onlyOnce: false });
  }, timeoutWarn);
  const currentTimeoutErr = isNotDisabled(timeoutErr) && setTimeout(() => {
    const err = getProjectError(`The ${hookName}() hook defined by ${hookFilePath} timed out: it didn't finish after ${humanizeTime(timeoutErr)} (https://vike.dev/hooksTimeout)`);
    reject(err);
  }, timeoutErr);
  (async () => {
    try {
      providePageContext(pageContext);
      const ret = await hookFnCaller();
      resolve3(ret);
    } catch (err) {
      if (isObject(err)) {
        globalObject5.userHookErrors.set(err, { hookName, hookFilePath });
      }
      reject(err);
    }
  })();
  return promise;
}
function isNotDisabled(timeout) {
  return !!timeout && timeout !== Infinity;
}
function providePageContext(pageContext) {
  globalObject5.pageContext = pageContext;
  Promise.resolve().then(() => {
    globalObject5.pageContext = null;
  });
}
var globalObject5;
var init_executeHook = __esm({
  "node_modules/vike/dist/esm/shared/hooks/executeHook.js"() {
    init_assert();
    init_getGlobalObject();
    init_humanizeTime();
    init_isObject();
    globalObject5 = getGlobalObject("utils/executeHook.ts", {
      userHookErrors: /* @__PURE__ */ new WeakMap(),
      pageContext: null
    });
  }
});

// node_modules/vike/dist/esm/shared/route/executeOnBeforeRouteHook.js
async function executeOnBeforeRouteHook(pageContext) {
  const pageContextFromOnBeforeRouteHook = {};
  if (!pageContext._onBeforeRouteHook)
    return null;
  const pageContextFromHook = await getPageContextFromHook(pageContext._onBeforeRouteHook, pageContext);
  if (pageContextFromHook) {
    objectAssign(pageContextFromOnBeforeRouteHook, pageContextFromHook);
    if (hasProp(pageContextFromOnBeforeRouteHook, "pageId", "string") || hasProp(pageContextFromOnBeforeRouteHook, "pageId", "null")) {
      if (!hasProp(pageContextFromOnBeforeRouteHook, "routeParams")) {
        objectAssign(pageContextFromOnBeforeRouteHook, { routeParams: {} });
      } else {
        assert(hasProp(pageContextFromOnBeforeRouteHook, "routeParams", "object"));
      }
      objectAssign(pageContextFromOnBeforeRouteHook, {
        _routingProvidedByOnBeforeRouteHook: true,
        _debugRouteMatches: "CUSTOM_ROUTING"
      });
      return pageContextFromOnBeforeRouteHook;
    }
  }
  objectAssign(pageContextFromOnBeforeRouteHook, {
    _routingProvidedByOnBeforeRouteHook: false
  });
  return pageContextFromOnBeforeRouteHook;
}
async function getPageContextFromHook(onBeforeRouteHook, pageContext) {
  let hookReturn = onBeforeRouteHook.hookFn(pageContext);
  assertSyncRouting(hookReturn, `The onBeforeRoute() hook ${onBeforeRouteHook.hookFilePath}`);
  hookReturn = await executeHook(() => hookReturn, onBeforeRouteHook, pageContext);
  const errPrefix = `The onBeforeRoute() hook defined by ${onBeforeRouteHook.hookFilePath}`;
  assertUsage(hookReturn === null || hookReturn === void 0 || isObjectWithKeys(hookReturn, ["pageContext"]) && hasProp(hookReturn, "pageContext"), `${errPrefix} should return ${picocolors_default.cyan("null")}, ${picocolors_default.cyan("undefined")}, or a plain JavaScript object ${picocolors_default.cyan("{ pageContext: { /* ... */ } }")}`);
  if (hookReturn === null || hookReturn === void 0) {
    return null;
  }
  assertUsage(hasProp(hookReturn, "pageContext", "object"), `${errPrefix} returned ${picocolors_default.cyan("{ pageContext }")} but pageContext should be a plain JavaScript object.`);
  if (hasProp(hookReturn.pageContext, "pageId") && !hasProp(hookReturn.pageContext, "pageId", "null")) {
    const errPrefix2 = `${errPrefix} returned ${picocolors_default.cyan("{ pageContext: { pageId } }")} but ${picocolors_default.cyan("pageId")} should be`;
    assertUsage(hasProp(hookReturn.pageContext, "pageId", "string"), `${errPrefix2} a string or null`);
    assertUsage(pageContext._allPageIds.includes(hookReturn.pageContext.pageId), `${errPrefix2} ${joinEnglish(pageContext._allPageIds.map((s) => picocolors_default.cyan(s)), "or")}`);
  }
  if (hasProp(hookReturn.pageContext, "routeParams")) {
    assertRouteParams(hookReturn.pageContext, `${errPrefix} returned ${picocolors_default.cyan("{ pageContext: { routeParams } }")} but routeParams should`);
  }
  const deprecatedReturn = (prop) => `${errPrefix} returned ${picocolors_default.cyan(`{ pageContext: { ${prop} } }`)} which is deprecated. Return ${picocolors_default.cyan("{ pageContext: { urlLogical } }")} instead.`;
  if (hasProp(hookReturn.pageContext, "url")) {
    assertWarning2(false, deprecatedReturn("url"), { onlyOnce: true });
    hookReturn.pageContext.urlLogical = hookReturn.pageContext.url;
    delete hookReturn.pageContext.url;
  }
  if (hasProp(hookReturn.pageContext, "urlOriginal")) {
    assertWarning2(false, deprecatedReturn("urlOriginal"), { onlyOnce: true });
    hookReturn.pageContext.urlLogical = hookReturn.pageContext.urlOriginal;
    delete hookReturn.pageContext.urlOriginal;
  }
  if (hasProp(hookReturn.pageContext, "urlLogical")) {
    assertUsageUrlPathnameAbsolute(
      // We skip validation and type-cast instead of assertUsage() in order to save client-side KBs
      hookReturn.pageContext.urlLogical,
      `${errPrefix} returned ${picocolors_default.cyan("{ pageContext: { urlLogical } }")} but ${picocolors_default.cyan("urlLogical")}`
    );
  }
  assertPageContextProvidedByUser(hookReturn.pageContext, {
    hookFilePath: onBeforeRouteHook.hookFilePath,
    hookName: "onBeforeRoute"
  });
  const pageContextAddendumHook = {};
  objectAssign(pageContextAddendumHook, hookReturn.pageContext);
  return pageContextAddendumHook;
}
var init_executeOnBeforeRouteHook = __esm({
  "node_modules/vike/dist/esm/shared/route/executeOnBeforeRouteHook.js"() {
    init_assertPageContextProvidedByUser();
    init_utils6();
    init_resolveRouteFunction();
    init_picocolors();
    init_executeHook();
  }
});

// node_modules/vike/dist/esm/shared/route/debug.js
function debug3(...args) {
  if (!_debug) {
    _debug = globalThis.__brillout_debug_createDebugger?.("vike:routing");
  }
  if (_debug) {
    _debug(...args);
  }
}
var _debug;
var init_debug3 = __esm({
  "node_modules/vike/dist/esm/shared/route/debug.js"() {
  }
});

// node_modules/vike/dist/esm/shared/route/index.js
async function route(pageContext) {
  debug3("Pages routes:", pageContext._pageRoutes);
  assertPageContextUrl(pageContext);
  const pageContextFromRoute = {};
  const pageContextFromOnBeforeRouteHook = await executeOnBeforeRouteHook(pageContext);
  if (pageContextFromOnBeforeRouteHook) {
    if (pageContextFromOnBeforeRouteHook._routingProvidedByOnBeforeRouteHook) {
      assert(pageContextFromOnBeforeRouteHook.pageId);
      return pageContextFromOnBeforeRouteHook;
    } else {
      objectAssign(pageContextFromRoute, pageContextFromOnBeforeRouteHook);
    }
  }
  objectAssign(pageContext, pageContextFromOnBeforeRouteHook);
  const allPageIds = pageContext._allPageIds;
  assertUsage(allPageIds.length > 0, "No page found. You must create at least one page.");
  assert(pageContext._pageFilesAll.length > 0 || pageContext._pageConfigs.length > 0);
  const { urlPathname } = pageContext;
  assert(urlPathname.startsWith("/"));
  const routeMatches = [];
  await Promise.all(pageContext._pageRoutes.map(async (pageRoute) => {
    const { pageId, routeType } = pageRoute;
    if (pageRoute.routeType === "FILESYSTEM") {
      const { routeString } = pageRoute;
      const match = resolveRouteString(routeString, urlPathname);
      if (match) {
        const { routeParams } = match;
        routeMatches.push({ pageId, routeParams, routeString, routeType });
      }
      return;
    }
    if (pageRoute.routeType === "STRING") {
      const { routeString } = pageRoute;
      const match = resolveRouteString(routeString, urlPathname);
      if (match) {
        const { routeParams } = match;
        assert(routeType === "STRING");
        routeMatches.push({
          pageId,
          routeString,
          routeParams,
          routeType
        });
      }
      return;
    }
    if (pageRoute.routeType === "FUNCTION") {
      const { routeFunction, routeDefinedAtString } = pageRoute;
      const match = await resolveRouteFunction(routeFunction, pageContext, routeDefinedAtString);
      if (match) {
        const { routeParams, precedence } = match;
        routeMatches.push({ pageId, precedence, routeParams, routeType });
      }
      return;
    }
    assert(false);
  }));
  resolvePrecendence(routeMatches);
  const winner = routeMatches[0] ?? null;
  debug3(`Route matches for URL ${picocolors_default.cyan(urlPathname)} (in precedence order):`, routeMatches);
  objectAssign(pageContextFromRoute, { _debugRouteMatches: routeMatches });
  objectAssign(pageContextFromRoute, { _routeMatch: winner });
  if (!winner) {
    objectAssign(pageContextFromRoute, {
      pageId: null,
      routeParams: {}
    });
    return pageContextFromRoute;
  }
  {
    const { routeParams } = winner;
    assert(isPlainObject(routeParams));
    objectAssign(pageContextFromRoute, {
      pageId: winner.pageId,
      routeParams: winner.routeParams
    });
  }
  return pageContextFromRoute;
}
var init_route = __esm({
  "node_modules/vike/dist/esm/shared/route/index.js"() {
    init_assertRoutingType();
    init_isBrowser();
    init_utils6();
    init_getPageContextUrlComputed();
    init_resolvePrecedence();
    init_resolveRouteString();
    init_resolveRouteFunction();
    init_executeOnBeforeRouteHook();
    init_debug3();
    init_picocolors();
    if (isBrowser()) {
      assertClientRouting();
    }
  }
});

// node_modules/vike/dist/esm/__internal/index.js
var init_internal = __esm({
  "node_modules/vike/dist/esm/__internal/index.js"() {
    init_globalContext();
    init_route();
    init_globalContext();
    init_assertSetup();
  }
});

// node_modules/vike/dist/esm/node/runtime/html/injectAssets/injectHtmlTags.js
function injectHtmlTags(htmlString, htmlTags, position) {
  const htmlFragment = joinHtmlTags(htmlTags.filter((h) => h.position === position));
  if (htmlFragment) {
    htmlString = injectHtmlFragment(position, htmlFragment, htmlString);
  }
  return htmlString;
}
function injectHtmlTagsUsingStream(htmlTags, streamFromReactStreamingPackage) {
  const htmlFragment = joinHtmlTags(htmlTags.filter((h) => h.position === "HTML_STREAM"));
  if (htmlFragment) {
    assert(!streamFromReactStreamingPackage.hasStreamEnded());
    streamFromReactStreamingPackage.injectToStream(htmlFragment, { flush: true });
  }
}
function joinHtmlTags(htmlTags) {
  const htmlFragment = htmlTags.map((h) => resolveHtmlTag(h.htmlTag)).join("");
  return htmlFragment;
}
function injectHtmlFragment(position, htmlFragment, htmlString) {
  if (position === "HTML_BEGIN") {
    {
      const res = injectAtPaceholder(htmlFragment, htmlString, true);
      if (res)
        return res;
    }
    assert(tagOpeningExists("head", htmlString));
    htmlString = injectAtOpeningTag("head", htmlString, htmlFragment);
    return htmlString;
  }
  if (position === "HTML_END") {
    {
      const res = injectAtPaceholder(htmlFragment, htmlString, false);
      if (res)
        return res;
    }
    if (tagClosingExists("body", htmlString)) {
      return injectAtClosingTag("body", htmlString, htmlFragment);
    }
    if (tagClosingExists("html", htmlString)) {
      return injectAtClosingTag("html", htmlString, htmlFragment);
    }
    return htmlString + "\n" + htmlFragment;
  }
  assert(false);
}
function resolveHtmlTag(htmlTag) {
  return typeof htmlTag !== "string" ? htmlTag() : htmlTag;
}
function injectAtOpeningTag(tag, htmlString, htmlFragment) {
  const openingTag = getTagOpening(tag);
  const matches = htmlString.match(openingTag);
  assert(matches && matches.length >= 1);
  const tagInstance = matches[0];
  assert(tagInstance);
  const htmlParts = htmlString.split(tagInstance);
  assert(htmlParts.length >= 2);
  const before = slice(htmlParts, 0, 1)[0] + tagInstance;
  const after = slice(htmlParts, 1, 0).join(tagInstance);
  htmlFragment = injectBreakLines(htmlFragment, before, after);
  return before + htmlFragment + after;
}
function injectAtClosingTag(tag, htmlString, htmlFragment) {
  const tagClosing = getTagClosing(tag);
  const matches = htmlString.match(tagClosing);
  assert(matches && matches.length >= 1);
  const tagInstance = matches[0];
  assert(tagInstance);
  const htmlParts = htmlString.split(tagInstance);
  assert(htmlParts.length >= 2);
  const before = slice(htmlParts, 0, -1).join(tagInstance);
  const after = tagInstance + slice(htmlParts, -1, 0);
  htmlFragment = injectBreakLines(htmlFragment, before, after);
  return before + htmlFragment + after;
}
function injectBreakLines(htmlFragment, before, after) {
  assert(htmlFragment.trim() === htmlFragment);
  const currentLineBefore = before.split("\n").slice(-1)[0];
  let paddingParent = currentLineBefore.match(/\s*$/)[0];
  let isBlankLine = !!paddingParent;
  if (!paddingParent) {
    paddingParent = currentLineBefore.match(/^\s*/)[0];
  }
  if (!paddingParent)
    return htmlFragment;
  const whitespaceExtra = paddingParent ? "  " : "";
  const whitespace = `${paddingParent}${whitespaceExtra}`;
  const padding = `
${whitespace}`;
  htmlFragment = htmlFragment.replace(/<[^\/]/g, (match) => `${padding}${match}`);
  if (isBlankLine) {
    assert(htmlFragment.startsWith(padding), { htmlFragment });
    htmlFragment = whitespaceExtra + htmlFragment.slice(padding.length);
  }
  const currentLineAfter = after.split("\n")[0];
  if (currentLineAfter.trim().length > 0) {
    htmlFragment += "\n" + paddingParent;
  }
  return htmlFragment;
}
function createHtmlHeadIfMissing(htmlString) {
  const assertion = () => assert(tagOpeningExists("head", htmlString) && tagClosingExists("head", htmlString));
  if (tagOpeningExists("head", htmlString) && tagClosingExists("head", htmlString)) {
    assertion();
    return htmlString;
  }
  const htmlFragment = "<head></head>";
  if (tagOpeningExists("html", htmlString)) {
    htmlString = injectAtOpeningTag("html", htmlString, htmlFragment);
    assertion();
    return htmlString;
  }
  if (tagOpeningExists("!doctype", htmlString)) {
    htmlString = injectAtOpeningTag("!doctype", htmlString, htmlFragment);
    assertion();
    return htmlString;
  }
  htmlString = htmlFragment + "\n" + htmlString;
  assertion();
  return htmlString;
}
function tagOpeningExists(tag, htmlString) {
  const tagOpeningRE = getTagOpening(tag);
  return tagOpeningRE.test(htmlString);
}
function tagClosingExists(tag, htmlString) {
  const tagClosingRE = getTagClosing(tag);
  return tagClosingRE.test(htmlString);
}
function getTagOpening(tag) {
  const tagOpening = new RegExp(`<${tag}(>| [^>]*>)`, "i");
  return tagOpening;
}
function getTagClosing(tag) {
  const tagClosing = new RegExp(`</${tag}>`, "i");
  return tagClosing;
}
function injectAtPaceholder(htmlFragment, htmlString, isFirst) {
  const placeholder = isFirst ? "__VITE_PLUGIN_SSR__ASSETS_FIRST__" : "__VITE_PLUGIN__SSR_ASSETS_LAST__";
  const parts = htmlString.split(placeholder);
  if (parts.length === 1)
    return null;
  assertUsage(parts.length === 2, "You're inserting assets twice into your HTML", { showStackTrace: true });
  return [parts[0], htmlFragment, parts[1]].join("");
}
var init_injectHtmlTags = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/injectAssets/injectHtmlTags.js"() {
    init_utils2();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/isFontFallback.js
function isFontFallback(asset, pageAssets) {
  if (asset.assetType !== "font") {
    return false;
  }
  const fontUrlBase = removeFileExtentionAndHash(asset.src);
  return pageAssets.some((assetOther) => {
    return assetOther.assetType === "font" && removeFileExtentionAndHash(assetOther.src) === fontUrlBase;
  });
}
function removeFileExtentionAndHash(assetUrl) {
  assert(!assetUrl.includes("\\"));
  assert(!assetUrl.endsWith(".js"));
  const paths2 = assetUrl.split("/");
  {
    const filename = paths2[paths2.length - 1];
    const filenameParts = filename.split(".");
    assert(filenameParts.length >= 2);
    const filenameBase = filenameParts.slice(0, filenameParts.length === 2 ? -1 : -2);
    assert(filenameBase.length >= 1);
    paths2[paths2.length - 1] = filenameBase.join(".");
  }
  return paths2.join("/");
}
var init_isFontFallback = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/isFontFallback.js"() {
    init_assert();
  }
});

// ../../node_modules/@brillout/json-serializer/dist/cjs/utils/isReactElement.js
var require_isReactElement = __commonJS({
  "../../node_modules/@brillout/json-serializer/dist/cjs/utils/isReactElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isReactElement = void 0;
    function isReactElement(value) {
      return typeof value === "object" && value !== null && String(value["$$typeof"]) === "Symbol(react.element)";
    }
    exports.isReactElement = isReactElement;
  }
});

// ../../node_modules/@brillout/json-serializer/dist/cjs/utils/isCallable.js
var require_isCallable = __commonJS({
  "../../node_modules/@brillout/json-serializer/dist/cjs/utils/isCallable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isCallable = void 0;
    function isCallable2(thing) {
      return thing instanceof Function || typeof thing === "function";
    }
    exports.isCallable = isCallable2;
  }
});

// ../../node_modules/@brillout/json-serializer/dist/cjs/utils/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/@brillout/json-serializer/dist/cjs/utils/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isObject = void 0;
    function isObject2(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      if (Array.isArray(value)) {
        return false;
      }
      return true;
    }
    exports.isObject = isObject2;
  }
});

// ../../node_modules/@brillout/json-serializer/dist/cjs/utils/replacerWithPath.js
var require_replacerWithPath = __commonJS({
  "../../node_modules/@brillout/json-serializer/dist/cjs/utils/replacerWithPath.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.replacerWithPath = void 0;
    function replacerWithPath(replacer) {
      const pathMap = /* @__PURE__ */ new WeakMap();
      return function(key, value) {
        var _a;
        const pathPrevious = (_a = pathMap.get(this)) !== null && _a !== void 0 ? _a : [];
        const path = [...pathPrevious];
        if (key !== "") {
          const pathEntry = !Array.isArray(this) ? key : parseInt(key, 10);
          path.push(pathEntry);
        }
        if (isIterable(value))
          pathMap.set(value, path);
        return replacer.call(this, key, value, path);
      };
    }
    exports.replacerWithPath = replacerWithPath;
    function isIterable(value) {
      return value === Object(value);
    }
  }
});

// ../../node_modules/@brillout/json-serializer/dist/cjs/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/@brillout/json-serializer/dist/cjs/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isJsonSerializerError = exports.stringify = void 0;
    var types_1 = require_types();
    var isReactElement_1 = require_isReactElement();
    var isCallable_1 = require_isCallable();
    var isObject_1 = require_isObject();
    var replacerWithPath_1 = require_replacerWithPath();
    function stringify3(value, {
      forbidReactElements,
      space,
      valueName,
      sortObjectKeys,
      // Used by Vike: https://github.com/vikejs/vike/blob/b4ba6b70e6bdc2e1f460c0d2e4c3faae5d0a733c/vike/node/plugin/plugins/importUserCode/v1-design/getConfigValuesSerialized.ts#L78
      replacer: replacerUserProvided
    } = {}) {
      const serializer = (val) => JSON.stringify(val, (0, replacerWithPath_1.replacerWithPath)(replacer), space);
      return serializer(value);
      function replacer(key, value2, path) {
        {
          const ret = replacerUserProvided === null || replacerUserProvided === void 0 ? void 0 : replacerUserProvided.call(this, key, value2);
          if (ret)
            return ret.replacement;
        }
        if (forbidReactElements && (0, isReactElement_1.isReactElement)(value2)) {
          throw genErr({
            value: value2,
            valueType: "React element",
            path,
            rootValueName: valueName
          });
        }
        if ((0, isCallable_1.isCallable)(value2)) {
          const functionName = value2.name;
          throw genErr({
            value: value2,
            valueType: "function",
            path,
            rootValueName: valueName,
            problematicValueName: path.length === 0 ? functionName : void 0
          });
        }
        const valueOriginal = this[key];
        for (const { is, serialize: serialize2 } of types_1.types.slice().reverse()) {
          if (is(valueOriginal)) {
            return serialize2(valueOriginal, serializer);
          }
        }
        if (sortObjectKeys && (0, isObject_1.isObject)(value2)) {
          const copy2 = {};
          Object.keys(value2).sort().forEach((key2) => {
            copy2[key2] = value2[key2];
          });
          value2 = copy2;
        }
        return value2;
      }
    }
    exports.stringify = stringify3;
    function genErr({ value, valueType, path, rootValueName, problematicValueName }) {
      const subjectName = getSubjectName({ path, rootValueName, problematicValueName });
      const messageCore = `cannot serialize ${subjectName} because it's a ${valueType}`;
      const err = new Error(`[@brillout/json-serializer](https://github.com/brillout/json-serializer) ${messageCore}.`);
      const pathString = getPathString(path, true);
      const errAddendum = {
        [stamp3]: true,
        messageCore,
        value,
        path,
        pathString,
        subjectName
      };
      Object.assign(err, errAddendum);
      return err;
    }
    var stamp3 = "_isJsonSerializerError";
    function isJsonSerializerError2(thing) {
      return (0, isObject_1.isObject)(thing) && thing[stamp3] === true;
    }
    exports.isJsonSerializerError = isJsonSerializerError2;
    function getSubjectName({ path, rootValueName, problematicValueName }) {
      const pathString = getPathString(path, !rootValueName);
      let subjectName;
      if (!pathString) {
        subjectName = rootValueName || problematicValueName || "value";
      } else {
        if (problematicValueName) {
          subjectName = problematicValueName + " at ";
        } else {
          subjectName = "";
        }
        subjectName = subjectName + (rootValueName || "") + pathString;
      }
      return subjectName;
    }
    function getPathString(path, canBeFirstKey) {
      const pathString = path.map((key, i) => {
        if (typeof key === "number") {
          return `[${key}]`;
        }
        if (i === 0 && canBeFirstKey && isKeyDotNotationCompatible2(key)) {
          return key;
        }
        return getPropAccessNotation2(key);
      }).join("");
      return pathString;
    }
    function getPropAccessNotation2(key) {
      return typeof key === "string" && isKeyDotNotationCompatible2(key) ? `.${key}` : `[${JSON.stringify(key)}]`;
    }
    function isKeyDotNotationCompatible2(key) {
      return /^[a-z0-9\$_]+$/i.test(key);
    }
  }
});

// node_modules/vike/dist/esm/shared/addIs404ToPageProps.js
function addIs404ToPageProps(pageContext) {
  assertIs404(pageContext);
  addIs404(pageContext);
}
function assertIs404(pageContext) {
  if (isErrorPage(pageContext.pageId, pageContext._pageConfigs)) {
    assert(hasProp(pageContext, "is404", "boolean"));
  }
}
function addIs404(pageContext) {
  if (pageContext.is404 === void 0 || pageContext.is404 === null)
    return;
  const pageProps = pageContext.pageProps || {};
  if (!isObject(pageProps)) {
    assertWarning2(false, "pageContext.pageProps should be an object", { showStackTrace: true, onlyOnce: true });
    return;
  }
  pageProps.is404 = pageProps.is404 || pageContext.is404;
  pageContext.pageProps = pageProps;
}
var init_addIs404ToPageProps = __esm({
  "node_modules/vike/dist/esm/shared/addIs404ToPageProps.js"() {
    init_utils5();
    init_error_page();
  }
});

// node_modules/vike/dist/esm/shared/NOT_SERIALIZABLE.js
var NOT_SERIALIZABLE;
var init_NOT_SERIALIZABLE = __esm({
  "node_modules/vike/dist/esm/shared/NOT_SERIALIZABLE.js"() {
    NOT_SERIALIZABLE = "__VIKE__NOT_SERIALIZABLE__";
  }
});

// node_modules/vike/dist/esm/shared/misc/pageContextInitIsPassedToClient.js
var pageContextInitIsPassedToClient;
var init_pageContextInitIsPassedToClient = __esm({
  "node_modules/vike/dist/esm/shared/misc/pageContextInitIsPassedToClient.js"() {
    pageContextInitIsPassedToClient = "_pageContextInitIsPassedToClient";
  }
});

// node_modules/vike/dist/esm/shared/misc/isServerSideError.js
var isServerSideError;
var init_isServerSideError = __esm({
  "node_modules/vike/dist/esm/shared/misc/isServerSideError.js"() {
    isServerSideError = "_isServerSideError";
  }
});

// node_modules/vike/dist/esm/node/runtime/html/serializePageContextClientSide.js
function serializePageContextClientSide(pageContext) {
  const passToClient = getPassToClient(pageContext);
  const pageContextClient = applyPassToClient(passToClient, pageContext);
  if (passToClient.some((prop) => getPropVal(pageContext._pageContextInit, prop))) {
    pageContextClient[pageContextInitIsPassedToClient] = true;
  }
  let pageContextSerialized;
  try {
    pageContextSerialized = serialize(pageContextClient);
  } catch (err) {
    const h = (s) => picocolors_default.cyan(s);
    let hasWarned = false;
    const propsNonSerializable = [];
    passToClient.forEach((prop) => {
      const res = getPropVal(pageContext, prop);
      if (!res)
        return;
      const { value } = res;
      const varName = `pageContext${getPropKeys(prop).map(getPropAccessNotation).join("")}`;
      try {
        serialize(value, varName);
      } catch (err2) {
        propsNonSerializable.push(prop);
        if (prop === "_configFromHook") {
          let pathString = "";
          if ((0, import_stringify.isJsonSerializerError)(err2)) {
            pathString = err2.pathString;
          }
          assertUsage(false, `Cannot serialize config ${h(pathString)} set by useConfig(), see https://vike.dev/useConfig#serialization-error`);
        }
        let msg = [
          `${h(varName)} can't be serialized and, therefore, can't be passed to the client side.`,
          `Make sure ${h(varName)} is serializable, or remove ${h(JSON.stringify(prop))} from ${h("passToClient")}.`
        ].join(" ");
        if ((0, import_stringify.isJsonSerializerError)(err2)) {
          msg = `${msg} Serialization error: ${err2.messageCore}.`;
        } else {
          console.warn("Serialization error:");
          console.warn(err2);
          msg = `${msg} The serialization failed because of the error printed above.`;
        }
        assertWarning2(false, msg, { onlyOnce: false });
        hasWarned = true;
      }
    });
    assert(hasWarned);
    propsNonSerializable.forEach((prop) => {
      pageContextClient[getPropKeys(prop)[0]] = NOT_SERIALIZABLE;
    });
    try {
      pageContextSerialized = serialize(pageContextClient);
    } catch (err2) {
      assert(false);
    }
  }
  return pageContextSerialized;
}
function serialize(value, varName) {
  return (0, import_stringify.stringify)(value, { forbidReactElements: true, valueName: varName });
}
function getPassToClient(pageContext) {
  let passToClient = [...pageContext._passToClient, ...PASS_TO_CLIENT];
  if (isErrorPage(pageContext.pageId, pageContext._pageConfigs)) {
    assert(hasProp(pageContext, "is404", "boolean"));
    addIs404ToPageProps(pageContext);
    passToClient.push(...PASS_TO_CLIENT_ERROR_PAGE);
  }
  passToClient = unique(passToClient);
  return passToClient;
}
function serializePageContextAbort(pageContext) {
  assert(pageContext._urlRedirect || pageContext._urlRewrite || pageContext.abortStatusCode);
  assert(pageContext._abortCall);
  assert(pageContext._abortCaller);
  delete pageContext._abortCaller;
  const unknownProps = Object.keys(pageContext).filter((prop) => ![
    // prettier-ignore
    // biome-ignore format:
    "_abortCall",
    /* Not needed on the client-side
    '_abortCaller',
    */
    "_urlRedirect",
    "_urlRewrite",
    "abortStatusCode",
    "abortReason",
    "is404",
    "pageProps"
  ].includes(prop));
  if (!pageContext._isLegacyRenderErrorPage) {
    assert(unknownProps.length === 0);
  } else {
    assertWarning2(unknownProps.length === 0, [
      "The following pageContext values won't be available on the client-side:",
      unknownProps.map((p2) => `  pageContext[${JSON.stringify(p2)}]`),
      "Use `throw render()` instead of `throw RenderErrorPage()`"
    ].join("\n"), {
      onlyOnce: false
    });
  }
  return serialize(pageContext);
}
function applyPassToClient(passToClient, pageContext) {
  const pageContextClient = {};
  passToClient.forEach((prop) => {
    const res = getPropVal(pageContext, prop);
    if (!res)
      return;
    const { value } = res;
    setPropVal(pageContextClient, prop, value);
  });
  return pageContextClient;
}
function getPropVal(obj, prop) {
  const keys = getPropKeys(prop);
  let value = obj;
  for (const key of keys) {
    if (isObject(value) && key in value) {
      value = value[key];
    } else {
      return null;
    }
  }
  return { value };
}
function setPropVal(obj, prop, val) {
  const keys = getPropKeys(prop);
  let currentObj = obj;
  for (let i = 0; i <= keys.length - 2; i++) {
    const key = keys[i];
    if (!(key in currentObj)) {
      currentObj[key] = {};
    }
    if (!isObject(currentObj[key])) {
      return;
    }
    currentObj = currentObj[key];
  }
  const finalKey = keys[keys.length - 1];
  currentObj[finalKey] = val;
}
function getPropKeys(prop) {
  return prop.split(/(?<!\\)\./).map((key) => key.replace(/\\\./g, "."));
}
var import_stringify, PASS_TO_CLIENT, PASS_TO_CLIENT_ERROR_PAGE;
var init_serializePageContextClientSide = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/serializePageContextClientSide.js"() {
    import_stringify = __toESM(require_stringify(), 1);
    init_utils2();
    init_error_page();
    init_addIs404ToPageProps();
    init_picocolors();
    init_NOT_SERIALIZABLE();
    init_pageContextInitIsPassedToClient();
    init_isServerSideError();
    PASS_TO_CLIENT = [
      "abortReason",
      "_urlRewrite",
      "_urlRedirect",
      "abortStatusCode",
      "_abortCall",
      /* Not needed on the client-side
      '_abortCaller',
      */
      pageContextInitIsPassedToClient,
      "pageId",
      "routeParams",
      "data"
      // for data() hook
    ];
    PASS_TO_CLIENT_ERROR_PAGE = ["pageProps", "is404", isServerSideError];
  }
});

// node_modules/vike/dist/esm/node/runtime/html/injectAssets/sanitizeJson.js
function sanitizeJson(unsafe) {
  const safe = unsafe.replace(/</g, "\\u003c");
  return safe;
}
var init_sanitizeJson = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/injectAssets/sanitizeJson.js"() {
  }
});

// node_modules/vike/dist/esm/node/runtime/html/injectAssets/inferHtmlTags.js
function inferPreloadTag(pageAsset) {
  const { src, assetType, mediaType } = pageAsset;
  const rel = getRel(pageAsset);
  const attributes = [
    `rel="${rel}"`,
    `href="${src}"`,
    !assetType ? null : `as="${assetType}"`,
    !mediaType ? null : `type="${mediaType}"`,
    // `crossorigin` is needed for fonts, see https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload#cors-enabled_fetches
    !isCrossOrigin(pageAsset) ? null : "crossorigin"
  ].filter(Boolean).join(" ");
  return `<link ${attributes}>`;
}
function inferAssetTag(pageAsset) {
  const { src, assetType, mediaType } = pageAsset;
  if (assetType === "script") {
    assert(mediaType === "text/javascript");
    return `<script src="${src}" ${scriptAttrs}></script>`;
  }
  if (assetType === "style") {
    return `<link rel="stylesheet" type="text/css" href="${src}">`;
  }
  assert(false, { pageAsset });
}
function inferEarlyHintLink(pageAsset) {
  const { src, assetType } = pageAsset;
  const rel = getRel(pageAsset);
  return [`<${src}>`, `rel=${rel}`, !assetType ? null : `as=${assetType}`].filter(Boolean).join("; ");
}
function getRel({ assetType }) {
  if (assetType === "script") {
    return "modulepreload";
  }
  return "preload";
}
function isCrossOrigin({ src, assetType }) {
  return assetType === "font" || src.startsWith("http://") || src.startsWith("https://");
}
var scriptAttrs;
var init_inferHtmlTags = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/injectAssets/inferHtmlTags.js"() {
    init_utils2();
    scriptAttrs = 'type="module" async';
  }
});

// node_modules/vike/dist/esm/node/runtime/html/injectAssets/mergeScriptTags.js
function mergeScriptTags(scriptTagsHtml) {
  let scriptTag = "";
  const scripts = parseScripts(scriptTagsHtml);
  {
    const scriptsModule = scripts.filter(({ isModule }) => isModule);
    if (scriptsModule.length === 1) {
      scriptTag += scriptsModule[0].outerHtml;
    } else {
      const contents = [];
      scriptsModule.forEach(({ src, innerHtml }) => {
        const hasInnerHtml = !!innerHtml.trim();
        if (src) {
          assert(!hasInnerHtml);
          contents.push(`import ${JSON.stringify(src)};`);
        } else if (hasInnerHtml) {
          innerHtml = innerHtml.split("\n").filter(Boolean).join("\n");
          contents.push(innerHtml);
        }
      });
      if (contents.length > 0) {
        scriptTag += `<script ${scriptAttrs}>
${contents.join("\n")}
</script>`;
      }
    }
  }
  {
    const scriptsES5 = scripts.filter(({ isModule }) => !isModule);
    scriptsES5.forEach(({ outerHtml }) => {
      scriptTag += outerHtml;
    });
  }
  return scriptTag;
}
function parseScripts(htmlString) {
  const scripts = [];
  let match;
  while (match = scriptRE.exec(htmlString)) {
    const [outerHtml, openTag, innerHtml] = match;
    assert(outerHtml && openTag && innerHtml !== void 0);
    let isModule = false;
    {
      const typeMatch = openTag.match(typeRE);
      const type = typeMatch && (typeMatch[1] || typeMatch[2] || typeMatch[3]);
      isModule = type === "module";
    }
    let src = null;
    {
      const srcMatch = openTag.match(srcRE);
      src = srcMatch && (srcMatch[1] || srcMatch[2] || srcMatch[3]) || "";
    }
    scripts.push({ isModule, src, innerHtml, outerHtml });
  }
  return scripts;
}
var scriptRE, srcRE, typeRE;
var init_mergeScriptTags = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/injectAssets/mergeScriptTags.js"() {
    init_utils2();
    init_inferHtmlTags();
    scriptRE = /(<script\b(?:\s[^>]*>|>))(.*?)<\/script>/gims;
    srcRE = /\bsrc\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s'">]+))/im;
    typeRE = /\btype\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s'">]+))/im;
  }
});

// node_modules/vike/dist/esm/node/runtime/html/injectAssets/getHtmlTags.js
async function getHtmlTags(pageContext, streamFromReactStreamingPackage, injectFilter, pageAssets, viteDevScript, isStream2) {
  assert([true, false].includes(pageContext._isHtmlOnly));
  const isHtmlOnly = pageContext._isHtmlOnly;
  const { isProduction } = pageContext._globalContext;
  const injectScriptsAt = getInjectScriptsAt(pageContext.pageId, pageContext._pageConfigs);
  const injectFilterEntries = [];
  pageAssets.filter((asset) => {
    if (asset.isEntry && asset.assetType === "script") {
      return false;
    }
    return true;
  }).forEach((asset) => {
    const inject = (() => {
      if (!isProduction) {
        return "HTML_BEGIN";
      }
      if (asset.assetType === "style") {
        return "HTML_BEGIN";
      }
      if (asset.assetType === "font") {
        return !isFontFallback(asset, injectFilterEntries) ? "HTML_BEGIN" : false;
      }
      if (asset.assetType === "script") {
        if (isHtmlOnly)
          return false;
        return "HTML_END";
      }
      return false;
    })();
    const entry = {
      ...asset,
      inject,
      // @ts-ignore
      [stamp]: true
    };
    injectFilterEntries.push(entry);
  });
  assertInjectFilterEntries(injectFilterEntries);
  if (injectFilter && isProduction) {
    Object.seal(injectFilterEntries);
    Object.values(injectFilterEntries).forEach((entry) => freezePartial(entry, { inject: (val) => val === false || val === "HTML_BEGIN" || val === "HTML_END" }));
    const res = injectFilter(injectFilterEntries);
    assertUsage(res === void 0, `injectFilter() should return ${picocolors_default.cyan("undefined")}, see https://vike.dev/injectFilter`);
    assertInjectFilterUsage(injectFilterEntries);
  }
  const htmlTags = [];
  injectFilterEntries.filter((asset) => asset.assetType !== "script" && asset.inject).forEach((asset) => {
    if (!asset.inject)
      return;
    const htmlTag = asset.isEntry ? inferAssetTag(asset) : inferPreloadTag(asset);
    htmlTags.push({ htmlTag, position: asset.inject });
  });
  const positionJavaScriptDefault = "HTML_END";
  const positionJavaScriptEntry = (() => {
    if (injectScriptsAt !== null) {
      if (pageContext._pageContextPromise) {
        assertWarning2(injectScriptsAt === "HTML_END" || !isStream2, `You're setting injectScriptsAt to ${picocolors_default.code(JSON.stringify(injectScriptsAt))} while using HTML streaming with a pageContext promise (https://vike.dev/streaming#initial-data-after-stream-end) which is contradictory: the pageContext promise is skipped.`, { onlyOnce: true });
      }
      if (injectScriptsAt === "HTML_STREAM" && !isStream2) {
        return positionJavaScriptDefault;
      }
      return injectScriptsAt;
    }
    if (pageContext._pageContextPromise) {
      return positionJavaScriptDefault;
    }
    if (streamFromReactStreamingPackage && !streamFromReactStreamingPackage.hasStreamEnded()) {
      return "HTML_STREAM";
    }
    return positionJavaScriptDefault;
  })();
  if (pageContext._pageContextPromise && streamFromReactStreamingPackage) {
    assertWarning2(false, "We recommend against using HTML streaming and a pageContext promise (https://vike.dev/streaming#initial-data-after-stream-end) at the same time, because progressive hydration (https://vike.dev/streaming#progressive-rendering) won't work.", { onlyOnce: true });
  }
  if (!isHtmlOnly) {
    htmlTags.push({
      htmlTag: () => (
        // Needs to be called after resolvePageContextPromise()
        getPageContextJsonScriptTag(pageContext)
      ),
      position: positionJavaScriptEntry
    });
  }
  const scriptEntry = mergeScriptEntries(pageAssets, viteDevScript);
  if (scriptEntry) {
    htmlTags.push({
      htmlTag: scriptEntry,
      position: positionJavaScriptEntry
    });
  }
  injectFilterEntries.filter((asset) => asset.assetType === "script").forEach((asset) => {
    assert(!asset.isEntry);
    const htmlTag = inferPreloadTag(asset);
    if (!asset.inject)
      return;
    const position = asset.inject === "HTML_END" ? positionJavaScriptEntry : asset.inject;
    htmlTags.push({ htmlTag, position });
  });
  return htmlTags;
}
function mergeScriptEntries(pageAssets, viteDevScript) {
  const scriptEntries = pageAssets.filter((pageAsset) => pageAsset.isEntry && pageAsset.assetType === "script");
  const scriptTagsHtml = `${viteDevScript}${scriptEntries.map((asset) => inferAssetTag(asset)).join("")}`;
  const scriptTag = mergeScriptTags(scriptTagsHtml);
  return scriptTag;
}
function getPageContextJsonScriptTag(pageContext) {
  const pageContextSerialized = sanitizeJson(serializePageContextClientSide(pageContext));
  const htmlTag = `<script id="vike_pageContext" type="application/json">${pageContextSerialized}</script>`;
  pageContext._pageContextHtmlTag = htmlTag;
  return htmlTag;
}
function assertInjectFilterEntries(injectFilterEntries) {
  try {
    checkForWrongUsage(injectFilterEntries);
  } catch (err) {
    if (err?.message.includes("[Wrong Usage]")) {
      assert(false);
    }
    throw err;
  }
}
function assertInjectFilterUsage(injectFilterEntries) {
  checkForWrongUsage(injectFilterEntries);
  checkForWarnings(injectFilterEntries);
}
function checkForWrongUsage(injectFilterEntries) {
  injectFilterEntries.forEach((entry, i) => {
    assertUsage(isObject(entry), `[injectFilter()] Entry ${i} isn't an object`);
    assertUsage(typeof entry.src === "string", `[injectFilter()] Entry ${i} is missing property ${picocolors_default.cyan("src")}`);
    assertUsage(entry[stamp] === true, `[injectFilter()] Entry ${i} (${entry.src}) isn't the original object, see https://vike.dev/injectFilter`);
    assert([false, "HTML_BEGIN", "HTML_END"].includes(entry.inject));
    assert(entry.assetType === null || typeof entry.assetType === "string");
    assert(entry.mediaType === null || typeof entry.mediaType === "string");
    assert(typeof entry.isEntry === "boolean");
    assert(Object.keys(entry).length === 6);
  });
}
function checkForWarnings(injectFilterEntries) {
  injectFilterEntries.forEach((a) => {
    if (a.assetType === "style" && a.isEntry) {
      assertWarning2(a.inject, `[injectFilter()] We recommend against not injecting ${a.src}`, {
        onlyOnce: true
      });
    }
    if (a.assetType === "script") {
      assertWarning2(a.inject, `[injectFilter()] We recommend against not preloading JavaScript (${a.src})`, {
        onlyOnce: true
      });
    }
  });
}
function getInjectScriptsAt(pageId, pageConfigs) {
  if (pageConfigs.length === 0)
    return null;
  const pageConfig = getPageConfig(pageId, pageConfigs);
  const configValue = getConfigValueRuntime(pageConfig, "injectScriptsAt");
  if (!configValue)
    return null;
  const injectScriptsAt = configValue.value;
  assert(configValue.definedAtData);
  const configDefinedAt = getConfigDefinedAt("Config", "injectScriptsAt", configValue.definedAtData);
  assertUsage(injectScriptsAt === null || injectScriptsAt === "HTML_BEGIN" || injectScriptsAt === "HTML_END" || injectScriptsAt === "HTML_STREAM", `${configDefinedAt} has an invalid value`);
  return injectScriptsAt;
}
var stamp;
var init_getHtmlTags = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/injectAssets/getHtmlTags.js"() {
    init_isFontFallback();
    init_utils2();
    init_serializePageContextClientSide();
    init_sanitizeJson();
    init_inferHtmlTags();
    init_mergeScriptTags();
    init_helpers();
    init_getConfigValueRuntime();
    init_picocolors();
    init_getConfigDefinedAt();
    stamp = "__injectFilterEntry";
  }
});

// node_modules/vike/dist/esm/node/runtime/html/injectAssets/getViteDevScript.js
async function getViteDevScript(pageContext) {
  const globalContext = pageContext._globalContext;
  if (globalContext.isProduction) {
    return "";
  }
  const { viteDevServer } = globalContext;
  const fakeHtmlBegin = "<html> <head>";
  const fakeHtmlEnd = "</head><body></body></html>";
  let fakeHtml = fakeHtmlBegin + fakeHtmlEnd;
  fakeHtml = await viteDevServer.transformIndexHtml("/", fakeHtml);
  assertUsage(!fakeHtml.includes("vite-plugin-pwa"), `The HTML transformer of ${picocolors_default.cyan("vite-plugin-pwa")} cannot be applied, see workaround at https://github.com/vikejs/vike/issues/388#issuecomment-1199280084`);
  assertUsage(!fakeHtml.startsWith(fakeHtmlBegin.replace(" ", "")), `Vite plugins that minify the HTML cannot be applied, see https://github.com/vikejs/vike/issues/224`);
  assertUsage(fakeHtml.startsWith(fakeHtmlBegin) && fakeHtml.endsWith(fakeHtmlEnd), `You are using a Vite Plugin that transforms the HTML in a way that conflicts with Vike. ${reachOutCTA}`);
  const viteInjection = fakeHtml.slice(fakeHtmlBegin.length, -1 * fakeHtmlEnd.length);
  assert(viteInjection.includes("script"));
  assertWarning2(!viteInjection.includes("import("), `Unexpected Vite injected HMR code. ${reachOutCTA}`, {
    onlyOnce: true
  });
  const viteDevScript = viteInjection;
  return viteDevScript;
}
var reachOutCTA;
var init_getViteDevScript = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/injectAssets/getViteDevScript.js"() {
    init_utils2();
    init_picocolors();
    reachOutCTA = "Create a new GitHub issue to discuss a solution.";
  }
});

// node_modules/vike/dist/esm/node/runtime/html/injectAssets.js
async function injectHtmlTagsToString(htmlParts, pageContext, injectFilter) {
  const pageAssets = await pageContext.__getPageAssets();
  const viteDevScript = await getViteDevScript(pageContext);
  const htmlTags = await getHtmlTags(pageContext, null, injectFilter, pageAssets, viteDevScript, false);
  let htmlString = htmlPartsToString(htmlParts, pageAssets);
  htmlString = injectToHtmlBegin(htmlString, htmlTags);
  htmlString = injectToHtmlEnd(htmlString, htmlTags);
  assert(htmlTags.filter((snippet) => snippet.position === "HTML_STREAM").length === 0);
  return htmlString;
}
function injectHtmlTagsToStream(pageContext, streamFromReactStreamingPackage, injectFilter) {
  let htmlTags;
  return {
    injectAtStreamBegin,
    injectAtStreamAfterFirstChunk,
    injectAtStreamEnd
  };
  async function injectAtStreamBegin(htmlPartsBegin) {
    const pageAssets = await pageContext.__getPageAssets();
    const viteDevScript = await getViteDevScript(pageContext);
    htmlTags = await getHtmlTags(pageContext, streamFromReactStreamingPackage, injectFilter, pageAssets, viteDevScript, true);
    let htmlBegin = htmlPartsToString(htmlPartsBegin, pageAssets);
    htmlBegin = injectToHtmlBegin(htmlBegin, htmlTags);
    if (streamFromReactStreamingPackage) {
      injectHtmlTagsUsingStream(htmlTags, streamFromReactStreamingPackage);
    }
    return htmlBegin;
  }
  function injectAtStreamAfterFirstChunk() {
    if (streamFromReactStreamingPackage)
      return null;
    assert(htmlTags);
    const tags = htmlTags.filter((h) => h.position === "HTML_STREAM");
    if (tags.length === 0)
      return null;
    const htmlFragment = joinHtmlTags(tags);
    return htmlFragment;
  }
  async function injectAtStreamEnd(htmlPartsEnd) {
    assert(htmlTags);
    await resolvePageContextPromise(pageContext);
    const pageAssets = await pageContext.__getPageAssets();
    let htmlEnd = htmlPartsToString(htmlPartsEnd, pageAssets);
    htmlEnd = injectToHtmlEnd(htmlEnd, htmlTags);
    return htmlEnd;
  }
}
function injectToHtmlBegin(htmlBegin, htmlTags) {
  htmlBegin = createHtmlHeadIfMissing(htmlBegin);
  htmlBegin = injectHtmlTags(htmlBegin, htmlTags, "HTML_BEGIN");
  return htmlBegin;
}
function injectToHtmlEnd(htmlEnd, htmlTags) {
  htmlEnd = injectHtmlTags(htmlEnd, htmlTags, "HTML_END");
  return htmlEnd;
}
async function resolvePageContextPromise(pageContext) {
  const pageContextPromise = pageContext._pageContextPromise;
  if (!pageContextPromise) {
    return;
  }
  let pageContextProvidedByUser;
  if (isCallable(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise();
  } else if (isPromise(pageContextPromise)) {
    pageContextProvidedByUser = await pageContextPromise;
  } else {
    assert(false);
  }
  assertPageContextProvidedByUser(pageContextProvidedByUser, pageContext._renderHook);
  Object.assign(pageContext, pageContextProvidedByUser);
}
function htmlPartsToString(htmlParts, pageAssets) {
  let htmlString = "";
  htmlParts.forEach((p2) => {
    htmlString += typeof p2 === "string" ? p2 : p2(pageAssets);
  });
  return htmlString;
}
var init_injectAssets = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/injectAssets.js"() {
    init_utils2();
    init_assertPageContextProvidedByUser();
    init_injectHtmlTags();
    init_getHtmlTags();
    init_getViteDevScript();
  }
});

// node_modules/vike/dist/esm/node/runtime/html/stream/react-streaming.js
function streamFromReactStreamingPackageToString(stream) {
  if (stream.pipe) {
    return streamPipeNodeToString(stream.pipe);
  }
  if (stream.readable) {
    return streamReadableWebToString(stream.readable);
  }
  assert(false);
}
function isStreamFromReactStreamingPackage(thing) {
  if (hasProp(thing, "injectToStream", "function")) {
    assertUsage(hasProp(thing, "hasStreamEnded", "function"), isVikeReactApp() ? (
      //
      "Update vike-react to its latest version"
    ) : "Update react-streaming to its latest version");
    return true;
  }
  return false;
}
function getStreamOfReactStreamingPackage(stream) {
  if (stream.pipe) {
    return { __streamPipeNode: stream.pipe };
  }
  if (stream.readable) {
    return stream.readable;
  }
  assert(false);
}
var init_react_streaming = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/stream/react-streaming.js"() {
    init_utils2();
    init_stream();
  }
});

// node_modules/vike/dist/esm/node/runtime/html/stream.js
function isStreamReadableWeb(thing) {
  return typeof ReadableStream !== "undefined" && thing instanceof ReadableStream;
}
function isStreamWritableWeb(thing) {
  return typeof WritableStream !== "undefined" && thing instanceof WritableStream;
}
function isStreamReadableNode(thing) {
  if (isStreamReadableWeb(thing)) {
    return false;
  }
  return hasProp(thing, "read", "function");
}
function isStreamWritableNode(thing) {
  if (isStreamWritableWeb(thing)) {
    return false;
  }
  return hasProp(thing, "write", "function");
}
async function streamReadableNodeToString(readableNode) {
  const chunks = [];
  return new Promise((resolve3, reject) => {
    readableNode.on("data", (chunk2) => chunks.push(Buffer.from(chunk2)));
    readableNode.on("error", (err) => reject(err));
    readableNode.on("end", () => resolve3(Buffer.concat(chunks).toString("utf8")));
  });
}
async function streamReadableWebToString(readableWeb) {
  const reader = readableWeb.getReader();
  const { decode, getClosingChunk } = decodeChunks();
  let str = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done)
      break;
    str += decode(value);
  }
  str += getClosingChunk();
  return str;
}
async function stringToStreamReadableNode(str) {
  const { Readable: Readable3 } = await loadStreamNodeModule();
  return Readable3.from(str);
}
function stringToStreamReadableWeb(str) {
  assertReadableStreamConstructor();
  const readableStream = new ReadableStream({
    start(controller) {
      controller.enqueue(encodeForWebStream(str));
      controller.close();
    }
  });
  return readableStream;
}
function stringToStreamPipeNode(str) {
  return (writable) => {
    writable.write(str);
    writable.end();
  };
}
function stringToStreamPipeWeb(str) {
  return (writable) => {
    const writer = writable.getWriter();
    writer.write(encodeForWebStream(str));
    writer.close();
  };
}
async function streamPipeNodeToString(streamPipeNode) {
  let str = "";
  let resolve3;
  let reject;
  const promise = new Promise((resolve_, reject_) => {
    resolve3 = () => resolve_(str);
    reject = reject_;
  });
  const { Writable } = await loadStreamNodeModule();
  const writable = new Writable({
    write(chunk2, _encoding, callback) {
      const s = chunk2.toString();
      assert(typeof s === "string");
      str += s;
      callback();
    },
    final(callback) {
      resolve3();
      callback();
    },
    destroy(err) {
      if (err) {
        reject(err);
      } else {
        resolve3();
      }
    }
  });
  streamPipeNode(writable);
  return promise;
}
function streamPipeWebToString(streamPipeWeb) {
  const { decode, getClosingChunk } = decodeChunks();
  let str = "";
  let resolve3;
  const promise = new Promise((r) => resolve3 = r);
  const writable = new WritableStream({
    write(chunk2) {
      str += decode(chunk2);
    },
    close() {
      str += getClosingChunk();
      resolve3(str);
    }
  });
  streamPipeWeb(writable);
  return promise;
}
async function getStreamReadableNode(htmlRender) {
  if (typeof htmlRender === "string") {
    return stringToStreamReadableNode(htmlRender);
  }
  if (isStreamReadableNode(htmlRender)) {
    return htmlRender;
  }
  return null;
}
function getStreamReadableWeb(htmlRender) {
  if (typeof htmlRender === "string") {
    return stringToStreamReadableWeb(htmlRender);
  }
  if (isStreamReadableWeb(htmlRender)) {
    return htmlRender;
  }
  if (isStreamPipeWeb(htmlRender)) {
    const streamPipeWeb = getStreamPipeWeb(htmlRender);
    assert(streamPipeWeb);
    const { readable, writable } = new TransformStream();
    streamPipeWeb(writable);
    return readable;
  }
  return null;
}
function pipeToStreamWritableWeb(htmlRender, writable) {
  if (typeof htmlRender === "string") {
    const streamPipeWeb = stringToStreamPipeWeb(htmlRender);
    streamPipeWeb(writable);
    return true;
  }
  if (isStreamReadableWeb(htmlRender)) {
    htmlRender.pipeTo(writable);
    return true;
  }
  if (isStreamPipeWeb(htmlRender)) {
    const streamPipeWeb = getStreamPipeWeb(htmlRender);
    assert(streamPipeWeb);
    streamPipeWeb(writable);
    return true;
  }
  if (isStreamReadableNode(htmlRender) || isStreamPipeNode(htmlRender)) {
    return false;
  }
  checkType(htmlRender);
  assert(false);
}
function pipeToStreamWritableNode(htmlRender, writable) {
  if (typeof htmlRender === "string") {
    const streamPipeNode = stringToStreamPipeNode(htmlRender);
    streamPipeNode(writable);
    return true;
  }
  if (isStreamReadableNode(htmlRender)) {
    htmlRender.pipe(writable);
    return true;
  }
  if (isStreamPipeNode(htmlRender)) {
    const streamPipeNode = getStreamPipeNode(htmlRender);
    assert(streamPipeNode);
    streamPipeNode(writable);
    return true;
  }
  if (isStreamReadableWeb(htmlRender) || isStreamPipeWeb(htmlRender)) {
    return false;
  }
  checkType(htmlRender);
  assert(false);
}
async function processStream(streamOriginal, { injectStringAtBegin, injectStringAfterFirstChunk, injectStringAtEnd, onErrorWhileStreaming, enableEagerStreaming }) {
  const buffer = [];
  let streamOriginalHasStartedEmitting = false;
  let streamOriginalEnded = false;
  let streamClosed = false;
  let onEndWasCalled = false;
  let isReadyToWrite = false;
  let wrapperCreated = false;
  let shouldFlushStream = false;
  let resolve3;
  let reject;
  let promiseHasResolved = false;
  let injectStringAfterFirstChunk_done = false;
  const streamWrapperPromise = new Promise((resolve_, reject_) => {
    resolve3 = (streamWrapper2) => {
      promiseHasResolved = true;
      resolve_(streamWrapper2);
    };
    reject = (err) => {
      promiseHasResolved = true;
      reject_(err);
    };
  });
  let resolveReadyToWrite;
  const promiseReadyToWrite = new Promise((r) => resolveReadyToWrite = r);
  if (injectStringAtBegin) {
    const injectedChunk = await injectStringAtBegin();
    writeStream(injectedChunk);
    flushStream();
  }
  const onStreamDataOrEnd = (cb) => {
    assert(streamOriginalEnded === false);
    streamOriginalHasStartedEmitting = true;
    cb();
    if (wrapperCreated)
      resolvePromise();
  };
  const { streamWrapper, streamWrapperOperations } = await createStreamWrapper({
    streamOriginal,
    onReadyToWrite() {
      debug4("stream begin");
      isReadyToWrite = true;
      flushBuffer();
      resolveReadyToWrite();
    },
    onError(err) {
      if (!promiseHasResolved) {
        reject(err);
      } else {
        onErrorWhileStreaming(err);
      }
    },
    onData(chunk2) {
      onStreamDataOrEnd(() => {
        writeStream(chunk2);
        if (injectStringAfterFirstChunk && !injectStringAfterFirstChunk_done) {
          const injectedChunk = injectStringAfterFirstChunk();
          if (injectedChunk !== null)
            writeStream(injectedChunk);
          injectStringAfterFirstChunk_done = true;
        }
      });
    },
    async onEnd(isCancel) {
      try {
        assert(!onEndWasCalled);
        onEndWasCalled = true;
        debug4("stream end");
        onStreamDataOrEnd(() => {
          streamOriginalEnded = true;
        });
        if (injectStringAtEnd) {
          const injectedChunk = await injectStringAtEnd();
          writeStream(injectedChunk);
        }
        await promiseReadyToWrite;
        assert(isReady());
        flushBuffer();
        streamClosed = true;
        debug4("stream ended");
      } catch (err) {
        if (!isBug(err)) {
          console.error(err);
          assert(false);
        }
        throw err;
      }
    },
    onFlush() {
      flushStream();
    }
  });
  wrapperCreated = true;
  flushBuffer();
  if (!delayStreamStart())
    resolvePromise();
  return streamWrapperPromise;
  function writeStream(chunk2) {
    buffer.push(chunk2);
    flushBuffer();
  }
  function flushBuffer() {
    if (!isReady())
      return;
    assert(!streamClosed);
    buffer.forEach((chunk2) => {
      streamWrapperOperations.writeChunk(chunk2);
    });
    buffer.length = 0;
    if (shouldFlushStream)
      flushStream();
  }
  function resolvePromise() {
    assert(!delayStreamStart());
    assert(wrapperCreated);
    debug4("stream promise resolved");
    resolve3(streamWrapper);
  }
  function flushStream() {
    if (!isReady()) {
      shouldFlushStream = true;
      return;
    }
    if (streamWrapperOperations.flushStream === null)
      return;
    streamWrapperOperations.flushStream();
    shouldFlushStream = false;
    debug4("stream flushed");
  }
  function isReady() {
    return isReadyToWrite && // We can't use streamWrapperOperations.writeChunk() if it isn't defined yet
    wrapperCreated && // See comment below
    !delayStreamStart();
  }
  function delayStreamStart() {
    return !enableEagerStreaming && !streamOriginalHasStartedEmitting;
  }
}
async function createStreamWrapper({ streamOriginal, onError, onData, onEnd, onFlush, onReadyToWrite }) {
  if (isStreamFromReactStreamingPackage(streamOriginal)) {
    debug4(`onRenderHtml() hook returned ${picocolors_default.cyan("react-streaming")} result`);
    const stream = getStreamOfReactStreamingPackage(streamOriginal);
    streamOriginal = stream;
  }
  if (isStreamPipeNode(streamOriginal)) {
    debug4("onRenderHtml() hook returned Node.js Stream Pipe");
    let writableOriginal = null;
    const pipeProxy = (writable_) => {
      writableOriginal = writable_;
      debug4("original Node.js Writable received");
      onReadyToWrite();
      if (hasEnded) {
        writableOriginal.end();
      }
    };
    stampPipe(pipeProxy, "node-stream");
    const writeChunk = (chunk2) => {
      assert(writableOriginal);
      writableOriginal.write(chunk2);
      debugWithChunk("data written (Node.js Writable)", chunk2);
    };
    const flushStream = () => {
      assert(writableOriginal);
      if (typeof writableOriginal.flush === "function") {
        writableOriginal.flush();
        debug4("stream flush() performed (Node.js Writable)");
      }
    };
    let hasEnded = false;
    const endStream = () => {
      hasEnded = true;
      if (writableOriginal) {
        writableOriginal.end();
      }
    };
    const { Writable } = await loadStreamNodeModule();
    const writableProxy = new Writable({
      async write(chunk2, _encoding, callback) {
        onData(chunk2);
        callback();
      },
      async destroy(err, callback) {
        if (err) {
          onError(err);
        } else {
          await onEnd();
        }
        callback(err);
        endStream();
      }
    });
    objectAssign(writableProxy, {
      flush: () => {
        onFlush();
      }
    });
    assert(typeof writableProxy.flush === "function");
    const pipeOriginal = getStreamPipeNode(streamOriginal);
    pipeOriginal(writableProxy);
    return { streamWrapper: pipeProxy, streamWrapperOperations: { writeChunk, flushStream } };
  }
  if (isStreamPipeWeb(streamOriginal)) {
    debug4("onRenderHtml() hook returned Web Stream Pipe");
    let writerOriginal = null;
    const pipeProxy = (writableOriginal) => {
      writerOriginal = writableOriginal.getWriter();
      debug4("original Web Writable received");
      (async () => {
        try {
          await writerOriginal.ready;
        } catch (e) {
        }
        onReadyToWrite();
        if (hasEnded) {
          writerOriginal.close();
        }
      })();
    };
    stampPipe(pipeProxy, "web-stream");
    const writeChunk = (chunk2) => {
      assert(writerOriginal);
      writerOriginal.write(encodeForWebStream(chunk2));
      debugWithChunk("data written (Web Writable)", chunk2);
    };
    const flushStream = null;
    let hasEnded = false;
    const endStream = () => {
      hasEnded = true;
      if (writerOriginal) {
        writerOriginal.close();
      }
    };
    let writableProxy;
    if (typeof ReadableStream !== "function") {
      writableProxy = new WritableStream({
        write(chunk2) {
          onData(chunk2);
        },
        async close() {
          await onEnd();
          endStream();
        },
        abort(err) {
          onError(err);
          endStream();
        }
      });
    } else {
      const { readable, writable } = new TransformStream();
      writableProxy = writable;
      handleReadableWeb(readable, {
        onData,
        onError(err) {
          onError(err);
          endStream();
        },
        async onEnd() {
          await onEnd();
          endStream();
        }
      });
    }
    const pipeOriginal = getStreamPipeWeb(streamOriginal);
    pipeOriginal(writableProxy);
    return { streamWrapper: pipeProxy, streamWrapperOperations: { writeChunk, flushStream } };
  }
  if (isStreamReadableWeb(streamOriginal)) {
    debug4("onRenderHtml() hook returned Web Readable");
    const readableOriginal = streamOriginal;
    let controllerProxyIsClosed = false;
    let isClosed = false;
    let isCancel = false;
    const closeStream = async () => {
      if (isClosed)
        return;
      isClosed = true;
      await onEnd(isCancel);
      controllerProxy.close();
      controllerProxyIsClosed = true;
    };
    let controllerProxy;
    assertReadableStreamConstructor();
    const readableProxy = new ReadableStream({
      start(controller) {
        controllerProxy = controller;
        onReadyToWrite();
        handleReadableWeb(readableOriginal, {
          onData,
          onError(err) {
            onError(err);
            controllerProxy.close();
          },
          async onEnd() {
            await closeStream();
          }
        });
      },
      async cancel(...args) {
        isCancel = true;
        await readableOriginal.cancel(...args);
        await closeStream();
      }
    });
    const writeChunk = (chunk2) => {
      if (
        // If readableOriginal doesn't implement readableOriginal.cancel() then it may still emit data after we close the stream. We therefore need to check whether we closed `controllerProxy`.
        !controllerProxyIsClosed
      ) {
        controllerProxy.enqueue(encodeForWebStream(chunk2));
        debugWithChunk("data written (Web Readable)", chunk2);
      } else {
        debugWithChunk("data emitted but not written (Web Readable)", chunk2);
      }
    };
    const flushStream = null;
    return {
      streamWrapper: readableProxy,
      streamWrapperOperations: { writeChunk, flushStream }
    };
  }
  if (isStreamReadableNode(streamOriginal)) {
    debug4("onRenderHtml() hook returned Node.js Readable");
    const readableOriginal = streamOriginal;
    const { Readable: Readable3 } = await loadStreamNodeModule();
    if (readableOriginal._read === Readable3.prototype._read) {
      readableOriginal._read = function() {
      };
    }
    const writeChunk = (chunk2) => {
      readableProxy.push(chunk2);
      debugWithChunk("data written (Node.js Readable)", chunk2);
    };
    const flushStream = null;
    const closeProxy = () => {
      readableProxy.push(null);
    };
    const readableProxy = new Readable3({ read() {
    } });
    onReadyToWrite();
    readableOriginal.on("data", (chunk2) => {
      onData(chunk2);
    });
    readableOriginal.on("error", (err) => {
      onError(err);
      closeProxy();
    });
    readableOriginal.on("end", async () => {
      await onEnd();
      closeProxy();
    });
    return {
      streamWrapper: readableProxy,
      streamWrapperOperations: { writeChunk, flushStream }
    };
  }
  assert(false);
}
async function handleReadableWeb(readable, { onData, onError, onEnd }) {
  const reader = readable.getReader();
  while (true) {
    let result;
    try {
      result = await reader.read();
    } catch (err) {
      onError(err);
      return;
    }
    const { value, done } = result;
    if (done) {
      break;
    }
    onData(value);
  }
  await onEnd();
}
function isStream(something) {
  if (isStreamReadableWeb(something) || isStreamReadableNode(something) || isStreamPipeNode(something) || isStreamPipeWeb(something) || isStreamFromReactStreamingPackage(something)) {
    checkType(something);
    return true;
  }
  return false;
}
function getStreamPipeWeb(thing) {
  if (!isStreamPipeWeb(thing)) {
    return null;
  }
  if (isObject(thing)) {
    assert(__streamPipeWeb && thing);
    return thing[__streamPipeWeb];
  } else {
    assert(isCallable(thing) && "isWebStreamPipe" in thing);
    return thing;
  }
}
function isStreamPipeWeb(thing) {
  if (isObject(thing) && __streamPipeWeb in thing) {
    return true;
  }
  if (isCallable(thing) && "isWebStreamPipe" in thing) {
    return true;
  }
  return false;
}
function getStreamPipeNode(thing) {
  if (!isStreamPipeNode(thing)) {
    return null;
  }
  if (isObject(thing)) {
    assert(__streamPipeNode in thing);
    return thing[__streamPipeNode];
  } else {
    assert(isCallable(thing) && "isNodeStreamPipe" in thing);
    return thing;
  }
}
function isStreamPipeNode(thing) {
  if (isObject(thing) && __streamPipeNode in thing) {
    return true;
  }
  if (isCallable(thing) && "isNodeStreamPipe" in thing) {
    return true;
  }
  return false;
}
function stampPipe(pipe2, pipeType) {
  assertUsage(pipeType, `stampPipe(pipe, pipeType): argument ${picocolors_default.cyan("pipeType")} is missing.)`, {
    showStackTrace: true
  });
  assertUsage(["web-stream", "node-stream"].includes(pipeType), `stampPipe(pipe, pipeType): argument ${picocolors_default.cyan("pipeType")} should be either ${picocolors_default.cyan("'web-stream'")} or ${picocolors_default.cyan("'node-stream'")}.`, { showStackTrace: true });
  if (pipeType === "node-stream") {
    Object.assign(pipe2, { isNodeStreamPipe: true });
  } else {
    Object.assign(pipe2, { isWebStreamPipe: true });
  }
}
async function streamToString(stream) {
  if (isStreamReadableWeb(stream)) {
    return await streamReadableWebToString(stream);
  }
  if (isStreamReadableNode(stream)) {
    return await streamReadableNodeToString(stream);
  }
  if (isStreamPipeNode(stream)) {
    return await streamPipeNodeToString(getStreamPipeNode(stream));
  }
  if (isStreamPipeWeb(stream)) {
    return await streamPipeWebToString(getStreamPipeWeb(stream));
  }
  if (isStreamFromReactStreamingPackage(stream)) {
    return await streamFromReactStreamingPackageToString(stream);
  }
  assert(false);
}
function assertReadableStreamConstructor() {
  assertUsage(
    typeof ReadableStream === "function",
    // Error message copied from vue's renderToWebStream() implementation
    "ReadableStream constructor isn't available in the global scope. If the target environment does support web streams, consider using pipeToWebWritable() with an existing WritableStream instance instead."
  );
}
function encodeForWebStream(thing) {
  if (!encoder) {
    encoder = new TextEncoder();
  }
  if (typeof thing === "string") {
    return encoder.encode(thing);
  }
  return thing;
}
async function loadStreamNodeModule() {
  const streamModule = (await import_("stream")).default;
  const { Readable: Readable3, Writable } = streamModule;
  return { Readable: Readable3, Writable };
}
function getStreamName(kind, type) {
  let typeName = capitalizeFirstLetter(type);
  if (typeName === "Node") {
    typeName = "Node.js";
  }
  const kindName = capitalizeFirstLetter(kind);
  if (kind !== "pipe") {
    return `a ${kindName} ${typeName} Stream`;
  }
  if (kind === "pipe") {
    return `a ${typeName} Stream Pipe`;
  }
  assert(false);
}
function inferStreamName(stream) {
  if (isStreamReadableWeb(stream)) {
    return getStreamName("readable", "web");
  }
  if (isStreamReadableNode(stream)) {
    return getStreamName("readable", "node");
  }
  if (isStreamPipeNode(stream)) {
    return getStreamName("pipe", "node");
  }
  if (isStreamPipeWeb(stream)) {
    return getStreamName("pipe", "web");
  }
  assert(false);
}
function decodeChunks() {
  const decoder = new TextDecoder();
  const decode = (chunk2) => {
    if (typeof chunk2 === "string") {
      return chunk2;
    } else if (chunk2 instanceof Uint8Array) {
      return decoder.decode(chunk2, { stream: true });
    } else {
      assert(false);
    }
  };
  const getClosingChunk = () => {
    return decoder.decode();
  };
  return { decode, getClosingChunk };
}
function debugWithChunk(msg, chunk2) {
  if (!debug4.isActivated)
    return;
  let chunkStr;
  try {
    chunkStr = new TextDecoder().decode(chunk2);
  } catch (err) {
    chunkStr = String(chunk2);
  }
  debug4(msg, chunkStr);
}
var debug4, __streamPipeWeb, __streamPipeNode, encoder;
var init_stream = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/stream.js"() {
    init_utils2();
    init_react_streaming();
    init_esm();
    init_picocolors();
    debug4 = createDebugger("vike:stream");
    __streamPipeWeb = "__streamPipeWeb";
    __streamPipeNode = "__streamPipeNode";
  }
});

// node_modules/vike/dist/esm/node/runtime/html/renderHtml.js
function isDocumentHtml(something) {
  if (isTemplateWrapped(something) || isEscapedString(something) || isStream(something)) {
    checkType(something);
    return true;
  }
  return false;
}
async function renderDocumentHtml(documentHtml, pageContext, onErrorWhileStreaming, injectFilter) {
  if (isEscapedString(documentHtml)) {
    objectAssign(pageContext, { _isStream: false });
    let htmlString = getEscapedString(documentHtml);
    htmlString = await injectHtmlTagsToString([htmlString], pageContext, injectFilter);
    return htmlString;
  }
  if (isStream(documentHtml)) {
    objectAssign(pageContext, { _isStream: true });
    const stream = documentHtml;
    const streamWrapper = await renderHtmlStream(stream, null, pageContext, onErrorWhileStreaming, injectFilter);
    return streamWrapper;
  }
  if (isTemplateWrapped(documentHtml)) {
    const templateContent = documentHtml._template;
    const render = renderTemplate(templateContent, pageContext);
    if (!("htmlStream" in render)) {
      objectAssign(pageContext, { _isStream: false });
      const { htmlPartsAll } = render;
      const htmlString = await injectHtmlTagsToString(htmlPartsAll, pageContext, injectFilter);
      return htmlString;
    } else {
      objectAssign(pageContext, { _isStream: true });
      const { htmlStream } = render;
      const streamWrapper = await renderHtmlStream(htmlStream, {
        htmlPartsBegin: render.htmlPartsBegin,
        htmlPartsEnd: render.htmlPartsEnd
      }, pageContext, onErrorWhileStreaming, injectFilter);
      return streamWrapper;
    }
  }
  checkType(documentHtml);
  assert(false);
}
async function renderHtmlStream(streamOriginal, injectString, pageContext, onErrorWhileStreaming, injectFilter) {
  const processStreamOptions = {
    onErrorWhileStreaming,
    enableEagerStreaming: pageContext.enableEagerStreaming
  };
  if (injectString) {
    let streamFromReactStreamingPackage = null;
    if (isStreamFromReactStreamingPackage(streamOriginal) && !streamOriginal.disabled) {
      streamFromReactStreamingPackage = streamOriginal;
    }
    const { injectAtStreamBegin, injectAtStreamAfterFirstChunk, injectAtStreamEnd } = injectHtmlTagsToStream(pageContext, streamFromReactStreamingPackage, injectFilter);
    processStreamOptions.injectStringAtBegin = async () => {
      return await injectAtStreamBegin(injectString.htmlPartsBegin);
    };
    processStreamOptions.injectStringAtEnd = async () => {
      return await injectAtStreamEnd(injectString.htmlPartsEnd);
    };
    processStreamOptions.injectStringAfterFirstChunk = () => {
      return injectAtStreamAfterFirstChunk();
    };
  }
  const streamWrapper = await processStream(streamOriginal, processStreamOptions);
  return streamWrapper;
}
function isTemplateWrapped(something) {
  return hasProp(something, "_template");
}
function isEscapedString(something) {
  const result = hasProp(something, "_escaped");
  if (result) {
    assert(hasProp(something, "_escaped", "string"));
    checkType(something);
  }
  return result;
}
function getEscapedString(escapedString) {
  let htmlString;
  assert(hasProp(escapedString, "_escaped"));
  htmlString = escapedString._escaped;
  assert(typeof htmlString === "string");
  return htmlString;
}
function dangerouslySkipEscape(alreadyEscapedString) {
  return _dangerouslySkipEscape(alreadyEscapedString);
}
function _dangerouslySkipEscape(arg) {
  if (hasProp(arg, "_escaped")) {
    assert(isEscapedString(arg));
    return arg;
  }
  assertUsage(!isPromise(arg), `[dangerouslySkipEscape(${picocolors_default.cyan("str")})] Argument ${picocolors_default.cyan("str")} is a promise. It should be a string instead (or a stream). Make sure to ${picocolors_default.cyan("await str")}.`, { showStackTrace: true });
  if (typeof arg === "string") {
    return { _escaped: arg };
  }
  assertWarning2(false, `[dangerouslySkipEscape(${picocolors_default.cyan("str")})] Argument ${picocolors_default.cyan("str")} should be a string but we got ${picocolors_default.cyan(`typeof str === "${typeof arg}"`)}.`, {
    onlyOnce: false,
    showStackTrace: true
  });
  return { _escaped: String(arg) };
}
function renderTemplate(templateContent, pageContext) {
  const htmlPartsBegin = [];
  const htmlPartsEnd = [];
  let htmlStream = null;
  const addHtmlPart = (htmlPart) => {
    if (htmlStream === null) {
      htmlPartsBegin.push(htmlPart);
    } else {
      htmlPartsEnd.push(htmlPart);
    }
  };
  const setStream = (stream) => {
    const { hookName, hookFilePath } = pageContext._renderHook;
    assertUsage(!htmlStream, `Injecting two streams in ${picocolors_default.cyan("escapeInject")} template tag of ${hookName}() hook defined by ${hookFilePath}. Inject only one stream instead.`);
    htmlStream = stream;
  };
  const { templateStrings, templateVariables } = templateContent;
  for (let i = 0; i < templateVariables.length; i++) {
    addHtmlPart(templateStrings[i]);
    let templateVar = templateVariables[i];
    if (isEscapedString(templateVar)) {
      const htmlString = getEscapedString(templateVar);
      addHtmlPart(htmlString);
      continue;
    }
    if (isTemplateWrapped(templateVar)) {
      const templateContentInner = templateVar._template;
      const result = renderTemplate(templateContentInner, pageContext);
      if (!("htmlStream" in result)) {
        result.htmlPartsAll.forEach(addHtmlPart);
      } else {
        result.htmlPartsBegin.forEach(addHtmlPart);
        setStream(result.htmlStream);
        result.htmlPartsEnd.forEach(addHtmlPart);
      }
      continue;
    }
    if (isStream(templateVar)) {
      setStream(templateVar);
      continue;
    }
    const getErrMsg2 = (msg) => {
      const { hookName, hookFilePath } = pageContext._renderHook;
      const nth = i === 0 && "1st" || i === 1 && "2nd" || i === 2 && "3rd" || `${i}-th`;
      return [
        `The ${nth} HTML variable is ${msg}`,
        `The HTML was provided by the ${hookName}() hook at ${hookFilePath}.`
      ].filter(Boolean).join(" ");
    };
    assertUsage(!isPromise(templateVar), getErrMsg2(`a promise, did you forget to ${picocolors_default.cyan("await")} the promise?`));
    if (templateVar === void 0 || templateVar === null) {
      const msgVal = picocolors_default.cyan(String(templateVar));
      const msgEmptyString = picocolors_default.cyan("''");
      const msg = `${msgVal} which will be converted to an empty string. Pass the empty string ${msgEmptyString} instead of ${msgVal} to remove this warning.`;
      assertWarning2(false, getErrMsg2(msg), { onlyOnce: false });
      templateVar = "";
    }
    {
      const varType = typeof templateVar;
      if (varType !== "string") {
        const msgType = picocolors_default.cyan(`typeof htmlVariable === "${varType}"`);
        const msg = `${msgType} but a string or stream (https://vike.dev/streaming) is expected instead.`;
        assertUsage(false, getErrMsg2(msg));
      }
    }
    {
      const { isProduction } = pageContext._globalContext;
      if (isHtml(templateVar) && // We don't show this warning in production because it's expected that some users may (un)willingly do some XSS injection: we avoid flooding the production logs.
      !isProduction) {
        const msgVal = picocolors_default.cyan(String(templateVar));
        const msg = `${msgVal} which seems to be HTML code. Did you forget to wrap the value with dangerouslySkipEscape()?`;
        assertWarning2(false, getErrMsg2(msg), { onlyOnce: false });
      }
    }
    addHtmlPart(escapeHtml(templateVar));
  }
  assert(templateStrings.length === templateVariables.length + 1);
  addHtmlPart(templateStrings[templateStrings.length - 1]);
  if (htmlStream === null) {
    assert(htmlPartsEnd.length === 0);
    return {
      htmlPartsAll: htmlPartsBegin
    };
  }
  return {
    htmlStream,
    htmlPartsBegin,
    htmlPartsEnd
  };
}
async function getHtmlString(htmlRender) {
  if (typeof htmlRender === "string") {
    return htmlRender;
  }
  if (isStream(htmlRender)) {
    return streamToString(htmlRender);
  }
  checkType(htmlRender);
  assert(false);
}
var init_renderHtml = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/renderHtml.js"() {
    init_utils2();
    init_injectAssets();
    init_stream();
    init_react_streaming();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/getHttpResponseBody.js
function getHttpResponseBody(htmlRender, renderHook) {
  if (typeof htmlRender !== "string") {
    assertUsage(false, getErrMsg(htmlRender, renderHook, "body", `Use ${picocolors_default.cyan("pageContext.httpResponse.pipe()")} instead`));
  }
  const body = htmlRender;
  return body;
}
function getHttpResponseBodyStreamHandlers(htmlRender, renderHook) {
  return {
    pipe(writable) {
      const getErrMsgMixingStreamTypes = (writableType) => `The ${getErrMsgBody(htmlRender, renderHook)} while a ${writableType} was passed to pageContext.httpResponse.pipe() which is contradictory. You cannot mix a Web Stream with a Node.js Stream.`;
      if (isStreamWritableWeb(writable)) {
        const success = pipeToStreamWritableWeb(htmlRender, writable);
        if (success) {
          return;
        } else {
          assert(isStreamReadableNode(htmlRender) || isStreamPipeNode(htmlRender));
          assertUsage(false, getErrMsgMixingStreamTypes("Web Writable"));
        }
      }
      if (isStreamWritableNode(writable)) {
        const success = pipeToStreamWritableNode(htmlRender, writable);
        if (success) {
          return;
        } else {
          assert(isStreamReadableWeb(htmlRender) || isStreamPipeWeb(htmlRender));
          assertUsage(false, getErrMsgMixingStreamTypes("Node.js Writable"));
        }
      }
      assertUsage(false, `The argument ${picocolors_default.cyan("writable")} passed to ${picocolors_default.cyan("pageContext.httpResponse.pipe(writable)")} doesn't seem to be ${getStreamName("writable", "web")} nor ${getStreamName("writable", "node")}.`);
    },
    getReadableWebStream() {
      const webStream = getStreamReadableWeb(htmlRender);
      if (webStream === null) {
        assertUsage(false, getErrMsg(htmlRender, renderHook, "getReadableWebStream()", getFixMsg("readable", "web")));
      }
      return webStream;
    },
    async getReadableNodeStream() {
      const nodeStream = await getStreamReadableNode(htmlRender);
      if (nodeStream === null) {
        assertUsage(false, getErrMsg(htmlRender, renderHook, "getReadableNodeStream()", getFixMsg("readable", "node")));
      }
      return nodeStream;
    },
    async getBody() {
      const body = await getHtmlString(htmlRender);
      return body;
    },
    // TODO/v1-release: remove
    async getNodeStream() {
      assertWarning2(false, "`pageContext.httpResponse.getNodeStream()` is outdated, use `pageContext.httpResponse.getReadableNodeStream()` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const nodeStream = await getStreamReadableNode(htmlRender);
      if (nodeStream === null) {
        assertUsage(false, getErrMsg(htmlRender, renderHook, "getNodeStream()", getFixMsg("readable", "node")));
      }
      return nodeStream;
    },
    // TODO/v1-release: remove
    getWebStream() {
      assertWarning2(false, "`pageContext.httpResponse.getWebStream(res)` is outdated, use `pageContext.httpResponse.getReadableWebStream(res)` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const webStream = getStreamReadableWeb(htmlRender);
      if (webStream === null) {
        assertUsage(false, getErrMsg(htmlRender, renderHook, "getWebStream()", getFixMsg("readable", "web")));
      }
      return webStream;
    },
    // TODO/v1-release: remove
    pipeToWebWritable(writable) {
      assertWarning2(false, "`pageContext.httpResponse.pipeToWebWritable(res)` is outdated, use `pageContext.httpResponse.pipe(res)` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const success = pipeToStreamWritableWeb(htmlRender, writable);
      if (!success) {
        assertUsage(false, getErrMsg(htmlRender, renderHook, "pipeToWebWritable()"));
      }
    },
    // TODO/v1-release: remove
    pipeToNodeWritable(writable) {
      assertWarning2(false, "`pageContext.httpResponse.pipeToNodeWritable(res)` is outdated, use `pageContext.httpResponse.pipe(res)` instead. " + streamDocs, { onlyOnce: true, showStackTrace: true });
      const success = pipeToStreamWritableNode(htmlRender, writable);
      if (!success) {
        assertUsage(false, getErrMsg(htmlRender, renderHook, "pipeToNodeWritable()"));
      }
    }
  };
  function getFixMsg(kind, type) {
    const streamName = getStreamName(kind, type);
    assert(["a ", "an ", "the "].some((s) => streamName.startsWith(s)));
    assert(renderHook);
    const { hookFilePath, hookName } = renderHook;
    return `Make sure the ${hookName}() defined by ${hookFilePath} hook provides ${streamName} instead`;
  }
}
function getErrMsg(htmlRender, renderHook, method, msgAddendum) {
  assert(!msgAddendum || !msgAddendum.endsWith("."));
  const errMsgBody = getErrMsgBody(htmlRender, renderHook);
  return [`pageContext.httpResponse.${method} can't be used because the ${errMsgBody}`, msgAddendum, streamDocs].filter(Boolean).join(". ");
}
function getErrMsgBody(htmlRender, renderHook) {
  assert(renderHook);
  const { hookFilePath, hookName } = renderHook;
  const hookReturnType = getHookReturnType(htmlRender);
  assert(["a ", "an ", "the "].some((s) => hookReturnType.startsWith(s)));
  const errMsgBody = `${hookName}() hook defined by ${hookFilePath} provides ${hookReturnType}`;
  assert(!errMsgBody.endsWith(" "));
  return errMsgBody;
}
function getHookReturnType(htmlRender) {
  if (typeof htmlRender === "string") {
    return "an HTML string";
  } else if (isStream(htmlRender)) {
    return inferStreamName(htmlRender);
  } else {
    assert(false);
  }
}
var streamDocs;
var init_getHttpResponseBody = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/getHttpResponseBody.js"() {
    init_stream();
    init_utils2();
    init_renderHtml();
    init_picocolors();
    streamDocs = "See https://vike.dev/streaming for more information.";
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/getEarlyHints.js
function getEarlyHints(assets) {
  const earlyHints = [];
  {
    assets.forEach((asset) => {
      if (isFontFallback(asset, earlyHints))
        return;
      earlyHints.push({
        ...asset,
        earlyHintLink: inferEarlyHintLink(asset)
      });
    });
  }
  return earlyHints;
}
var init_getEarlyHints = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/getEarlyHints.js"() {
    init_isFontFallback();
    init_inferHtmlTags();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse/getCacheControl.js
function getCacheControl(pageId, pageConfigs, statusCode) {
  if (pageConfigs.length === 0)
    return defaultValue;
  if (statusCode > 499)
    return defaultValue;
  const pageConfig = getPageConfig(pageId, pageConfigs);
  const configValue = getConfigValueRuntime(pageConfig, "cacheControl", "string");
  const value = configValue?.value;
  if (value)
    return value;
  return defaultValue;
}
var defaultValue;
var init_getCacheControl = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse/getCacheControl.js"() {
    init_helpers();
    init_getConfigValueRuntime();
    defaultValue = "no-store, max-age=0";
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse/assertNoInfiniteHttpRedirect.js
function assertNoInfiniteHttpRedirect(urlRedirectTarget, pageContextInit) {
  if (true)
    return "DISABLED";
  if (!urlRedirectTarget.startsWith("/")) {
    return;
  }
  const urlOriginalNormalized = removeUrlOrigin(pageContextInit.urlOriginal).urlModified;
  assert(urlOriginalNormalized.startsWith("/"));
  const graph = copy(globalObject6.redirectGraph);
  graph[urlRedirectTarget] ?? (graph[urlRedirectTarget] = /* @__PURE__ */ new Set());
  graph[urlRedirectTarget].add(urlOriginalNormalized);
  validate(graph);
  globalObject6.redirectGraph = graph;
}
function copy(G) {
  return Object.fromEntries(Object.entries(G).map(([key, val]) => [key, new Set(val)]));
}
function validate(G) {
  Object.keys(G).forEach((n) => check(G, n, []));
}
function check(G, n, path) {
  if (path.includes(n)) {
    const cycle = path.slice(path.indexOf(n)).concat(n);
    assertUsage(false, `Infinite loop of HTTP URL redirects: ${cycle.map(picocolors_default.cyan).join(" -> ")}`);
  }
  G[n]?.forEach((node) => check(G, node, [...path, n]));
}
var globalObject6;
var init_assertNoInfiniteHttpRedirect = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse/assertNoInfiniteHttpRedirect.js"() {
    init_utils2();
    init_picocolors();
    globalObject6 = getGlobalObject("createHttpResponse/assertNoInfiniteHttpRedirect.ts", {
      redirectGraph: {}
    });
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse.js
async function createHttpResponsePage(htmlRender, renderHook, pageContext) {
  let statusCode = pageContext.abortStatusCode;
  if (!statusCode) {
    const isError = !pageContext.pageId || isErrorPage(pageContext.pageId, pageContext._pageConfigs);
    if (pageContext.errorWhileRendering) {
      assert(isError);
    }
    if (!isError) {
      assert(pageContext.is404 === null);
      statusCode = 200;
    } else {
      assert(pageContext.is404 === true || pageContext.is404 === false);
      statusCode = pageContext.is404 ? 404 : 500;
    }
  }
  const earlyHints = getEarlyHints(await pageContext.__getPageAssets());
  const headers = [];
  assert(pageContext.pageId);
  const cacheControl = getCacheControl(pageContext.pageId, pageContext._pageConfigs, statusCode);
  if (cacheControl) {
    headers.push(["Cache-Control", cacheControl]);
  }
  return createHttpResponse(statusCode, "text/html;charset=utf-8", headers, htmlRender, earlyHints, renderHook);
}
function createHttpResponseFavicon404() {
  const httpResponse = createHttpResponse(404, "text/html;charset=utf-8", [], "<p>No favicon.ico found.</p><script>console.log('This HTTP response was generated by Vike.')</script>");
  return httpResponse;
}
function createHttpResponseBaseIsMissing(urlOriginal, baseServer2) {
  const httpResponse = createHttpResponse(
    // We use the error code `500` to signal a failing state because this HTTP response should never be used, see https://vike.dev/base-url#setup
    // In other words: this HTTP response is expected to be generated but isn't expected to be actually used.
    500,
    "text/html;charset=utf-8",
    [],
    `
<h1>Error: Base URL is missing</h1>
<p>
  <a href="https://vike.dev/renderPage"><code>renderPage(pageContextInit)</code></a> called with <code>pageContextInit.urlOriginal===${JSON.stringify(urlOriginal)}</code> which doesn't start with the Base URL <code>${baseServer2}</code>.
</p>
<p>
  See <a href="https://vike.dev/base-url#setup">vike.dev/base-url#setup</a> for how to properly setup your server while using a Base URL.
</p>
<style>
  code {
    font-family: monospace;
    background-color: #eaeaea;
    padding: 3px 5px;
    border-radius: 4px;
  }
</style>
`
  );
  return httpResponse;
}
function createHttpResponseError(pageContext) {
  const reason = (() => {
    if (!pageContext) {
      return "no error page (https://vike.dev/error-page) could be rendered";
    }
    const errorPageId = getErrorPageId(pageContext._pageFilesAll, pageContext._pageConfigs);
    if (errorPageId) {
      return "the error page (https://vike.dev/error-page) couldn't be rendered (for example if an error occurred while rendering the error page)";
    } else {
      return "no error page (https://vike.dev/error-page) is defined, make sure to create one";
    }
  })();
  const httpResponse = createHttpResponse(500, "text/html;charset=utf-8", [], `<p>An error occurred.</p><script>console.log(${JSON.stringify(`This HTTP response was generated by Vike. Vike returned this response because ${reason}.`)})</script>`);
  return httpResponse;
}
async function createHttpResponsePageContextJson(pageContextSerialized) {
  const httpResponse = createHttpResponse(200, "application/json", [], pageContextSerialized, [], null);
  return httpResponse;
}
function createHttpResponseRedirect({ url: url3, statusCode }, pageContextInit) {
  assertNoInfiniteHttpRedirect(url3, pageContextInit);
  assert(url3);
  assert(statusCode);
  assert(300 <= statusCode && statusCode <= 399);
  const headers = [["Location", url3]];
  return createHttpResponse(
    statusCode,
    "text/html;charset=utf-8",
    headers,
    // For bots / programmatic crawlig: show what's going on.
    // For users: showing a blank page is probably better than a flickering text.
    `<p style="display: none">Redirecting to ${escapeHtml(url3)}</p><script>console.log('This HTTP response was generated by Vike.')</script>`
  );
}
function createHttpResponse(statusCode, contentType, headers, htmlRender, earlyHints = [], renderHook = null) {
  headers.push(["Content-Type", contentType]);
  assert(renderHook || typeof htmlRender === "string");
  return {
    statusCode,
    headers,
    // TODO/v1-release: remove
    get contentType() {
      assertWarning2(false, "pageContext.httpResponse.contentType is deprecated and will be removed in the next major release. Use pageContext.httpResponse.headers instead, see https://vike.dev/migration/0.4.134", { onlyOnce: true });
      return contentType;
    },
    earlyHints,
    get body() {
      return getHttpResponseBody(htmlRender, renderHook);
    },
    ...getHttpResponseBodyStreamHandlers(htmlRender, renderHook)
  };
}
var init_createHttpResponse = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/createHttpResponse.js"() {
    init_utils2();
    init_error_page();
    init_getHttpResponseBody();
    init_getEarlyHints();
    init_getCacheControl();
    init_assertNoInfiniteHttpRedirect();
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/getAllPageIdFiles.js
function getPageFilesClientSide(pageFilesAll, pageId) {
  return determine(pageFilesAll, pageId, true);
}
function getPageFilesServerSide(pageFilesAll, pageId) {
  return determine(pageFilesAll, pageId, false);
}
function determine(pageFilesAll, pageId, envIsClient) {
  const env2 = envIsClient ? "CLIENT_ONLY" : "SERVER_ONLY";
  const pageFilesRelevant = pageFilesAll.filter((p2) => p2.isRelevant(pageId) && p2.fileType !== ".page.route").sort(getPageFilesSorter(envIsClient, pageId));
  const getPageIdFile = (iso) => {
    const files = pageFilesRelevant.filter((p2) => p2.pageId === pageId && p2.isEnv(iso ? "CLIENT_AND_SERVER" : env2));
    assertUsage(files.length <= 1, `Merge the following files into a single file: ${files.map((p2) => p2.filePath).join(" ")}`);
    const pageIdFile = files[0];
    assert(pageIdFile === void 0 || !pageIdFile.isDefaultPageFile);
    return pageIdFile;
  };
  const pageIdFileEnv = getPageIdFile(false);
  const pageIdFileIso = getPageIdFile(true);
  const getRendererFile = (iso) => pageFilesRelevant.filter((p2) => p2.isRendererPageFile && p2.isEnv(iso ? "CLIENT_AND_SERVER" : env2))[0];
  const rendererFileEnv = getRendererFile(false);
  const rendererFileIso = getRendererFile(true);
  const defaultFilesNonRenderer = pageFilesRelevant.filter((p2) => p2.isDefaultPageFile && !p2.isRendererPageFile && (p2.isEnv(env2) || p2.isEnv("CLIENT_AND_SERVER")));
  const pageFiles = [pageIdFileEnv, pageIdFileIso, ...defaultFilesNonRenderer, rendererFileEnv, rendererFileIso].filter(isNotNullish);
  return pageFiles;
}
function getPageFilesSorter(envIsClient, pageId) {
  const env2 = envIsClient ? "CLIENT_ONLY" : "SERVER_ONLY";
  const e1First = -1;
  const e2First = 1;
  const noOrder = 0;
  return (e1, e2) => {
    if (!e1.isDefaultPageFile && e2.isDefaultPageFile) {
      return e1First;
    }
    if (!e2.isDefaultPageFile && e1.isDefaultPageFile) {
      return e2First;
    }
    {
      const e1_isRenderer = e1.isRendererPageFile;
      const e2_isRenderer = e2.isRendererPageFile;
      if (!e1_isRenderer && e2_isRenderer) {
        return e1First;
      }
      if (!e2_isRenderer && e1_isRenderer) {
        return e2First;
      }
      assert(e1_isRenderer === e2_isRenderer);
    }
    {
      const e1_distance = getPathDistance(pageId, e1.filePath);
      const e2_distance = getPathDistance(pageId, e2.filePath);
      if (e1_distance < e2_distance) {
        return e1First;
      }
      if (e2_distance < e1_distance) {
        return e2First;
      }
      assert(e1_distance === e2_distance);
    }
    {
      if (e1.isEnv(env2) && e2.isEnv("CLIENT_AND_SERVER")) {
        return e1First;
      }
      if (e2.isEnv(env2) && e1.isEnv("CLIENT_AND_SERVER")) {
        return e2First;
      }
    }
    return noOrder;
  };
}
function getPathDistance(pathA, pathB) {
  let idx = 0;
  for (; idx < pathA.length && idx < pathB.length; idx++) {
    if (pathA[idx] !== pathB[idx])
      break;
  }
  const pathAWithoutCommon = pathA.slice(idx);
  const pathBWithoutCommon = pathB.slice(idx);
  const distanceA = pathAWithoutCommon.split("/").length;
  const distanceB = pathBWithoutCommon.split("/").length;
  const distance = distanceA + distanceB;
  return distance;
}
var init_getAllPageIdFiles = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/getAllPageIdFiles.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles.js
var init_getPageFiles = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles.js"() {
    init_getAllPageIdFiles();
    init_getAllPageIdFiles();
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/getExportNames.js
function getExportNames(p2) {
  if (p2.fileType === ".css") {
    return [];
  }
  if (p2.exportNames) {
    return p2.exportNames;
  }
  assert(p2.fileExports, p2.filePath);
  const exportNames = Object.keys(p2.fileExports);
  return exportNames;
}
var init_getExportNames = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/getExportNames.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/analyzeExports.js
function analyzeExports({ pageFilesClientSide, pageFilesServerSide, pageId }) {
  return { isHtmlOnly: isHtmlOnly(), isClientRouting: isClientRouting() };
  function isHtmlOnly() {
    {
      const hasPageIdIsmrphFile = pageFilesServerSide.some((p2) => p2.pageId === pageId && p2.fileType === ".page");
      if (hasPageIdIsmrphFile) {
        assertClientSideRenderHook();
        return false;
      }
    }
    {
      const hasPageIdServerFile = pageFilesServerSide.some((p2) => p2.pageId === pageId && p2.fileType === ".page.server");
      if (!hasPageIdServerFile) {
        return false;
      }
    }
    {
      const definesClientRenderer = pageFilesClientSide.some((p2) => p2.pageId === pageId && p2.fileType === ".page.client" && getExportNames(p2).includes("render"));
      if (definesClientRenderer) {
        return false;
      }
    }
    return true;
  }
  function assertClientSideRenderHook() {
    const hasClientSideRenderHook = pageFilesClientSide.some((p2) => {
      return getExportNames(p2).includes("render");
    });
    assertUsage(hasClientSideRenderHook, [
      "No client-side `render()` hook found.",
      "See https://vike.dev/render-modes for more information.",
      [
        "Loaded client-side page files (none of them `export { render }`):",
        ...pageFilesClientSide.map((p2, i) => ` (${i + 1}): ${p2.filePath}`)
      ].join("\n")
    ].join(" "));
  }
  function isClientRouting() {
    const hasClientRoutingExport = pageFilesClientSide.some((p2) => {
      return getExportNames(p2).includes("clientRouting");
    });
    return hasClientRoutingExport;
  }
}
var init_analyzeExports = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/analyzeExports.js"() {
    init_getExportNames();
    init_utils5();
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/determineClientEntry.js
function determineClientEntry({ pageFilesClientSide, pageFilesServerSide, isHtmlOnly, isClientRouting }) {
  let clientEntries = [];
  const pageFilesServerSideOnly = pageFilesServerSide.filter((p2) => !pageFilesClientSide.includes(p2));
  const clientDependencies = [];
  clientDependencies.push(...pageFilesClientSide.map((p2) => ({ id: p2.filePath, onlyAssets: false, eagerlyImported: false })));
  clientDependencies.push(...pageFilesServerSideOnly.map((p2) => ({ id: p2.filePath, onlyAssets: true, eagerlyImported: false })));
  if (isHtmlOnly) {
    clientEntries = pageFilesClientSide.map((p2) => p2.filePath);
  } else {
    const clientEntry = getVikeClientEntry(isClientRouting);
    clientDependencies.push({ id: clientEntry, onlyAssets: false, eagerlyImported: false });
    clientEntries = [clientEntry];
  }
  return { clientEntries, clientDependencies };
}
function getVikeClientEntry(isClientRouting) {
  return isClientRouting ? "@@vike/dist/esm/client/client-routing-runtime/entry.js" : "@@vike/dist/esm/client/server-routing-runtime/entry.js";
}
var init_determineClientEntry = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide/determineClientEntry.js"() {
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide.js
function analyzePageClientSide(pageFilesAll, pageId) {
  let pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
  const pageFilesServerSide = getPageFilesServerSide(pageFilesAll, pageId);
  const { isHtmlOnly, isClientRouting } = analyzeExports({ pageFilesClientSide, pageFilesServerSide, pageId });
  if (isHtmlOnly) {
    pageFilesClientSide = pageFilesClientSide.filter((p2) => p2.isEnv("CLIENT_ONLY") && !getExportNames(p2).includes("render"));
    pageFilesClientSide = removeOverridenPageFiles(pageFilesClientSide);
  }
  const { clientEntries, clientDependencies } = determineClientEntry({
    pageFilesClientSide,
    pageFilesServerSide,
    isHtmlOnly,
    isClientRouting
  });
  return { isHtmlOnly, isClientRouting, clientEntries, clientDependencies, pageFilesClientSide, pageFilesServerSide };
}
async function analyzePageClientSideInit(pageFilesAll, pageId, { sharedPageFilesAlreadyLoaded }) {
  const pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
  await Promise.all(pageFilesClientSide.map(async (p2) => {
    assert(p2.isEnv("CLIENT_ONLY") || p2.isEnv("CLIENT_AND_SERVER"));
    if (sharedPageFilesAlreadyLoaded && p2.isEnv("CLIENT_AND_SERVER")) {
      return;
    }
    await p2.loadExportNames?.();
  }));
}
function removeOverridenPageFiles(pageFilesClientSide) {
  const pageFilesClientSide_ = [];
  for (const p2 of pageFilesClientSide) {
    pageFilesClientSide_.push(p2);
    if (getExportNames(p2).includes("overrideDefaultPages")) {
      break;
    }
  }
  return pageFilesClientSide_;
}
var init_analyzePageClientSide = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/analyzePageClientSide.js"() {
    init_analyzeExports();
    init_determineClientEntry();
    init_getAllPageIdFiles();
    init_getAllPageIdFiles();
    init_utils5();
    init_getExportNames();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/retrieveAssetsDev.js
async function retrieveAssetsDev(clientDependencies, viteDevServer) {
  const visitedModules = /* @__PURE__ */ new Set();
  const assetUrls = /* @__PURE__ */ new Set();
  await Promise.all(clientDependencies.map(async ({ id }) => {
    if (id.startsWith("@@vike"))
      return;
    assert(id);
    const { moduleGraph } = viteDevServer;
    const [_, graphId] = await moduleGraph.resolveUrl(id);
    assert(graphId, { id });
    const mod = moduleGraph.getModuleById(graphId);
    if (!mod) {
      return;
    }
    assert(mod, { id });
    collectCss(mod, assetUrls, visitedModules);
  }));
  return Array.from(assetUrls);
}
function collectCss(mod, styleUrls, visitedModules, importer) {
  assert(mod);
  if (!mod.url)
    return;
  if (visitedModules.has(mod.url))
    return;
  visitedModules.add(mod.url);
  if (isStyle(mod) && (!importer || !isStyle(importer))) {
    if (mod.url.startsWith("/")) {
      styleUrls.add(mod.url);
    } else if (mod.url.startsWith("\0")) {
      styleUrls.add(`/@id/__x00__${mod.url.substring(1)}`);
    } else {
      styleUrls.add(`/@id/${mod.url}`);
    }
  }
  mod.importedModules.forEach((dep) => {
    collectCss(dep, styleUrls, visitedModules, mod);
  });
}
function isStyle(mod) {
  return (
    // CSS-in-JS libraries such as [wyw-in-js](https://github.com/vikejs/vike/issues/2039)
    mod.type === "css" || // .css, .less, ...
    styleFileRE.test(mod.url) || // CSS of .vue files
    mod.id && /\?vue&type=style/.test(mod.id)
  );
}
var init_retrieveAssetsDev = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/retrieveAssetsDev.js"() {
    init_utils2();
  }
});

// node_modules/vike/dist/esm/node/shared/extractAssetsQuery.js
function extractAssetsAddQuery(id) {
  const fileExtension = getFileExtension(id);
  if (!fileExtension || id.includes("virtual:vike:")) {
    return `${id}?${query}`;
  } else {
    if (!id.includes("?")) {
      return `${id}?${query}&lang.${fileExtension}`;
    } else {
      return id.replace("?", `?${query}&`);
    }
  }
}
function extractAssetsRemoveQuery(id) {
  if (!id.includes("?"))
    return id;
  const suffix = `?${query}`;
  assert(id.endsWith(query));
  return id.slice(0, -1 * suffix.length);
}
var query;
var init_extractAssetsQuery = __esm({
  "node_modules/vike/dist/esm/node/shared/extractAssetsQuery.js"() {
    init_utils();
    query = "extractAssets";
  }
});

// node_modules/vike/dist/esm/node/shared/virtual-files/virtualFilePageConfigValuesAll.js
function getVirtualFileIdPageConfigValuesAll(pageId, isForClientSide) {
  const id = `${isForClientSide ? idBaseClient : idBaseServer}${pageId}`;
  return id;
}
function isVirtualFileIdPageConfigValuesAll(id) {
  id = getVirtualFileId(id);
  if (!id.includes(idBase2))
    return false;
  assert(id.startsWith(idBase2));
  const idOriginal = id;
  id = extractAssetsRemoveQuery(id);
  const isExtractAssets = idOriginal !== id;
  if (id.startsWith(idBaseClient)) {
    assert(isExtractAssets === false);
    return {
      pageId: id.slice(idBaseClient.length),
      isForClientSide: true,
      isExtractAssets
    };
  }
  if (id.startsWith(idBaseServer)) {
    return {
      pageId: id.slice(idBaseServer.length),
      isForClientSide: false,
      isExtractAssets
    };
  }
  assert(false);
}
var idBase2, idBaseClient, idBaseServer;
var init_virtualFilePageConfigValuesAll = __esm({
  "node_modules/vike/dist/esm/node/shared/virtual-files/virtualFilePageConfigValuesAll.js"() {
    init_extractAssetsQuery();
    init_utils();
    init_virtual_files();
    idBase2 = "virtual:vike:pageConfigValuesAll:";
    idBaseClient = `${idBase2}client:`;
    idBaseServer = `${idBase2}server:`;
  }
});

// node_modules/vike/dist/esm/node/shared/prependEntriesDir.js
function prependEntriesDir(entryName) {
  if (entryName.startsWith("/")) {
    entryName = entryName.slice(1);
  }
  assert(!entryName.startsWith("/"));
  assert(entryName);
  entryName = `entries/${entryName}`;
  return entryName;
}
var init_prependEntriesDir = __esm({
  "node_modules/vike/dist/esm/node/shared/prependEntriesDir.js"() {
    init_utils();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/getManifestEntry.js
function getManifestEntry(id, assetsManifest) {
  const debugInfo = getDebugInfo(id, assetsManifest);
  if (id.startsWith("@@vike/")) {
    const manifestKeyEnd = slice(id, "@@vike".length, 0);
    const { manifestKey: manifestKey2, manifestEntry: manifestEntry2 } = findEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id);
    assert(manifestEntry2 && manifestKey2, debugInfo);
    return { manifestEntry: manifestEntry2, manifestKey: manifestKey2 };
  }
  if (isVirtualFileIdPageConfigValuesAll(id)) {
    {
      const manifestKey3 = id;
      const manifestEntry3 = assetsManifest[manifestKey3];
      if (manifestEntry3) {
        return { manifestEntry: manifestEntry3, manifestKey: manifestKey3 };
      }
    }
    const manifestKeyEnd = id;
    const { manifestKey: manifestKey2, manifestEntry: manifestEntry2 } = getEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id);
    assert(manifestEntry2, debugInfo);
    return { manifestEntry: manifestEntry2, manifestKey: manifestKey2 };
  }
  if (id.startsWith("/")) {
    const manifestKey2 = id.slice(1);
    let manifestEntry2 = assetsManifest[manifestKey2];
    assert(manifestEntry2, debugInfo);
    return { manifestEntry: manifestEntry2, manifestKey: manifestKey2 };
  }
  assertIsNpmPackageImport(id);
  const found = Object.entries(assetsManifest).find(([, e]) => e.name === prependEntriesDir(id));
  assert(found);
  const [manifestKey, manifestEntry] = found;
  return { manifestEntry, manifestKey };
}
function findEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id) {
  const debugInfo = getDebugInfo(id, assetsManifest, manifestKeyEnd);
  assert(manifestKeyEnd.startsWith("/"), debugInfo);
  const manifestKeys = [];
  for (const manifestKey2 in assetsManifest) {
    if (manifestKey2.endsWith(manifestKeyEnd)) {
      manifestKeys.push(manifestKey2);
    }
  }
  const manifestKeysRelative = manifestKeys.filter((k) => k.startsWith("../"));
  assert(manifestKeysRelative.length <= 1, debugInfo);
  const manifestKey = manifestKeysRelative[0] ?? manifestKeys[0] ?? null;
  if (!manifestKey) {
    return { manifestEntry: null, manifestKey: null };
  }
  const manifestEntry = assetsManifest[manifestKey];
  return { manifestEntry, manifestKey };
}
function getEntryWithKeyEnd(manifestKeyEnd, assetsManifest, id) {
  const debugInfo = getDebugInfo(id, assetsManifest, manifestKeyEnd);
  const manifestKeys = [];
  for (const manifestKey2 in assetsManifest) {
    if (manifestKey2.endsWith(manifestKeyEnd)) {
      manifestKeys.push(manifestKey2);
    }
  }
  assert(manifestKeys.length <= 1, debugInfo);
  const manifestKey = manifestKeys[0];
  if (!manifestKey) {
    return { manifestEntry: null, manifestKey: null };
  }
  const manifestEntry = assetsManifest[manifestKey];
  return { manifestEntry, manifestKey };
}
function getDebugInfo(id, assetsManifest, manifestKeyEnd) {
  const manifestKeys = Object.keys(assetsManifest);
  if (manifestKeyEnd === void 0) {
    return { manifestKeys, id };
  } else {
    return { manifestKeys, manifestKeyEnd, id };
  }
}
var init_getManifestEntry = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/getManifestEntry.js"() {
    init_utils2();
    init_virtualFilePageConfigValuesAll();
    init_prependEntriesDir();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/retrieveAssetsProd.js
function retrieveAssetsProd(clientDependencies, assetsManifest, includeAssetsImportedByServer) {
  let assetUrls = /* @__PURE__ */ new Set();
  assert(assetsManifest);
  const visistedAssets = /* @__PURE__ */ new Set();
  clientDependencies.forEach(({ id, onlyAssets, eagerlyImported }) => {
    if (eagerlyImported)
      return;
    if (includeAssetsImportedByServer && onlyAssets && id.includes(".page.server.") && // We assume that all npm packages have already built their files: bundlers (Rollup, esbuild, tsup, ...) extract the CSS out of JavaScript => we can assume JavaScript to not import any CSS/assets.
    !isNpmPackageImport(id, {
      // I presume Vite already resolves path aliases when Vite sets the module's id
      cannotBePathAlias: true
    })) {
      id = extractAssetsAddQuery(id);
    }
    const { manifestKey } = getManifestEntry(id, assetsManifest);
    collectAssets(manifestKey, assetUrls, visistedAssets, assetsManifest, onlyAssets);
  });
  collectSingleStyle(assetUrls, assetsManifest);
  return Array.from(assetUrls);
}
function collectAssets(manifestKey, assetUrls, visistedAssets, assetsManifest, onlyCollectStaticAssets) {
  if (visistedAssets.has(manifestKey))
    return;
  visistedAssets.add(manifestKey);
  const manifestEntry = assetsManifest[manifestKey];
  assert(manifestEntry, { manifestKey });
  const { file } = manifestEntry;
  if (!onlyCollectStaticAssets) {
    assetUrls.add(`/${file}`);
  }
  const { imports = [], assets = [], css = [] } = manifestEntry;
  for (const manifestKey2 of imports) {
    const importManifestEntry = assetsManifest[manifestKey2];
    assert(importManifestEntry);
    collectAssets(manifestKey2, assetUrls, visistedAssets, assetsManifest, onlyCollectStaticAssets);
  }
  for (const cssAsset of css) {
    assetUrls.add(`/${cssAsset}`);
  }
  for (const asset of assets) {
    assetUrls.add(`/${asset}`);
  }
}
function collectSingleStyle(assetUrls, assetsManifest) {
  const style = assetsManifest["style.css"];
  if (style && Object.values(assetsManifest).filter((asset) => asset.file.endsWith(".css")).length === 1) {
    assetUrls.add(`/${style.file}`);
  }
}
var init_retrieveAssetsProd = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/retrieveAssetsProd.js"() {
    init_utils2();
    init_getManifestEntry();
    init_extractAssetsQuery();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/inferMediaType.js
function inferMediaType(href) {
  if (styleFileRE.test(href)) {
    return { mediaType: "text/css", assetType: "style" };
  }
  if (isScriptFile(href)) {
    return { mediaType: "text/javascript", assetType: "script" };
  }
  if (href.endsWith(".png")) {
    return { assetType: "image", mediaType: "image/png" };
  }
  if (href.endsWith(".webp")) {
    return { assetType: "image", mediaType: "image/webp" };
  }
  if (href.endsWith(".jpg") || href.endsWith(".jpeg")) {
    return { assetType: "image", mediaType: "image/jpeg" };
  }
  if (href.endsWith(".gif")) {
    return { assetType: "image", mediaType: "image/gif" };
  }
  if (href.endsWith(".svg")) {
    return { assetType: "image", mediaType: "image/svg+xml" };
  }
  if (href.endsWith(".avif")) {
    return { assetType: "image", mediaType: "image/avif" };
  }
  if (href.endsWith(".ttf")) {
    return { assetType: "font", mediaType: "font/ttf" };
  }
  if (href.endsWith(".woff")) {
    return { assetType: "font", mediaType: "font/woff" };
  }
  if (href.endsWith(".woff2")) {
    return { assetType: "font", mediaType: "font/woff2" };
  }
  if (href.endsWith(".mp4")) {
    return { assetType: "video", mediaType: "video/mp4" };
  }
  if (href.endsWith(".webm")) {
    return { assetType: "video", mediaType: "video/webm" };
  }
  if (href.endsWith(".ogv")) {
    return { assetType: "video", mediaType: "video/ogg" };
  }
  if (href.endsWith(".mpeg") || href.endsWith(".mpg")) {
    return { assetType: "video", mediaType: "video/mpeg" };
  }
  if (href.endsWith(".avi")) {
    return { assetType: "video", mediaType: "video/x-msvideo" };
  }
  if (href.endsWith(".mov") || href.endsWith(".qt")) {
    return { assetType: "video", mediaType: "video/quicktime" };
  }
  if (href.endsWith(".mp3")) {
    return { assetType: "audio", mediaType: "audio/mpeg" };
  }
  if (href.endsWith(".wav")) {
    return { assetType: "audio", mediaType: "audio/wav" };
  }
  if (href.endsWith(".ogg")) {
    return { assetType: "audio", mediaType: "audio/ogg" };
  }
  if (href.endsWith(".m4a")) {
    return { assetType: "audio", mediaType: "audio/aac" };
  }
  if (href.endsWith("midi") || href.endsWith(".mid")) {
    return { assetType: "audio", mediaType: "audio/midi" };
  }
  if (href.endsWith(".flac")) {
    return { assetType: "audio", mediaType: "audio/flac" };
  }
  return null;
}
var init_inferMediaType = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/inferMediaType.js"() {
    init_utils2();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/sortPageAssetsForEarlyHintsHeader.js
async function sortPageAssetsForEarlyHintsHeader(pageAssets, isProduction) {
  pageAssets.sort(higherFirst(({ assetType }) => {
    if (!isProduction && assetType === "script") {
      return 1;
    }
    let priority = 0;
    if (assetType === "style")
      return priority;
    priority--;
    if (assetType === "font")
      return priority;
    priority--;
    if (assetType === "image")
      return priority;
    priority--;
    if (assetType === "video")
      return priority;
    priority--;
    if (assetType === "audio")
      return priority;
    priority--;
    if (assetType !== "script")
      return priority;
    priority--;
    return priority;
  }));
}
var init_sortPageAssetsForEarlyHintsHeader = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets/sortPageAssetsForEarlyHintsHeader.js"() {
    init_utils2();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets.js
async function getPageAssets(pageContext, clientDependencies, clientEntries) {
  const globalContext = pageContext._globalContext;
  const { isProduction } = globalContext;
  const isDev = !isProduction;
  let assetUrls;
  let clientEntriesSrc;
  if (isDev) {
    const { viteDevServer } = globalContext;
    clientEntriesSrc = await Promise.all(clientEntries.map((clientEntry) => globalObject7.resolveClientEntriesDev(clientEntry, viteDevServer)));
    assetUrls = await retrieveAssetsDev(clientDependencies, viteDevServer);
  } else {
    const { assetsManifest } = globalContext;
    clientEntriesSrc = clientEntries.map((clientEntry) => resolveClientEntriesProd(clientEntry, assetsManifest));
    assetUrls = retrieveAssetsProd(clientDependencies, assetsManifest, pageContext._includeAssetsImportedByServer);
  }
  let pageAssets = [];
  unique([...clientEntriesSrc, ...assetUrls]).forEach((src) => {
    const { mediaType = null, assetType = null } = inferMediaType(src) || {};
    if (isDev && assetType === "style") {
      if (src.endsWith("?inline")) {
        return;
      }
      src = src + "?direct";
    }
    const isEntry = clientEntriesSrc.includes(src) || // Vite automatically injects CSS, not only in development, but also in production (albeit with a FOUC). Therefore, strictly speaking, CSS aren't entries. We still, however, set `isEntry: true` for CSS, in order to denote page assets that should absolutely be injected in the HTML, regardless of preload strategy (not injecting CSS leads to FOUC).
    assetType === "style";
    pageAssets.push({
      src,
      assetType,
      mediaType,
      isEntry
    });
  });
  pageAssets.forEach(({ src }) => {
    assert(1 === pageAssets.filter((p2) => p2.src === src).length);
  });
  pageAssets = pageAssets.map((pageAsset) => {
    const baseServerAssets = pageContext._baseAssets || pageContext._baseServer;
    pageAsset.src = prependBase(toPosixPath(pageAsset.src), baseServerAssets);
    return pageAsset;
  });
  await sortPageAssetsForEarlyHintsHeader(pageAssets, isProduction);
  return pageAssets;
}
function resolveClientEntriesProd(clientEntry, assetsManifest) {
  const { manifestEntry } = getManifestEntry(clientEntry, assetsManifest);
  assert(manifestEntry.isEntry || manifestEntry.isDynamicEntry || clientEntry.endsWith(".css"), { clientEntry });
  let { file } = manifestEntry;
  assert(!file.startsWith("/"));
  return "/" + file;
}
var globalObject7;
var init_getPageAssets = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/getPageAssets.js"() {
    init_utils2();
    init_retrieveAssetsDev();
    init_retrieveAssetsProd();
    init_inferMediaType();
    init_getManifestEntry();
    init_sortPageAssetsForEarlyHintsHeader();
    globalObject7 = getGlobalObject("renderPage/getPageAssets.ts", {
      resolveClientEntriesDev: null
    });
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/debugPageFiles.js
function debugPageFiles({ pageContext, isHtmlOnly, isClientRouting, pageFilesLoaded, pageFilesServerSide, pageFilesClientSide, clientEntries, clientDependencies }) {
  const debug5 = createDebugger("vike:pageFiles", { serialization: { emptyArray: "None" } });
  const padding = "   - ";
  debug5("All page files:", printPageFiles(pageContext._pageFilesAll, true));
  debug5(`URL:`, pageContext.urlOriginal);
  debug5.options({ serialization: { emptyArray: "No match" } })(`Routing:`, printRouteMatches(pageContext._debugRouteMatches));
  debug5(`pageId:`, pageContext.pageId);
  debug5("Page type:", isHtmlOnly ? "HTML-only" : "SSR/SPA");
  debug5(`Routing type:`, !isHtmlOnly && isClientRouting ? "Client Routing" : "Server Routing");
  debug5("Server-side page files:", printPageFiles(pageFilesLoaded));
  assert(samePageFiles(pageFilesLoaded, pageFilesServerSide));
  debug5("Client-side page files:", printPageFiles(pageFilesClientSide));
  debug5("Client-side entries:", clientEntries);
  debug5("Client-side dependencies:", clientDependencies);
  return;
  function printRouteMatches(debugRouteMatches) {
    if (debugRouteMatches === "ROUTING_ERROR") {
      return "Routing Failed";
    }
    if (debugRouteMatches === "CUSTOM_ROUTING") {
      return "Custom Routing";
    }
    return debugRouteMatches;
  }
  function printPageFiles(pageFiles, genericPageFilesLast = false) {
    if (pageFiles.length === 0) {
      return "None";
    }
    return "\n" + pageFiles.sort((p1, p2) => p1.filePath.localeCompare(p2.filePath)).sort(makeFirst((p2) => p2.isRendererPageFile ? !genericPageFilesLast : null)).sort(makeFirst((p2) => p2.isDefaultPageFile ? !genericPageFilesLast : null)).map((p2) => p2.filePath).map((s) => s.split("_default.page.").join(`${picocolors_default.blue("_default")}.page.`)).map((s) => s.split("/renderer/").join(`/${picocolors_default.red("renderer")}/`)).map((s) => padding + s).join("\n");
  }
}
function samePageFiles(pageFiles1, pageFiles2) {
  return pageFiles1.every((p1) => pageFiles2.some((p2) => p2.filePath === p1.filePath)) && pageFiles2.every((p2) => pageFiles1.some((p1) => p1.filePath === p2.filePath));
}
var init_debugPageFiles = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/debugPageFiles.js"() {
    init_picocolors();
    init_utils2();
  }
});

// node_modules/vike/dist/esm/shared/page-configs/findPageConfig.js
function findPageConfig(pageConfigs, pageId) {
  const result = pageConfigs.filter((p2) => p2.pageId === pageId);
  assert(result.length <= 1);
  const pageConfig = result[0] ?? null;
  return pageConfig;
}
var init_findPageConfig = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/findPageConfig.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/esm/shared/getPageFiles/analyzeClientSide.js
function analyzeClientSide(pageConfig, pageFilesAll, pageId) {
  if (pageConfig) {
    const isClientRouting = getConfigValueRuntime(pageConfig, "clientRouting", "boolean")?.value ?? false;
    const isClientRuntimeLoaded = getConfigValueRuntime(pageConfig, "isClientRuntimeLoaded", "boolean")?.value ?? false;
    return { isClientRuntimeLoaded, isClientRouting };
  } else {
    const { isHtmlOnly, isClientRouting } = analyzePageClientSide(pageFilesAll, pageId);
    return { isClientRuntimeLoaded: !isHtmlOnly, isClientRouting };
  }
}
var init_analyzeClientSide = __esm({
  "node_modules/vike/dist/esm/shared/getPageFiles/analyzeClientSide.js"() {
    init_getConfigValueRuntime();
    init_analyzePageClientSide();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/analyzePage.js
async function analyzePage(pageFilesAll, pageConfig, pageId, globalContext) {
  if (pageConfig) {
    const { isClientRuntimeLoaded, isClientRouting } = analyzeClientSide(pageConfig, pageFilesAll, pageId);
    const clientEntries = [];
    const clientFilePath = getConfigValueRuntime(pageConfig, "client", "string")?.value ?? null;
    if (clientFilePath)
      clientEntries.push(clientFilePath);
    if (isClientRuntimeLoaded)
      clientEntries.push(getVikeClientEntry(isClientRouting));
    const clientDependencies = [];
    clientDependencies.push({
      id: getVirtualFileIdPageConfigValuesAll(pageConfig.pageId, true),
      onlyAssets: isClientRuntimeLoaded ? false : true,
      eagerlyImported: false
    });
    if (!globalContext.isProduction) {
      clientDependencies.push({
        id: getVirtualFileIdPageConfigValuesAll(pageConfig.pageId, false),
        onlyAssets: true,
        eagerlyImported: false
      });
    }
    clientEntries.forEach((clientEntry) => {
      clientDependencies.push({
        id: clientEntry,
        onlyAssets: false,
        eagerlyImported: false
      });
    });
    return {
      isHtmlOnly: !isClientRuntimeLoaded,
      isClientRouting,
      clientEntries,
      clientDependencies,
      // pageFilesClientSide and pageFilesServerSide are only used for debugging
      pageFilesClientSide: [],
      pageFilesServerSide: []
    };
  } else {
    return analyzePageClientSide(pageFilesAll, pageId);
  }
}
var init_analyzePage = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/analyzePage.js"() {
    init_determineClientEntry();
    init_analyzePageClientSide();
    init_virtualFilePageConfigValuesAll();
    init_analyzeClientSide();
    init_getConfigValueRuntime();
  }
});

// node_modules/vike/dist/esm/shared/page-configs/loadConfigValues.js
async function loadConfigValues(pageConfig, isDev) {
  if ("isAllLoaded" in pageConfig && // We don't need to cache in dev, since Vite already caches the virtual module
  !isDev) {
    return pageConfig;
  }
  const { moduleId, moduleExports } = pageConfig.loadConfigValuesAll();
  const configValuesLoaded = await moduleExports;
  if (!configValuesLoaded)
    assert(false, { moduleExports, configValuesLoaded, moduleId });
  const configValues = parseConfigValuesSerialized(configValuesLoaded.configValuesSerialized);
  Object.assign(pageConfig.configValues, configValues);
  objectAssign(pageConfig, { isAllLoaded: true });
  return pageConfig;
}
var init_loadConfigValues = __esm({
  "node_modules/vike/dist/esm/shared/page-configs/loadConfigValues.js"() {
    init_utils5();
    init_parsePageConfigs();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/loadUserFilesServerSide.js
async function loadUserFilesServerSide(pageContext) {
  const pageConfig = findPageConfig(pageContext._pageConfigs, pageContext.pageId);
  const globalContext = pageContext._globalContext;
  const [{ pageFilesLoaded, pageContextExports }] = await Promise.all([
    loadPageUserFiles(pageContext._pageFilesAll, pageConfig, globalContext.pageConfigGlobal, pageContext.pageId, !globalContext.isProduction),
    analyzePageClientSideInit(pageContext._pageFilesAll, pageContext.pageId, { sharedPageFilesAlreadyLoaded: true })
  ]);
  const { isHtmlOnly, isClientRouting, clientEntries, clientDependencies, pageFilesClientSide, pageFilesServerSide } = await analyzePage(pageContext._pageFilesAll, pageConfig, pageContext.pageId, globalContext);
  const isV1Design = !!pageConfig;
  const passToClient = [];
  const errMsg = " should be an array of strings.";
  if (!isV1Design) {
    pageContextExports.exportsAll.passToClient?.forEach((e) => {
      assertUsage(hasProp(e, "exportValue", "string[]"), `${e.exportSource}${errMsg}`);
      passToClient.push(...e.exportValue);
    });
  } else {
    pageContextExports.configEntries.passToClient?.forEach((e) => {
      const { configValue } = e;
      assert(isArray(configValue));
      const vals = configValue.flat(1);
      assertUsage(isArrayOfStrings(vals), `${e.configDefinedAt}${errMsg}`);
      passToClient.push(...vals);
    });
  }
  const pageContextAddendum = {};
  objectAssign(pageContextAddendum, pageContextExports);
  objectAssign(pageContextAddendum, {
    Page: pageContextExports.exports.Page,
    _isHtmlOnly: isHtmlOnly,
    _passToClient: passToClient,
    _pageFilePathsLoaded: pageFilesLoaded.map((p2) => p2.filePath)
  });
  objectAssign(pageContextAddendum, {
    __getPageAssets: async () => {
      if ("_pageAssets" in pageContext) {
        return pageContext._pageAssets;
      } else {
        const pageAssets = await getPageAssets(pageContext, clientDependencies, clientEntries);
        objectAssign(pageContext, { _pageAssets: pageAssets });
        return pageContext._pageAssets;
      }
    }
  });
  Object.assign(pageContextAddendum, {
    _getPageAssets: async () => {
      assertWarning2(false, "pageContext._getPageAssets() deprecated, see https://vike.dev/preloading", {
        onlyOnce: true,
        showStackTrace: true
      });
      const pageAssetsOldFormat = [];
      (await pageContextAddendum.__getPageAssets()).forEach((p2) => {
        if (p2.assetType === "script" && p2.isEntry) {
          pageAssetsOldFormat.push({
            src: p2.src,
            preloadType: null,
            assetType: "script",
            mediaType: p2.mediaType
          });
        }
        pageAssetsOldFormat.push({
          src: p2.src,
          preloadType: p2.assetType,
          assetType: p2.assetType === "style" ? "style" : "preload",
          mediaType: p2.mediaType
        });
      });
      return pageAssetsOldFormat;
    }
  });
  {
    debugPageFiles({
      pageContext,
      isHtmlOnly,
      isClientRouting,
      pageFilesLoaded,
      pageFilesClientSide,
      pageFilesServerSide,
      clientEntries,
      clientDependencies
    });
  }
  return pageContextAddendum;
}
async function loadPageUserFiles(pageFilesAll, pageConfig, pageConfigGlobal, pageId, isDev) {
  const pageFilesServerSide = getPageFilesServerSide(pageFilesAll, pageId);
  const pageConfigLoaded = !pageConfig ? null : await loadConfigValues(pageConfig, isDev);
  await Promise.all(pageFilesServerSide.map((p2) => p2.loadFile?.()));
  const pageContextExports = getPageConfigUserFriendly_oldDesign(pageFilesServerSide, pageConfigLoaded, pageConfigGlobal);
  return {
    pageContextExports,
    pageFilesLoaded: pageFilesServerSide
  };
}
var init_loadUserFilesServerSide = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/loadUserFilesServerSide.js"() {
    init_getPageFiles();
    init_getPageConfigUserFriendly();
    init_analyzePageClientSide();
    init_utils2();
    init_getPageAssets();
    init_debugPageFiles();
    init_findPageConfig();
    init_analyzePage();
    init_loadConfigValues();
  }
});

// node_modules/vike/dist/esm/shared/preparePageContextForUserConsumption.js
function preparePageContextForUserConsumption(pageContext) {
  assert(pageContext.pageId);
  assert("config" in pageContext);
  assert("configEntries" in pageContext);
  addIs404ToPageProps(pageContext);
  if (!("_pageId" in pageContext)) {
    Object.defineProperty(pageContext, "_pageId", {
      get() {
        assertWarning2(false, "pageContext._pageId has been renamed to pageContext.pageId", {
          showStackTrace: true,
          onlyOnce: true
        });
        return pageContext.pageId;
      },
      enumerable: false
    });
  }
  sortPageContext(pageContext);
}
function sortPageContext(pageContext) {
  let descriptors = Object.getOwnPropertyDescriptors(pageContext);
  for (const key of Object.keys(pageContext))
    delete pageContext[key];
  descriptors = Object.fromEntries(Object.entries(descriptors).sort(([key1], [key2]) => compareString(key1, key2)));
  Object.defineProperties(pageContext, descriptors);
}
var init_preparePageContextForUserConsumption = __esm({
  "node_modules/vike/dist/esm/shared/preparePageContextForUserConsumption.js"() {
    init_utils5();
    init_addIs404ToPageProps();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/preparePageContextForUserConsumptionServerSide.js
function preparePageContextForUserConsumptionServerSide(pageContext) {
  assertPageContextUrl(pageContext);
  assert(isPlainObject(pageContext.routeParams));
  assert("Page" in pageContext);
  assert(typeof pageContext.isClientSideNavigation === "boolean");
  assert(pageContext._isPageContextObject);
  assert(pageContext.isClientSide === false);
  assert(typeof pageContext.isPrerendering === "boolean");
  preparePageContextForUserConsumption(pageContext);
}
var init_preparePageContextForUserConsumptionServerSide = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/preparePageContextForUserConsumptionServerSide.js"() {
    init_utils2();
    init_getPageContextUrlComputed();
    init_preparePageContextForUserConsumption();
  }
});

// node_modules/vike/dist/esm/shared/assertHookReturnedObject.js
function assertHookReturnedObject(obj, keysExpected, errPrefix) {
  assert(!errPrefix.endsWith(" "));
  const keysUnknown = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (!keysExpected.includes(key)) {
      keysUnknown.push(key);
    }
  }
  assertUsage(keysUnknown.length === 0, [
    errPrefix,
    "returned an object with following unknown keys:",
    stringifyStringArray(keysUnknown) + ".",
    "Only following keys are allowed:",
    stringifyStringArray(keysExpected) + "."
  ].join(" "));
}
var init_assertHookReturnedObject = __esm({
  "node_modules/vike/dist/esm/shared/assertHookReturnedObject.js"() {
    init_utils5();
  }
});

// node_modules/vike/dist/esm/shared/route/abort.js
function isAbortError(thing) {
  return typeof thing === "object" && thing !== null && stamp2 in thing;
}
function logAbortErrorHandled(err, isProduction, pageContext) {
  if (isProduction)
    return;
  const urlCurrent = pageContext._urlRewrite ?? pageContext.urlOriginal;
  assert(urlCurrent);
  const abortCall = err._pageContextAbort._abortCall;
  assert(abortCall);
  const hookLoc = isUserHookError(err);
  let thrownBy = "";
  if (hookLoc) {
    thrownBy = ` by ${picocolors_default.cyan(`${hookLoc.hookName}()`)} hook defined at ${hookLoc.hookFilePath}`;
  } else {
  }
  assertInfo(false, `${picocolors_default.cyan(abortCall)} thrown${thrownBy} while rendering ${picocolors_default.cyan(urlCurrent)}`, {
    onlyOnce: false
  });
}
function getPageContextFromAllRewrites(pageContextsFromRewrite) {
  assertNoInfiniteLoop(pageContextsFromRewrite);
  const pageContextFromAllRewrites = { _urlRewrite: null };
  pageContextsFromRewrite.forEach((pageContextFromRewrite) => {
    Object.assign(pageContextFromAllRewrites, pageContextFromRewrite);
  });
  return pageContextFromAllRewrites;
}
function assertNoInfiniteLoop(pageContextsFromRewrite) {
  const urlRewrites = [];
  pageContextsFromRewrite.forEach((pageContext) => {
    const urlRewrite = pageContext._urlRewrite;
    {
      const idx = urlRewrites.indexOf(urlRewrite);
      if (idx !== -1) {
        const loop = [...urlRewrites.slice(idx), urlRewrite].map((url3) => `render('${url3}')`).join(" => ");
        assertUsage(false, `Infinite loop of render() calls: ${loop}`);
      }
    }
    urlRewrites.push(urlRewrite);
  });
}
function assertNoInfiniteAbortLoop(rewriteCount, redirectCount) {
  const abortCalls = [
    // prettier-ignore
    // biome-ignore format:
    rewriteCount > 0 && picocolors_default.cyan("throw render('/some-url')"),
    redirectCount > 0 && picocolors_default.cyan("throw redirect('/some-url')")
  ].filter(Boolean).join(" and ");
  assertUsage(rewriteCount + redirectCount <= 7, `Maximum chain length of 7 ${abortCalls} exceeded. Did you define an infinite loop of ${abortCalls}?`);
}
var stamp2;
var init_abort = __esm({
  "node_modules/vike/dist/esm/shared/route/abort.js"() {
    init_executeHook();
    init_utils6();
    init_picocolors();
    stamp2 = "_isAbortError";
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/isNewError.js
function isNewError(errErrorPage, errNominalPage) {
  warnIfErrorIsNotObject(errErrorPage);
  return !isSameErrorMessage(errNominalPage, errErrorPage) || // Isn't this redudant/superfluous? I think we can remove this entire file and only use isSameErrorMessage() instead.
  !hasAlreadyLogged(errNominalPage);
}
function hasAlreadyLogged(err) {
  if (!isObject(err))
    return false;
  return globalObject8.wasAlreadyLogged.has(err);
}
function setAlreadyLogged(err) {
  if (!isObject(err))
    return;
  globalObject8.wasAlreadyLogged.add(err);
}
var globalObject8;
var init_isNewError = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/isNewError.js"() {
    init_utils2();
    globalObject8 = getGlobalObject("renderPage/isNewError.ts", {
      wasAlreadyLogged: /* @__PURE__ */ new WeakSet()
    });
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/logErrorHint.js
function logErrorHint(error) {
  const hint = getErrorHint(error);
  if (hint)
    logHint(hint);
}
function getErrorHint(error) {
  {
    const knownErr = isKnownError(error);
    if (knownErr) {
      if (knownErr.link) {
        return hintLinkPrefix + knownErr.link;
      } else {
        return hintDefault;
      }
    }
  }
  return null;
}
function logHint(hint) {
  hint = formatHintLog(hint);
  hint = picocolors_default.bold(hint);
  console.error(hint);
}
function isKnownError(error) {
  const anywhere = getAnywhere(error);
  const knownErr = [
    //
    ...errorsMisc,
    ...errorsReact,
    ...errorsCjsEsm_withPreciseLink,
    ...errorsCjsEsm
  ].find((knownErorr) => {
    if (!includesLowercase(anywhere, knownErorr.errMsg))
      return false;
    if (knownErorr.mustMentionNodeModules !== false && !includesLowercase(anywhere, "node_modules"))
      return false;
    return true;
  });
  if (!knownErr)
    return false;
  return knownErr;
}
function includesLowercase(str, substr) {
  if (substr instanceof RegExp) {
    let { flags: flags2 } = substr;
    if (!flags2.includes("i"))
      flags2 += "i";
    const regex = new RegExp(substr.source, flags2);
    return regex.test(str);
  }
  if (typeof substr === "string") {
    return str.toLowerCase().includes(substr.toLowerCase());
  }
  assert(false);
}
function getAnywhere(error) {
  const code = getErrCode(error);
  const message = getErrMessage(error);
  const stack = getErrStack(error);
  const anywhere = [code, message, stack].filter(Boolean).join("\n");
  return anywhere;
}
function getErrMessage(err) {
  if (!isObject(err))
    return null;
  if (!err.message)
    return null;
  if (typeof err.message !== "string")
    return null;
  return err.message;
}
function getErrCode(err) {
  if (!isObject(err))
    return null;
  if (!err.code)
    return null;
  if (typeof err.code !== "string")
    return null;
  return err.code;
}
function getErrStack(err) {
  if (!isObject(err))
    return null;
  if (!err.stack)
    return null;
  if (typeof err.stack !== "string")
    return null;
  return err.stack;
}
var hintDefault, hintLinkPrefix, errorsMisc, reactInvalidEelement, errorsReact, errorsCjsEsm_withPreciseLink, errorsCjsEsm;
var init_logErrorHint = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/logErrorHint.js"() {
    init_utils2();
    init_picocolors();
    hintDefault = "The error could be a CJS/ESM issue, see https://vike.dev/broken-npm-package";
    hintLinkPrefix = "To fix this error, see ";
    errorsMisc = [
      {
        errMsg: "window is not defined",
        link: "https://vike.dev/hints#window-is-not-defined",
        mustMentionNodeModules: false
      },
      {
        errMsg: "jsxDEV is not a function",
        link: "https://github.com/vikejs/vike/issues/1469#issuecomment-1919518096",
        mustMentionNodeModules: false
      },
      {
        // ```
        // Error [RollupError]: Could not resolve "../dist/client/assets.json" from "renderer/+onRenderHtml.tsx"
        // ```
        errMsg: "assets.json",
        link: "https://vike.dev/getGlobalContext",
        mustMentionNodeModules: false
      },
      {
        errMsg: "ERR_UNKNOWN_FILE_EXTENSION",
        link: "https://vike.dev/broken-npm-package#err-unknown-file-extension"
      }
    ];
    reactInvalidEelement = "https://vike.dev/broken-npm-package#react-invalid-component";
    errorsReact = [
      {
        errMsg: "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components)",
        link: reactInvalidEelement,
        // The stack trace can be user-land while the import is coming from node_modules
        mustMentionNodeModules: false
      },
      {
        errMsg: "Objects are not valid as a React child",
        link: reactInvalidEelement,
        mustMentionNodeModules: false
      },
      {
        // React's "Invalid hook call.", see https://github.com/vikejs/vike/discussions/1637#discussioncomment-9424712
        errMsg: "Cannot read properties of null (reading 'useContext')"
      }
    ];
    errorsCjsEsm_withPreciseLink = [
      {
        // `SyntaxError: Named export '${exportName}' not found. The requested module '${packageName}' is a CommonJS module, which may not support all module.exports as named exports.`
        errMsg: /Named export.*not found/i,
        link: "https://vike.dev/broken-npm-package#named-export-not-found",
        // It seems that this always points to an npm package import.
        mustMentionNodeModules: false
      }
    ];
    errorsCjsEsm = [
      { errMsg: "ERR_UNSUPPORTED_DIR_IMPORT" },
      { errMsg: "ERR_REQUIRE_ESM" },
      { errMsg: "Must use import" },
      { errMsg: /Cannot find \S+ '(\S+)' imported from (\S+)/ },
      { errMsg: "ERR_UNKNOWN_FILE_EXTENSION" },
      { errMsg: /Unknown file extension "\S+" for (\S+)/ },
      // `SyntaxError: Cannot use import statement outside a module`.
      {
        errMsg: "Cannot use import statement",
        // Since user code is always ESM, this error must always originate from an npm package.
        mustMentionNodeModules: false
      },
      { errMsg: "is not exported" },
      { errMsg: "Cannot read properties of undefined" },
      { errMsg: ".default is not" },
      // Using CJS inside ESM modules.
      { errMsg: "require is not a function" },
      { errMsg: "exports is not defined" },
      { errMsg: "module is not defined" },
      { errMsg: "not defined in ES" },
      { errMsg: "Unexpected token 'export'" },
      { errMsg: "Failed to resolve entry for package" }
    ];
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/loggerProd.js
function logErrorProd(err, _httpRquestId) {
  warnIfErrorIsNotObject(err);
  setAlreadyLogged(err);
  if (isAbortError(err)) {
    return;
  }
  const errStr = isObject(err) && "stack" in err ? String(err.stack) : String(err);
  console.error(picocolors_default.red(errStr));
  onRuntimeError(err);
}
function onRuntimeError(err) {
  logErrorHint(err);
}
var init_loggerProd = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/loggerProd.js"() {
    init_abort();
    init_isNewError();
    init_utils2();
    init_picocolors();
    init_logErrorHint();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/loggerRuntime.js
var logRuntimeError, logRuntimeInfo;
var init_loggerRuntime = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/loggerRuntime.js"() {
    init_loggerProd();
    logRuntimeInfo = null;
    logRuntimeError = // @ts-expect-error
    logRuntimeError ?? // Default
    logErrorProd;
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/executeOnRenderHtmlHook.js
async function executeOnRenderHtmlHook(pageContext) {
  const { renderHook, hookFn } = getRenderHook(pageContext);
  objectAssign(pageContext, { _renderHook: renderHook });
  preparePageContextForUserConsumptionServerSide(pageContext);
  const hookReturnValue = await executeHook(() => hookFn(pageContext), renderHook, pageContext);
  const { documentHtml, pageContextProvidedByRenderHook, pageContextPromise, injectFilter } = processHookReturnValue(hookReturnValue, renderHook);
  Object.assign(pageContext, pageContextProvidedByRenderHook);
  objectAssign(pageContext, { _pageContextPromise: pageContextPromise });
  const onErrorWhileStreaming = (err) => {
    logRuntimeError(err, pageContext._httpRequestId);
    if (!pageContext.errorWhileRendering) {
      pageContext.errorWhileRendering = err;
    }
  };
  const htmlRender = await renderDocumentHtml(documentHtml, pageContext, onErrorWhileStreaming, injectFilter);
  assert(typeof htmlRender === "string" || isStream(htmlRender));
  return { htmlRender, renderHook };
}
function getRenderHook(pageContext) {
  let hookFound;
  {
    let hook;
    let hookName = void 0;
    hook = getHook(pageContext, "onRenderHtml");
    if (hook) {
      hookName = "onRenderHtml";
    } else {
      hook = getHook(pageContext, "render");
      if (hook) {
        hookName = "render";
      }
    }
    if (hook) {
      assert(hookName);
      const { hookFilePath, hookFn, hookTimeout } = hook;
      hookFound = {
        hookFn,
        renderHook: { hookFn, hookFilePath, hookName, hookTimeout }
      };
    }
  }
  if (!hookFound) {
    const hookName = pageContext._pageConfigs.length > 0 ? "onRenderHtml" : "render";
    assertUsage(false, [
      `No ${hookName}() hook found, see https://vike.dev/${hookName}`
      /*
      'See https://vike.dev/render-modes for more information.',
      [
        // 'Loaded config files (none of them define the onRenderHtml() hook):',
        'Loaded server-side page files (none of them `export { render }`):',
        ...pageContext._pageFilePathsLoaded.map((f, i) => ` (${i + 1}): ${f}`)
      ].join('\n')
      */
    ].join(" "));
  }
  return hookFound;
}
function processHookReturnValue(hookReturnValue, renderHook) {
  let documentHtml;
  let pageContextPromise = null;
  let pageContextProvidedByRenderHook = null;
  let injectFilter = null;
  if (isDocumentHtml(hookReturnValue)) {
    documentHtml = hookReturnValue;
    return { documentHtml, pageContextProvidedByRenderHook, pageContextPromise, injectFilter };
  }
  const errPrefix = `The ${renderHook.hookName}() hook defined at ${renderHook.hookFilePath}`;
  const errSuffix = `a string generated with ${picocolors_default.cyan("escapeInject`<html>...</html>`")} or the value returned by ${picocolors_default.cyan("dangerouslySkipEscape()")}, see https://vike.dev/escapeInject`;
  if (typeof hookReturnValue === "string") {
    assertWarning2(false, [
      errPrefix,
      `returned a plain JavaScript string which is ${picocolors_default.red(picocolors_default.bold("dangerous"))}: it should instead return`,
      errSuffix
    ].join(" "), { onlyOnce: true });
    hookReturnValue = dangerouslySkipEscape(hookReturnValue);
  }
  const wrongReturnValue = `should return the value ${picocolors_default.cyan("documentHtml")} or an object ${picocolors_default.cyan("{ documentHtml }")} where ${picocolors_default.cyan("documentHtml")} is ${errSuffix}`;
  assertUsage(isObject(hookReturnValue), `${errPrefix} ${wrongReturnValue}`);
  assertHookReturnedObject(hookReturnValue, ["documentHtml", "pageContext", "injectFilter"], errPrefix);
  assertUsage(hookReturnValue.documentHtml, `${errPrefix} returned an object that is missing the ${picocolors_default.code("documentHtml")} property: it ${wrongReturnValue}`);
  if (hookReturnValue.injectFilter) {
    assertUsage(isCallable(hookReturnValue.injectFilter), "injectFilter should be a function");
    injectFilter = hookReturnValue.injectFilter;
  }
  {
    let val = hookReturnValue.documentHtml;
    const errBegin = `${errPrefix} returned ${picocolors_default.cyan("{ documentHtml }")}, but ${picocolors_default.cyan("documentHtml")}`;
    if (typeof val === "string") {
      assertWarning2(false, [
        errBegin,
        `is a plain JavaScript string which is ${picocolors_default.bold(picocolors_default.red("dangerous"))}: ${picocolors_default.cyan("documentHtml")} should be`,
        errSuffix
      ].join(" "), { onlyOnce: true });
      val = dangerouslySkipEscape(val);
    }
    assertUsage(isDocumentHtml(val), [errBegin, "should be", errSuffix].join(" "));
    documentHtml = val;
  }
  if (hookReturnValue.pageContext) {
    const val = hookReturnValue.pageContext;
    const errBegin = `${errPrefix} returned ${picocolors_default.cyan("{ pageContext }")}, but ${picocolors_default.cyan("pageContext")}`;
    if (isPromise(val) || isCallable(val)) {
      assertWarning2(!isPromise(val), `${errBegin} is a promise which is deprecated in favor of async functions, see https://vike.dev/streaming#initial-data-after-stream-end`, { onlyOnce: true });
      pageContextPromise = val;
    } else {
      assertUsage(isObject(val), `${errBegin} should be an object or an async function, see https://vike.dev/streaming#initial-data-after-stream-end`);
      assertPageContextProvidedByUser(val, renderHook);
      pageContextProvidedByRenderHook = val;
    }
  }
  return { documentHtml, pageContextProvidedByRenderHook, pageContextPromise, injectFilter };
}
var init_executeOnRenderHtmlHook = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/executeOnRenderHtmlHook.js"() {
    init_renderHtml();
    init_getHook();
    init_utils2();
    init_stream();
    init_assertPageContextProvidedByUser();
    init_preparePageContextForUserConsumptionServerSide();
    init_assertHookReturnedObject();
    init_loggerRuntime();
    init_picocolors();
    init_executeHook();
  }
});

// node_modules/vike/dist/esm/shared/assertOnBeforeRenderHookReturn.js
function assertOnBeforeRenderHookReturn(hookReturnValue, hookFilePath) {
  if (hookReturnValue === void 0 || hookReturnValue === null) {
    return;
  }
  const errPrefix = `The onBeforeRender() hook defined by ${hookFilePath}`;
  assertUsage(isPlainObject(hookReturnValue), `${errPrefix} should return a plain JavaScript object, ${picocolors_default.cyan("undefined")}, or ${picocolors_default.cyan("null")}`);
  assertHookReturnedObject(hookReturnValue, ["pageContext"], errPrefix);
  if (hookReturnValue.pageContext) {
    assertPageContextProvidedByUser(hookReturnValue["pageContext"], { hookName: "onBeforeRender", hookFilePath });
  }
}
var init_assertOnBeforeRenderHookReturn = __esm({
  "node_modules/vike/dist/esm/shared/assertOnBeforeRenderHookReturn.js"() {
    init_utils5();
    init_assertPageContextProvidedByUser();
    init_assertHookReturnedObject();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/executeOnBeforeRenderAndDataHooks.js
async function executeOnBeforeRenderAndDataHooks(pageContext) {
  if (pageContext._pageContextAlreadyProvidedByOnPrerenderHook) {
    return;
  }
  const dataHook = getHook(pageContext, "data");
  const onBeforeRenderHook = getHook(pageContext, "onBeforeRender");
  if (!dataHook && !onBeforeRenderHook) {
    return;
  }
  preparePageContextForUserConsumptionServerSide(pageContext);
  if (dataHook) {
    const hookResult = await executeHook(() => dataHook.hookFn(pageContext), dataHook, pageContext);
    const pageContextFromHook = {
      data: hookResult
    };
    Object.assign(pageContext, pageContextFromHook);
  }
  if (onBeforeRenderHook) {
    const hookResult = await executeHook(() => onBeforeRenderHook.hookFn(pageContext), onBeforeRenderHook, pageContext);
    assertOnBeforeRenderHookReturn(hookResult, onBeforeRenderHook.hookFilePath);
    const pageContextFromHook = hookResult?.pageContext;
    Object.assign(pageContext, pageContextFromHook);
  }
}
var init_executeOnBeforeRenderAndDataHooks = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/executeOnBeforeRenderAndDataHooks.js"() {
    init_getHook();
    init_preparePageContextForUserConsumptionServerSide();
    init_assertOnBeforeRenderHookReturn();
    init_executeHook();
  }
});

// node_modules/vike/dist/esm/shared/route/executeGuardHook.js
async function executeGuardHook(pageContext, prepareForUserConsumption) {
  let hook;
  if (pageContext._pageFilesAll.length > 0) {
    assert(pageContext._pageConfigs.length === 0);
    hook = findPageGuard(pageContext.pageId, pageContext._pageFilesAll);
  } else {
    hook = getHook(pageContext, "guard");
  }
  if (!hook)
    return;
  const guard = hook.hookFn;
  let pageContextForUserConsumption = pageContext;
  const res = prepareForUserConsumption(pageContext);
  if (res)
    pageContextForUserConsumption = res;
  const hookResult = await executeHook(() => guard(pageContextForUserConsumption), hook, pageContext);
  assertUsage(hookResult === void 0, `${errIntro} ${hook.hookFilePath} returns a value, but guard() shouldn't return any value`);
}
function findPageGuard(pageId, pageFilesAll) {
  const pageRouteFile = pageFilesAll.find((p2) => p2.pageId === pageId && p2.fileType === ".page.route");
  if (!pageRouteFile)
    return null;
  const { filePath, fileExports } = pageRouteFile;
  assert(fileExports);
  const hookFn = fileExports.guard;
  if (!hookFn)
    return null;
  const hookFilePath = filePath;
  const hookTimeout = getHookTimeoutDefault("guard");
  assertUsage(isCallable(hookFn), `${errIntro} ${hookFilePath} should be a function`);
  return { hookFn, hookName: "guard", hookFilePath, hookTimeout };
}
var errIntro;
var init_executeGuardHook = __esm({
  "node_modules/vike/dist/esm/shared/route/executeGuardHook.js"() {
    init_getHook();
    init_utils6();
    init_executeHook();
    errIntro = "The guard() hook defined by";
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/renderPageAlreadyRouted.js
async function renderPageAlreadyRouted(pageContext) {
  assert(hasProp(pageContext, "pageId", "string"));
  const isError = pageContext.is404 || !!pageContext.errorWhileRendering;
  assert(isError === (pageContext.pageId === getErrorPageId(pageContext._pageFilesAll, pageContext._pageConfigs)));
  objectAssign(pageContext, await loadUserFilesServerSide(pageContext));
  if (!isError) {
    await executeGuardHook(pageContext, (pageContext2) => preparePageContextForUserConsumptionServerSide(pageContext2));
  }
  if (!isError) {
    await executeOnBeforeRenderAndDataHooks(pageContext);
  } else {
    try {
      await executeOnBeforeRenderAndDataHooks(pageContext);
    } catch (err) {
      if (isNewError(err, pageContext.errorWhileRendering)) {
        logRuntimeError(err, pageContext._httpRequestId);
      }
    }
  }
  if (pageContext.isClientSideNavigation) {
    if (isError) {
      objectAssign(pageContext, { [isServerSideError]: true });
    }
    const pageContextSerialized = serializePageContextClientSide(pageContext);
    const httpResponse2 = await createHttpResponsePageContextJson(pageContextSerialized);
    objectAssign(pageContext, { httpResponse: httpResponse2 });
    return pageContext;
  }
  const renderHookResult = await executeOnRenderHtmlHook(pageContext);
  const { htmlRender, renderHook } = renderHookResult;
  const httpResponse = await createHttpResponsePage(htmlRender, renderHook, pageContext);
  objectAssign(pageContext, { httpResponse });
  return pageContext;
}
async function getPageContextInitEnhanced(pageContextInit, globalContext, isPrerendering, { ssr: { urlRewrite, urlHandler, isClientSideNavigation } = {
  urlRewrite: null,
  urlHandler: null,
  isClientSideNavigation: false
} } = {}) {
  assert(pageContextInit.urlOriginal);
  const pageContextInitEnhanced = createPageContext(pageContextInit, isPrerendering);
  objectAssign(pageContextInitEnhanced, pageContextInit);
  objectAssign(pageContextInitEnhanced, {
    _objectCreatedByVike: true,
    // The following is defined on `pageContext` because we can eventually make these non-global
    _baseServer: globalContext.baseServer,
    _baseAssets: globalContext.baseAssets,
    // TODO/now: add meta.default
    _includeAssetsImportedByServer: globalContext.config.includeAssetsImportedByServer ?? true,
    // TODO/soon: use GloablContext instead
    _pageFilesAll: globalContext.pageFilesAll,
    _pageConfigs: globalContext.pageConfigs,
    _pageConfigGlobal: globalContext.pageConfigGlobal,
    _allPageIds: globalContext.allPageIds,
    _pageRoutes: globalContext.pageRoutes,
    _onBeforeRouteHook: globalContext.onBeforeRouteHook,
    _globalContext: globalContext,
    // TODO/now: add PageContext['globalContext']
    /** @experimental This is a beta feature https://vike.dev/getGlobalContext */
    globalContext: globalContext.globalContext_public,
    _pageContextInit: pageContextInit,
    _urlRewrite: urlRewrite,
    _urlHandler: urlHandler,
    isClientSideNavigation
  });
  const pageContextUrlComputed = getPageContextUrlComputed(pageContextInitEnhanced);
  objectAssign(pageContextInitEnhanced, pageContextUrlComputed);
  {
    let headers;
    if (pageContextInit.headersOriginal) {
      headers = normalizeHeaders(pageContextInit.headersOriginal);
      assertUsage(!("headers" in pageContextInit), "You're defining pageContextInit.headersOriginal as well as pageContextInit.headers but you should only define pageContextInit.headersOriginal instead, see https://vike.dev/headers");
    } else if (pageContextInit.headers) {
      headers = pageContextInit.headers;
      assertWarning2(false, "Setting pageContextInit.headers is deprecated: set pageContextInit.headersOriginal instead, see https://vike.dev/headers", { onlyOnce: true });
    } else {
      headers = null;
    }
    objectAssign(pageContextInitEnhanced, { headers });
  }
  return pageContextInitEnhanced;
}
function createPageContext(pageContextInit, isPrerendering) {
  const pageContext = {
    _isPageContextObject: true,
    isClientSide: false,
    isPrerendering
  };
  objectAssign(pageContext, pageContextInit);
  return pageContext;
}
var init_renderPageAlreadyRouted = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/renderPageAlreadyRouted.js"() {
    init_error_page();
    init_renderHtml();
    init_utils2();
    init_serializePageContextClientSide();
    init_getPageContextUrlComputed();
    init_createHttpResponse();
    init_loadUserFilesServerSide();
    init_executeOnRenderHtmlHook();
    init_executeOnBeforeRenderAndDataHooks();
    init_loggerRuntime();
    init_isNewError();
    init_preparePageContextForUserConsumptionServerSide();
    init_executeGuardHook();
    init_picocolors();
    init_isServerSideError();
  }
});

// node_modules/vike/dist/esm/shared/getPageContextRequestUrl.js
var pageContextJsonFileExtension, doNotCreateExtraDirectory;
var init_getPageContextRequestUrl = __esm({
  "node_modules/vike/dist/esm/shared/getPageContextRequestUrl.js"() {
    init_urlToFile();
    pageContextJsonFileExtension = ".pageContext.json";
    doNotCreateExtraDirectory = false;
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/handlePageContextRequestUrl.js
function handlePageContextRequestUrl(url3) {
  if (!hasSuffix(url3)) {
    return { urlWithoutPageContextRequestSuffix: url3, isPageContextRequest: false };
  }
  return { urlWithoutPageContextRequestSuffix: removePageContextUrlSuffix(url3), isPageContextRequest: true };
}
function hasSuffix(url3) {
  const { pathnameOriginal, pathname } = parseUrl(url3, baseServer);
  assert(pathnameOriginal.endsWith(pageContextJsonFileExtension) === pathname.endsWith(pageContextJsonFileExtension), {
    url: url3
  });
  return pathnameOriginal.endsWith(pageContextJsonFileExtension);
}
function removePageContextUrlSuffix(url3) {
  const urlParsed = parseUrl(url3, baseServer);
  const { origin, pathnameOriginal, searchOriginal, hashOriginal } = urlParsed;
  assert(doNotCreateExtraDirectory === false);
  const urlSuffix = `/index${pageContextJsonFileExtension}`;
  assert(pathnameOriginal.endsWith(urlSuffix), { url: url3 });
  let pathnameModified = slice(pathnameOriginal, 0, -1 * urlSuffix.length);
  if (pathnameModified === "")
    pathnameModified = "/";
  assert(url3 === `${origin || ""}${pathnameOriginal}${searchOriginal || ""}${hashOriginal || ""}`, { url: url3 });
  return `${origin || ""}${pathnameModified}${searchOriginal || ""}${hashOriginal || ""}`;
}
var init_handlePageContextRequestUrl = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/handlePageContextRequestUrl.js"() {
    init_getPageContextRequestUrl();
    init_utils2();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/assertArguments.js
function assertArguments(...args) {
  const prefix2 = `${picocolors_default.code("renderPage(pageContextInit)")} (https://vike.dev/renderPage)`;
  const pageContextInit = args[0];
  assertUsage(pageContextInit !== void 0 && pageContextInit !== null, prefix2 + ` argument ${picocolors_default.cyan("pageContextInit")} is missing`, { showStackTrace: true });
  const len = args.length;
  assertUsage(len === 1, `${prefix2} called with ${len} arguments but renderPage() accepts only one argument.'`, {
    showStackTrace: true
  });
  assertUsage(isObject(pageContextInit), `${prefix2} called with ${picocolors_default.code(`typeof pageContextInit === ${JSON.stringify(typeof pageContextInit)}`)} but ${picocolors_default.code("pageContextInit")} should be an object.`, { showStackTrace: true });
  if ("url" in pageContextInit) {
    assertWarning2(false, "`pageContextInit.url` has been renamed to `pageContextInit.urlOriginal`: replace `renderPage({ url })` with `renderPage({ urlOriginal })`. (See https://vike.dev/migration/0.4.23 for more information.)", { showStackTrace: true, onlyOnce: true });
    pageContextInit.urlOriginal = pageContextInit.url;
    delete pageContextInit.url;
  }
  assert(!("url" in pageContextInit));
  assertUsage(hasProp(pageContextInit, "urlOriginal"), prefix2 + ` ${picocolors_default.cyan("pageContextInit")} is missing the property ${picocolors_default.cyan("pageContextInit.urlOriginal")}`, { showStackTrace: true });
  const { urlOriginal } = pageContextInit;
  assertUsage(typeof urlOriginal === "string", prefix2 + ` ${picocolors_default.cyan("pageContextInit.urlOriginal")} should be a string but ${picocolors_default.cyan(`typeof pageContextInit.urlOriginal === ${JSON.stringify(typeof urlOriginal)}`)}`, { showStackTrace: true });
  assertUsage(urlOriginal.startsWith("/") || urlOriginal.startsWith("https://") || urlOriginal.startsWith("http://"), prefix2 + ` ${picocolors_default.cyan("pageContextInit.urlOriginal")} should start with ${picocolors_default.cyan("/")} (e.g. ${picocolors_default.cyan("/product/42")}), ${picocolors_default.cyan("http://")}, or ${picocolors_default.cyan("https://")} (e.g. ${picocolors_default.cyan("https://example.com/product/42")}), but ${picocolors_default.cyan(`pageContextInit.urlOriginal === ${JSON.stringify(urlOriginal)}`)}`, { showStackTrace: true });
  const urlOriginalWithoutOrigin = urlOriginal.startsWith("http") ? urlOriginal : "http://fake-origin.example.org" + urlOriginal;
  try {
    new URL(urlOriginalWithoutOrigin);
  } catch (err) {
    assertUsage(false, prefix2 + ` ${picocolors_default.cyan("pageContextInit.urlOriginal")} should be a URL but ${picocolors_default.cyan(`pageContextInit.urlOriginal === ${JSON.stringify(urlOriginal)}`)}`, { showStackTrace: true });
  }
}
var init_assertArguments = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/assertArguments.js"() {
    init_utils2();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/shared/route/noRouteMatch.js
var noRouteMatch;
var init_noRouteMatch = __esm({
  "node_modules/vike/dist/esm/shared/route/noRouteMatch.js"() {
    noRouteMatch = "doesn't match the route of any of your pages";
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/log404/index.js
async function log404(pageContext) {
  const { urlPathname } = pageContext;
  const pageRoutes = pageContext._pageRoutes;
  assertUsage(
    pageRoutes.length > 0,
    "No page found."
    /* TODO/v1-release: use this
    'No page found. Create at least one /pages/some-page/+Page.js file.'
    */
  );
  const globalContext = pageContext._globalContext;
  if (!globalContext.isProduction && !isFileRequest(urlPathname) && !pageContext.isClientSideNavigation) {
    const routesInfo = getRoutesInfo(pageRoutes);
    let msg = `URL ${picocolors_default.cyan(urlPathname)} ${noRouteMatch}`;
    const outro = "See https://vike.dev/routing for more information about routing.";
    if (!routesInfo) {
      msg = `${msg}. ${picocolors_default.dim(outro)}`;
    } else {
      msg = `${msg}:
${routesInfo}
${outro}`;
    }
    assertInfo(false, msg, { onlyOnce: false });
  }
}
function getRoutesInfo(pageRoutes) {
  const entries = pageRoutes.map((pageRoute) => {
    let routeStr;
    let routeTypeSrc;
    let routeDefinedBy;
    if (pageRoute.routeType === "FILESYSTEM") {
      assert(pageRoute.routeFilesystemDefinedBy);
      routeDefinedBy = pageRoute.routeFilesystemDefinedBy;
    } else {
      assert(pageRoute.routeDefinedAtString);
      routeDefinedBy = pageRoute.routeDefinedAtString;
    }
    if (pageRoute.routeType === "STRING") {
      routeStr = pageRoute.routeString;
      routeTypeSrc = "Route String";
    } else if (pageRoute.routeType === "FUNCTION") {
      routeStr = String(pageRoute.routeFunction);
      routeTypeSrc = "Route Function";
    } else {
      routeStr = pageRoute.routeString;
      routeTypeSrc = "Filesystem Route";
    }
    assert(routeStr && routeTypeSrc && routeDefinedBy);
    return { routeStr, routeTypeSrc, routeDefinedBy };
  }).sort((e1, e2) => {
    if (e1.routeTypeSrc !== "Route Function" && e2.routeTypeSrc === "Route Function") {
      return -1;
    }
    if (e1.routeTypeSrc === "Route Function" && e2.routeTypeSrc !== "Route Function") {
      return 1;
    }
    return compareString(e1.routeStr, e2.routeStr);
  });
  const linesContent = [
    {
      routeStr: "ROUTE",
      routeTypeSrc: "TYPE",
      routeDefinedBy: "DEFINED BY"
    },
    ...entries
  ];
  const terminalWidth = getTerminalWidth() || 134;
  let width2 = Math.max(...linesContent.map(({ routeTypeSrc }) => stripAnsi(routeTypeSrc).length));
  let width3 = Math.max(...linesContent.map(({ routeDefinedBy }) => stripAnsi(routeDefinedBy).length));
  const width1_max = terminalWidth - width3 - width2 - // Total width of table border & padding
  10;
  if (width1_max < 10)
    return null;
  linesContent.forEach((lineContent) => {
    let { routeStr } = lineContent;
    if (lineContent.routeTypeSrc === "Route Function") {
      routeStr = truncateRouteFunction(routeStr, width1_max);
      assert(stripAnsi(routeStr).length <= width1_max);
    }
    lineContent.routeStr = routeStr;
  });
  let width1 = Math.max(...linesContent.map(({ routeStr }) => stripAnsi(routeStr).length));
  if (width1 > width1_max)
    return null;
  let lines = linesContent.map(({ routeStr, routeTypeSrc, routeDefinedBy }, i) => {
    let cell1 = padEnd(routeStr, width1 + (stripAnsi(routeStr).length - stripAnsi(routeStr).length));
    let cell2 = padEnd(routeTypeSrc, width2);
    let cell3 = padEnd(routeDefinedBy, width3);
    const isHeader = i === 0;
    if (isHeader) {
      cell1 = picocolors_default.dim(cell1);
      cell2 = picocolors_default.dim(cell2);
      cell3 = picocolors_default.dim(cell3);
    }
    let line = [cell1, cell2, cell3].join(picocolors_default.dim(" \u2502 "));
    line = picocolors_default.dim("\u2502 ") + line + picocolors_default.dim(" \u2502");
    return line;
  });
  width1 = width1 + 2;
  width2 = width2 + 2;
  width3 = width3 + 2;
  lines = [
    picocolors_default.dim(`\u250C${"\u2500".repeat(width1)}\u252C${"\u2500".repeat(width2)}\u252C${"\u2500".repeat(width3)}\u2510`),
    lines[0],
    picocolors_default.dim(`\u251C${"\u2500".repeat(width1)}\u253C${"\u2500".repeat(width2)}\u253C${"\u2500".repeat(width3)}\u2524`),
    ...lines.slice(1),
    picocolors_default.dim(`\u2514${"\u2500".repeat(width1)}\u2534${"\u2500".repeat(width2)}\u2534${"\u2500".repeat(width3)}\u2518`)
  ];
  lines.forEach((line) => {
    assert(stripAnsi(line).length <= terminalWidth);
  });
  return lines.join("\n");
}
function truncateRouteFunction(routeStr, lenMax) {
  routeStr = stripAnsi(routeStr);
  routeStr = removeNonAscii(routeStr);
  routeStr = routeStr.split(/\s/).filter(Boolean).join(" ");
  routeStr = truncateString(routeStr, lenMax);
  return routeStr;
}
function padEnd(str, width) {
  const padWidth = Math.max(0, width - stripAnsi(str).length);
  return str + "".padEnd(padWidth, " ");
}
function removeNonAscii(str) {
  return str.replace(/[^\x00-\x7F]/g, "");
}
function isFileRequest(urlPathname) {
  assert(urlPathname.startsWith("/"));
  const paths2 = urlPathname.split("/");
  const lastPath = paths2[paths2.length - 1];
  assert(typeof lastPath === "string");
  const parts = lastPath.split(".");
  if (parts.length < 2) {
    return false;
  }
  const fileExtension = parts[parts.length - 1];
  assert(typeof fileExtension === "string");
  return /^[a-z0-9]+$/.test(fileExtension);
}
var init_log404 = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/log404/index.js"() {
    init_noRouteMatch();
    init_utils2();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/isVikeConfigInvalid.js
var isVikeConfigInvalid;
var init_isVikeConfigInvalid = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/isVikeConfigInvalid.js"() {
    init_utils2();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/handleErrorWithoutErrorPage.js
async function handleErrorWithoutErrorPage(pageContext) {
  assert(pageContext.pageId === null);
  assert(pageContext.errorWhileRendering || pageContext.is404);
  {
    const isV1 = pageContext._pageConfigs.length > 0;
    await warnMissingErrorPage(isV1, pageContext._globalContext.isProduction);
  }
  if (!pageContext.isClientSideNavigation) {
    const httpResponse = createHttpResponseError(pageContext);
    objectAssign(pageContext, { httpResponse });
    return pageContext;
  } else {
    const __getPageAssets = async () => [];
    objectAssign(pageContext, { __getPageAssets });
    const httpResponse = await createHttpResponsePage((0, import_stringify2.stringify)({ serverSideError: true }), null, pageContext);
    objectAssign(pageContext, { httpResponse });
    return pageContext;
  }
}
async function warnMissingErrorPage(isV1, isProduction) {
  if (!isProduction) {
    const msg = [
      `No ${isV1 ? "error page" : picocolors_default.cyan("_error.page.js")} found,`,
      "we recommend defining one",
      "https://vike.dev/error-page"
    ].join(" ");
    assertWarning2(false, msg, { onlyOnce: true });
  }
}
var import_stringify2;
var init_handleErrorWithoutErrorPage = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/handleErrorWithoutErrorPage.js"() {
    import_stringify2 = __toESM(require_stringify(), 1);
    init_utils2();
    init_createHttpResponse();
    init_picocolors();
  }
});

// node_modules/vike/dist/esm/shared/route/resolveUrlPathname.js
function resolveUrlPathname(routeString, routeParams) {
  let parts = [{ val: routeString, type: "ROUTE_STRING" }];
  Object.entries(routeParams).forEach(([key, val]) => {
    if (key.startsWith("*")) {
      assert(key === "*" || /\d+/.test(key.slice(1)));
      assertUsage(key === "*", "Resolving URL with multiple globs isn't implemented yet");
    } else {
      key = `@${key}`;
    }
    parts = parts.map((part) => {
      if (part.type === "URL") {
        return part;
      } else {
        return part.val.split(key).map((rest, i) => {
          const partURL = { val, type: "URL" };
          const partRouteString = { val: rest, type: "ROUTE_STRING" };
          return i === 0 ? [partRouteString] : [partURL, partRouteString];
        }).flat();
      }
    }).flat();
  });
  const urlPathname = parts.map((p2) => p2.val).join("");
  return urlPathname;
}
var init_resolveUrlPathname = __esm({
  "node_modules/vike/dist/esm/shared/route/resolveUrlPathname.js"() {
    init_assertIsNotBrowser();
    init_utils5();
    assertIsNotBrowser();
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage/resolveRedirects.js
function resolveRedirects(redirectsAll, urlPathname) {
  const redirects = merge(redirectsAll);
  for (const [urlSource, urlTarget] of Object.entries(redirects)) {
    const urlResolved = resolveRouteStringRedirect(urlSource, urlTarget, urlPathname);
    if (urlResolved)
      return urlResolved;
  }
  return null;
}
function resolveRouteStringRedirect(urlSource, urlTarget, urlPathname) {
  assertRouteString(urlSource, `${redirectsErrPrefix} Invalid`);
  assertUsageUrlRedirectTarget(urlTarget, `${redirectsErrPrefix} The URL redirection target`, true);
  assertParams(urlSource, urlTarget);
  const match = resolveRouteString(urlSource, urlPathname);
  if (!match)
    return null;
  const urlResolved = resolveUrlPathname(urlTarget, match.routeParams);
  if (urlResolved === urlPathname)
    return null;
  assert(isUrlRedirectTarget(urlResolved));
  return urlResolved;
}
function assertParams(urlSource, urlTarget) {
  const routeSegments = urlTarget.split("/");
  routeSegments.forEach((routeSegment) => {
    if (routeSegment.startsWith("@") || routeSegment.startsWith("*")) {
      const segments = urlSource.split("/");
      assertUsage(segments.includes(routeSegment), `${redirectsErrPrefix} The redirection source URL ${picocolors_default.string(urlSource)} is missing the URL parameter ${picocolors_default.string(routeSegment)} used by the redirection target URL ${picocolors_default.string(urlTarget)}`);
    }
  });
}
function merge(objs) {
  const obj = {};
  objs.forEach((e) => {
    Object.assign(obj, e);
  });
  return obj;
}
var redirectsErrPrefix;
var init_resolveRedirects = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage/resolveRedirects.js"() {
    init_assertIsNotBrowser();
    init_utils5();
    init_resolveUrlPathname();
    init_resolveRouteString();
    init_picocolors();
    assertIsNotBrowser();
    redirectsErrPrefix = "[+redirects]";
  }
});

// node_modules/vike/dist/esm/node/runtime/renderPage.js
async function renderPage(pageContextInit) {
  assertArguments(...arguments);
  assert(hasProp(pageContextInit, "urlOriginal", "string"));
  assertIsUrl(pageContextInit.urlOriginal);
  onSetupRuntime();
  const pageContextInvalidRequest = renderInvalidRequest(pageContextInit);
  if (pageContextInvalidRequest)
    return pageContextInvalidRequest;
  const httpRequestId = getRequestId();
  const urlOriginalPretty = getUrlPretty(pageContextInit.urlOriginal);
  logHttpRequest(urlOriginalPretty, httpRequestId);
  const { pageContextReturn } = await asyncHookWrapper(httpRequestId, () => renderPageAndPrepare(pageContextInit, httpRequestId));
  logHttpResponse(urlOriginalPretty, httpRequestId, pageContextReturn);
  checkType(pageContextReturn);
  assert(pageContextReturn.httpResponse);
  return pageContextReturn;
}
async function renderPageAndPrepare(pageContextInit, httpRequestId) {
  if (isVikeConfigInvalid) {
    if (1 < 2) {
      return renderInvalidVikeConfig(isVikeConfigInvalid.err, pageContextInit, httpRequestId);
    }
  }
  try {
    await initGlobalContext_renderPage();
  } catch (err) {
    assert(!isAbortError(err));
    logRuntimeError(err, httpRequestId);
    const pageContextWithError = getPageContextHttpResponseError(err, pageContextInit, null);
    return pageContextWithError;
  }
  if (isVikeConfigInvalid) {
    return renderInvalidVikeConfig(isVikeConfigInvalid.err, pageContextInit, httpRequestId);
  } else {
  }
  const globalContext = await getGlobalContextInternal();
  {
    const pageContextHttpResponse = await checkBaseUrl(pageContextInit, globalContext);
    if (pageContextHttpResponse)
      return pageContextHttpResponse;
  }
  {
    const pageContextHttpResponse = await normalizeUrl(pageContextInit, globalContext, httpRequestId);
    if (pageContextHttpResponse)
      return pageContextHttpResponse;
  }
  {
    const pageContextHttpResponse = await getPermanentRedirect(pageContextInit, globalContext, httpRequestId);
    if (pageContextHttpResponse)
      return pageContextHttpResponse;
  }
  return await renderPageAlreadyPrepared(pageContextInit, globalContext, httpRequestId, []);
}
async function renderPageAlreadyPrepared(pageContextInit, globalContext, httpRequestId, pageContextsFromRewrite) {
  assertNoInfiniteAbortLoop(
    pageContextsFromRewrite.length,
    // There doesn't seem to be a way to count the number of HTTP redirects (vike don't have access to the HTTP request headers/cookies)
    // https://stackoverflow.com/questions/9683007/detect-infinite-http-redirect-loop-on-server-side
    0
  );
  let pageContextNominalPageSuccess;
  const pageContextFromAllRewrites = getPageContextFromAllRewrites(pageContextsFromRewrite);
  const pageContextNominalPageInit = await getPageContextInitEnhancedSSR(pageContextInit, globalContext, pageContextFromAllRewrites._urlRewrite, httpRequestId);
  objectAssign(pageContextNominalPageInit, pageContextFromAllRewrites);
  let errNominalPage;
  {
    try {
      pageContextNominalPageSuccess = await renderPageNominal(pageContextNominalPageInit);
    } catch (err) {
      errNominalPage = err;
      assert(errNominalPage);
      logRuntimeError(errNominalPage, httpRequestId);
    }
    if (!errNominalPage) {
      assert(pageContextNominalPageSuccess === pageContextNominalPageInit);
    }
  }
  if (pageContextNominalPageSuccess && "is404" in pageContextNominalPageSuccess && pageContextNominalPageSuccess.is404 === true) {
    await log404(pageContextNominalPageSuccess);
  }
  if (errNominalPage === void 0) {
    assert(pageContextNominalPageSuccess);
    return pageContextNominalPageSuccess;
  } else {
    assert(errNominalPage);
    assert(pageContextNominalPageSuccess === void 0);
    assert(pageContextNominalPageInit);
    assert(hasProp(pageContextNominalPageInit, "urlOriginal", "string"));
    const pageContextErrorPageInit = await getPageContextErrorPageInit(pageContextInit, globalContext, errNominalPage, pageContextNominalPageInit, httpRequestId);
    if (isAbortError(errNominalPage)) {
      const handled = await handleAbortError(errNominalPage, pageContextsFromRewrite, pageContextInit, pageContextNominalPageInit, httpRequestId, pageContextErrorPageInit, globalContext);
      if (handled.pageContextReturn) {
        return handled.pageContextReturn;
      } else {
      }
      Object.assign(pageContextErrorPageInit, handled.pageContextAbort);
    }
    {
      const errorPageId = getErrorPageId(globalContext.pageFilesAll, globalContext.pageConfigs);
      if (!errorPageId) {
        objectAssign(pageContextErrorPageInit, { pageId: null });
        return handleErrorWithoutErrorPage(pageContextErrorPageInit);
      } else {
        objectAssign(pageContextErrorPageInit, { pageId: errorPageId });
      }
    }
    let pageContextErrorPage;
    try {
      pageContextErrorPage = await renderPageAlreadyRouted(pageContextErrorPageInit);
    } catch (errErrorPage) {
      if (isAbortError(errErrorPage)) {
        const handled = await handleAbortError(errErrorPage, pageContextsFromRewrite, pageContextInit, pageContextNominalPageInit, httpRequestId, pageContextErrorPageInit, globalContext);
        if (!handled.pageContextReturn) {
          const pageContextAbort = errErrorPage._pageContextAbort;
          assertWarning2(false, `Failed to render error page because ${picocolors_default.cyan(pageContextAbort._abortCall)} was called: make sure ${picocolors_default.cyan(pageContextAbort._abortCaller)} doesn't occur while the error page is being rendered.`, { onlyOnce: false });
          const pageContextHttpWithError = getPageContextHttpResponseError(errNominalPage, pageContextInit, pageContextErrorPageInit);
          return pageContextHttpWithError;
        }
        return handled.pageContextReturn;
      }
      if (isNewError(errErrorPage, errNominalPage)) {
        logRuntimeError(errErrorPage, httpRequestId);
      }
      const pageContextWithError = getPageContextHttpResponseError(errNominalPage, pageContextInit, pageContextErrorPageInit);
      return pageContextWithError;
    }
    return pageContextErrorPage;
  }
}
function logHttpRequest(urlOriginal, httpRequestId) {
  logRuntimeInfo?.(getRequestInfoMessage(urlOriginal), httpRequestId, "info");
}
function getRequestInfoMessage(urlOriginal) {
  return `HTTP request: ${prettyUrl(urlOriginal)}`;
}
function logHttpResponse(urlOriginalPretty, httpRequestId, pageContextReturn) {
  const statusCode = pageContextReturn.httpResponse?.statusCode ?? null;
  let msg;
  let isNominal;
  {
    const { errorWhileRendering } = pageContextReturn;
    const isSkipped = statusCode === null && !errorWhileRendering;
    if (isSkipped) {
      assert(errorWhileRendering === null || errorWhileRendering === void 0);
      msg = `HTTP response ${prettyUrl(urlOriginalPretty)} ${picocolors_default.dim("null")}`;
      isNominal = true;
    } else {
      const isSuccess = statusCode !== null && statusCode >= 200 && statusCode <= 399;
      isNominal = isSuccess || statusCode === 404;
      const color = (s) => picocolors_default.bold(isSuccess ? picocolors_default.green(String(s)) : picocolors_default.red(String(s)));
      const isRedirect = statusCode && 300 <= statusCode && statusCode <= 399;
      const type = isRedirect ? "redirect" : "response";
      if (isRedirect) {
        assert(pageContextReturn.httpResponse);
        const headerRedirect = pageContextReturn.httpResponse.headers.slice().reverse().find((header) => header[0] === "Location");
        assert(headerRedirect);
        const urlRedirect = headerRedirect[1];
        urlOriginalPretty = urlRedirect;
      }
      msg = `HTTP ${type} ${prettyUrl(urlOriginalPretty)} ${color(statusCode ?? "ERR")}`;
    }
  }
  logRuntimeInfo?.(msg, httpRequestId, isNominal ? "info" : "error");
}
function prettyUrl(url3) {
  return picocolors_default.bold(decodeURI(url3));
}
function getPageContextHttpResponseError(err, pageContextInit, pageContext) {
  const pageContextWithError = createPageContext(pageContextInit, false);
  const httpResponse = createHttpResponseError(pageContext);
  objectAssign(pageContextWithError, {
    httpResponse,
    errorWhileRendering: err
  });
  return pageContextWithError;
}
async function renderPageNominal(pageContext) {
  objectAssign(pageContext, { errorWhileRendering: null });
  {
    const pageContextFromRoute = await route(pageContext);
    objectAssign(pageContext, pageContextFromRoute);
    objectAssign(pageContext, { is404: pageContext.pageId ? null : true });
    if (pageContext.pageId === null) {
      const errorPageId = getErrorPageId(pageContext._pageFilesAll, pageContext._pageConfigs);
      if (!errorPageId) {
        assert(hasProp(pageContext, "pageId", "null"));
        return handleErrorWithoutErrorPage(pageContext);
      }
      objectAssign(pageContext, { pageId: errorPageId });
    }
  }
  assert(hasProp(pageContext, "pageId", "string"));
  assert(pageContext.errorWhileRendering === null);
  const pageContextAfterRender = await renderPageAlreadyRouted(pageContext);
  assert(pageContext === pageContextAfterRender);
  return pageContextAfterRender;
}
async function getPageContextErrorPageInit(pageContextInit, globalContext, errNominalPage, pageContextNominalPagePartial, httpRequestId) {
  const pageContext = await getPageContextInitEnhancedSSR(pageContextInit, globalContext, null, httpRequestId);
  assert(errNominalPage);
  objectAssign(pageContext, {
    is404: false,
    errorWhileRendering: errNominalPage,
    routeParams: {}
  });
  objectAssign(pageContext, {
    _debugRouteMatches: pageContextNominalPagePartial._debugRouteMatches || "ROUTING_ERROR"
  });
  assert(pageContext.errorWhileRendering);
  return pageContext;
}
async function getPageContextInitEnhancedSSR(pageContextInit, globalContext, urlRewrite, httpRequestId) {
  const { isClientSideNavigation, _urlHandler } = handlePageContextUrl(pageContextInit.urlOriginal);
  const pageContextInitEnhanced = await getPageContextInitEnhanced(pageContextInit, globalContext, false, {
    ssr: {
      urlRewrite,
      urlHandler: _urlHandler,
      isClientSideNavigation
    }
  });
  objectAssign(pageContextInitEnhanced, { _httpRequestId: httpRequestId });
  return pageContextInitEnhanced;
}
function handlePageContextUrl(urlOriginal) {
  const { isPageContextRequest } = handlePageContextRequestUrl(urlOriginal);
  return {
    isClientSideNavigation: isPageContextRequest,
    _urlHandler: (url3) => handlePageContextRequestUrl(url3).urlWithoutPageContextRequestSuffix
  };
}
function getRequestId() {
  const httpRequestId = ++globalObject9.httpRequestsCount;
  assert(httpRequestId >= 1);
  return httpRequestId;
}
function assertIsUrl(urlOriginal) {
  assertUsage(isUrl(urlOriginal), `${picocolors_default.code("renderPage(pageContextInit)")} (https://vike.dev/renderPage) called with ${picocolors_default.code(`pageContextInit.urlOriginal===${JSON.stringify(urlOriginal)}`)} which isn't a valid URL.`);
}
function assertIsNotViteRequest(urlPathname, urlOriginal) {
  const isViteRequest = urlPathname.startsWith("/@vite/client") || urlPathname.startsWith("/@fs/") || urlPathname.startsWith("/__vite_ping");
  if (!isViteRequest)
    return;
  assertUsage(false, `${picocolors_default.code("renderPage(pageContextInit)")} called with ${picocolors_default.code(`pageContextInit.urlOriginal===${JSON.stringify(urlOriginal)}`)} which is unexpected because the URL ${picocolors_default.bold(urlOriginal)} should have already been handled by the development middleware: make sure the ${picocolors_default.cyan("createDevMiddleware()")} middleware is executed *before* the ${picocolors_default.cyan("renderPage()")} middleware, see ${picocolors_default.underline("https://vike.dev/renderPage")}`);
}
async function normalizeUrl(pageContextInit, globalContext, httpRequestId) {
  const { trailingSlash, disableUrlNormalization } = globalContext.config;
  if (disableUrlNormalization)
    return null;
  const { urlOriginal } = pageContextInit;
  const { isPageContextRequest } = handlePageContextRequestUrl(urlOriginal);
  if (isPageContextRequest)
    return null;
  const urlNormalized = normalizeUrlPathname(urlOriginal, trailingSlash ?? false, globalContext.baseServer);
  if (!urlNormalized)
    return null;
  logRuntimeInfo?.(`URL normalized from ${picocolors_default.cyan(urlOriginal)} to ${picocolors_default.cyan(urlNormalized)} (https://vike.dev/url-normalization)`, httpRequestId, "info");
  const httpResponse = createHttpResponseRedirect({ url: urlNormalized, statusCode: 301 }, pageContextInit);
  const pageContextHttpResponse = createPageContext(pageContextInit, false);
  objectAssign(pageContextHttpResponse, { httpResponse });
  return pageContextHttpResponse;
}
async function getPermanentRedirect(pageContextInit, globalContext, httpRequestId) {
  const urlWithoutBase = removeBaseServer2(pageContextInit.urlOriginal, globalContext.baseServer);
  let origin = null;
  let urlTargetExternal = null;
  let urlTarget = modifyUrlPathname(urlWithoutBase, (urlPathname) => {
    const urlTarget2 = resolveRedirects(globalContext.config.redirects ?? [], urlPathname);
    if (urlTarget2 === null)
      return null;
    if (!isUrl(urlTarget2)) {
      assert(isUri(urlTarget2));
      urlTargetExternal = urlTarget2;
      return null;
    }
    const { urlModified, origin: origin_ } = removeUrlOrigin(urlTarget2);
    origin = origin_;
    return urlModified;
  });
  if (urlTargetExternal) {
    urlTarget = urlTargetExternal;
  } else {
    let originChanged = false;
    if (origin) {
      const urlModified = setUrlOrigin(urlTarget, origin);
      if (urlModified !== false) {
        originChanged = true;
        urlTarget = urlModified;
      }
    }
    if (normalize2(urlTarget) === normalize2(urlWithoutBase))
      return null;
    if (!originChanged)
      urlTarget = prependBase(urlTarget, globalContext.baseServer);
    assert(urlTarget !== pageContextInit.urlOriginal);
  }
  logRuntimeInfo?.(`Permanent redirection defined by config.redirects (https://vike.dev/redirects)`, httpRequestId, "info");
  const httpResponse = createHttpResponseRedirect({ url: urlTarget, statusCode: 301 }, pageContextInit);
  const pageContextHttpResponse = createPageContext(pageContextInit, false);
  objectAssign(pageContextHttpResponse, { httpResponse });
  return pageContextHttpResponse;
}
function normalize2(url3) {
  return url3 || "/";
}
async function handleAbortError(errAbort, pageContextsFromRewrite, pageContextInit, pageContextNominalPageInit, httpRequestId, pageContextErrorPageInit, globalContext) {
  logAbortErrorHandled(errAbort, globalContext.isProduction, pageContextNominalPageInit);
  const pageContextAbort = errAbort._pageContextAbort;
  let pageContextSerialized;
  if (pageContextNominalPageInit.isClientSideNavigation) {
    if (pageContextAbort.abortStatusCode) {
      const errorPageId = getErrorPageId(globalContext.pageFilesAll, globalContext.pageConfigs);
      const abortCall = pageContextAbort._abortCall;
      assert(abortCall);
      assertUsage(errorPageId, `You called ${picocolors_default.cyan(abortCall)} but you didn't define an error page, make sure to define one https://vike.dev/error-page`);
      const pageContext = createPageContext({}, false);
      objectAssign(pageContext, { pageId: errorPageId });
      objectAssign(pageContext, pageContextAbort);
      objectAssign(pageContext, pageContextErrorPageInit, true);
      objectAssign(pageContext, await loadUserFilesServerSide(pageContext));
      pageContextSerialized = serializePageContextClientSide(pageContext);
    } else {
      pageContextSerialized = serializePageContextAbort(pageContextAbort);
    }
    const httpResponse = await createHttpResponsePageContextJson(pageContextSerialized);
    const pageContextReturn = { httpResponse };
    return { pageContextReturn };
  }
  if (pageContextAbort._urlRewrite) {
    const pageContextReturn = await renderPageAlreadyPrepared(pageContextInit, globalContext, httpRequestId, [
      ...pageContextsFromRewrite,
      pageContextAbort
    ]);
    Object.assign(pageContextReturn, pageContextAbort);
    return { pageContextReturn };
  }
  if (pageContextAbort._urlRedirect) {
    const pageContextReturn = createPageContext(pageContextInit, false);
    objectAssign(pageContextReturn, pageContextAbort);
    const httpResponse = createHttpResponseRedirect(pageContextAbort._urlRedirect, pageContextInit);
    objectAssign(pageContextReturn, { httpResponse });
    return { pageContextReturn };
  }
  assert(pageContextAbort.abortStatusCode);
  return { pageContextAbort };
}
async function checkBaseUrl(pageContextInit, globalContext) {
  const { baseServer: baseServer2 } = globalContext;
  const { urlOriginal } = pageContextInit;
  const { isBaseMissing } = parseUrl(urlOriginal, baseServer2);
  if (!isBaseMissing)
    return;
  const pageContext = createPageContext(pageContextInit, false);
  const httpResponse = createHttpResponseBaseIsMissing(urlOriginal, baseServer2);
  objectAssign(pageContext, {
    httpResponse,
    isBaseMissing: true
  });
  checkType(pageContext);
  return pageContext;
}
function renderInvalidRequest(pageContextInit) {
  const urlPathnameWithBase = parseUrl(pageContextInit.urlOriginal, "/").pathname;
  assertIsNotViteRequest(urlPathnameWithBase, pageContextInit.urlOriginal);
  if (urlPathnameWithBase.endsWith("/favicon.ico")) {
    const pageContext = createPageContext(pageContextInit, false);
    const httpResponse = createHttpResponseFavicon404();
    objectAssign(pageContext, { httpResponse });
    checkType(pageContext);
    return pageContext;
  }
  return null;
}
function renderInvalidVikeConfig(err, pageContextInit, httpRequestId) {
  logRuntimeInfo?.(picocolors_default.bold(picocolors_default.red("Error while loading a Vike config file, see error above.")), httpRequestId, "error");
  const pageContextWithError = getPageContextHttpResponseError(err, pageContextInit, null);
  return pageContextWithError;
}
var globalObject9, asyncHookWrapper;
var init_renderPage = __esm({
  "node_modules/vike/dist/esm/node/runtime/renderPage.js"() {
    init_renderPageAlreadyRouted();
    init_route();
    init_utils2();
    init_abort();
    init_globalContext();
    init_handlePageContextRequestUrl();
    init_createHttpResponse();
    init_loggerRuntime();
    init_isNewError();
    init_assertArguments();
    init_log404();
    init_isVikeConfigInvalid();
    init_picocolors();
    init_serializePageContextClientSide();
    init_error_page();
    init_handleErrorWithoutErrorPage();
    init_loadUserFilesServerSide();
    init_resolveRedirects();
    globalObject9 = getGlobalObject("runtime/renderPage.ts", {
      httpRequestsCount: 0
    });
    asyncHookWrapper = async (_httpRequestId, ret) => ({
      pageContextReturn: await ret()
    });
  }
});

// node_modules/vike/dist/esm/node/runtime-dev/index.js
var init_runtime_dev = __esm({
  "node_modules/vike/dist/esm/node/runtime-dev/index.js"() {
  }
});

// node_modules/vike/dist/esm/node/runtime/html/injectAssets/injectAssets__public.js
var init_injectAssets_public = __esm({
  "node_modules/vike/dist/esm/node/runtime/html/injectAssets/injectAssets__public.js"() {
    init_utils2();
    init_injectAssets();
  }
});

// node_modules/vike/dist/esm/node/createPageRenderer.js
var init_createPageRenderer = __esm({
  "node_modules/vike/dist/esm/node/createPageRenderer.js"() {
    init_renderPage();
    init_utils2();
  }
});

// node_modules/vike/dist/esm/node/runtime/index-common.js
var init_index_common = __esm({
  "node_modules/vike/dist/esm/node/runtime/index-common.js"() {
    init_renderPage();
    init_renderHtml();
    init_stream();
    init_utils2();
    init_globalContext();
    init_runtime_dev();
    init_injectAssets_public();
    init_createPageRenderer();
  }
});

// node_modules/vike/dist/esm/node/runtime/index.js
var init_runtime2 = __esm({
  "node_modules/vike/dist/esm/node/runtime/index.js"() {
    init_isBrowser();
    init_assert();
    init_index_common();
    assertUsage(!isBrowser(), "It's forbidden to `import { something } from 'vike/server'` on the client-side: the module 'vike/server' is a server-only module.", { showStackTrace: true });
  }
});

// dist/server/entries/src_pages_index.mjs
var src_pages_index_exports = {};
__export(src_pages_index_exports, {
  configValuesSerialized: () => configValuesSerialized
});
import "lodash";
import "lodash_exporter_1";
var onRenderHtml, import1, Page, import2, configValuesSerialized;
var init_src_pages_index = __esm({
  "dist/server/entries/src_pages_index.mjs"() {
    "use strict";
    init_runtime2();
    onRenderHtml = () => {
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
    import1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      onRenderHtml
    }, Symbol.toStringTag, { value: "Module" }));
    Page = () => {
      return "Page";
    };
    import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      Page
    }, Symbol.toStringTag, { value: "Module" }));
    configValuesSerialized = {
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
  }
});

// dist/server/entry.js
var entry_exports = {};
var pageFilesLazy, pageFilesEager, pageFilesExportNamesLazy, pageFilesExportNamesEager, pageFilesList, neverLoaded, pageConfigsSerialized, pageConfigGlobalSerialized, pageFilesLazyIsomorph1, pageFilesLazyIsomorph, pageFilesLazyServer1, pageFilesLazyServer, pageFilesEagerRoute1, pageFilesEagerRoute, pageFilesExportNamesEagerClient1, pageFilesExportNamesEagerClient, virtualFileExports;
var init_entry = __esm({
  "dist/server/entry.js"() {
    "use strict";
    init_internal();
    pageFilesLazy = {};
    pageFilesEager = {};
    pageFilesExportNamesLazy = {};
    pageFilesExportNamesEager = {};
    pageFilesList = [];
    neverLoaded = {};
    pageConfigsSerialized = [
      {
        pageId: "/src/pages/index",
        isErrorPage: void 0,
        routeFilesystem: { "routeString": "/", "definedAtLocation": "/src/pages/index/" },
        loadConfigValuesAll: () => ({ moduleId: "virtual:vike:pageConfigValuesAll:server:/src/pages/index", moduleExports: Promise.resolve().then(() => (init_src_pages_index(), src_pages_index_exports)) }),
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
    pageConfigGlobalSerialized = {
      configValuesSerialized: {}
    };
    pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
    pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
    pageFilesLazy[".page"] = pageFilesLazyIsomorph;
    pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
    pageFilesLazyServer = { ...pageFilesLazyServer1 };
    pageFilesLazy[".page.server"] = pageFilesLazyServer;
    pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
    pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
    pageFilesEager[".page.route"] = pageFilesEagerRoute;
    pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
    pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
    pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
    virtualFileExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  }
});

// ../../node_modules/@universal-middleware/compress/dist/stream-G72MPBYA.js
var stream_G72MPBYA_exports = {};
__export(stream_G72MPBYA_exports, {
  compressStream: () => compressStream
});
import { constants, createDeflate, createGzip, createBrotliCompress } from "node:zlib";
function compressStream(input, algorithm, options) {
  if (input === null) {
    return input;
  }
  const compressionStream = algorithms[algorithm]({
    ...defaultOptions[algorithm],
    ...options
  });
  return new ReadableStream({
    async start(controller) {
      const reader = input.getReader();
      compressionStream.on("data", (chunk2) => {
        controller.enqueue(new Uint8Array(chunk2));
      });
      compressionStream.on("end", () => {
        controller.close();
      });
      compressionStream.on("error", (err) => {
        controller.error(err);
      });
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            compressionStream.end();
            break;
          }
          compressionStream.write(value);
        }
      } catch (err) {
        controller.error(err);
      }
    }
  });
}
var algorithms, defaultOptions;
var init_stream_G72MPBYA = __esm({
  "../../node_modules/@universal-middleware/compress/dist/stream-G72MPBYA.js"() {
    algorithms = {
      br: createBrotliCompress,
      gzip: createGzip,
      deflate: createDeflate
    };
    defaultOptions = {
      br: { params: { [constants.BROTLI_PARAM_QUALITY]: 4 } },
      gzip: {},
      deflate: {}
    };
  }
});

// ../../node_modules/@universal-middleware/compress/dist/stream-BU5UEDP7.js
var stream_BU5UEDP7_exports = {};
__export(stream_BU5UEDP7_exports, {
  compressStream: () => compressStream2
});
function compressStream2(input, algorithm) {
  if (input === null) {
    return input;
  }
  if (algorithm === "br") {
    throw new Error(`{ compressionMethod: "stream" } does not support "br" encoding`);
  }
  const compressionStream = new CompressionStream(algorithm);
  return input.pipeThrough(compressionStream);
}
var init_stream_BU5UEDP7 = __esm({
  "../../node_modules/@universal-middleware/compress/dist/stream-BU5UEDP7.js"() {
  }
});

// ../../node_modules/totalist/sync/index.mjs
import { join, resolve } from "path";
import { readdirSync, statSync } from "fs";
function totalist(dir, callback, pre = "") {
  dir = resolve(".", dir);
  let arr = readdirSync(dir);
  let i = 0, abs, stats;
  for (; i < arr.length; i++) {
    abs = join(dir, arr[i]);
    stats = statSync(abs);
    stats.isDirectory() ? totalist(abs, callback, join(pre, arr[i])) : callback(join(pre, arr[i]), abs, stats);
  }
}
var init_sync = __esm({
  "../../node_modules/totalist/sync/index.mjs"() {
  }
});

// ../../node_modules/mrmime/index.mjs
function lookup(extn) {
  let tmp = ("" + extn).trim().toLowerCase();
  let idx = tmp.lastIndexOf(".");
  return mimes[!~idx ? tmp : tmp.substring(++idx)];
}
var mimes;
var init_mrmime = __esm({
  "../../node_modules/mrmime/index.mjs"() {
    mimes = {
      "3g2": "video/3gpp2",
      "3gp": "video/3gpp",
      "3gpp": "video/3gpp",
      "3mf": "model/3mf",
      "aac": "audio/aac",
      "ac": "application/pkix-attr-cert",
      "adp": "audio/adpcm",
      "adts": "audio/aac",
      "ai": "application/postscript",
      "aml": "application/automationml-aml+xml",
      "amlx": "application/automationml-amlx+zip",
      "amr": "audio/amr",
      "apng": "image/apng",
      "appcache": "text/cache-manifest",
      "appinstaller": "application/appinstaller",
      "appx": "application/appx",
      "appxbundle": "application/appxbundle",
      "asc": "application/pgp-keys",
      "atom": "application/atom+xml",
      "atomcat": "application/atomcat+xml",
      "atomdeleted": "application/atomdeleted+xml",
      "atomsvc": "application/atomsvc+xml",
      "au": "audio/basic",
      "avci": "image/avci",
      "avcs": "image/avcs",
      "avif": "image/avif",
      "aw": "application/applixware",
      "bdoc": "application/bdoc",
      "bin": "application/octet-stream",
      "bmp": "image/bmp",
      "bpk": "application/octet-stream",
      "btf": "image/prs.btif",
      "btif": "image/prs.btif",
      "buffer": "application/octet-stream",
      "ccxml": "application/ccxml+xml",
      "cdfx": "application/cdfx+xml",
      "cdmia": "application/cdmi-capability",
      "cdmic": "application/cdmi-container",
      "cdmid": "application/cdmi-domain",
      "cdmio": "application/cdmi-object",
      "cdmiq": "application/cdmi-queue",
      "cer": "application/pkix-cert",
      "cgm": "image/cgm",
      "cjs": "application/node",
      "class": "application/java-vm",
      "coffee": "text/coffeescript",
      "conf": "text/plain",
      "cpl": "application/cpl+xml",
      "cpt": "application/mac-compactpro",
      "crl": "application/pkix-crl",
      "css": "text/css",
      "csv": "text/csv",
      "cu": "application/cu-seeme",
      "cwl": "application/cwl",
      "cww": "application/prs.cww",
      "davmount": "application/davmount+xml",
      "dbk": "application/docbook+xml",
      "deb": "application/octet-stream",
      "def": "text/plain",
      "deploy": "application/octet-stream",
      "dib": "image/bmp",
      "disposition-notification": "message/disposition-notification",
      "dist": "application/octet-stream",
      "distz": "application/octet-stream",
      "dll": "application/octet-stream",
      "dmg": "application/octet-stream",
      "dms": "application/octet-stream",
      "doc": "application/msword",
      "dot": "application/msword",
      "dpx": "image/dpx",
      "drle": "image/dicom-rle",
      "dsc": "text/prs.lines.tag",
      "dssc": "application/dssc+der",
      "dtd": "application/xml-dtd",
      "dump": "application/octet-stream",
      "dwd": "application/atsc-dwd+xml",
      "ear": "application/java-archive",
      "ecma": "application/ecmascript",
      "elc": "application/octet-stream",
      "emf": "image/emf",
      "eml": "message/rfc822",
      "emma": "application/emma+xml",
      "emotionml": "application/emotionml+xml",
      "eps": "application/postscript",
      "epub": "application/epub+zip",
      "exe": "application/octet-stream",
      "exi": "application/exi",
      "exp": "application/express",
      "exr": "image/aces",
      "ez": "application/andrew-inset",
      "fdf": "application/fdf",
      "fdt": "application/fdt+xml",
      "fits": "image/fits",
      "g3": "image/g3fax",
      "gbr": "application/rpki-ghostbusters",
      "geojson": "application/geo+json",
      "gif": "image/gif",
      "glb": "model/gltf-binary",
      "gltf": "model/gltf+json",
      "gml": "application/gml+xml",
      "gpx": "application/gpx+xml",
      "gram": "application/srgs",
      "grxml": "application/srgs+xml",
      "gxf": "application/gxf",
      "gz": "application/gzip",
      "h261": "video/h261",
      "h263": "video/h263",
      "h264": "video/h264",
      "heic": "image/heic",
      "heics": "image/heic-sequence",
      "heif": "image/heif",
      "heifs": "image/heif-sequence",
      "hej2": "image/hej2k",
      "held": "application/atsc-held+xml",
      "hjson": "application/hjson",
      "hlp": "application/winhlp",
      "hqx": "application/mac-binhex40",
      "hsj2": "image/hsj2",
      "htm": "text/html",
      "html": "text/html",
      "ics": "text/calendar",
      "ief": "image/ief",
      "ifb": "text/calendar",
      "iges": "model/iges",
      "igs": "model/iges",
      "img": "application/octet-stream",
      "in": "text/plain",
      "ini": "text/plain",
      "ink": "application/inkml+xml",
      "inkml": "application/inkml+xml",
      "ipfix": "application/ipfix",
      "iso": "application/octet-stream",
      "its": "application/its+xml",
      "jade": "text/jade",
      "jar": "application/java-archive",
      "jhc": "image/jphc",
      "jls": "image/jls",
      "jp2": "image/jp2",
      "jpe": "image/jpeg",
      "jpeg": "image/jpeg",
      "jpf": "image/jpx",
      "jpg": "image/jpeg",
      "jpg2": "image/jp2",
      "jpgm": "image/jpm",
      "jpgv": "video/jpeg",
      "jph": "image/jph",
      "jpm": "image/jpm",
      "jpx": "image/jpx",
      "js": "text/javascript",
      "json": "application/json",
      "json5": "application/json5",
      "jsonld": "application/ld+json",
      "jsonml": "application/jsonml+json",
      "jsx": "text/jsx",
      "jt": "model/jt",
      "jxl": "image/jxl",
      "jxr": "image/jxr",
      "jxra": "image/jxra",
      "jxrs": "image/jxrs",
      "jxs": "image/jxs",
      "jxsc": "image/jxsc",
      "jxsi": "image/jxsi",
      "jxss": "image/jxss",
      "kar": "audio/midi",
      "ktx": "image/ktx",
      "ktx2": "image/ktx2",
      "less": "text/less",
      "lgr": "application/lgr+xml",
      "list": "text/plain",
      "litcoffee": "text/coffeescript",
      "log": "text/plain",
      "lostxml": "application/lost+xml",
      "lrf": "application/octet-stream",
      "m1v": "video/mpeg",
      "m21": "application/mp21",
      "m2a": "audio/mpeg",
      "m2t": "video/mp2t",
      "m2ts": "video/mp2t",
      "m2v": "video/mpeg",
      "m3a": "audio/mpeg",
      "m4a": "audio/mp4",
      "m4p": "application/mp4",
      "m4s": "video/iso.segment",
      "ma": "application/mathematica",
      "mads": "application/mads+xml",
      "maei": "application/mmt-aei+xml",
      "man": "text/troff",
      "manifest": "text/cache-manifest",
      "map": "application/json",
      "mar": "application/octet-stream",
      "markdown": "text/markdown",
      "mathml": "application/mathml+xml",
      "mb": "application/mathematica",
      "mbox": "application/mbox",
      "md": "text/markdown",
      "mdx": "text/mdx",
      "me": "text/troff",
      "mesh": "model/mesh",
      "meta4": "application/metalink4+xml",
      "metalink": "application/metalink+xml",
      "mets": "application/mets+xml",
      "mft": "application/rpki-manifest",
      "mid": "audio/midi",
      "midi": "audio/midi",
      "mime": "message/rfc822",
      "mj2": "video/mj2",
      "mjp2": "video/mj2",
      "mjs": "text/javascript",
      "mml": "text/mathml",
      "mods": "application/mods+xml",
      "mov": "video/quicktime",
      "mp2": "audio/mpeg",
      "mp21": "application/mp21",
      "mp2a": "audio/mpeg",
      "mp3": "audio/mpeg",
      "mp4": "video/mp4",
      "mp4a": "audio/mp4",
      "mp4s": "application/mp4",
      "mp4v": "video/mp4",
      "mpd": "application/dash+xml",
      "mpe": "video/mpeg",
      "mpeg": "video/mpeg",
      "mpf": "application/media-policy-dataset+xml",
      "mpg": "video/mpeg",
      "mpg4": "video/mp4",
      "mpga": "audio/mpeg",
      "mpp": "application/dash-patch+xml",
      "mrc": "application/marc",
      "mrcx": "application/marcxml+xml",
      "ms": "text/troff",
      "mscml": "application/mediaservercontrol+xml",
      "msh": "model/mesh",
      "msi": "application/octet-stream",
      "msix": "application/msix",
      "msixbundle": "application/msixbundle",
      "msm": "application/octet-stream",
      "msp": "application/octet-stream",
      "mtl": "model/mtl",
      "mts": "video/mp2t",
      "musd": "application/mmt-usd+xml",
      "mxf": "application/mxf",
      "mxmf": "audio/mobile-xmf",
      "mxml": "application/xv+xml",
      "n3": "text/n3",
      "nb": "application/mathematica",
      "nq": "application/n-quads",
      "nt": "application/n-triples",
      "obj": "model/obj",
      "oda": "application/oda",
      "oga": "audio/ogg",
      "ogg": "audio/ogg",
      "ogv": "video/ogg",
      "ogx": "application/ogg",
      "omdoc": "application/omdoc+xml",
      "onepkg": "application/onenote",
      "onetmp": "application/onenote",
      "onetoc": "application/onenote",
      "onetoc2": "application/onenote",
      "opf": "application/oebps-package+xml",
      "opus": "audio/ogg",
      "otf": "font/otf",
      "owl": "application/rdf+xml",
      "oxps": "application/oxps",
      "p10": "application/pkcs10",
      "p7c": "application/pkcs7-mime",
      "p7m": "application/pkcs7-mime",
      "p7s": "application/pkcs7-signature",
      "p8": "application/pkcs8",
      "pdf": "application/pdf",
      "pfr": "application/font-tdpfr",
      "pgp": "application/pgp-encrypted",
      "pkg": "application/octet-stream",
      "pki": "application/pkixcmp",
      "pkipath": "application/pkix-pkipath",
      "pls": "application/pls+xml",
      "png": "image/png",
      "prc": "model/prc",
      "prf": "application/pics-rules",
      "provx": "application/provenance+xml",
      "ps": "application/postscript",
      "pskcxml": "application/pskc+xml",
      "pti": "image/prs.pti",
      "qt": "video/quicktime",
      "raml": "application/raml+yaml",
      "rapd": "application/route-apd+xml",
      "rdf": "application/rdf+xml",
      "relo": "application/p2p-overlay+xml",
      "rif": "application/reginfo+xml",
      "rl": "application/resource-lists+xml",
      "rld": "application/resource-lists-diff+xml",
      "rmi": "audio/midi",
      "rnc": "application/relax-ng-compact-syntax",
      "rng": "application/xml",
      "roa": "application/rpki-roa",
      "roff": "text/troff",
      "rq": "application/sparql-query",
      "rs": "application/rls-services+xml",
      "rsat": "application/atsc-rsat+xml",
      "rsd": "application/rsd+xml",
      "rsheet": "application/urc-ressheet+xml",
      "rss": "application/rss+xml",
      "rtf": "text/rtf",
      "rtx": "text/richtext",
      "rusd": "application/route-usd+xml",
      "s3m": "audio/s3m",
      "sbml": "application/sbml+xml",
      "scq": "application/scvp-cv-request",
      "scs": "application/scvp-cv-response",
      "sdp": "application/sdp",
      "senmlx": "application/senml+xml",
      "sensmlx": "application/sensml+xml",
      "ser": "application/java-serialized-object",
      "setpay": "application/set-payment-initiation",
      "setreg": "application/set-registration-initiation",
      "sgi": "image/sgi",
      "sgm": "text/sgml",
      "sgml": "text/sgml",
      "shex": "text/shex",
      "shf": "application/shf+xml",
      "shtml": "text/html",
      "sieve": "application/sieve",
      "sig": "application/pgp-signature",
      "sil": "audio/silk",
      "silo": "model/mesh",
      "siv": "application/sieve",
      "slim": "text/slim",
      "slm": "text/slim",
      "sls": "application/route-s-tsid+xml",
      "smi": "application/smil+xml",
      "smil": "application/smil+xml",
      "snd": "audio/basic",
      "so": "application/octet-stream",
      "spdx": "text/spdx",
      "spp": "application/scvp-vp-response",
      "spq": "application/scvp-vp-request",
      "spx": "audio/ogg",
      "sql": "application/sql",
      "sru": "application/sru+xml",
      "srx": "application/sparql-results+xml",
      "ssdl": "application/ssdl+xml",
      "ssml": "application/ssml+xml",
      "stk": "application/hyperstudio",
      "stl": "model/stl",
      "stpx": "model/step+xml",
      "stpxz": "model/step-xml+zip",
      "stpz": "model/step+zip",
      "styl": "text/stylus",
      "stylus": "text/stylus",
      "svg": "image/svg+xml",
      "svgz": "image/svg+xml",
      "swidtag": "application/swid+xml",
      "t": "text/troff",
      "t38": "image/t38",
      "td": "application/urc-targetdesc+xml",
      "tei": "application/tei+xml",
      "teicorpus": "application/tei+xml",
      "text": "text/plain",
      "tfi": "application/thraud+xml",
      "tfx": "image/tiff-fx",
      "tif": "image/tiff",
      "tiff": "image/tiff",
      "toml": "application/toml",
      "tr": "text/troff",
      "trig": "application/trig",
      "ts": "video/mp2t",
      "tsd": "application/timestamped-data",
      "tsv": "text/tab-separated-values",
      "ttc": "font/collection",
      "ttf": "font/ttf",
      "ttl": "text/turtle",
      "ttml": "application/ttml+xml",
      "txt": "text/plain",
      "u3d": "model/u3d",
      "u8dsn": "message/global-delivery-status",
      "u8hdr": "message/global-headers",
      "u8mdn": "message/global-disposition-notification",
      "u8msg": "message/global",
      "ubj": "application/ubjson",
      "uri": "text/uri-list",
      "uris": "text/uri-list",
      "urls": "text/uri-list",
      "vcard": "text/vcard",
      "vrml": "model/vrml",
      "vtt": "text/vtt",
      "vxml": "application/voicexml+xml",
      "war": "application/java-archive",
      "wasm": "application/wasm",
      "wav": "audio/wav",
      "weba": "audio/webm",
      "webm": "video/webm",
      "webmanifest": "application/manifest+json",
      "webp": "image/webp",
      "wgsl": "text/wgsl",
      "wgt": "application/widget",
      "wif": "application/watcherinfo+xml",
      "wmf": "image/wmf",
      "woff": "font/woff",
      "woff2": "font/woff2",
      "wrl": "model/vrml",
      "wsdl": "application/wsdl+xml",
      "wspolicy": "application/wspolicy+xml",
      "x3d": "model/x3d+xml",
      "x3db": "model/x3d+fastinfoset",
      "x3dbz": "model/x3d+binary",
      "x3dv": "model/x3d-vrml",
      "x3dvz": "model/x3d+vrml",
      "x3dz": "model/x3d+xml",
      "xaml": "application/xaml+xml",
      "xav": "application/xcap-att+xml",
      "xca": "application/xcap-caps+xml",
      "xcs": "application/calendar+xml",
      "xdf": "application/xcap-diff+xml",
      "xdssc": "application/dssc+xml",
      "xel": "application/xcap-el+xml",
      "xenc": "application/xenc+xml",
      "xer": "application/patch-ops-error+xml",
      "xfdf": "application/xfdf",
      "xht": "application/xhtml+xml",
      "xhtml": "application/xhtml+xml",
      "xhvml": "application/xv+xml",
      "xlf": "application/xliff+xml",
      "xm": "audio/xm",
      "xml": "text/xml",
      "xns": "application/xcap-ns+xml",
      "xop": "application/xop+xml",
      "xpl": "application/xproc+xml",
      "xsd": "application/xml",
      "xsf": "application/prs.xsf+xml",
      "xsl": "application/xml",
      "xslt": "application/xml",
      "xspf": "application/xspf+xml",
      "xvm": "application/xv+xml",
      "xvml": "application/xv+xml",
      "yaml": "text/yaml",
      "yang": "application/yang",
      "yin": "application/yin+xml",
      "yml": "text/yaml",
      "zip": "application/zip"
    };
  }
});

// ../../node_modules/@universal-middleware/sirv/dist/chunk-CONFVDKL.js
import * as fs from "node:fs";
import { resolve as resolve2, normalize as normalize3, join as join2 } from "node:path";
import { Readable } from "node:stream";
function url2(request) {
  if (request[urlSymbol2]) {
    return request[urlSymbol2];
  }
  if (Object.isFrozen(request) || Object.isSealed(request)) {
    return new URL(request.url);
  }
  request[urlSymbol2] = new URL(request.url);
  return request[urlSymbol2];
}
function isMatch(uri, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].test(uri)) return true;
  }
  return false;
}
function toAssume(uri, extns) {
  let i = 0;
  let x;
  const len = uri.length - 1;
  let uri_ = uri;
  if (uri.charCodeAt(len) === 47) {
    uri_ = uri.substring(0, len);
  }
  const arr = [];
  const tmp = `${uri_}/index`;
  for (; i < extns.length; i++) {
    x = extns[i] ? `.${extns[i]}` : "";
    if (uri_) arr.push(uri_ + x);
    arr.push(tmp + x);
  }
  return arr;
}
function viaCache(cache, uri, extns) {
  let i = 0;
  let data;
  const arr = toAssume(uri, extns);
  for (; i < arr.length; i++) {
    if (data = cache[arr[i]]) return data;
  }
  return void 0;
}
function viaLocal(dir, isEtag, uri, extns) {
  let i = 0;
  const arr = toAssume(uri, extns);
  let abs;
  let stats;
  let name;
  let headers;
  for (; i < arr.length; i++) {
    abs = normalize3(join2(dir, name = arr[i]));
    if (abs.startsWith(dir) && fs.existsSync(abs)) {
      stats = fs.statSync(abs);
      if (stats.isDirectory()) continue;
      headers = toHeaders(name, stats, isEtag);
      headers["Cache-Control"] = isEtag ? "no-cache" : "no-store";
      return { abs, stats, headers };
    }
  }
  return void 0;
}
function send(req, file, stats, headers) {
  let code = 200;
  const newHeaders = { ...headers };
  const rangeHeader = req.headers.get("range");
  if (rangeHeader) {
    code = 206;
    const [x, y] = rangeHeader.replace("bytes=", "").split("-");
    let end = Number.parseInt(y, 10) || stats.size - 1;
    const start = Number.parseInt(x, 10) || 0;
    if (end >= stats.size) {
      end = stats.size - 1;
    }
    if (start >= stats.size) {
      return new Response(null, {
        status: 416,
        headers: {
          "Content-Range": `bytes */${stats.size}`
        }
      });
    }
    newHeaders["Content-Range"] = `bytes ${start}-${end}/${stats.size}`;
    newHeaders["Content-Length"] = (end - start + 1).toString();
    newHeaders["Accept-Ranges"] = "bytes";
  }
  const webStream = Readable.toWeb(fs.createReadStream(file));
  return new Response(webStream, {
    status: code,
    headers: newHeaders
  });
}
function toHeaders(name, stats, isEtag) {
  const enc = ENCODING[name.slice(-3)];
  let ctype = lookup(name.slice(0, enc ? -3 : void 0)) || "";
  if (ctype === "text/html") ctype += ";charset=utf-8";
  const headers = {
    "Content-Length": stats.size.toString(),
    "Content-Type": ctype,
    "Last-Modified": stats.mtime.toUTCString()
  };
  if (enc) headers["Content-Encoding"] = enc;
  if (isEtag) headers["ETag"] = `W/"${stats.size}-${stats.mtime.getTime()}"`;
  return headers;
}
function createUniversalMiddleware(isEtag, isSPA, ignores, lookup2, extensions, gzips, brots, setHeaders2, isNotFound, fallback) {
  return (request) => {
    const extns = [""];
    const url22 = url2(request);
    let pathname = url22.pathname;
    const acceptEncoding = request.headers.get("accept-encoding") || "";
    if (gzips && acceptEncoding.includes("gzip")) extns.unshift(...gzips);
    if (brots && /(br|brotli)/i.test(acceptEncoding)) extns.unshift(...brots);
    extns.push(...extensions);
    if (pathname.indexOf("%") !== -1) {
      try {
        pathname = decodeURI(pathname);
      } catch (err) {
      }
    }
    const data = lookup2(pathname, extns) || isSPA && !isMatch(pathname, ignores) && lookup2(fallback, extns);
    if (!data) return isNotFound ? isNotFound(request) : void 0;
    if (isEtag && request.headers.get("if-none-match") === data.headers["ETag"]) {
      return new Response(null, { status: 304 });
    }
    if (gzips || brots) {
      data.headers["Vary"] = "Accept-Encoding";
    }
    const response = send(request, data.abs, data.stats, data.headers);
    setHeaders2(response, pathname, data.stats);
    return response;
  };
}
function serveStatic(dir, opts = {}) {
  dir = resolve2(dir || ".");
  const isNotFound = opts.onNoMatch;
  const setHeaders2 = opts.setHeaders || noop;
  const extensions = opts.extensions || ["html", "htm"];
  const gzips = opts.gzip && extensions.map((x) => `${x}.gz`).concat("gz");
  const brots = opts.brotli && extensions.map((x) => `${x}.br`).concat("br");
  const FILES = {};
  let fallback = "/";
  const isEtag = !!opts.etag;
  const isSPA = !!opts.single;
  if (typeof opts.single === "string") {
    const idx = opts.single.lastIndexOf(".");
    fallback += ~idx ? opts.single.substring(0, idx) : opts.single;
  }
  const ignores = [];
  if (opts.ignores !== false) {
    ignores.push(/[/]([A-Za-z\s\d~$._-]+\.\w+){1,}$/);
    if (opts.dotfiles) ignores.push(/\/\.\w/);
    else ignores.push(/\/\.well-known/);
    const optsIgnores = Array.isArray(opts.ignores) ? opts.ignores : opts.ignores ? [opts.ignores] : [];
    for (const x of optsIgnores) {
      ignores.push(new RegExp(x, "i"));
    }
  }
  let cc = opts.maxAge != null && `public,max-age=${opts.maxAge}`;
  if (cc && opts.immutable) cc += ",immutable";
  else if (cc && opts.maxAge === 0) cc += ",must-revalidate";
  if (!opts.dev) {
    totalist(dir, (name, abs, stats) => {
      if (/\.well-known[\\+\/]/.test(name)) ;
      else if (!opts.dotfiles && /(^\.|[\\+|\/+]\.)/.test(name)) return;
      const headers = toHeaders(name, stats, isEtag);
      if (cc) headers["Cache-Control"] = cc;
      FILES[`/${name.normalize().replace(/\\+/g, "/")}`] = { abs, stats, headers };
    });
  }
  const lookupFn = opts.dev ? (uri, extns) => viaLocal(dir, isEtag, uri, extns) : (uri, extns) => viaCache(FILES, uri, extns);
  return createUniversalMiddleware(
    isEtag,
    isSPA,
    ignores,
    lookupFn,
    extensions,
    gzips,
    brots,
    setHeaders2,
    isNotFound,
    fallback
  );
}
var universalSymbol2, unboundSymbol2, urlSymbol2, noop, ENCODING;
var init_chunk_CONFVDKL = __esm({
  "../../node_modules/@universal-middleware/sirv/dist/chunk-CONFVDKL.js"() {
    init_sync();
    init_mrmime();
    universalSymbol2 = Symbol.for("universal");
    unboundSymbol2 = Symbol.for("unbound");
    urlSymbol2 = Symbol.for("unUrl");
    noop = () => {
    };
    ENCODING = {
      ".br": "br",
      ".gz": "gzip"
    };
  }
});

// ../../node_modules/@universal-middleware/sirv/dist/middleware.js
var middleware_exports = {};
__export(middleware_exports, {
  default: () => serveStatic
});
var init_middleware = __esm({
  "../../node_modules/@universal-middleware/sirv/dist/middleware.js"() {
    init_chunk_CONFVDKL();
  }
});

// dist/server/index.js
init_entry();

// ../../node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// ../../node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// ../../node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths2 = path.split("/");
  if (paths2[0] === "") {
    paths2.shift();
  }
  return paths2;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths2 = splitPath(path);
  return replaceGroupMarks(paths2, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths2, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths2.length - 1; j >= 0; j--) {
      if (paths2[j].includes(mark)) {
        paths2[j] = paths2[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths2;
};
var patternCache = {};
var getPattern = (label, next) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    const cacheKey2 = `${label}#${next}`;
    if (!patternCache[cacheKey2]) {
      if (match[2]) {
        patternCache[cacheKey2] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey2, match[1], new RegExp(`^${match[2]}(?=/${next})`)] : [label, match[1], new RegExp(`^${match[2]}$`)];
      } else {
        patternCache[cacheKey2] = [label, match[1], true];
      }
    }
    return patternCache[cacheKey2];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url3 = request.url;
  const start = url3.indexOf("/", 8);
  let i = start;
  for (; i < url3.length; i++) {
    const charCode = url3.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url3.indexOf("?", i);
      const path = url3.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url3.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
};
var checkOptionalParameter = (path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url3, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url3.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url3.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url3.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url3.indexOf("&", valueIndex);
        return _decodeURI(url3.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url3.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url3);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url3);
  let keyIndex = url3.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url3.indexOf("&", keyIndex + 1);
    let valueIndex = url3.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url3.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url3.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url3, key) => {
  return _getQueryParam(url3, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route2]]) => route2);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route2]]) => route2)[this.routeIndex].path;
  }
};

// ../../node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// ../../node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
};
var Context = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status2) => {
    this.#isFresh = false;
    this.#status = status2;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status2 = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status: status2,
      headers: this.#headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    if (typeof arg === "number") {
      return this.#newResponse(text, arg, headers);
    }
    return this.#newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  };
  redirect = (location, status2) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status2 ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
};

// ../../node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// ../../node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// ../../node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p2 of [path].flat()) {
        this.#path = p2;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app) {
    const subApp = this.basePath(path);
    app.routes.map((r) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url3 = new URL(request.url);
        url3.pathname = url3.pathname.slice(pathPrefixLength) || "/";
        return new Request(url3, request);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env2, "GET")))();
    }
    const path = this.getPath(request, { env: env2 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env2,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// ../../node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// ../../node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// ../../node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route2) => [!/\*|\/:/.test(route2[0]), ...route2]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p2) => {
          handlerMap[method][p2] = [...handlerMap[METHOD_NAME_ALL][p2]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p2) => {
            re.test(p2) && middleware[m][p2].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p2) => re.test(p2) && routes[m][p2].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths2 = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths2.length; i < len; i++) {
      const path2 = paths2[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// ../../node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// ../../node_modules/hono/dist/router/trie-router/node.js
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p2 = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p2, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p2;
      if (Object.keys(curNode.#children).includes(key)) {
        curNode = curNode.#children[key];
        const pattern2 = getPattern(p2, nextP);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[key] = new Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// ../../node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// ../../node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// node_modules/@universal-middleware/core/dist/index.js
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var _getRuntimeKey = () => {
  const global2 = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && typeof navigator.userAgent === "string";
  if (userAgentSupported) {
    for (const [runtimeKey2, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey2;
      }
    }
  }
  if (typeof global2?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global2?.fastly !== void 0) {
    return "fastly";
  }
  if (global2?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
};
var runtimeKey = void 0;
var getRuntimeKey = () => {
  if (runtimeKey === void 0) {
    runtimeKey = _getRuntimeKey();
  }
  return runtimeKey;
};
var checkUserAgentEquals = (platform) => {
  const userAgent = navigator.userAgent;
  return userAgent.startsWith(platform);
};
function getRuntime(args) {
  const key = getRuntimeKey();
  return {
    runtime: key,
    ...args
  };
}
function getAdapter(key, args) {
  return {
    adapter: key,
    ...args
  };
}
function getAdapterRuntime(adapter, adapterArgs, runtimeArgs) {
  const a = getAdapter(adapter, adapterArgs);
  const r = getRuntime(runtimeArgs);
  return { ...r, ...a };
}
var universalSymbol = Symbol.for("universal");
var unboundSymbol = Symbol.for("unbound");
var pathSymbol = Symbol.for("unPath");
var methodSymbol = Symbol.for("unMethod");
var orderSymbol = Symbol.for("unOrder");
var nameSymbol = Symbol.for("unName");
var urlSymbol = Symbol.for("unUrl");
var optionsToSymbols = {
  name: nameSymbol,
  method: methodSymbol,
  path: pathSymbol,
  order: orderSymbol
};
function url(request) {
  if (request[urlSymbol]) {
    return request[urlSymbol];
  }
  if (Object.isFrozen(request) || Object.isSealed(request)) {
    return new URL(request.url);
  }
  request[urlSymbol] = new URL(request.url);
  return request[urlSymbol];
}
function cloneRequest(request, fields) {
  if (!fields) {
    return request.clone();
  }
  return new Request(fields?.url ?? request.url, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    mode: request.mode,
    credentials: request.credentials,
    cache: request.cache,
    redirect: request.redirect,
    referrer: request.referrer,
    integrity: request.integrity,
    keepalive: request.keepalive,
    referrerPolicy: request.referrerPolicy,
    signal: request.signal,
    // @ts-ignore RequestInit: duplex option is required when sending a body
    duplex: "half"
  });
}
function getUniversal(subject) {
  return universalSymbol in subject ? subject[universalSymbol] : subject;
}
function getUniversalProp(subject, prop, defaultValue2) {
  if (prop in subject) return subject[prop];
  if (universalSymbol in subject) return subject[universalSymbol][prop];
  return defaultValue2;
}
function enhance(middleware, options) {
  const { immutable, ...rest } = options;
  const m = immutable === false ? middleware : cloneFunction(middleware);
  for (const [key, value] of Object.entries(rest)) {
    if (key in optionsToSymbols) {
      m[optionsToSymbols[key]] = value;
    }
  }
  return m;
}
function ordered(middlewares) {
  return Array.from(middlewares).sort(
    (a, b) => getUniversalProp(a, orderSymbol, 0) - getUniversalProp(b, orderSymbol, 0)
  );
}
function cloneFunction(originalFn) {
  const extendedFunction = function(...args) {
    return Reflect.apply(Object.getPrototypeOf(extendedFunction), this, args);
  };
  Object.setPrototypeOf(extendedFunction, originalFn);
  return extendedFunction;
}
function bindUniversal(universal, fn, wrapper) {
  const unboundFn = unboundSymbol in fn ? fn[unboundSymbol] : fn;
  const self = { [universalSymbol]: universal, [unboundSymbol]: unboundFn };
  const boundFn = unboundFn.bind(self);
  Object.assign(boundFn, self);
  return wrapper ? wrapper(boundFn) : boundFn;
}
function isHandler(m) {
  const order = getUniversalProp(m, orderSymbol);
  const path = getUniversalProp(m, pathSymbol);
  if (typeof order === "number") {
    if (order !== 0 && path) {
      console.warn(
        `Found a Universal Middleware with "path" metadata. This will lead to unpredictable behaviour. Please open an issue at https://github.com/magne4000/universal-middleware and explain your use case with the expected behaviour.`
      );
    }
    return order === 0;
  }
  return Boolean(path);
}
function pipe(...a) {
  const ordererArgs = ordered(a);
  const fn = async function pipeInternal(request, context, runtime) {
    const pending = [];
    let _response = void 0;
    for (const m of ordererArgs) {
      if (isHandler(m) && _response) {
        continue;
      }
      const um = getUniversal(m);
      const response = await um(request, context ?? {}, runtime);
      if (typeof response === "function") {
        pending.push(response);
      } else if (response !== null && typeof response === "object") {
        if (!_response && response instanceof Response) {
          _response = response;
        }
        context = response;
      }
    }
    if (!_response) {
      throw new Error("No Response found");
    }
    for (const m of pending) {
      const r = await m(_response);
      if (r) {
        _response = r;
      }
    }
    return _response;
  };
  if (!this?.noCast) {
    const lastMiddleware = a.at(-1);
    if (lastMiddleware && universalSymbol in lastMiddleware) {
      return bindUniversal(fn, lastMiddleware);
    }
  }
  return fn;
}
var EmptyObject = /* @__PURE__ */ (() => {
  const C = function() {
  };
  C.prototype = /* @__PURE__ */ Object.create(null);
  return C;
})();
function createRouter() {
  const ctx = {
    root: { key: "" },
    static: new EmptyObject()
  };
  return ctx;
}
function splitPath2(path) {
  return path.split("/").filter(Boolean);
}
function getMatchParams(segments, paramsMap) {
  const params2 = new EmptyObject();
  for (const [index, name] of paramsMap) {
    const segment = index < 0 ? segments.slice(-1 * index).join("/") : segments[index];
    if (typeof name === "string") {
      params2[name] = segment;
    } else {
      const match = segment.match(name);
      if (match) {
        for (const key in match.groups) {
          params2[key] = match.groups[key];
        }
      }
    }
  }
  return params2;
}
function addRoute(ctx, method = "", path, data) {
  const segments = splitPath2(path);
  let node = ctx.root;
  let _unnamedParamIndex = 0;
  const paramsMap = [];
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (segment.startsWith("**")) {
      if (!node.wildcard) {
        node.wildcard = { key: "**" };
      }
      node = node.wildcard;
      paramsMap.push([
        -i,
        segment.split(":")[1] || "_",
        segment.length === 2
      ]);
      break;
    }
    if (segment === "*" || segment.includes(":")) {
      if (!node.param) {
        node.param = { key: "*" };
      }
      node = node.param;
      const isOptional = segment === "*";
      paramsMap.push([
        i,
        isOptional ? `_${_unnamedParamIndex++}` : _getParamMatcher(segment),
        isOptional
      ]);
      continue;
    }
    const child = node.static?.[segment];
    if (child) {
      node = child;
    } else {
      const staticNode = { key: segment };
      if (!node.static) {
        node.static = new EmptyObject();
      }
      node.static[segment] = staticNode;
      node = staticNode;
    }
  }
  const hasParams = paramsMap.length > 0;
  if (!node.methods) {
    node.methods = new EmptyObject();
  }
  if (!node.methods[method]) {
    node.methods[method] = [];
  }
  node.methods[method].push({
    data: data || null,
    paramsMap: hasParams ? paramsMap : void 0
  });
  if (!hasParams) {
    ctx.static[path] = node;
  }
}
function _getParamMatcher(segment) {
  if (!segment.includes(":", 1)) {
    return segment.slice(1);
  }
  const regex = segment.replace(/:(\w+)/g, (_, id) => `(?<${id}>\\w+)`);
  return new RegExp(`^${regex}$`);
}
function findRoute(ctx, method = "", path, opts) {
  if (path[path.length - 1] === "/") {
    path = path.slice(0, -1);
  }
  const staticNode = ctx.static[path];
  if (staticNode && staticNode.methods) {
    const staticMatch = staticNode.methods[method] || staticNode.methods[""];
    if (staticMatch !== void 0) {
      return staticMatch[0];
    }
  }
  const segments = splitPath2(path);
  const match = _lookupTree(ctx, ctx.root, method, segments, 0)?.[0];
  if (match === void 0) {
    return;
  }
  if (opts?.params === false) {
    return match;
  }
  return {
    data: match.data,
    params: match.paramsMap ? getMatchParams(segments, match.paramsMap) : void 0
  };
}
function _lookupTree(ctx, node, method, segments, index) {
  if (index === segments.length) {
    if (node.methods) {
      const match = node.methods[method] || node.methods[""];
      if (match) {
        return match;
      }
    }
    if (node.param && node.param.methods) {
      const match = node.param.methods[method] || node.param.methods[""];
      if (match) {
        const pMap = match[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) {
          return match;
        }
      }
    }
    if (node.wildcard && node.wildcard.methods) {
      const match = node.wildcard.methods[method] || node.wildcard.methods[""];
      if (match) {
        const pMap = match[0].paramsMap;
        if (pMap?.[pMap?.length - 1]?.[2]) {
          return match;
        }
      }
    }
    return void 0;
  }
  const segment = segments[index];
  if (node.static) {
    const staticChild = node.static[segment];
    if (staticChild) {
      const match = _lookupTree(ctx, staticChild, method, segments, index + 1);
      if (match) {
        return match;
      }
    }
  }
  if (node.param) {
    const match = _lookupTree(ctx, node.param, method, segments, index + 1);
    if (match) {
      return match;
    }
  }
  if (node.wildcard && node.wildcard.methods) {
    return node.wildcard.methods[method] || node.wildcard.methods[""];
  }
  return;
}
var UniversalRouter = class {
  router;
  #middlewares;
  #pipeMiddlewaresInUniversalRoute;
  #handle404;
  constructor(pipeMiddlewaresInUniversalRoute = true, handle404 = false) {
    this.router = createRouter();
    this.#middlewares = [];
    this.#pipeMiddlewaresInUniversalRoute = pipeMiddlewaresInUniversalRoute;
    this.#handle404 = handle404;
  }
  use(middleware) {
    this.#middlewares.push(middleware);
    return this;
  }
  route(handler) {
    const { path, method } = assertRoute(handler);
    const umHandler = getUniversal(handler);
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(this.router, m, path, umHandler);
      }
    } else {
      addRoute(this.router, method, path, umHandler);
    }
    return this;
  }
  applyCatchAll() {
    if (this.#handle404) {
      for (const method of ["GET", "POST", "PATCH"]) {
        addRoute(this.router, method, "/**", () => {
          return new Response("NOT FOUND", {
            status: 404
          });
        });
      }
    }
    return this;
  }
  get [universalSymbol]() {
    const noCastPipe = pipe.bind({ noCast: true });
    return (request, ctx, runtime) => {
      const router = findRoute(this.router, request.method, url(request).pathname);
      if (router) {
        const handler = this.#pipeMiddlewaresInUniversalRoute && this.#middlewares.length > 0 ? (
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          noCastPipe(...this.#middlewares, router.data)
        ) : router.data;
        if (router.params) {
          runtime.params ??= {};
          Object.assign(runtime.params, router.params);
        }
        return handler(request, ctx, runtime);
      }
      if (this.#pipeMiddlewaresInUniversalRoute && this.#middlewares.length > 0) {
        const middlewares = noCastPipe(...this.#middlewares);
        return middlewares(request, ctx, runtime);
      }
      if (this.#handle404) {
        return new Response("NOT FOUND", {
          status: 404
        });
      }
    };
  }
};
function apply(router, middlewares) {
  const ms = ordered(middlewares);
  for (const m of ms) {
    if (isHandler(m)) {
      router.route(m);
    } else {
      router.use(m);
    }
  }
  router.applyCatchAll();
}
function assertRoute(middleware) {
  const path = getUniversalProp(middleware, pathSymbol);
  if (!path) {
    const name = getUniversalProp(middleware, nameSymbol);
    throw new TypeError(assertRouteErrorMessage("path", name));
  }
  const method = getUniversalProp(middleware, methodSymbol);
  if (!method) {
    const name = getUniversalProp(middleware, nameSymbol);
    throw new TypeError(assertRouteErrorMessage("method", name));
  }
  return { path, method };
}
function assertRouteErrorMessage(key, name) {
  if (name) {
    return `Route ${name} is defined without a "${key}". See https://universal-middleware.dev/helpers/enhance for details.`;
  }
  return `Unnamed route is defined without a "${key}". See https://universal-middleware.dev/helpers/enhance for details.`;
}

// node_modules/vike/dist/esm/node/runtime/universal-middleware.js
init_runtime2();
async function universalVikeHandler(request, context, runtime) {
  const pageContextInit = { ...context, ...runtime, urlOriginal: request.url, headersOriginal: request.headers };
  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse;
  const readable = response.getReadableWebStream();
  return new Response(readable, {
    status: response.statusCode,
    headers: response.headers
  });
}

// dist/server/index.js
init_runtime2();

// ../../node_modules/@universal-middleware/compress/dist/chunk-ADN37F7X.js
var COMPRESSIBLE_CONTENT_TYPE_REGEX = /^\s*(?:text\/[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i;
var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
function parseAcceptEncodingHeader(accept) {
  const accepts = accept.split(",");
  const out = /* @__PURE__ */ new Map();
  let minQuality = 1;
  for (let i = 0; i < accepts.length; i++) {
    const encoding = parseEncoding(accepts[i].trim());
    if (encoding) {
      out.set(encoding.encoding, {
        ...encoding,
        index: i
      });
      minQuality = Math.min(minQuality, encoding.q || 1);
    }
  }
  if (!out.has("identity")) {
    out.set("identity", {
      encoding: "identity",
      q: minQuality,
      index: Number.MAX_SAFE_INTEGER
    });
  }
  return out;
}
function parseEncoding(str) {
  const match = simpleEncodingRegExp.exec(str);
  if (!match) return null;
  const encoding = match[1];
  let q = 1;
  if (match[2]) {
    const params = match[2].split(";");
    for (let j = 0; j < params.length; j++) {
      const p2 = params[j].trim().split("=");
      if (p2[0] === "q") {
        q = Number.parseFloat(p2[1]);
        break;
      }
    }
  }
  return {
    encoding,
    q
  };
}
function chooseBestEncoding(request, availableEncodings) {
  let bestEncoding = null;
  if (availableEncodings.length === 0) return null;
  const header = request.headers.get("Accept-Encoding");
  if (!header) return null;
  const parsed = parseAcceptEncodingHeader(header);
  for (const enc of availableEncodings) {
    const encodingEntry = parsed.get(enc);
    if (encodingEntry) {
      if (!bestEncoding || encodingEntry.q > bestEncoding.q || encodingEntry.q === bestEncoding.q && encodingEntry.index < bestEncoding.index) {
        bestEncoding = encodingEntry;
      }
    }
  }
  return bestEncoding?.encoding;
}
var isCompressionStreamAvailable = typeof CompressionStream !== "undefined";
var isZlibAvailable = await isNodeZlibAvailable();
var supportedEncodings = isZlibAvailable ? ["br", "gzip", "deflate"] : isCompressionStreamAvailable ? ["gzip", "deflate"] : [];
async function isNodeZlibAvailable() {
  try {
    await import(
      /* @vite-ignore */
      "node:zlib"
    );
    return true;
  } catch {
    return false;
  }
}
var cacheControlNoTransformRegExp = /(?:^|,)\s*?no-transform\s*?(?:,|$)/i;
var EncodingGuesser = class {
  constructor(request, options = {}) {
    this.request = request;
    this.options = options;
    this.encoding = this._guessRequest();
  }
  encoding;
  _guessRequest() {
    if (this.request.method === "HEAD") {
      return null;
    }
    const cacheControl = this.request.headers.get("Cache-Control");
    if (cacheControl && cacheControlNoTransformRegExp.test(cacheControl)) {
      return null;
    }
    const chosenEncoding = chooseBestEncoding(this.request, supportedEncodings);
    if (!chosenEncoding || chosenEncoding === "identity") {
      return null;
    }
    return chosenEncoding;
  }
  guessEncoding(response) {
    if (this.encoding === null) return null;
    const threshold = this.options?.threshold ?? 1024;
    const cacheControl = response.headers.get("Cache-Control");
    if (cacheControl && cacheControlNoTransformRegExp.test(cacheControl)) {
      return null;
    }
    const contentLength = response.headers.get("Content-Length");
    if (contentLength && Number.parseInt(contentLength, 10) < threshold) {
      return null;
    }
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !COMPRESSIBLE_CONTENT_TYPE_REGEX.test(contentType)) {
      return null;
    }
    const contentEncoding = response.headers.get("Content-Encoding") ?? "identity";
    if (contentEncoding !== "identity") {
      return null;
    }
    return this.encoding;
  }
};
async function guessCompressor(encoding) {
  if (encoding === "br" || !isCompressionStreamAvailable) {
    const { compressStream: compressStream22 } = await Promise.resolve().then(() => (init_stream_G72MPBYA(), stream_G72MPBYA_exports));
    return (input) => compressStream22(input, encoding);
  }
  const { compressStream: compressStream3 } = await Promise.resolve().then(() => (init_stream_BU5UEDP7(), stream_BU5UEDP7_exports));
  return (input) => compressStream3(input, encoding);
}
var handleCompression = async (encoding, input, options) => {
  if (!input.headers.get("Vary")?.includes("Accept-Encoding")) input.headers.append("Vary", "Accept-Encoding");
  if (input.headers.get("Content-Encoding")) return input;
  const { headers, ...optionsRest } = options || {};
  const optionsHeaders = new Headers(headers);
  if (!optionsHeaders.get("Vary")?.includes("Accept-Encoding")) optionsHeaders.append("Vary", "Accept-Encoding");
  for (const [header, value] of optionsHeaders) {
    if (!(input.headers.get(header) ?? "").includes(value)) input.headers.append(header, value);
  }
  const compressor = await guessCompressor(encoding);
  const body = await compressor(input.body);
  if (body !== null) {
    input.headers.append("Content-Encoding", encoding);
    input.headers.delete("Content-Length");
  }
  return new Response(body, {
    headers: input.headers,
    status: optionsRest.status ?? input.status,
    statusText: optionsRest.statusText ?? input.statusText
  });
};
var compressMiddleware = (options) => (request) => {
  const guesser = new EncodingGuesser(request);
  return function universalMiddlewareCompress(response) {
    const encoding = guesser.guessEncoding(response);
    if (!encoding) return response;
    return handleCompression(encoding, response, options);
  };
};
var middleware_default = compressMiddleware;

// dist/server/index.js
import { dirname as dirname2, join as join3, isAbsolute as isAbsolute2 } from "node:path";
import { fileURLToPath } from "node:url";

// node_modules/@universal-middleware/hono/dist/index.js
var contextSymbol = Symbol.for("unContext");
function getExecutionCtx(honoContext) {
  try {
    return honoContext.executionCtx;
  } catch {
    return;
  }
}
function createHandler(handlerFactory) {
  return (...args) => {
    const handler = handlerFactory(...args);
    return bindUniversal(handler, async function universalHandlerHono(honoContext) {
      const context = initContext(honoContext);
      const response = await this[universalSymbol](
        honoContext.req.raw,
        context,
        getRuntime2(honoContext)
      );
      if (response) {
        return response;
      }
      return honoContext.notFound();
    });
  };
}
function createMiddleware(middlewareFactory) {
  return (...args) => {
    const middleware = middlewareFactory(...args);
    return bindUniversal(middleware, async function universalMiddlewareHono(honoContext, next) {
      const context = initContext(honoContext);
      const response = await this[universalSymbol](honoContext.req.raw, context, getRuntime2(honoContext));
      if (typeof response === "function") {
        await next();
        const res = await response(honoContext.res);
        if (res) {
          honoContext.res = res;
        }
      } else if (response !== null && typeof response === "object") {
        if (response instanceof Response) {
          return response;
        }
        setContext(honoContext, response);
        return next();
      } else {
        return next();
      }
    });
  };
}
function initContext(honoContext) {
  let ctx = getContext(honoContext);
  if (ctx === void 0) {
    ctx = {};
    setContext(honoContext, ctx);
  }
  return ctx;
}
function setContext(honoContext, value) {
  honoContext.set(contextSymbol, value);
  honoContext.env[contextSymbol] = value;
  if (honoContext.env?.eventContext?.env) {
    honoContext.env.eventContext.env[contextSymbol] = value;
  }
}
function getContext(honoContext) {
  return honoContext.get(contextSymbol) ?? honoContext.env[contextSymbol] ?? honoContext.env?.eventContext?.env[contextSymbol];
}
function getRuntime2(honoContext) {
  let params = void 0;
  const ctx = getExecutionCtx(honoContext);
  try {
    params = honoContext.req.param();
  } catch {
    if (ctx) {
      params = ctx.params ?? void 0;
    }
  }
  return getAdapterRuntime(
    "hono",
    {
      params,
      hono: honoContext
    },
    {
      env: honoContext.env,
      ctx,
      req: honoContext.env?.incoming,
      res: honoContext.env?.outgoing
    }
  );
}
var UniversalHonoRouter = class extends UniversalRouter {
  #app;
  constructor(app) {
    super(false);
    this.#app = app;
  }
  use(middleware) {
    this.#app.use(createMiddleware(() => getUniversal(middleware))());
    return this;
  }
  applyCatchAll() {
    this.#app.all("/*", createHandler(() => this[universalSymbol])());
    return this;
  }
};
function apply2(app, middlewares) {
  const router = new UniversalHonoRouter(app);
  apply(router, middlewares);
}

// dist/server/index.js
init_internal();
import { createServer } from "http";
import { Http2ServerRequest } from "http2";
import { Readable as Readable2 } from "stream";
import crypto from "crypto";
var renderPageHandler = (options) => enhance(
  async (request, context, runtime) => {
    const pageContextInit = { ...context, runtime, urlOriginal: request.url, headersOriginal: request.headers };
    if (typeof options?.pageContext === "function") {
      Object.assign(pageContextInit, await options.pageContext(runtime));
    } else if (options?.pageContext) {
      Object.assign(pageContextInit, options.pageContext);
    }
    return universalVikeHandler(request, pageContextInit, runtime);
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
function isVercel() {
  return !!process.env.VERCEL;
}
var compressMiddleware2 = (options) => async (request, _context) => {
  const compressionType = options?.compress ?? !isVercel();
  const compressMiddlewareInternal = middleware_default()(request);
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
  const entrypointDirAbs = argv1 ? dirname2(isAbsolute2(argv1) ? argv1 : join3(process.cwd(), argv1)) : dirname2(fileURLToPath(import.meta.url));
  const defaultStaticDir = join3(entrypointDirAbs, "..", "client");
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
      const { default: sirv } = await Promise.resolve().then(() => (init_middleware(), middleware_exports));
      staticMiddleware = sirv(staticConfig.root, { etag: true });
    }
    return staticMiddleware(newReq, context, runtime);
  }
  return serveStaticFiles(request);
};
var vikeMiddlewares = await getUniversalMiddlewares();
var renderPageUniversal = (options) => [
  compressMiddleware2(options),
  serveStaticMiddleware(options),
  ...vikeMiddlewares,
  renderPageHandler(options)
];
var universal_prod_default = renderPageUniversal;
function apply3(app, options) {
  apply2(app, universal_prod_default(options));
  return app;
}
function onReady(options) {
  return () => {
    console.log(`Server running at http://localhost:${options.port}`);
  };
}
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
var Request2 = class extends GlobalRequest {
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
var newRequestFromIncoming = (method, url22, incoming, abortController) => {
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
    const req = new Request2(url22, init);
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
      init.body = Readable2.toWeb(incoming);
    }
  }
  return new Request2(url22, init);
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
Object.setPrototypeOf(requestPrototype, Request2.prototype);
var newRequest = (incoming, defaultHostname) => {
  const req = Object.create(requestPrototype);
  req[incomingKey] = incoming;
  const host = (incoming instanceof Http2ServerRequest ? incoming.authority : incoming.headers.host) || defaultHostname;
  if (!host) {
    throw new RequestError("Missing host header");
  }
  const url22 = new URL(
    `${incoming instanceof Http2ServerRequest || incoming.socket && incoming.socket.encrypted ? "https" : "http"}://${host}${incoming.url}`
  );
  if (url22.hostname.length !== host.length && url22.hostname !== host.replace(/:\d+$/, "")) {
    throw new RequestError("Invalid host header");
  }
  req[urlKey] = url22.href;
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
  const state2 = response[stateKey];
  return state2 && state2.body || void 0;
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
  const [status2, body, header] = res[cacheKey];
  if (typeof body === "string") {
    header["Content-Length"] = Buffer.byteLength(body);
    outgoing.writeHead(status2, header);
    outgoing.end(body);
  } else {
    outgoing.writeHead(status2, header);
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
  if (options.overrideGlobalObjects !== false && global.Request !== Request2) {
    Object.defineProperty(global, "Request", {
      value: Request2
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
function startServer() {
  const app = new Hono2();
  const port = process.env.PORT || 3e3;
  apply3(app);
  serve2(app, { port: +port });
}
startServer();
