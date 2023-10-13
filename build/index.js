var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value), __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// node_modules/@jsep-plugin/assignment/dist/cjs/index.cjs.js
var require_index_cjs = __commonJS({
  "node_modules/@jsep-plugin/assignment/dist/cjs/index.cjs.js"(exports, module2) {
    "use strict";
    var plugin = {
      name: "assignment",
      assignmentOperators: /* @__PURE__ */ new Set([
        "=",
        "*=",
        "**=",
        "/=",
        "%=",
        "+=",
        "-=",
        "<<=",
        ">>=",
        ">>>=",
        "&=",
        "^=",
        "|="
      ]),
      updateOperators: [43, 45],
      assignmentPrecedence: 0.9,
      init(jsep2) {
        let updateNodeTypes = [jsep2.IDENTIFIER, jsep2.MEMBER_EXP];
        plugin.assignmentOperators.forEach((op) => jsep2.addBinaryOp(op, plugin.assignmentPrecedence, !0)), jsep2.hooks.add("gobble-token", function(env) {
          let code = this.code;
          plugin.updateOperators.some((c) => c === code && c === this.expr.charCodeAt(this.index + 1)) && (this.index += 2, env.node = {
            type: "UpdateExpression",
            operator: code === 43 ? "++" : "--",
            argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
            prefix: !0
          }, (!env.node.argument || !updateNodeTypes.includes(env.node.argument.type)) && this.throwError(`Unexpected ${env.node.operator}`));
        }), jsep2.hooks.add("after-token", function(env) {
          if (env.node) {
            let code = this.code;
            plugin.updateOperators.some((c) => c === code && c === this.expr.charCodeAt(this.index + 1)) && (updateNodeTypes.includes(env.node.type) || this.throwError(`Unexpected ${env.node.operator}`), this.index += 2, env.node = {
              type: "UpdateExpression",
              operator: code === 43 ? "++" : "--",
              argument: env.node,
              prefix: !1
            });
          }
        }), jsep2.hooks.add("after-expression", function(env) {
          env.node && updateBinariesToAssignments(env.node);
        });
        function updateBinariesToAssignments(node) {
          plugin.assignmentOperators.has(node.operator) ? (node.type = "AssignmentExpression", updateBinariesToAssignments(node.left), updateBinariesToAssignments(node.right)) : node.operator || Object.values(node).forEach((val) => {
            val && typeof val == "object" && updateBinariesToAssignments(val);
          });
        }
      }
    };
    module2.exports = plugin;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root
});

// node_modules/@webstudio-is/fonts/lib/index.js
var import_zod = require("zod"), SYSTEM_FONTS = /* @__PURE__ */ new Map([
  ["Arial", ["Roboto", "sans-serif"]],
  ["Times New Roman", ["sans"]],
  ["Courier New", ["monospace"]],
  ["system-ui", []]
]), DEFAULT_FONT_FALLBACK = "sans-serif", FONT_FORMATS = /* @__PURE__ */ new Map([
  ["woff", "woff"],
  ["woff2", "woff2"],
  ["ttf", "truetype"],
  ["otf", "opentype"]
]), FONT_MIME_TYPES = Array.from(FONT_FORMATS.keys()).map((format) => `.${format}`).join(", "), FONT_STYLES = ["normal", "italic", "oblique"];
var FontFormat = import_zod.z.union([
  import_zod.z.literal("ttf"),
  import_zod.z.literal("woff"),
  import_zod.z.literal("woff2"),
  import_zod.z.literal("otf")
]), AxisName = import_zod.z.enum([
  "wght",
  "wdth",
  "slnt",
  "opsz",
  "ital",
  "GRAD",
  "XTRA",
  "XOPQ",
  "YOPQ",
  "YTLC",
  "YTUC",
  "YTAS",
  "YTDE",
  "YTFI"
]), VariationAxes = import_zod.z.record(
  AxisName,
  import_zod.z.object({
    name: import_zod.z.string(),
    min: import_zod.z.number(),
    default: import_zod.z.number(),
    max: import_zod.z.number()
  })
), FontMetaStatic = import_zod.z.object({
  family: import_zod.z.string(),
  style: import_zod.z.enum(FONT_STYLES),
  weight: import_zod.z.number()
}), FontMetaVariable = import_zod.z.object({
  family: import_zod.z.string(),
  variationAxes: VariationAxes
}), FontMeta = import_zod.z.union([FontMetaStatic, FontMetaVariable]);

// node_modules/@webstudio-is/react-sdk/lib/index.js
var import_react2 = require("react"), import_react3 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime"), import_react4 = require("react"), import_jsx_runtime3 = require("react/jsx-runtime");

// node_modules/@webstudio-is/error-utils/lib/index.js
var captureError = (error, value) => {
  throw error;
};

// node_modules/@webstudio-is/css-engine/lib/index.js
var import_hyphenate_style_name = __toESM(require("hyphenate-style-name"), 1), import_zod2 = require("zod");
var fallbackTransform = (styleValue) => {
  if (styleValue.type === "fontFamily") {
    let firstFontFamily = styleValue.value[0], fallbacks = SYSTEM_FONTS.get(firstFontFamily ?? "Arial"), fontFamily = [...styleValue.value];
    return Array.isArray(fallbacks) ? fontFamily.push(...fallbacks) : fontFamily.push(DEFAULT_FONT_FALLBACK), {
      type: "fontFamily",
      value: fontFamily
    };
  }
}, toValue = (styleValue, transformValue) => {
  if (styleValue === void 0)
    return "";
  let value = (transformValue == null ? void 0 : transformValue(styleValue)) ?? fallbackTransform(styleValue) ?? styleValue;
  if (value.type === "unit")
    return value.value + (value.unit === "number" ? "" : value.unit);
  if (value.type === "fontFamily")
    return value.value.join(", ");
  if (value.type === "var") {
    let fallbacks = [];
    for (let fallback of value.fallbacks)
      fallbacks.push(toValue(fallback, transformValue));
    let fallbacksString = fallbacks.length > 0 ? `, ${fallbacks.join(", ")}` : "";
    return `var(--${value.value}${fallbacksString})`;
  }
  if (value.type === "keyword" || value.type === "invalid" || value.type === "unset")
    return value.value;
  if (value.type === "rgb")
    return `rgba(${value.r}, ${value.g}, ${value.b}, ${value.alpha})`;
  if (value.type === "image")
    return value.hidden || value.value.type !== "url" ? "none" : `url(${value.value.url})`;
  if (value.type === "unparsed")
    return value.hidden ? "none" : value.value;
  if (value.type === "layers") {
    let valueString = value.value.filter(
      (layer) => !("hidden" in layer) || "hidden" in layer && layer.hidden === !1
    ).map((layer) => toValue(layer, transformValue)).join(", ");
    return valueString === "" ? "none" : valueString;
  }
  return value.type === "tuple" ? value.value.map((value2) => toValue(value2, transformValue)).join(" ") : captureError(new Error("Unknown value type"), value);
}, toProperty = (property) => property === "backgroundClip" ? "-webkit-background-clip" : (0, import_hyphenate_style_name.default)(property), _styleMap, _isDirty, _string, _indent, _transformValue, _a, StylePropertyMap = (_a = class {
  constructor(transformValue) {
    __privateAdd(this, _styleMap, /* @__PURE__ */ new Map());
    __privateAdd(this, _isDirty, !1);
    __privateAdd(this, _string, "");
    __privateAdd(this, _indent, 0);
    __privateAdd(this, _transformValue, void 0);
    __publicField(this, "onChange");
    __privateSet(this, _transformValue, transformValue);
  }
  setTransformer(transformValue) {
    __privateSet(this, _transformValue, transformValue);
  }
  set(property, value) {
    var _a7;
    __privateGet(this, _styleMap).set(property, value), __privateSet(this, _isDirty, !0), (_a7 = this.onChange) == null || _a7.call(this);
  }
  has(property) {
    return __privateGet(this, _styleMap).has(property);
  }
  get size() {
    return __privateGet(this, _styleMap).size;
  }
  keys() {
    return __privateGet(this, _styleMap).keys();
  }
  delete(property) {
    var _a7;
    __privateGet(this, _styleMap).delete(property), __privateSet(this, _isDirty, !0), (_a7 = this.onChange) == null || _a7.call(this);
  }
  clear() {
    var _a7;
    __privateGet(this, _styleMap).clear(), __privateSet(this, _isDirty, !0), (_a7 = this.onChange) == null || _a7.call(this);
  }
  toString({ indent = 0 } = {}) {
    if (__privateGet(this, _isDirty) === !1 && indent === __privateGet(this, _indent))
      return __privateGet(this, _string);
    __privateSet(this, _indent, indent);
    let block = [], spaces = " ".repeat(indent);
    for (let [property, value] of __privateGet(this, _styleMap))
      value !== void 0 && block.push(
        `${spaces}${toProperty(property)}: ${toValue(
          value,
          __privateGet(this, _transformValue)
        )}`
      );
    return __privateSet(this, _string, block.join(`;
`)), __privateSet(this, _isDirty, !1), __privateGet(this, _string);
  }
}, _styleMap = new WeakMap(), _isDirty = new WeakMap(), _string = new WeakMap(), _indent = new WeakMap(), _transformValue = new WeakMap(), _a), _onChange, _a2, StyleRule = (_a2 = class {
  constructor(selectorText, style, transformValue) {
    __publicField(this, "styleMap");
    __publicField(this, "selectorText");
    __publicField(this, "onChange");
    __privateAdd(this, _onChange, () => {
      var _a7;
      (_a7 = this.onChange) == null || _a7.call(this);
    });
    this.styleMap = new StylePropertyMap(transformValue), this.selectorText = selectorText;
    let property;
    for (property in style)
      this.styleMap.set(property, style[property]);
    this.styleMap.onChange = __privateGet(this, _onChange);
  }
  get cssText() {
    return this.toString();
  }
  toString(options = { indent: 0 }) {
    let spaces = " ".repeat(options.indent);
    return `${spaces}${this.selectorText} {
${this.styleMap.toString({
      indent: options.indent + 2
    })}
${spaces}}`;
  }
}, _onChange = new WeakMap(), _a2), _mediaType, _a3, MediaRule = (_a3 = class {
  constructor(options = {}) {
    __publicField(this, "options");
    __publicField(this, "rules", []);
    __privateAdd(this, _mediaType, void 0);
    this.options = options, __privateSet(this, _mediaType, options.mediaType ?? "all");
  }
  insertRule(rule) {
    return this.rules.push(rule), rule;
  }
  get cssText() {
    return this.toString();
  }
  toString() {
    if (this.rules.length === 0)
      return "";
    let rules = [];
    for (let rule of this.rules)
      rules.push(rule.toString({ indent: 2 }));
    let conditionText = "", { minWidth, maxWidth } = this.options;
    return minWidth !== void 0 && (conditionText = ` and (min-width: ${minWidth}px)`), maxWidth !== void 0 && (conditionText += ` and (max-width: ${maxWidth}px)`), `@media ${__privateGet(this, _mediaType)}${conditionText} {
${rules.join(
      `
`
    )}
}`;
  }
}, _mediaType = new WeakMap(), _a3), PlaintextRule = class {
  cssText;
  styleMap = new StylePropertyMap();
  constructor(cssText) {
    this.cssText = cssText;
  }
  toString() {
    return this.cssText;
  }
}, FontFaceRule = class {
  options;
  constructor(options) {
    this.options = options;
  }
  get cssText() {
    return this.toString();
  }
  toString() {
    let decls = [], { fontFamily, fontStyle, fontWeight, fontDisplay, src } = this.options;
    return decls.push(
      `font-family: ${/\s/.test(fontFamily) ? `"${fontFamily}"` : fontFamily}`
    ), decls.push(`font-style: ${fontStyle}`), decls.push(`font-weight: ${fontWeight}`), decls.push(`font-display: ${fontDisplay}`), decls.push(`src: ${src}`), `@font-face {
  ${decls.join("; ")};
}`;
  }
}, compareMedia = (optionA, optionB) => optionA.minWidth === void 0 && optionA.maxWidth === void 0 ? -1 : optionB.minWidth === void 0 && optionB.maxWidth === void 0 ? 1 : optionA.minWidth !== void 0 && optionB.minWidth !== void 0 ? optionA.minWidth - optionB.minWidth : optionA.maxWidth !== void 0 && optionB.maxWidth !== void 0 ? optionB.maxWidth - optionA.maxWidth : "minWidth" in optionA ? 1 : -1, _element, _name, _a4, StyleElement = (_a4 = class {
  constructor(name = "") {
    __privateAdd(this, _element, void 0);
    __privateAdd(this, _name, void 0);
    __privateSet(this, _name, name);
  }
  get isMounted() {
    var _a7;
    return ((_a7 = __privateGet(this, _element)) == null ? void 0 : _a7.parentElement) != null;
  }
  mount() {
    this.isMounted === !1 && (__privateSet(this, _element, document.createElement("style")), __privateGet(this, _element).setAttribute("data-webstudio", __privateGet(this, _name)), document.head.appendChild(__privateGet(this, _element)));
  }
  unmount() {
    var _a7, _b;
    this.isMounted && ((_b = (_a7 = __privateGet(this, _element)) == null ? void 0 : _a7.parentElement) == null || _b.removeChild(__privateGet(this, _element)), __privateSet(this, _element, void 0));
  }
  render(cssText) {
    __privateGet(this, _element) && (__privateGet(this, _element).textContent = cssText);
  }
  setAttribute(name, value) {
    __privateGet(this, _element) && __privateGet(this, _element).setAttribute(name, value);
  }
  getAttribute(name) {
    if (__privateGet(this, _element))
      return __privateGet(this, _element).getAttribute(name);
  }
}, _element = new WeakMap(), _name = new WeakMap(), _a4), _cssText, _element2, _a5, StyleSheet = (_a5 = class {
  constructor(element) {
    __privateAdd(this, _cssText, "");
    __privateAdd(this, _element2, void 0);
    __privateSet(this, _element2, element);
  }
  replaceSync(cssText) {
    cssText !== __privateGet(this, _cssText) && (__privateSet(this, _cssText, cssText), __privateGet(this, _element2).render(cssText));
  }
}, _cssText = new WeakMap(), _element2 = new WeakMap(), _a5), defaultMediaRuleId = "__default-media-rule__", _element3, _mediaRules, _plainRules, _fontFaceRules, _sheet, _isDirty2, _cssText2, _onChangeRule, _a6, CssEngine = (_a6 = class {
  constructor({ name }) {
    __privateAdd(this, _element3, void 0);
    __privateAdd(this, _mediaRules, /* @__PURE__ */ new Map());
    __privateAdd(this, _plainRules, /* @__PURE__ */ new Map());
    __privateAdd(this, _fontFaceRules, []);
    __privateAdd(this, _sheet, void 0);
    __privateAdd(this, _isDirty2, !1);
    __privateAdd(this, _cssText2, "");
    __privateAdd(this, _onChangeRule, () => {
      __privateSet(this, _isDirty2, !0);
    });
    __privateSet(this, _element3, new StyleElement(name)), __privateSet(this, _sheet, new StyleSheet(__privateGet(this, _element3)));
  }
  addMediaRule(id, options) {
    let mediaRule = __privateGet(this, _mediaRules).get(id);
    return mediaRule === void 0 ? (mediaRule = new MediaRule(options), __privateGet(this, _mediaRules).set(id, mediaRule), __privateSet(this, _isDirty2, !0), mediaRule) : (options && (mediaRule.options = options, __privateSet(this, _isDirty2, !0)), mediaRule);
  }
  addStyleRule(selectorText, rule, transformValue) {
    let mediaRule = this.addMediaRule(rule.breakpoint || defaultMediaRuleId);
    __privateSet(this, _isDirty2, !0);
    let styleRule = new StyleRule(selectorText, rule.style, transformValue);
    if (styleRule.onChange = __privateGet(this, _onChangeRule), mediaRule === void 0)
      throw new Error("No media rule found");
    return mediaRule.insertRule(styleRule), styleRule;
  }
  addPlaintextRule(cssText) {
    let rule = __privateGet(this, _plainRules).get(cssText);
    return rule !== void 0 ? rule : (__privateSet(this, _isDirty2, !0), __privateGet(this, _plainRules).set(cssText, new PlaintextRule(cssText)));
  }
  addFontFaceRule(options) {
    return __privateSet(this, _isDirty2, !0), __privateGet(this, _fontFaceRules).push(new FontFaceRule(options));
  }
  clear() {
    __privateGet(this, _mediaRules).clear(), __privateGet(this, _plainRules).clear(), __privateSet(this, _fontFaceRules, []), __privateSet(this, _isDirty2, !0);
  }
  render() {
    __privateGet(this, _element3).mount(), __privateGet(this, _sheet).replaceSync(this.cssText);
  }
  unmount() {
    __privateGet(this, _element3).unmount();
  }
  setAttribute(name, value) {
    __privateGet(this, _element3).setAttribute(name, value);
  }
  getAttribute(name) {
    return __privateGet(this, _element3).getAttribute(name);
  }
  get cssText() {
    if (__privateGet(this, _isDirty2) === !1)
      return __privateGet(this, _cssText2);
    __privateSet(this, _isDirty2, !1);
    let css = [];
    css.push(...__privateGet(this, _fontFaceRules).map((rule) => rule.cssText));
    for (let plaintextRule of __privateGet(this, _plainRules).values())
      css.push(plaintextRule.cssText);
    let sortedMediaRules = Array.from(__privateGet(this, _mediaRules).values()).sort(
      (ruleA, ruleB) => compareMedia(ruleA.options, ruleB.options)
    );
    for (let mediaRule of sortedMediaRules) {
      let { cssText } = mediaRule;
      cssText !== "" && css.push(cssText);
    }
    return __privateSet(this, _cssText2, css.join(`
`)), __privateGet(this, _cssText2);
  }
}, _element3 = new WeakMap(), _mediaRules = new WeakMap(), _plainRules = new WeakMap(), _fontFaceRules = new WeakMap(), _sheet = new WeakMap(), _isDirty2 = new WeakMap(), _cssText2 = new WeakMap(), _onChangeRule = new WeakMap(), _a6);
var Unit = import_zod2.z.string(), UnitValue = import_zod2.z.object({
  type: import_zod2.z.literal("unit"),
  unit: Unit,
  value: import_zod2.z.number()
}), KeywordValue = import_zod2.z.object({
  type: import_zod2.z.literal("keyword"),
  // @todo use exact type
  value: import_zod2.z.string()
}), UnparsedValue = import_zod2.z.object({
  type: import_zod2.z.literal("unparsed"),
  value: import_zod2.z.string(),
  // For the builder we want to be able to hide background-image
  hidden: import_zod2.z.boolean().optional()
}), FontFamilyValue = import_zod2.z.object({
  type: import_zod2.z.literal("fontFamily"),
  value: import_zod2.z.array(import_zod2.z.string())
}), RgbValue = import_zod2.z.object({
  type: import_zod2.z.literal("rgb"),
  r: import_zod2.z.number(),
  g: import_zod2.z.number(),
  b: import_zod2.z.number(),
  alpha: import_zod2.z.number()
}), ImageValue = import_zod2.z.object({
  type: import_zod2.z.literal("image"),
  value: import_zod2.z.union(
    [
      import_zod2.z.object({ type: import_zod2.z.literal("asset"), value: import_zod2.z.string() }),
      // url is not stored in db and only used by css-engine transformValue
      // to prepare image value for rendering
      import_zod2.z.object({ type: import_zod2.z.literal("url"), url: import_zod2.z.string() })
    ]
  ),
  // For the builder we want to be able to hide images
  hidden: import_zod2.z.boolean().optional()
}), InvalidValue = import_zod2.z.object({
  type: import_zod2.z.literal("invalid"),
  value: import_zod2.z.string()
}), UnsetValue = import_zod2.z.object({
  type: import_zod2.z.literal("unset"),
  value: import_zod2.z.literal("")
}), TupleValueItem = import_zod2.z.union(
  [
    UnitValue,
    KeywordValue,
    UnparsedValue,
    RgbValue
  ]
), TupleValue = import_zod2.z.object({
  type: import_zod2.z.literal("tuple"),
  value: import_zod2.z.array(TupleValueItem),
  hidden: import_zod2.z.boolean().optional()
}), LayerValueItem = import_zod2.z.union(
  [
    UnitValue,
    KeywordValue,
    UnparsedValue,
    ImageValue,
    TupleValue,
    InvalidValue
  ]
), LayersValue = import_zod2.z.object({
  type: import_zod2.z.literal("layers"),
  value: import_zod2.z.array(LayerValueItem)
}), ValidStaticStyleValue = import_zod2.z.union(
  [
    ImageValue,
    LayersValue,
    UnitValue,
    KeywordValue,
    FontFamilyValue,
    RgbValue,
    UnparsedValue,
    TupleValue
  ]
);
var VarValue = import_zod2.z.object({
  type: import_zod2.z.literal("var"),
  value: import_zod2.z.string(),
  fallbacks: import_zod2.z.array(ValidStaticStyleValue)
}), StyleValue = import_zod2.z.union(
  [
    ValidStaticStyleValue,
    InvalidValue,
    UnsetValue,
    VarValue
  ]
), Style = import_zod2.z.record(import_zod2.z.string(), StyleValue);

// node_modules/@webstudio-is/react-sdk/lib/index.js
var import_react5 = require("@remix-run/react"), import_jsx_runtime4 = require("react/jsx-runtime"), import_zod3 = require("zod"), import_zod4 = require("zod"), import_zod5 = require("zod");
var import_title_case = require("title-case"), import_no_case = require("no-case");
var import_jsep = __toESM(require("jsep"), 1), import_assignment = __toESM(require_index_cjs(), 1);
var ReactSdkContext = (0, import_react3.createContext)({
  assetBaseUrl: "/",
  imageBaseUrl: "/",
  imageLoader: ({ src }) => src,
  pagesPaths: /* @__PURE__ */ new Set()
});
var idAttribute = "data-ws-id";
var indexAttribute = "data-ws-index";
var Root = ({
  Outlet: Outlet4 = import_react5.Outlet
}) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", {
  lang: "en",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("link", { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Meta, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Links, {})
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Outlet4, {})
  ]
}), common = {
  label: import_zod3.z.string().optional(),
  description: import_zod3.z.string().optional(),
  required: import_zod3.z.boolean()
}, Number2 = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("number"),
  type: import_zod3.z.literal("number"),
  defaultValue: import_zod3.z.number().optional()
}), Range = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("range"),
  type: import_zod3.z.literal("number"),
  defaultValue: import_zod3.z.number().optional()
}), Text = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("text"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  /**
   * The number of rows in <textarea>. If set to 0 an <input> will be used instead.
   * In line with Storybook team's plan: https://github.com/storybookjs/storybook/issues/21100
   */
  rows: import_zod3.z.number().optional()
}), Code = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("code"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  /**
   * The number of rows in <textarea>. If set to 0 an <input> will be used instead.
   * In line with Storybook team's plan: https://github.com/storybookjs/storybook/issues/21100
   */
  rows: import_zod3.z.number().optional()
}), Color = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("color"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional()
}), Boolean = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("boolean"),
  type: import_zod3.z.literal("boolean"),
  defaultValue: import_zod3.z.boolean().optional()
}), Radio = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("radio"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), InlineRadio = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("inline-radio"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), Select = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("select"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), Check = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("check"),
  type: import_zod3.z.literal("string[]"),
  defaultValue: import_zod3.z.array(import_zod3.z.string()).optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), InlineCheck = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("inline-check"),
  type: import_zod3.z.literal("string[]"),
  defaultValue: import_zod3.z.array(import_zod3.z.string()).optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), MultiSelect = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("multi-select"),
  type: import_zod3.z.literal("string[]"),
  defaultValue: import_zod3.z.array(import_zod3.z.string()).optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), File = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("file"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept */
  accept: import_zod3.z.string().optional()
}), Url = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("url"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional()
}), ObjectType = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("object"),
  // @todo not sure what type should be here
  // (we don't support Object yet, added for completeness)
  type: import_zod3.z.literal("Record<string, string>"),
  defaultValue: import_zod3.z.record(import_zod3.z.string()).optional()
}), Date = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("date"),
  // @todo not sure what type should be here
  // (we don't support Date yet, added for completeness)
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional()
}), Action = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("action"),
  type: import_zod3.z.literal("action"),
  defaultValue: import_zod3.z.undefined().optional()
}), PropMeta = import_zod3.z.union(
  [
    Number2,
    Range,
    Text,
    Code,
    Color,
    Boolean,
    Radio,
    InlineRadio,
    Select,
    MultiSelect,
    Check,
    InlineCheck,
    File,
    Url,
    ObjectType,
    Date,
    Action
  ]
);
import_jsep.default.plugins.register(import_assignment.default);
var EmbedTemplateText = import_zod5.z.object({
  type: import_zod5.z.literal("text"),
  value: import_zod5.z.string()
}), EmbedTemplateDataSource = import_zod5.z.union(
  [
    import_zod5.z.object({
      type: import_zod5.z.literal("variable"),
      initialValue: import_zod5.z.union(
        [
          import_zod5.z.string(),
          import_zod5.z.number(),
          import_zod5.z.boolean(),
          import_zod5.z.array(import_zod5.z.string())
        ]
      )
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("expression"),
      code: import_zod5.z.string()
    })
  ]
), EmbedTemplateProp = import_zod5.z.union(
  [
    import_zod5.z.object({
      type: import_zod5.z.literal("dataSource"),
      name: import_zod5.z.string(),
      dataSourceName: import_zod5.z.string()
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("number"),
      name: import_zod5.z.string(),
      value: import_zod5.z.number()
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("string"),
      name: import_zod5.z.string(),
      value: import_zod5.z.string()
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("boolean"),
      name: import_zod5.z.string(),
      value: import_zod5.z.boolean()
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("string[]"),
      name: import_zod5.z.string(),
      value: import_zod5.z.array(import_zod5.z.string())
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("action"),
      name: import_zod5.z.string(),
      value: import_zod5.z.array(
        import_zod5.z.object({
          type: import_zod5.z.literal("execute"),
          args: import_zod5.z.optional(import_zod5.z.array(import_zod5.z.string())),
          code: import_zod5.z.string()
        })
      )
    })
  ]
), EmbedTemplateStyleDeclRaw = import_zod5.z.object({
  // State selector, e.g. :hover
  state: import_zod5.z.optional(import_zod5.z.string()),
  property: import_zod5.z.string(),
  value: StyleValue
}), EmbedTemplateStyleDecl = EmbedTemplateStyleDeclRaw, EmbedTemplateInstance = import_zod5.z.lazy(
  () => import_zod5.z.object({
    type: import_zod5.z.literal("instance"),
    component: import_zod5.z.string(),
    label: import_zod5.z.optional(import_zod5.z.string()),
    dataSources: import_zod5.z.optional(import_zod5.z.record(import_zod5.z.string(), EmbedTemplateDataSource)),
    props: import_zod5.z.optional(import_zod5.z.array(EmbedTemplateProp)),
    tokens: import_zod5.z.optional(import_zod5.z.array(import_zod5.z.string())),
    styles: import_zod5.z.optional(import_zod5.z.array(EmbedTemplateStyleDecl)),
    children: WsEmbedTemplate
  })
), WsEmbedTemplate = import_zod5.z.lazy(
  () => import_zod5.z.array(import_zod5.z.union([EmbedTemplateInstance, EmbedTemplateText]))
);
var WsComponentPropsMeta = import_zod4.z.object({
  props: import_zod4.z.record(PropMeta),
  // Props that will be always visible in properties panel.
  initialProps: import_zod4.z.array(import_zod4.z.string()).optional()
}), componentCategories = [
  "general",
  "text",
  "media",
  "forms",
  "radix",
  "hidden"
], stateCategories = ["states", "component-states"], ComponentState = import_zod4.z.object({
  category: import_zod4.z.enum(stateCategories).optional(),
  selector: import_zod4.z.string(),
  label: import_zod4.z.string()
}), ComponentToken = import_zod4.z.object({
  variant: import_zod4.z.optional(import_zod4.z.string()),
  styles: import_zod4.z.array(EmbedTemplateStyleDecl)
});
var WsComponentMeta = import_zod4.z.object({
  category: import_zod4.z.enum(componentCategories).optional(),
  // container - can accept other components with dnd or be edited as text
  // control - usually form controls like inputs, without children
  // embed - images, videos or other embeddable components, without children
  // rich-text-child - formatted text fragment, not listed in components list
  type: import_zod4.z.enum(["container", "control", "embed", "rich-text-child"]),
  requiredAncestors: import_zod4.z.optional(import_zod4.z.array(import_zod4.z.string())),
  invalidAncestors: import_zod4.z.optional(import_zod4.z.array(import_zod4.z.string())),
  // when this field is specified component receives
  // prop with index of same components withiin specified ancestor
  // important to automatically enumerate collections without
  // naming every item manually
  indexWithinAncestor: import_zod4.z.optional(import_zod4.z.string()),
  stylable: import_zod4.z.optional(import_zod4.z.boolean()),
  // specifies whether the instance can be deleted,
  // copied or dragged out of its parent instance
  // true by default
  detachable: import_zod4.z.optional(import_zod4.z.boolean()),
  label: import_zod4.z.optional(import_zod4.z.string()),
  description: import_zod4.z.string().optional(),
  icon: import_zod4.z.string(),
  presetStyle: import_zod4.z.optional(
    import_zod4.z.record(import_zod4.z.string(), import_zod4.z.array(EmbedTemplateStyleDecl))
  ),
  presetTokens: import_zod4.z.optional(import_zod4.z.record(import_zod4.z.string(), ComponentToken)),
  states: import_zod4.z.optional(import_zod4.z.array(ComponentState)),
  template: import_zod4.z.optional(WsEmbedTemplate),
  order: import_zod4.z.number().optional()
});
var getInstanceIdFromComponentProps = (props) => props[idAttribute], getIndexWithinAncestorFromComponentProps = (props) => props[indexAttribute];

// app/routes/[pricing]._index.tsx
var pricing_index_exports = {};
__export(pricing_index_exports, {
  action: () => action,
  default: () => pricing_index_default,
  links: () => links,
  meta: () => meta
});
var import_server_runtime = require("@remix-run/server-runtime");

// node_modules/@webstudio-is/form-handlers/lib/index.js
var formHiddenFieldPrefix = "ws--form", formIdFieldName = `${formHiddenFieldPrefix}-id`, getFormEntries = (formData) => [...formData.entries()].flatMap(
  ([key, value]) => key.startsWith(formHiddenFieldPrefix) === !1 && typeof value == "string" ? [[key, value]] : []
), getFormId = (formData) => {
  for (let [key, value] of formData.entries())
    if (key === formIdFieldName && typeof value == "string")
      return value;
}, getDomain = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return;
  }
}, formToEmail = ({
  formData,
  pageUrl,
  toEmail,
  fromEmail
}) => {
  let html = `<p>There has been a new submission of your form at <a href="${pageUrl}">${pageUrl}</a>:</p>`, txt = `There has been a new submission of your form at ${pageUrl}:

`;
  html += "<table><tbody>";
  for (let [key, value] of getFormEntries(formData))
    html += `<tr><td><strong>${key}:</strong></td><td>${value}</td></tr>`, txt += `${key}: ${value}
`;
  return html += "</tbody></table>", {
    from: fromEmail,
    to: toEmail,
    subject: `New form submission from ${getDomain(pageUrl) ?? pageUrl}`,
    txt,
    html
  };
}, getResponseBody = async (response) => {
  let text = await response.text();
  try {
    let json4 = JSON.parse(text);
    return typeof json4 == "object" && json4 !== null ? { json: json4, text } : { text };
  } catch {
    return { text: text === "" ? response.statusText : text };
  }
}, getErrors = (json4) => {
  if (json4 !== void 0) {
    if (typeof json4.error == "string")
      return [json4.error];
    if (typeof json4.message == "string")
      return [json4.message];
    if (Array.isArray(json4.errors) && json4.errors.every((error) => typeof error == "string"))
      return json4.errors;
  }
};
var getAuth = (hookUrl) => {
  let url = new URL(hookUrl), { username, password } = url;
  url.username = "", url.password = "";
  let urlWithoutAuth = url.toString();
  return {
    username,
    password,
    urlWithoutAuth
  };
}, n8nHandler = async ({
  formInfo,
  hookUrl
}) => {
  let headers = { "Content-Type": "application/json" }, { username, password, urlWithoutAuth } = getAuth(hookUrl);
  username !== "" && password !== "" && (headers.Authorization = `Basic ${btoa([username, password].join(":"))}`);
  let formId = getFormId(formInfo.formData);
  if (formId === void 0)
    return { success: !1, errors: ["No form id in FormData"] };
  let payload = {
    email: formToEmail(formInfo),
    // globally unique form id (can be used for unsubscribing)
    formId: [formInfo.projectId, formId].join("--"),
    action: formInfo.action,
    method: formInfo.method,
    formData: Object.fromEntries(getFormEntries(formInfo.formData))
  }, response;
  try {
    response = await fetch(urlWithoutAuth, {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });
  } catch (error) {
    return { success: !1, errors: [error.message] };
  }
  let { text, json: json4 } = await getResponseBody(response);
  return response.status >= 200 && response.status < 300 && // It's difficult to control status code at n8n side.
  // Data is easier to control, so we use data to determine success.
  (json4 == null ? void 0 : json4.success) === !0 ? { success: !0 } : { success: !1, errors: getErrors(json4) ?? [text] };
};

// app/routes/[pricing]._index.tsx
var import_react55 = require("@remix-run/react");

// app/__generated__/[pricing]._index.tsx
var import_react54 = require("react");

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_react7 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime"), import_react8 = require("react"), import_jsx_runtime7 = require("react/jsx-runtime"), import_react9 = require("react"), import_utils = require("@react-aria/utils");
var import_jsx_runtime8 = require("react/jsx-runtime"), import_react10 = require("react"), import_jsx_runtime9 = require("react/jsx-runtime"), import_react11 = require("react"), import_react12 = require("react"), import_jsx_runtime10 = require("react/jsx-runtime"), import_react13 = require("react"), import_jsx_runtime11 = require("react/jsx-runtime"), import_react14 = require("react"), import_jsx_runtime12 = require("react/jsx-runtime"), import_react15 = require("react"), import_jsx_runtime13 = require("react/jsx-runtime"), import_react16 = require("react"), import_jsx_runtime14 = require("react/jsx-runtime"), import_react17 = require("react"), import_jsx_runtime15 = require("react/jsx-runtime"), import_react18 = require("react"), import_jsx_runtime16 = require("react/jsx-runtime"), import_react19 = require("react"), import_jsx_runtime17 = require("react/jsx-runtime"), import_react20 = require("react"), import_jsx_runtime18 = require("react/jsx-runtime"), import_react21 = require("react"), import_jsx_runtime19 = require("react/jsx-runtime"), import_react22 = require("react"), import_jsx_runtime20 = require("react/jsx-runtime"), import_react23 = require("react"), import_jsx_runtime21 = require("react/jsx-runtime"), import_react24 = require("react"), import_jsx_runtime22 = require("react/jsx-runtime"), import_react25 = require("react");

// node_modules/@webstudio-is/image/lib/index.js
var import_react6 = require("react"), import_jsx_runtime5 = require("react/jsx-runtime"), import_warn_once = __toESM(require("warn-once"), 1), imageSizes = [16, 32, 48, 64, 96, 128, 256, 384], deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840], allSizes = [...imageSizes, ...deviceSizes], getWidths = (width, sizes) => {
  if (sizes) {
    let viewportWidthRe = /(^|\s)(1?\d?\d)vw/g, percentSizes = [];
    for (let match; match = viewportWidthRe.exec(sizes); match)
      percentSizes.push(Number.parseInt(match[2], 10));
    if (percentSizes.length) {
      let smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(
          (size) => size >= deviceSizes[0] * smallestRatio
        ),
        kind: "w"
      };
    }
    return { widths: allSizes, kind: "w" };
  }
  if (width == null)
    return { widths: deviceSizes, kind: "w" };
  let MAX_DEVICE_PIXEL_RATIO = 2, index = allSizes.findIndex(
    (size) => size >= MAX_DEVICE_PIXEL_RATIO * width
  );
  return index = index < 0 ? allSizes.length : index, {
    widths: allSizes.slice(0, index + 1),
    kind: "w"
  };
}, generateImgAttrs = ({
  src,
  width,
  quality,
  sizes,
  loader
}) => {
  let { widths, kind } = getWidths(width, sizes);
  return {
    sizes: !sizes && kind === "w" ? "100vw" : sizes,
    srcSet: widths.map(
      (w, i) => `${loader({ src, quality, width: w })} ${kind === "w" ? w : i + 1}${kind}`
    ).join(", "),
    // Must be last, to prevent Safari to load images twice
    src: loader({
      src,
      quality,
      width: widths[widths.length - 1]
    })
  };
}, getInt = (value) => {
  if (typeof value == "number")
    return Math.round(value);
  if (typeof value == "string") {
    let vNum = Number.parseFloat(value);
    if (!Number.isNaN(vNum))
      return Math.round(vNum);
  }
}, DEFAULT_SIZES = "(min-width: 1280px) 50vw, 100vw", DEFAULT_QUALITY = 80, getImageAttributes = (props) => {
  let width = getInt(props.width), quality = Math.max(
    Math.min(getInt(props.quality) ?? DEFAULT_QUALITY, 100),
    0
  );
  if (props.src != null && props.src !== "") {
    if (props.srcSet == null && props.optimize) {
      let sizes = props.sizes ?? (props.width == null ? DEFAULT_SIZES : void 0);
      return generateImgAttrs({
        src: props.src,
        width,
        quality,
        sizes,
        loader: props.loader
      });
    }
    let resAttrs = { src: props.src };
    return props.srcSet != null && (resAttrs.srcSet = props.srcSet), props.sizes != null && (resAttrs.sizes = props.sizes), resAttrs;
  }
  return null;
}, Image = (0, import_react6.forwardRef)(
  ({
    quality,
    loader,
    optimize = !0,
    loading = "lazy",
    decoding = "async",
    ...imageProps
  }, ref) => {
    let imageAttributes = getImageAttributes({
      src: imageProps.src,
      srcSet: imageProps.srcSet,
      sizes: imageProps.sizes,
      width: imageProps.width,
      quality,
      loader,
      optimize
    }) ?? { src: imagePlaceholderSvg };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "img",
      {
        ...imageProps,
        ...imageAttributes,
        decoding,
        loading,
        ref
      }
    );
  }
);
Image.displayName = "Image";
var imagePlaceholderSvg = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#CCCCCC" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#A2A2A2"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#A2A2A2"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#A2A2A2"
  />
</svg>`)}`;

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_jsx_runtime23 = require("react/jsx-runtime"), import_react26 = require("react"), import_jsx_runtime24 = require("react/jsx-runtime"), import_react27 = require("react"), import_react28 = require("react"), import_jsx_runtime25 = require("react/jsx-runtime"), import_react29 = require("react"), import_react30 = require("react"), import_jsx_runtime26 = require("react/jsx-runtime"), import_react31 = require("react"), import_jsx_runtime27 = require("react/jsx-runtime"), import_react32 = require("react"), import_jsx_runtime28 = require("react/jsx-runtime"), import_react33 = require("react"), import_jsx_runtime29 = require("react/jsx-runtime"), import_react34 = require("react"), import_jsx_runtime30 = require("react/jsx-runtime"), import_colord = require("colord"), import_react35 = require("react");
var import_shallow_equal = require("shallow-equal"), import_jsx_runtime31 = require("react/jsx-runtime"), import_react36 = require("react"), import_jsx_runtime32 = require("react/jsx-runtime"), import_react37 = require("react"), import_jsx_runtime33 = require("react/jsx-runtime"), import_react38 = require("react"), import_jsx_runtime34 = require("react/jsx-runtime"), Slot = (0, import_react7.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "div",
  {
    ...props,
    ref,
    style: { display: props.children ? "contents" : "block" }
  }
));
Slot.displayName = "Slot";
var Fragment3 = (0, import_react8.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { ...props, ref, style: { display: "contents" } }));
Fragment3.displayName = "Fragment";
var ExecutableHtml = (props) => {
  let { code, innerRef, ...rest } = props, containerRef = (0, import_react9.useRef)(null);
  return (0, import_react9.useEffect)(() => {
    let container = containerRef.current;
    if (container === null || code === void 0)
      return;
    let range = document.createRange();
    range.setStart(container, 0);
    let fragment = range.createContextualFragment(code);
    for (; container.firstChild; )
      container.removeChild(container.firstChild);
    container.append(fragment);
  }, [code]), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      ...rest,
      ref: (0, import_utils.mergeRefs)(innerRef, containerRef),
      style: { display: "contents" }
    }
  );
}, InnerHtml = (props) => {
  let { code, innerRef, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      ...rest,
      ref: innerRef,
      style: { display: "contents" },
      dangerouslySetInnerHTML: { __html: props.code ?? "" }
    }
  );
}, Placeholder = (props) => {
  let { code, innerRef, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { ref: innerRef, ...rest, style: { padding: "20px" }, children: 'Open the "Settings" panel to insert HTML code' });
}, HtmlEmbed = (0, import_react9.forwardRef)((props, ref) => {
  let { renderer } = (0, import_react9.useContext)(ReactSdkContext), { code, executeScriptOnCanvas, clientOnly, ...rest } = props;
  return code === void 0 || code.trim().length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Placeholder, { innerRef: ref, ...rest }) : renderer === "canvas" && executeScriptOnCanvas === !0 || renderer === "preview" || clientOnly ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ExecutableHtml, { innerRef: ref, code, ...rest }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(InnerHtml, { innerRef: ref, code, ...rest });
});
HtmlEmbed.displayName = "HtmlEmbed";
var Body = (0, import_react10.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("body", { ...props, ref }));
Body.displayName = "Body";
var defaultTag = "div", Box = (0, import_react11.forwardRef)(
  ({ tag = defaultTag, ...props }, ref) => (0, import_react11.createElement)(tag, { ...props, ref })
);
Box.displayName = "Box";
var defaultTag2 = "div", Text2 = (0, import_react12.forwardRef)(
  ({ tag: Tag = defaultTag2, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tag, { ...props, ref, children })
);
Text2.displayName = "Text";
var defaultTag3 = "h1", Heading = (0, import_react13.forwardRef)(
  ({ tag: Tag = defaultTag3, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Tag, { ...props, ref, children: children ?? "Heading you can edit" })
);
Heading.displayName = "Heading";
var Paragraph = (0, import_react14.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { ...props, ref, children: children ?? "Paragraph you can edit" }));
Paragraph.displayName = "Paragraph";
var Link = (0, import_react15.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { ...props, href: props.href ?? "#", ref, children: children ?? "Link text you can edit" })
);
Link.displayName = "Link";
var RichTextLink = (0, import_react16.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Link, { ...props, ref }));
RichTextLink.displayName = "RichTextLink";
var Span = (0, import_react17.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { ...props, ref }));
Span.displayName = "Span";
var Bold = (0, import_react18.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("b", { ...props, ref }));
Bold.displayName = "Bold";
var Italic = (0, import_react19.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { ...props, ref }));
Italic.displayName = "Italic";
var Superscript = (0, import_react20.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sup", { ...props, ref }));
Superscript.displayName = "Bold";
var Subscript = (0, import_react21.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("sub", { ...props, ref }));
Subscript.displayName = "Subscript";
var Button = (0, import_react22.forwardRef)(
  ({ type = "submit", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { type, ...props, ref, children: children ?? "Button you can edit" })
);
Button.displayName = "Button";
var Input = (0, import_react23.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { ...props, ref }));
Input.displayName = "Input";
var Form = (0, import_react24.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("form", { ...props, ref, children }));
Form.displayName = "Form";
var imagePlaceholderSvg2 = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#CCCCCC" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#A2A2A2"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#A2A2A2"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#A2A2A2"
  />
</svg>`)}`, Image2 = (0, import_react25.forwardRef)(
  ({ loading = "lazy", ...props }, ref) => {
    let { imageLoader: imageLoader2, assetBaseUrl: assetBaseUrl2 } = (0, import_react25.useContext)(ReactSdkContext);
    if (props.src === void 0 || props.src.startsWith(assetBaseUrl2) === !1)
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "img",
        {
          loading,
          ...props,
          src: props.src || imagePlaceholderSvg2,
          ref
        },
        props.src
      );
    let src = props.src.slice(assetBaseUrl2.length);
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Image,
      {
        loading,
        ...props,
        loader: imageLoader2,
        src,
        ref
      },
      src
    );
  }
);
Image2.displayName = "Image";
var Blockquote = (0, import_react26.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("blockquote", { ...props, ref, children: children ?? "Blockquote you can edit" })
);
Blockquote.displayName = "Blockquote";
var unorderedTag = "ul", orderedTag = "ol", List = (0, import_react27.forwardRef)(({ ordered = !1, ...props }, ref) => (0, import_react27.createElement)(ordered ? orderedTag : unorderedTag, { ...props, ref }));
List.displayName = "List";
var ListItem = (0, import_react28.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { ...props, ref, children: children ?? "List Item you can edit" })
);
ListItem.displayName = "ListItem";
var defaultTag4 = "hr", Separator = (0, import_react29.forwardRef)(
  (props, ref) => (0, import_react29.createElement)(defaultTag4, { ...props, ref })
);
Separator.displayName = "Separator";
var CodeText = (0, import_react30.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("code", { ...props, ref, children: children ?? "Code you can edit" }));
CodeText.displayName = "CodeText";
var Label = (0, import_react31.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { ...props, ref }));
Label.displayName = "Label";
var Textarea = (0, import_react32.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("textarea", { ...props, ref }));
Textarea.displayName = "Textarea";
var RadioButton = (0, import_react33.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { ...props, type: "radio", ref }));
RadioButton.displayName = "RadioButton";
var Checkbox = (0, import_react34.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("input", { ...props, type: "checkbox", ref }));
Checkbox.displayName = "Checkbox";
var getUrl = (options) => {
  if (options.url === void 0)
    return;
  let url;
  try {
    let userUrl = new URL(options.url);
    url = new URL(IFRAME_CDN), url.pathname = `/video${userUrl.pathname}`;
  } catch {
  }
  if (url === void 0)
    return;
  let option;
  for (option in options) {
    let value = options[option];
    option === "url" || value === void 0 || url.searchParams.append(option, value.toString());
  }
  if (url.searchParams.set("autoplay", "true"), typeof options.color == "string") {
    let color = (0, import_colord.colord)(options.color).toHex().replace("#", "");
    url.searchParams.set("color", color);
  }
  return options.portrait && url.searchParams.set("title", "true"), options.byline && (url.searchParams.set("portrait", "true"), url.searchParams.set("title", "true")), url.toString();
}, preconnect = (url) => {
  let link = document.createElement("link");
  link.rel = "preconnect", link.href = url, link.crossOrigin = "true", document.head.append(link);
}, warmed = !1, PLAYER_CDN = "https://f.vimeocdn.com", IFRAME_CDN = "https://player.vimeo.com", IMAGE_CDN = "https://i.vimeocdn.com", warmConnections = () => {
  warmed || (preconnect(PLAYER_CDN), preconnect(IFRAME_CDN), preconnect(IMAGE_CDN), warmed = !0);
}, createPlayer = (parent, options, callback) => {
  let url = getUrl(options);
  if (url === void 0)
    return;
  let iframe = document.createElement("iframe");
  return iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
  ), iframe.setAttribute("frameborder", "0"), iframe.setAttribute("allowfullscreen", "true"), iframe.setAttribute("src", url), iframe.setAttribute(
    "style",
    "position: absolute; width: 100%; height: 100%; opacity: 0; transition: opacity 1s;"
  ), iframe.addEventListener(
    "load",
    () => {
      iframe.style.opacity = "1", callback();
    },
    { once: !0 }
  ), parent.appendChild(iframe), () => {
    var _a7;
    (_a7 = iframe.parentElement) == null || _a7.removeChild(iframe);
  };
}, getVideoId = (url) => {
  try {
    let id = new URL(url).pathname.split("/")[1];
    return id === "" || id == null ? void 0 : id;
  } catch {
  }
}, loadPreviewImage = async (element, videoUrl) => {
  let apiUrl = `https://vimeo.com/api/v2/video/${getVideoId(videoUrl)}.json`, thumbnail = (await (await fetch(apiUrl)).json())[0].thumbnail_large, imgId = thumbnail.substr(thumbnail.lastIndexOf("/") + 1).split("_")[0], imageUrl = new URL(IMAGE_CDN);
  return imageUrl.pathname = `/video/${imgId}.webp`, imageUrl.searchParams.append("mw", "1100"), imageUrl.searchParams.append("mh", "619"), imageUrl.searchParams.append("q", "70"), imageUrl;
}, useVimeo = ({
  options,
  renderer,
  showPreview
}) => {
  let [playerStatus, setPlayerStatus] = (0, import_react35.useState)("initial"), elementRef = (0, import_react35.useRef)(null), [previewImageUrl, setPreviewImageUrl] = (0, import_react35.useState)();
  (0, import_react35.useEffect)(() => {
    setPlayerStatus(
      options.autoplay && renderer !== "canvas" ? "initialized" : "initial"
    );
  }, [options.autoplay, renderer]), (0, import_react35.useEffect)(() => {
    if (!(elementRef.current === null || playerStatus === "ready" || options.url === void 0)) {
      if (showPreview) {
        loadPreviewImage(elementRef.current, options.url).then(
          setPreviewImageUrl
        );
        return;
      }
      setPreviewImageUrl(void 0);
    }
  }, [renderer, showPreview, options.url, playerStatus]);
  let optionsRef = (0, import_react35.useRef)(options), stableOptions = (0, import_react35.useMemo)(() => ((0, import_shallow_equal.shallowEqual)(options, optionsRef.current) === !1 && (optionsRef.current = options), optionsRef.current), [options]);
  return (0, import_react35.useEffect)(() => {
    if (!(elementRef.current === null || playerStatus === "initial"))
      return createPlayer(elementRef.current, stableOptions, () => {
        setPlayerStatus("ready");
      });
  }, [stableOptions, playerStatus]), { previewImageUrl, playerStatus, setPlayerStatus, elementRef };
}, Vimeo = (0, import_react35.forwardRef)(
  ({
    url,
    autoplay = !1,
    autopause = !0,
    backgroundMode = !1,
    showByline = !1,
    showControls = !0,
    doNotTrack = !1,
    keyboard = !0,
    loop = !1,
    muted = !1,
    pip = !1,
    playsinline = !0,
    showPortrait = !0,
    quality = "auto",
    responsive = !0,
    speed = !1,
    showTitle = !1,
    transparent = !0,
    showPreview = !1,
    autopip,
    controlsColor,
    interactiveParams,
    texttrack,
    children,
    ...rest
  }, ref) => {
    let { renderer } = (0, import_react35.useContext)(ReactSdkContext), { previewImageUrl, playerStatus, setPlayerStatus, elementRef } = useVimeo({
      renderer,
      showPreview,
      options: {
        url,
        autoplay,
        autopause,
        keyboard,
        loop,
        muted,
        pip,
        playsinline,
        quality,
        responsive,
        speed,
        transparent,
        portrait: showPortrait,
        byline: showByline,
        title: showTitle,
        color: controlsColor,
        controls: showControls,
        interactive_params: interactiveParams,
        background: backgroundMode,
        dnt: doNotTrack
      }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      VimeoContext.Provider,
      {
        value: {
          status: playerStatus,
          previewImageUrl,
          onInitPlayer() {
            renderer !== "canvas" && setPlayerStatus("initialized");
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "div",
          {
            ...rest,
            ref: (value) => {
              elementRef.current = value, ref !== null && (typeof ref == "function" ? ref(value) : ref.current = value);
            },
            onPointerOver: () => {
              renderer !== "canvas" && warmConnections();
            },
            children: url === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(EmptyState, {}) : children
          }
        )
      }
    );
  }
);
Vimeo.displayName = "Vimeo";
var EmptyState = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  "div",
  {
    style: {
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2em"
    },
    children: 'Open the "Settings" panel and paste a video URL, e.g. https://vimeo.com/831343124.'
  }
), VimeoContext = (0, import_react35.createContext)({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onInitPlayer: () => {
  },
  status: "initial"
}), base64Preview = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkOAMAANIAzr59FiYAAAAASUVORK5CYII=", VimeoPreviewImage = (0, import_react36.forwardRef)(({ src, ...rest }, ref) => {
  let vimeoContext = (0, import_react36.useContext)(VimeoContext);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    Image2,
    {
      ...rest,
      src: String(vimeoContext.previewImageUrl ?? src ?? base64Preview),
      ref
    }
  );
});
VimeoPreviewImage.displayName = "VimeoPreviewImage";
var VimeoPlayButton = (0, import_react37.forwardRef)(
  (props, ref) => {
    let vimeoContext = (0, import_react37.useContext)(VimeoContext);
    return vimeoContext.status !== "initial" ? null : /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Button, { ...props, onClick: vimeoContext.onInitPlayer, ref });
  }
);
VimeoPlayButton.displayName = "VimeoPlayButton";
var VimeoSpinner = (0, import_react38.forwardRef)(
  (props, ref) => (0, import_react38.useContext)(VimeoContext).status !== "initialized" ? null : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { ...props, ref })
);
VimeoSpinner.displayName = "VimeoSpinner";

// node_modules/@webstudio-is/sdk-components-react-remix/lib/components.js
var import_react39 = require("react"), import_react40 = require("@remix-run/react");
var import_jsx_runtime35 = require("react/jsx-runtime");
var import_react41 = require("react"), import_react42 = require("@remix-run/react");
var import_jsx_runtime36 = require("react/jsx-runtime"), wrapLinkComponent = (BaseLink3) => {
  let Component = (0, import_react39.forwardRef)((props, ref) => {
    let { pagesPaths: pagesPaths4 } = (0, import_react39.useContext)(ReactSdkContext), href = props.href;
    if (href !== void 0) {
      let url = new URL(href, "https://any-valid.url");
      if (pagesPaths4.has(url.pathname === "/" ? "" : url.pathname))
        return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react40.NavLink, { ...props, to: href, ref });
    }
    let { prefetch, reloadDocument, replace, preventScrollReset, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(BaseLink3, { ...rest, ref });
  });
  return Component.displayName = BaseLink3.displayName, Component;
}, Link2 = wrapLinkComponent(Link), RichTextLink2 = wrapLinkComponent(RichTextLink), useOnFetchEnd = (fetcher, handler) => {
  let latestHandler = (0, import_react41.useRef)(handler);
  latestHandler.current = handler;
  let prevFetcher = (0, import_react41.useRef)(fetcher);
  (0, import_react41.useEffect)(() => {
    prevFetcher.current.state !== fetcher.state && fetcher.state === "idle" && fetcher.data !== void 0 && latestHandler.current(fetcher.data), prevFetcher.current = fetcher;
  }, [fetcher]);
}, Form2 = (0, import_react41.forwardRef)(
  ({ children, action: action4, method, state = "initial", onStateChange, ...rest }, ref) => {
    let fetcher = (0, import_react42.useFetcher)(), instanceId = getInstanceIdFromComponentProps(rest);
    return useOnFetchEnd(fetcher, (data) => {
      let state2 = (data == null ? void 0 : data.success) === !0 ? "success" : "error";
      onStateChange == null || onStateChange(state2);
    }), /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(fetcher.Form, { ...rest, method: "post", "data-state": state, ref, children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: formIdFieldName, value: instanceId }),
      children
    ] });
  }
);
Form2.displayName = "Form";

// node_modules/@webstudio-is/sdk-components-react-radix/lib/components.js
var import_react43 = require("react"), import_react_collapsible = require("@radix-ui/react-collapsible");
var import_jsx_runtime37 = require("react/jsx-runtime"), import_react44 = require("react"), DialogPrimitive = __toESM(require("@radix-ui/react-dialog"), 1);
var import_jsx_runtime38 = require("react/jsx-runtime"), import_react45 = require("react"), PopoverPrimitive = __toESM(require("@radix-ui/react-popover"), 1);
var import_jsx_runtime39 = require("react/jsx-runtime"), TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_react46 = require("react"), import_jsx_runtime40 = require("react/jsx-runtime"), import_react47 = require("react"), import_react_tabs = require("@radix-ui/react-tabs");
var import_jsx_runtime41 = require("react/jsx-runtime"), import_react48 = require("react"), LabelPrimitive = __toESM(require("@radix-ui/react-label"), 1), import_jsx_runtime42 = require("react/jsx-runtime"), import_react49 = require("react"), import_react_accordion = require("@radix-ui/react-accordion");
var import_jsx_runtime43 = require("react/jsx-runtime"), NavigationMenuPrimitive = __toESM(require("@radix-ui/react-navigation-menu"), 1);
var import_react50 = require("react"), import_jsx_runtime44 = require("react/jsx-runtime"), import_react51 = require("react"), import_react_select = require("@radix-ui/react-select");
var import_jsx_runtime45 = require("react/jsx-runtime"), import_react_switch = require("@radix-ui/react-switch"), import_react52 = require("react"), import_react_checkbox = require("@radix-ui/react-checkbox"), import_jsx_runtime46 = require("react/jsx-runtime"), import_react53 = require("react"), import_react_radio_group = require("@radix-ui/react-radio-group");
var CollapsibleTrigger = (0, import_react43.forwardRef)(({ children, ...props }, ref) => {
  let firstChild = import_react43.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react_collapsible.Trigger, { asChild: !0, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("button", { children: "Add button" }) });
});
var Dialog = (0, import_react44.forwardRef)((props, _ref) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(DialogPrimitive.Root, { ...props })), DialogTrigger = (0, import_react44.forwardRef)(({ children, ...props }, ref) => {
  let firstChild = import_react44.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(DialogPrimitive.Trigger, { ref, asChild: !0, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("button", { children: "Add button or link" }) });
}), DialogOverlay = (0, import_react44.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(DialogPrimitive.DialogPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(DialogPrimitive.Overlay, { ref, ...props }) })), DialogContent = DialogPrimitive.Content, DialogClose = DialogPrimitive.Close;
var Popover = (0, import_react45.forwardRef)((props, _ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(PopoverPrimitive.Root, { ...props })), PopoverTrigger = (0, import_react45.forwardRef)(({ children, ...props }, ref) => {
  let firstChild = import_react45.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(PopoverPrimitive.Trigger, { asChild: !0, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("button", { children: "Add button or link" }) });
}), PopoverContent = (0, import_react45.forwardRef)(
  ({ sideOffset = 4, align = "center", hideWhenDetached = !0, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    PopoverPrimitive.Content,
    {
      ref,
      align: "center",
      sideOffset,
      hideWhenDetached,
      ...props
    }
  ) })
), Tooltip = (0, import_react46.forwardRef)((props, _ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TooltipPrimitive.Provider, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TooltipPrimitive.Root, { ...props }) })), TooltipTrigger = (0, import_react46.forwardRef)(({ children, ...props }, ref) => {
  let firstChild = import_react46.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TooltipPrimitive.Trigger, { asChild: !0, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("button", { children: "Add button or link" }) });
}), TooltipContent = (0, import_react46.forwardRef)(({ sideOffset = 4, hideWhenDetached = !0, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  TooltipPrimitive.Content,
  {
    ref,
    hideWhenDetached,
    sideOffset,
    ...props
  }
) }));
var TabsTrigger = (0, import_react47.forwardRef)(({ value, ...props }, ref) => {
  let index = getIndexWithinAncestorFromComponentProps(props);
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react_tabs.Trigger, { ref, value: value ?? index ?? "", ...props });
}), TabsContent = (0, import_react47.forwardRef)(({ value, ...props }, ref) => {
  let index = getIndexWithinAncestorFromComponentProps(props);
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react_tabs.Content, { ref, value: value ?? index ?? "", ...props });
}), Label2 = (0, import_react48.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(LabelPrimitive.Root, { ref, ...props })), Accordion = (0, import_react49.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react_accordion.Root, { ref, type: "single", ...props })), AccordionItem = (0, import_react49.forwardRef)(({ value, ...props }, ref) => {
  let index = getIndexWithinAncestorFromComponentProps(props);
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_react_accordion.Item, { ref, value: value ?? index ?? "", ...props });
});
var NavigationMenu = (0, import_react50.forwardRef)(({ value: propsValue, ...props }, ref) => {
  let { renderer } = (0, import_react50.useContext)(ReactSdkContext), value = propsValue;
  return renderer === "canvas" && (value = value === "" ? "-1" : value), /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(NavigationMenuPrimitive.Root, { ref, value, ...props });
});
var NavigationMenuItem = (0, import_react50.forwardRef)(({ value, ...props }, ref) => {
  let index = getIndexWithinAncestorFromComponentProps(props);
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(NavigationMenuPrimitive.Item, { ref, value: value ?? index, ...props });
}), NavigationMenuLink = (0, import_react50.forwardRef)(({ children, ...props }, ref) => {
  let firstChild = import_react50.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(NavigationMenuPrimitive.Link, { asChild: !0, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("a", { children: "Add link component" }) });
}), NavigationMenuTrigger = (0, import_react50.forwardRef)(({ children, ...props }, ref) => {
  let firstChild = import_react50.Children.toArray(children)[0];
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(NavigationMenuPrimitive.Trigger, { asChild: !0, ref, ...props, children: firstChild ?? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("button", { children: "Add button or link" }) });
}), Select2 = (0, import_react51.forwardRef)(({ value, ...props }, _ref) => (value === "" && (value = void 0), /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_select.Root, { value, ...props })));
var SelectValue = (0, import_react51.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_select.Value, { ref, ...props })), SelectContent = (0, import_react51.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_select.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_select.Content, { ref, ...props, position: "popper" }) }));
var Checkbox2 = (0, import_react52.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_react_checkbox.Root, { ref, ...props }));

// app/__generated__/[pricing]._index.tsx
var import_jsx_runtime47 = require("react/jsx-runtime"), fontAssets = [{ id: "1e1bfb48-4b7b-4a0b-bd39-87f504ac9e95", name: "SpaceGrotesk_wght__2FXqrSM6Qb5IUNmO8wuzl.woff2", description: null, projectId: "30e5305e-3f59-4d32-b4c2-bbfb47f19f96", size: 49256, type: "font", createdAt: "2023-06-29T05:05:10.384Z", format: "woff2", meta: { family: "Space Grotesk", variationAxes: { wght: { name: "Weight", min: 300, default: 300, max: 700 } } } }], pageData = { page: { id: "PHeEs4hMZj33Zb35FsLBN", name: "Pricing", title: "Pricing", meta: { description: "" }, rootInstanceId: "2PFYynoY82EW6YhZd359t", path: "/pricing" } }, user = { email: "tarframework@gmail.com" }, projectId = "30e5305e-3f59-4d32-b4c2-bbfb47f19f96", Page = (props) => {
  let [sheetOpen, set$sheetOpen] = (0, import_react54.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
    Body,
    {
      "data-ws-id": "2PFYynoY82EW6YhZd359t",
      "data-ws-component": "Body",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          Slot,
          {
            "data-ws-id": "fV1dSPiojY8LffmRahcoE",
            "data-ws-component": "Slot",
            children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              Fragment3,
              {
                "data-ws-id": "hCrOEWk9TWQYyVMtCWD98",
                "data-ws-component": "Fragment",
                children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                  Box,
                  {
                    "data-ws-id": "TWSfZDEQ22jm6ORuD81bO",
                    "data-ws-component": "Box",
                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                      Box,
                      {
                        "data-ws-id": "91efxtQVNXMPQCM8RISLw",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                            Link2,
                            {
                              "data-ws-id": "FhAJxmce_FA6XmDDVIW3i",
                              "data-ws-component": "Link",
                              href: "/",
                              target: "_self",
                              prefetch: "intent",
                              children: "SaaS Product"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "EQtO7ftc5pPiA3i2FtH_4",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Slot,
                                  {
                                    "data-ws-id": "VQ59heNoGMqJNIKFRycu6",
                                    "data-ws-component": "Slot",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Fragment3,
                                      {
                                        "data-ws-id": "xxYyDXmQMWja8n9ltcV9f",
                                        "data-ws-component": "Fragment",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Link2,
                                          {
                                            "data-ws-id": "cCSuWXG7aRl8V6QoIt-Dv",
                                            "data-ws-component": "Link",
                                            href: "/about",
                                            target: "_self",
                                            prefetch: "intent",
                                            children: "About"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Slot,
                                  {
                                    "data-ws-id": "pLaX2lKW_Z_7dRvGwY27_",
                                    "data-ws-component": "Slot",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Fragment3,
                                      {
                                        "data-ws-id": "GfDOpAbAX0MmMST7HuvFo",
                                        "data-ws-component": "Fragment",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Link2,
                                          {
                                            "data-ws-id": "YZvKvq7TdJPOHQ4gZ0zcp",
                                            "data-ws-component": "Link",
                                            href: "/pricing",
                                            target: "_self",
                                            prefetch: "intent",
                                            children: "Pricing"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                            Box,
                            {
                              "data-ws-id": "dF4T1lt-2AQ3RpBEYt08B",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Slot,
                                {
                                  "data-ws-id": "SltUxhQ8TuUqJe2-zxrQR",
                                  "data-ws-component": "Slot",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                    Fragment3,
                                    {
                                      "data-ws-id": "lylqznB2R6E8nBL2OFXyB",
                                      "data-ws-component": "Fragment",
                                      children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "CxxJHG_1OUZ4zqzeW0vKt",
                                          "data-ws-component": "Link",
                                          children: "Try the App"
                                        }
                                      )
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Dialog,
                            {
                              "data-ws-id": "cgHhI9Kh3-nHGI_D69LV3",
                              "data-ws-component": "@webstudio-is/sdk-components-react-radix:Dialog",
                              open: sheetOpen,
                              onOpenChange: (open) => {
                                sheetOpen = open, set$sheetOpen(sheetOpen);
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  DialogTrigger,
                                  {
                                    "data-ws-id": "13XUUVUTbo8ogBwnc2-zT",
                                    "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogTrigger",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Button,
                                      {
                                        "data-ws-id": "CpZHAp7GJUwle5AEC_STZ",
                                        "data-ws-component": "Button",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          HtmlEmbed,
                                          {
                                            "data-ws-id": "0emPLKUBAOQTyVrPfa1V5",
                                            "data-ws-component": "HtmlEmbed",
                                            code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>'
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  DialogOverlay,
                                  {
                                    "data-ws-id": "Ee5LLqXY5bIaoNU-XdBgo",
                                    "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogOverlay",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                      DialogContent,
                                      {
                                        "data-ws-id": "7mJmpqVW07KKydweeQWDB",
                                        "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogContent",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                            Slot,
                                            {
                                              "data-ws-id": "3OnqrVo6BLReX06-ng0-X",
                                              "data-ws-component": "Slot",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                Fragment3,
                                                {
                                                  "data-ws-id": "xxYyDXmQMWja8n9ltcV9f",
                                                  "data-ws-component": "Fragment",
                                                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Link2,
                                                    {
                                                      "data-ws-id": "cCSuWXG7aRl8V6QoIt-Dv",
                                                      "data-ws-component": "Link",
                                                      href: "/about",
                                                      target: "_self",
                                                      prefetch: "intent",
                                                      children: "About"
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                            Slot,
                                            {
                                              "data-ws-id": "K6tNqZ99FEVpwhTK6fUTU",
                                              "data-ws-component": "Slot",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                Fragment3,
                                                {
                                                  "data-ws-id": "GfDOpAbAX0MmMST7HuvFo",
                                                  "data-ws-component": "Fragment",
                                                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Link2,
                                                    {
                                                      "data-ws-id": "YZvKvq7TdJPOHQ4gZ0zcp",
                                                      "data-ws-component": "Link",
                                                      href: "/pricing",
                                                      target: "_self",
                                                      prefetch: "intent",
                                                      children: "Pricing"
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                            Slot,
                                            {
                                              "data-ws-id": "TBLweN7E8ZvqwS757x2aA",
                                              "data-ws-component": "Slot",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                Fragment3,
                                                {
                                                  "data-ws-id": "lylqznB2R6E8nBL2OFXyB",
                                                  "data-ws-component": "Fragment",
                                                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Link2,
                                                    {
                                                      "data-ws-id": "CxxJHG_1OUZ4zqzeW0vKt",
                                                      "data-ws-component": "Link",
                                                      children: "Try the App"
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                            Box,
                                            {
                                              "data-ws-id": "4VgBDNAygLhwa4uli1-zy",
                                              "data-ws-component": "Box",
                                              tabIndex: 0
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                            DialogClose,
                                            {
                                              "data-ws-id": "Hrwk_WYZVCMvdwMHYUJqO",
                                              "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogClose",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                HtmlEmbed,
                                                {
                                                  "data-ws-id": "Gxg26Cbkilf_rlZq5ULhz",
                                                  "data-ws-component": "HtmlEmbed",
                                                  code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>'
                                                }
                                              )
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
          Box,
          {
            "data-ws-id": "UO1BEGnr4YkKPt0MT8QWI",
            "data-ws-component": "Box",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                Box,
                {
                  "data-ws-id": "Ln2UtZuKuuwhTJi9J-r4m",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                      Heading,
                      {
                        "data-ws-id": "0dAeQkUiFU-8swg9sF3zc",
                        "data-ws-component": "Heading",
                        children: "Pricing"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                      Text2,
                      {
                        "data-ws-id": "H6FlRRIKIGH2qBTOLDpUC",
                        "data-ws-component": "Text",
                        children: "We've crafted pricing options that cater to businesses of all sizes, from startups to established enterprises."
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                Slot,
                {
                  "data-ws-id": "ZHJ34Ju85qYbDZLk6rNSB",
                  "data-ws-component": "Slot",
                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                    Fragment3,
                    {
                      "data-ws-id": "cKEfbHO_Z62b419KEeDuD",
                      "data-ws-component": "Fragment",
                      children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                        Box,
                        {
                          "data-ws-id": "-Ns0a4fns6nARAsaY9w-j",
                          "data-ws-component": "Box",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                              Box,
                              {
                                "data-ws-id": "Jn-o7ilBBp7XQ5CTL0i3L",
                                "data-ws-component": "Box",
                                children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "rIx2T8qZCYzBESwFnYGl1",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "3thIc18CdC4qfHc0oG3fS",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "qJjE-g7_90Hcn5OazMAkz",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "hAyuZ-RAWMquhZWZ5XAOJ",
                                                      "data-ws-component": "Text",
                                                      children: "Free"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "j7JHZA1WgR3TlX8kuO1Ww",
                                                      "data-ws-component": "Heading",
                                                      children: "Free for everyone"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                              Separator,
                                              {
                                                "data-ws-id": "aKfUglcP9uH-rk1U6VmEw",
                                                "data-ws-component": "Separator"
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "flXzm6ByPWPg8IsUQ3bGH",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "Ob3zrG9uqaNgp97BRCrMh",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "7eeo4T54Zwgt3tWura-mA",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "VEDjYSbUNLfs_gw66cRtA",
                                                            "data-ws-component": "Text",
                                                            children: "Unlimited members"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "u1YblY88u8BpkPEcsxZvY",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "uNMvbM7OJ-ekHeqBKVpP0",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "cqAGQfqCDRyLI_fqHa5fH",
                                                            "data-ws-component": "Text",
                                                            children: "250 issues (unlimited archived)"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "X-m8nDACcMhbhNFaf2tZl",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "rkPC2m68n1jyS33GgQXGu",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "PHgbVAJhS2lQ-jjkQ4FPJ",
                                                            "data-ws-component": "Text",
                                                            children: "Import and export"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "CYllBijBgetZHdEXD00T5",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "JiCzO1mTWL9p4BfgXOTIM",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "C-yFbnR4GLrbl9J_fpgsX",
                                                            "data-ws-component": "Text",
                                                            children: "Integrations, APIs, webhooks"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "q9KyCG6eZg_SGof6mtO0P",
                                          "data-ws-component": "Link",
                                          href: "/pricing",
                                          prefetch: "intent",
                                          children: "Free"
                                        }
                                      )
                                    ]
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                              Box,
                              {
                                "data-ws-id": "RirPNBndJmlwR1n0tNtyW",
                                "data-ws-component": "Box",
                                children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "qSrcVqlMgZuZQb8lZp6ci",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "bFn8XpRKdwfy79lM24Syb",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "01pRKVtyl1hcAQpQIJ6lj",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "xNlkQ6IeWFEhyjPq58gTv",
                                                      "data-ws-component": "Text",
                                                      children: "Standard"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "2wy_t_EAHh3Lyia7jx2Tw",
                                                      "data-ws-component": "Heading",
                                                      children: "$8 per user/month"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                              Separator,
                                              {
                                                "data-ws-id": "iSKIzKb3fv1A-wVodUBgV",
                                                "data-ws-component": "Separator"
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "zuhl8Owhn-2uwqEZ_xEYB",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "PhuPRBHe-rI6A1CTWLlnd",
                                                      "data-ws-component": "Box",
                                                      children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                        Text2,
                                                        {
                                                          "data-ws-id": "tHqoib_BIUFE7nvi5B4AD",
                                                          "data-ws-component": "Text",
                                                          children: "Everything in Free, plus..."
                                                        }
                                                      )
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "n_l9vBuXrMAWvahH1NTEU",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "Pdyl1fng7S006l5xQvjIX",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "6cHYYQ0t02ZW8FwWPnKKF",
                                                            "data-ws-component": "Text",
                                                            children: "Unlimited issues and file uploads"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "EdVywKKrjml9RQRAwIJ1g",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "D6weP7N8AT6j-3NRnZcQO",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "YpqpFFvAgsMmOTlCNdHbT",
                                                            "data-ws-component": "Text",
                                                            children: "Guest accounts, private teams"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "LuC99KxBaS1cfoASgXDee",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "zoRtbOgN0SVwrBkBRp13U",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "P6qIWficJXyfkIrvEH5k7",
                                                            "data-ws-component": "Text",
                                                            children: "Admin tools"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "YKPWqa77s9U-6XUNigvTG",
                                          "data-ws-component": "Link",
                                          href: "/pricing",
                                          children: "Standard"
                                        }
                                      )
                                    ]
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                              Box,
                              {
                                "data-ws-id": "QCRnRnWDS5lilxAd9Ai_C",
                                "data-ws-component": "Box",
                                children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "2xiKzSplG7rNQoT76D0tz",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "AuVcBecFSASMvRxU5WdMs",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "_kIHOdhzPM_Q-xdKDRCIb",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "6twHyszYQvnIAYxfdnKyo",
                                                      "data-ws-component": "Text",
                                                      children: "Plus"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "xAoOWH44wwjOfOObRnXzw",
                                                      "data-ws-component": "Heading",
                                                      children: "$14 per user/month"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                              Separator,
                                              {
                                                "data-ws-id": "MizaMZbMNqwnIsCddIp9N",
                                                "data-ws-component": "Separator"
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "FSNwRMsds6fK1plSvlygz",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "LMMlDSLfDaGBr-57cwUQS",
                                                      "data-ws-component": "Box",
                                                      children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                        Text2,
                                                        {
                                                          "data-ws-id": "ySdqGrE-RX6osFl60zNdf",
                                                          "data-ws-component": "Text",
                                                          children: "Everything in Standard, plus..."
                                                        }
                                                      )
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "qHT6r5-lnpYs3XTV1Ye6P",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "bjchn2889dazpw9_995WW",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "XemvmOtK4EeZFWhXP4BEN",
                                                            "data-ws-component": "Text",
                                                            children: "SAML / Single Sign On"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "9wgH-lbI69o1ioXiNsebJ",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "5UYnbK731H1nAqKFpVpc-",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "AWAXrmytNYbmnVt0KHhqf",
                                                            "data-ws-component": "Text",
                                                            children: "Advanced authentication controls"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "nRz8ZHiiklXmDaYfGq834",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "08vFSEeQmjCeSIuqtiE34",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "vPs9trmbHznVkdVnHEJvL",
                                                            "data-ws-component": "Text",
                                                            children: "Linear insights and SLAs"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "fjysnt3-EORHjzAdrdvuY",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Image2,
                                                          {
                                                            "data-ws-id": "LzH861PHwJY52nGb3SGYr",
                                                            "data-ws-component": "Image",
                                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "bSlGiOi5JlBEVdXvEGTxS",
                                                            "data-ws-component": "Text",
                                                            children: "Priority support"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "D9Ma82venPH1VTWNbgygy",
                                          "data-ws-component": "Link",
                                          prefetch: "intent",
                                          children: "Plus"
                                        }
                                      )
                                    ]
                                  }
                                )
                              }
                            )
                          ]
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                Box,
                {
                  "data-ws-id": "P3XKiC1FtxBUoOsXWG5Uw",
                  "data-ws-component": "Box",
                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                    Box,
                    {
                      "data-ws-id": "R98HKnes-qNJzV-ep7Jti",
                      "data-ws-component": "Box",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                          Box,
                          {
                            "data-ws-id": "y8TXQ-NYjqDhNm5y7aHVg",
                            "data-ws-component": "Box",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Heading,
                                {
                                  "data-ws-id": "7xyEGRIE6XZhQdCzy0Dig",
                                  "data-ws-component": "Heading",
                                  children: "Enterprise"
                                }
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Text2,
                                {
                                  "data-ws-id": "9CstwGpb9yG5cjTh0fCCj",
                                  "data-ws-component": "Text",
                                  children: "Built for Enterprises who want to scale with confidence, Linear Enterprise offers advanced security, powerful admin controls, and more."
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                          Separator,
                          {
                            "data-ws-id": "K4qKBFthQ0-nagRpIxoc9",
                            "data-ws-component": "Separator"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                          Box,
                          {
                            "data-ws-id": "CHqci2ocxhKqwpzIkMZa9",
                            "data-ws-component": "Box",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                Box,
                                {
                                  "data-ws-id": "vPQhvBGDl_k5zmj-6Us5f",
                                  "data-ws-component": "Box",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                      Box,
                                      {
                                        "data-ws-id": "g6j0Djz3piKtnh3WyU_U1",
                                        "data-ws-component": "Box",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                            Box,
                                            {
                                              "data-ws-id": "OgwB18bvbE8RP5qhb6pa9",
                                              "data-ws-component": "Box",
                                              children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "QiOOQC1dS-VEBD5lbcL-A",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                  }
                                                ),
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Text2,
                                                  {
                                                    "data-ws-id": "Cs147WBfh2NGks7IKdfO-",
                                                    "data-ws-component": "Text",
                                                    children: "No limits"
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                            Box,
                                            {
                                              "data-ws-id": "eBG7ghfiuvhy_TtLTyMED",
                                              "data-ws-component": "Box",
                                              children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "STS2foKcx641TAfYBxfqB",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                  }
                                                ),
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Text2,
                                                  {
                                                    "data-ws-id": "oeONApm_LMhw2QPkXqFMp",
                                                    "data-ws-component": "Text",
                                                    children: "On-premises"
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                            Box,
                                            {
                                              "data-ws-id": "z-rk6MezOS_BfB3OoIo-r",
                                              "data-ws-component": "Box",
                                              children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "EZ-IGQMFPvuuuVvwf29KW",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                  }
                                                ),
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Text2,
                                                  {
                                                    "data-ws-id": "18_t7N2C1xkLZYYH_Jw1M",
                                                    "data-ws-component": "Text",
                                                    children: "Enterprise SSO"
                                                  }
                                                )
                                              ]
                                            }
                                          )
                                        ]
                                      }
                                    ),
                                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                      Box,
                                      {
                                        "data-ws-id": "MfIXa_tcB0lupuMjjkh_k",
                                        "data-ws-component": "Box",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                            Box,
                                            {
                                              "data-ws-id": "bJ5NIh4mBSqnzxpSk8wXU",
                                              "data-ws-component": "Box",
                                              children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "Vz-F-AW2jbbQdj6HKmwxl",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                  }
                                                ),
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Text2,
                                                  {
                                                    "data-ws-id": "WnzHG3cXdg9-x5_u9V0YP",
                                                    "data-ws-component": "Text",
                                                    children: "Granular permissions"
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                            Box,
                                            {
                                              "data-ws-id": "v--zuNphpFJDR0VPcGxu6",
                                              "data-ws-component": "Box",
                                              children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "Nghd5o1YnnSxepvl2b9wJ",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                  }
                                                ),
                                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                                  Text2,
                                                  {
                                                    "data-ws-id": "149vaPz-M5SGVibxgxwre",
                                                    "data-ws-component": "Text",
                                                    children: "Customer success manager"
                                                  }
                                                )
                                              ]
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ]
                                }
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Link2,
                                {
                                  "data-ws-id": "gLh44Sz2K9RE3PyVRS61f",
                                  "data-ws-component": "Link",
                                  children: "Contact Sales"
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                Box,
                {
                  "data-ws-id": "zlseBM4CEv_ZGJf_0dqS3",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                      Box,
                      {
                        "data-ws-id": "ywI07nAaOlVkzjW1Stzc-",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                            Box,
                            {
                              "data-ws-id": "zsrgoJ8oKyEyl9_4eWtRG",
                              "data-ws-component": "Box"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                            Box,
                            {
                              "data-ws-id": "bZdFZ0ZMdhYTcmWVlD0kg",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Text2,
                                {
                                  "data-ws-id": "88tHBAMxt_dIY-lwsxmaE",
                                  "data-ws-component": "Text",
                                  children: "Free"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                            Box,
                            {
                              "data-ws-id": "3OcZC2DDt5kpF0quwD7gK",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Text2,
                                {
                                  "data-ws-id": "51NGffY6vvNajTR4H-eVi",
                                  "data-ws-component": "Text",
                                  children: "Standard"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                            Box,
                            {
                              "data-ws-id": "JHH_74tIR1R8IMUbzYUic",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Text2,
                                {
                                  "data-ws-id": "vspGe9wR84k0XvkJywkRY",
                                  "data-ws-component": "Text",
                                  children: "Plus"
                                }
                              )
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                      Box,
                      {
                        "data-ws-id": "4SAaaXUMUBWwfNXT4hqLX",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                            Box,
                            {
                              "data-ws-id": "xVGvr31CLvb0ce5azrnIu",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Box,
                                {
                                  "data-ws-id": "gt8coZ-Io7TL8DI9Kcb29",
                                  "data-ws-component": "Box",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                    Text2,
                                    {
                                      "data-ws-id": "aqq_rdTp27njZqgtj0Ktn",
                                      "data-ws-component": "Text",
                                      children: "Usage"
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "aW3E7Y09PPP_2H1jqPf9A",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "GECc2CBknuyWXffP2lBsR",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "UhvE4ONyUSiQdJctOIXG3",
                                        "data-ws-component": "Text",
                                        children: "Members"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "2j093ujXsie0EmFMEz2Km",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "5XdSwwvjqbD78ko22h_-Y",
                                          "data-ws-component": "Text",
                                          children: "Unlimited"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Image2,
                                        {
                                          "data-ws-id": "eyTmXamNQr-Mx88PMNzlk",
                                          "data-ws-component": "Image",
                                          src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "TsdFkCwPRsNi7PGzufvyO",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "hKROoUafsWkDfrPPmw-SM",
                                          "data-ws-component": "Text",
                                          children: "Unlimited"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Image2,
                                        {
                                          "data-ws-id": "SNqHWl3-g4S2qPzsrZ3Iw",
                                          "data-ws-component": "Image",
                                          src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "-2KPkzAkedk-G2L8Ai2B2",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "XBQAC906MyuDcZf46PLTd",
                                          "data-ws-component": "Text",
                                          children: "Unlimited"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Image2,
                                        {
                                          "data-ws-id": "_7to2SJiESkHdtK2dzMwc",
                                          "data-ws-component": "Image",
                                          src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "elXC9JAVBja02fLvZ0rWD",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "q-gWyuVCHeMiB02Wiw_Wn",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "DpjARR4BwZRDgK7EAslbw",
                                        "data-ws-component": "Text",
                                        children: "File upload size"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "o6B_73_ObmOMyeb4PWZaD",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "2Dpc9RH1qZH5UEMRoo-KP",
                                        "data-ws-component": "Text",
                                        children: "10 MB"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "MlEHhaV7T_pa3b7FlH6lD",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "ImMhUxcqKKRNh0RjCG1QK",
                                          "data-ws-component": "Text",
                                          children: "Unlimited"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Image2,
                                        {
                                          "data-ws-id": "ui0WIfkNdkXiIgwbyvaFU",
                                          "data-ws-component": "Image",
                                          src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "tPiZQBBBgo1AhW6jStL1T",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "1b5CM00KtyuGJT3qkyIBL",
                                          "data-ws-component": "Text",
                                          children: "Unlimited"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Image2,
                                        {
                                          "data-ws-id": "nrfoyoHXMd-j9fnpPuX-P",
                                          "data-ws-component": "Image",
                                          src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "uk1qswGFDeOS8aqNkKy5n",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "JL-qGjPyp-idmwC1PoX5R",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "SI0npS6I5nbC8cQIbuQoU",
                                        "data-ws-component": "Text",
                                        children: "File upload volume"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "rJqjTLUlheZV5xM2cN4qy",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "RNO7RG50HVWgU4Zr9wopC",
                                        "data-ws-component": "Text",
                                        children: "150 MB / month"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "ulLH7JKcYXKJltVk4HlGy",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "g_I3fggwgNlS8czYisPu1",
                                          "data-ws-component": "Text",
                                          children: "Unlimited"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Image2,
                                        {
                                          "data-ws-id": "xm1IR9MriaW6I7luMJqnW",
                                          "data-ws-component": "Image",
                                          src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "mhwC32pigAdHJl89PKsJq",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "UQKCOb2-jI7UsZZvJqqb0",
                                          "data-ws-component": "Text",
                                          children: "Unlimited"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Image2,
                                        {
                                          "data-ws-id": "6cEVfVYk4HN72m4MX4xbf",
                                          "data-ws-component": "Image",
                                          src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "xPMOVidnzw39XVt9rL3La",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "Vh9n2qy845XtiWq8BkxLU",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "0btA5XZ5Q9HyokOCVg5bf",
                                        "data-ws-component": "Text",
                                        children: "Issues (excluding Archive)"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "mdsE8hlaxK0eSvTJM6YeQ",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "uQYj21W1VhK6s3aEDMZ_0",
                                        "data-ws-component": "Text",
                                        children: "150 MB / month"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "jMpLWK6ivfXV7SOpQSssb",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "pIDk_tHvFVmBOaVB8Uqp9",
                                          "data-ws-component": "Text",
                                          children: "Unlimited"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Image2,
                                        {
                                          "data-ws-id": "Aald2pArulI0kUkU3wMo1",
                                          "data-ws-component": "Image",
                                          src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "bZfu9C01bVHYjZtNK79sn",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "CjI2zVnGpC4TUWy6WmIhR",
                                          "data-ws-component": "Text",
                                          children: "Unlimited"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Image2,
                                        {
                                          "data-ws-id": "p31nT2iD9MU5PWkoIBue8",
                                          "data-ws-component": "Image",
                                          src: "/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                      Box,
                      {
                        "data-ws-id": "rter82FqZcCc4ixCr1OQr",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                            Box,
                            {
                              "data-ws-id": "ACd0S38js8hmlG4zcv_PE",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Box,
                                {
                                  "data-ws-id": "BXF1LnPkQSx-SmatQJ7Es",
                                  "data-ws-component": "Box",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                    Text2,
                                    {
                                      "data-ws-id": "6utQydusimIZUH3sBDOGa",
                                      "data-ws-component": "Text",
                                      children: "Features"
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "aFss394Y3o-9SovgPPaOp",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "fbCYXi36Zxh5Ofl31_lOw",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "T7iYrocmDcnFvsxZ6yPsM",
                                        "data-ws-component": "Text",
                                        children: "Issues, projects, and cycles"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "k5Z9-jMwzzGVnT1zmDZJW",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "wmjxXuipVoZ2UfIM_EVhn",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "rfIISmw3w7resU2pcyxDt",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "mxGYC2SVL-y7lrt4zW5sX",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "Og1eK9fAQ5QLaFCmGM_j8",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "g47wiZw7J30U2rhe4FCi6",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "uzSRPSDOM_IviyxgD-YKI",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "-ityrbQYiSYEZhnjGZsgD",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "fZw90OoZRXlsqzSPQS4y-",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "BgtCZL5g8SIyEnXIiuv4K",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "lRIJuNtV35MAAlOdg-OFb",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "JbwGcmuoQy0geQrSr8WUB",
                                        "data-ws-component": "Text",
                                        children: "Integrations"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "hW8l40triAwvantz1ei6x",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "Cmcl0jNUyeik3JxkiHQ1G",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "nx44dha0P1gB93v9wsJRB",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "jA6HpMsRNQBRNA9g3-rvi",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "jNrbP8-g65OhiL79Jb2LS",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "HDozw845GeRB2uLvZ7st1",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "gFZ5TfGW2KBS3lw97VlYr",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "MlKju-2CC4hCXaWxI9WJa",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "Ry1imH7i1gvUkGQUKAxT0",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "TNEeWzbyd4iQR_OGty8_d",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "7Tfchjrk7cYq0jn6bsVun",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "3T1yOpTALgKyqi4MFJXXG",
                                        "data-ws-component": "Text",
                                        children: "API and Webhook access"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "trFTppoRVw036ptpiZ-y1",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "y-2fBW0mgMM9l-lrmYzCN",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "J3-BhIltv0q-7fhp-dzNf",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "mMgwFxqAz8KU2z7eItbXM",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "Jj2EQfyHQEbuBIvzOWerx",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "JqlYhD6iJ8Ws9Vc96CzwP",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "Vp086h6MvQpOC3bU2El3A",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "hHZjvHO4lczIEKoYHX6IT",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "-_z540R9JO9vCdbpk4LPi",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "s8sWVFQF48bXX6_1O1QqZ",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "iyxKRF1wBquMtbFdGNF-k",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "l6peW4ZS92Lbx2cYfTvlU",
                                        "data-ws-component": "Text",
                                        children: "Import and export"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "zpEHYQsbTVHS1mKrmfXwu",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "fAIdUFn45hfyQhM0ECOxB",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "53ZaM1Ev6V7lyGlMyQ-K_",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "NSVTxlkOphsae0MY9DXSQ",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "0gP64UrDQTJHWBPkyZeeK",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "zNGhj3gCcI80PhKbYeHzs",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "OJs1rOVIlbz5NJmcJA_WP",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "0mksVYzcxxq-ldQ-dNOmu",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "VQlUsj5nwsvyttDaSeKjx",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "QohG5GvOXxCjb40OZNIwl",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "Sqr-0ENdfkOOjDXmUED3c",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "Z8ltSECh3fJwbnjPvK3Vj",
                                        "data-ws-component": "Text",
                                        children: "Private teams"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "28-3K6-UB9iuHsoiE_0cY",
                                    "data-ws-component": "Box"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "iTaHWqTXcmLueBJ4-_MIV",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "RTXn_YXixCKsqxoPnckNS",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "UYmcvpXFZMUyGBPhSqbUM",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "_b_NQILC5f4zS1E7onVcA",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "vFfqHKuERdfMEVKPgeRyx",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "JLC0FB93l-oIzB5BntCju",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "JMEWH60xNLpwD4zr09bc9",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "ekypgAg2YtmSkct3ERiOF",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "w2t_V0GGWRZ8D0FFaZJL7",
                                        "data-ws-component": "Text",
                                        children: "Guest accounts"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "yjFmjarjBOtzF9VSRJTmI",
                                    "data-ws-component": "Box"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "Q3WX1RQbDeZMvMH2yJ_W0",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "yYAi-Xe4dfxJeJ04hIO6F",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "q8ot2VukYX5uzPhds5bzx",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "7Ap8_NmmG6z4f3f8UL27Q",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "GLh0YmM7yyyJknlMzwO8J",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "genObiviobkBXKHP2x7pR",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "yahS1smY4wPXPRYhH3ZY9",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "PwJkVO08BCHSTc8T2qKCY",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "OfdPPsKakZTPWEXGMbIg1",
                                        "data-ws-component": "Text",
                                        children: "SLAs"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "U0_okBbsHIxsid8jhbsr-",
                                    "data-ws-component": "Box"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "h-9dfVT6hAX2SfxVsFcd3",
                                    "data-ws-component": "Box"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "ccg-NnqH06QwHZ0eKRAAJ",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "sSMvFvA6CtZBeFSyaU4_b",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "FT5XBwfeIh5YR_tZsopTU",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                      Box,
                      {
                        "data-ws-id": "NVYj877b3aX1V2RzMOKIQ",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                            Box,
                            {
                              "data-ws-id": "gt-kqEkoAvDNvL2oLMC2R",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                Box,
                                {
                                  "data-ws-id": "AlZJRpBxW7JhgGBavUVry",
                                  "data-ws-component": "Box",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                    Text2,
                                    {
                                      "data-ws-id": "TQAjtqhrRyNwMaUk5ha2i",
                                      "data-ws-component": "Text",
                                      children: "Analytics & Reporting"
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "NJR956RQW_Iduaf4BlXSm",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "viMVTALfTcSKHNo-7o7Hl",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "3Bv_kBujUovdRRxfW6ALr",
                                        "data-ws-component": "Text",
                                        children: "Progress reports"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "RxxS-RxqEGKDnuiYYwMJh",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "HujIEpLI-vaFh0iDBjSFs",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "D4c1W4YqRvfdxyf2f2KNu",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "EaXg-7qIiWrC1NrXChzLo",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "CjgTo1HPg-t28TPfuwaNe",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "eyVGarKHkpBGTw524PkcK",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "FoHM7kVDiqMztVKNqXJLa",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "4i7gPinx2lv553Q19wJbo",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "Rg-_VcJ1UKXzPSkUvlc8y",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "J9fk4FtuX0MGuZgFucbt3",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "msMOgJdROIhsFrDqQLYAx",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "KGQjG0dLdEJcHHPWYsHiE",
                                        "data-ws-component": "Text",
                                        children: "Insights"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "bKPPs4yAJj0apjg8svOzi",
                                    "data-ws-component": "Box"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "ocgUL0ALB4SFndmjxn2fy",
                                    "data-ws-component": "Box"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "0FAwYuACjo3vLdC6jiSpl",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "1xELZ1DSJzl2jvZNLP4Bl",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "0ee9ZNAXntytkUQBaKDjs",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "gqV0jQBleg6aORSC_cAO9",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "oy_LuuANQopI4S10rvnh6",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Text2,
                                      {
                                        "data-ws-id": "H8Q9WMwt1Ue4oAPQ1LDhM",
                                        "data-ws-component": "Text",
                                        children: "Data warehouse sync"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "B-EvJgdcrgGZL6sBa1Tc7",
                                    "data-ws-component": "Box"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "wuFMqTim7tpmWC_xfwqj_",
                                    "data-ws-component": "Box"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Box,
                                  {
                                    "data-ws-id": "_FsRoiBSdMpj0YpRM9X2y",
                                    "data-ws-component": "Box",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                      Box,
                                      {
                                        "data-ws-id": "_cAd93rATyDX6Um3im0aS",
                                        "data-ws-component": "Box",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                          Image2,
                                          {
                                            "data-ws-id": "FR4_pqbTpHifCsbG8fBXI",
                                            "data-ws-component": "Image",
                                            src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          Slot,
          {
            "data-ws-id": "OFzNrCRa8dkz9SNK5itt0",
            "data-ws-component": "Slot",
            children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              Fragment3,
              {
                "data-ws-id": "LXAE0omYOBDRhwHgmjbxd",
                "data-ws-component": "Fragment",
                children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                  Box,
                  {
                    "data-ws-id": "etSoQ_YpqbbjYSdf5gDn_",
                    "data-ws-component": "Box",
                    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                      Box,
                      {
                        "data-ws-id": "T3kf2U4vSUW1jD4y_NEma",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "_5z42eLI3fQfzg74Ywbb1",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                  Link2,
                                  {
                                    "data-ws-id": "8_lYbS23oem75lqyneJKk",
                                    "data-ws-component": "Link",
                                    children: "SaaS Product"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "ZyWzCL9VJFsmbTZBNU9-c",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "xJocVo6XEiFAGYZU4WEBy",
                                          "data-ws-component": "Text",
                                          children: "Company"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "OemFDMxMz1dQm6ZNizOMu",
                                          "data-ws-component": "Link",
                                          children: "Team"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "RyCe2Bi_tJJxSIa6o--Yd",
                                          "data-ws-component": "Link",
                                          children: "Privacy Policy"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "fymS9Wubd_R1Ni-24Zyx6",
                                          "data-ws-component": "Link",
                                          children: "Terms of Service"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                            Box,
                            {
                              "data-ws-id": "jNyPk4jlM6WQIun_94FT1",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "tAD0q_c3Lcz3S18VRY9VO",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "dJ3D3qquPPEVbf4FQytOh",
                                          "data-ws-component": "Text",
                                          children: "Community"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "KF0zY92pvFsNrmUkiD2iq",
                                          "data-ws-component": "Link",
                                          children: "Github"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "k_TUj7O7myu3xDr7wGUNx",
                                          "data-ws-component": "Link",
                                          children: "Discord"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "dLWBQCL9gyAllSg5RXwyU",
                                          "data-ws-component": "Link",
                                          children: "Twitter"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "GFaKIM1XZQEAZ-qwxKOx_",
                                          "data-ws-component": "Link",
                                          children: "Product Hunt"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "EtrG_tdm2KROkPiB9DlEM",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "sQd2JlvN3_sraUU2JjqrV",
                                          "data-ws-component": "Text",
                                          children: "Product"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "_-DoDHqUkbX9m6W1L4jk_",
                                          "data-ws-component": "Link",
                                          children: "Pricing"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "av5H5w4bddISdUjP9Fxl0",
                                          "data-ws-component": "Link",
                                          children: "Download"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "CP_4Oip6tvDePQJWy5Pma",
                                          "data-ws-component": "Link",
                                          children: "Source Code"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          Slot,
          {
            "data-ws-id": "SACy98L7mrmepVUjF3EDb",
            "data-ws-component": "Slot",
            children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
              Fragment3,
              {
                "data-ws-id": "TpTp2RjbCtW5ofWZSiagR",
                "data-ws-component": "Fragment",
                children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
                  Link2,
                  {
                    "data-ws-id": "UZtdu19rzJ0V6K_-TQfot",
                    "data-ws-component": "Link",
                    href: "https://webstudio.is/",
                    prefetch: "none",
                    target: "_blank",
                    "aria-label": "",
                    rel: "nofollow",
                    rel: "nofollow",
                    rel: "nofollow",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                        Image2,
                        {
                          "data-ws-id": "xP5kvTqG1Ud1udrWZC0cD",
                          "data-ws-component": "Image",
                          src: "/assets/logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg",
                          alt: "",
                          loading: "eager",
                          "aria-hidden": !0
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                        Text2,
                        {
                          "data-ws-id": "dt6LFeOnmEKrCnCGPuGeB",
                          "data-ws-component": "Text",
                          children: "Built with Webstudio"
                        }
                      )
                    ]
                  }
                )
              }
            )
          }
        ),
        props.scripts
      ]
    }
  );
};
var pagesPaths = /* @__PURE__ */ new Set(["", "/pricing", "/about"]), formsProperties = /* @__PURE__ */ new Map([]);

// app/__generated__/index.css
var generated_default = "/build/_assets/index-TFYD4FOO.css";

// app/constants.mjs
var assetBaseUrl = "/assets/", imageBaseUrl = "/assets/", imageLoader = ({ quality, src, width }) => "/_vercel/image?url=" + encodeURIComponent(imageBaseUrl + src) + "&w=" + width + "&q=" + quality;

// app/routes/[pricing]._index.tsx
var import_jsx_runtime48 = require("react/jsx-runtime"), meta = () => {
  let { page } = pageData, metas = [
    { title: (page == null ? void 0 : page.title) || "Webstudio" }
  ];
  for (let [name, value] of Object.entries((page == null ? void 0 : page.meta) ?? {})) {
    if (name.startsWith("og:")) {
      metas.push({
        property: name,
        content: value
      });
      continue;
    }
    metas.push({
      name,
      content: value
    });
  }
  return metas;
}, links = () => {
  let result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  for (let asset of fontAssets)
    asset.type === "font" && result.push({
      rel: "preload",
      href: assetBaseUrl + asset.name,
      as: "font",
      crossOrigin: "anonymous"
      // @todo add mimeType
      // type: asset.mimeType,
    });
  return result;
}, getRequestHost = (request) => request.headers.get("x-forwarded-host") || request.headers.get("host") || "", getMethod = (value) => {
  if (value === void 0)
    return "post";
  switch (value.toLowerCase()) {
    case "get":
      return "get";
    default:
      return "post";
  }
}, action = async ({ request, context }) => {
  var _a7;
  let formData = await request.formData(), formId = getFormId(formData);
  if (formId === void 0)
    throw (0, import_server_runtime.json)("Form not found", { status: 404 });
  let formProperties = formsProperties.get(formId), { action: action4, method } = formProperties ?? {}, email = (_a7 = user) == null ? void 0 : _a7.email;
  if (email == null)
    return { success: !1 };
  let pageUrl;
  try {
    pageUrl = new URL(request.url), pageUrl.host = getRequestHost(request);
  } catch {
    return { success: !1 };
  }
  if (action4 !== void 0)
    try {
      new URL(action4);
    } catch {
      return (0, import_server_runtime.json)(
        {
          success: !1,
          error: "Invalid action URL, must be valid http/https protocol"
        },
        { status: 200 }
      );
    }
  let formInfo = {
    formData,
    projectId,
    action: action4 ?? null,
    method: getMethod(method),
    pageUrl: pageUrl.toString(),
    toEmail: email,
    fromEmail: pageUrl.hostname + "@webstudio.email"
  };
  return await n8nHandler({
    formInfo,
    hookUrl: context.N8N_FORM_EMAIL_HOOK
  });
}, Outlet = () => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
  ReactSdkContext.Provider,
  {
    value: {
      imageLoader,
      assetBaseUrl,
      imageBaseUrl,
      pagesPaths
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      Page,
      {
        scripts: /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(import_jsx_runtime48.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react55.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react55.ScrollRestoration, {})
        ] })
      }
    )
  }
), pricing_index_default = Outlet;

// app/routes/[about]._index.tsx
var about_index_exports = {};
__export(about_index_exports, {
  action: () => action2,
  default: () => about_index_default,
  links: () => links2,
  meta: () => meta2
});
var import_server_runtime2 = require("@remix-run/server-runtime");
var import_react57 = require("@remix-run/react");

// app/__generated__/[about]._index.tsx
var import_react56 = require("react");
var import_jsx_runtime49 = require("react/jsx-runtime"), fontAssets2 = [{ id: "1e1bfb48-4b7b-4a0b-bd39-87f504ac9e95", name: "SpaceGrotesk_wght__2FXqrSM6Qb5IUNmO8wuzl.woff2", description: null, projectId: "30e5305e-3f59-4d32-b4c2-bbfb47f19f96", size: 49256, type: "font", createdAt: "2023-06-29T05:05:10.384Z", format: "woff2", meta: { family: "Space Grotesk", variationAxes: { wght: { name: "Weight", min: 300, default: 300, max: 700 } } } }], pageData2 = { page: { id: "7xIBU59ZcBYTdlcKpsBLq", name: "About", title: "About", meta: { description: "" }, rootInstanceId: "Aij73qPi0LPlTuTPUho6r", path: "/about" } }, user2 = { email: "tarframework@gmail.com" }, projectId2 = "30e5305e-3f59-4d32-b4c2-bbfb47f19f96", Page2 = (props) => {
  let [sheetOpen, set$sheetOpen] = (0, import_react56.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
    Body,
    {
      "data-ws-id": "Aij73qPi0LPlTuTPUho6r",
      "data-ws-component": "Body",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
          Slot,
          {
            "data-ws-id": "QEphehzbsp6Mu9uZokWha",
            "data-ws-component": "Slot",
            children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
              Fragment3,
              {
                "data-ws-id": "hCrOEWk9TWQYyVMtCWD98",
                "data-ws-component": "Fragment",
                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                  Box,
                  {
                    "data-ws-id": "TWSfZDEQ22jm6ORuD81bO",
                    "data-ws-component": "Box",
                    children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                      Box,
                      {
                        "data-ws-id": "91efxtQVNXMPQCM8RISLw",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                            Link2,
                            {
                              "data-ws-id": "FhAJxmce_FA6XmDDVIW3i",
                              "data-ws-component": "Link",
                              href: "/",
                              target: "_self",
                              prefetch: "intent",
                              children: "SaaS Product"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                            Box,
                            {
                              "data-ws-id": "EQtO7ftc5pPiA3i2FtH_4",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                  Slot,
                                  {
                                    "data-ws-id": "VQ59heNoGMqJNIKFRycu6",
                                    "data-ws-component": "Slot",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                      Fragment3,
                                      {
                                        "data-ws-id": "xxYyDXmQMWja8n9ltcV9f",
                                        "data-ws-component": "Fragment",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                          Link2,
                                          {
                                            "data-ws-id": "cCSuWXG7aRl8V6QoIt-Dv",
                                            "data-ws-component": "Link",
                                            href: "/about",
                                            target: "_self",
                                            prefetch: "intent",
                                            children: "About"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                  Slot,
                                  {
                                    "data-ws-id": "pLaX2lKW_Z_7dRvGwY27_",
                                    "data-ws-component": "Slot",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                      Fragment3,
                                      {
                                        "data-ws-id": "GfDOpAbAX0MmMST7HuvFo",
                                        "data-ws-component": "Fragment",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                          Link2,
                                          {
                                            "data-ws-id": "YZvKvq7TdJPOHQ4gZ0zcp",
                                            "data-ws-component": "Link",
                                            href: "/pricing",
                                            target: "_self",
                                            prefetch: "intent",
                                            children: "Pricing"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                            Box,
                            {
                              "data-ws-id": "dF4T1lt-2AQ3RpBEYt08B",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                Slot,
                                {
                                  "data-ws-id": "SltUxhQ8TuUqJe2-zxrQR",
                                  "data-ws-component": "Slot",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                    Fragment3,
                                    {
                                      "data-ws-id": "lylqznB2R6E8nBL2OFXyB",
                                      "data-ws-component": "Fragment",
                                      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "CxxJHG_1OUZ4zqzeW0vKt",
                                          "data-ws-component": "Link",
                                          children: "Try the App"
                                        }
                                      )
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                            Dialog,
                            {
                              "data-ws-id": "cgHhI9Kh3-nHGI_D69LV3",
                              "data-ws-component": "@webstudio-is/sdk-components-react-radix:Dialog",
                              open: sheetOpen,
                              onOpenChange: (open) => {
                                sheetOpen = open, set$sheetOpen(sheetOpen);
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                  DialogTrigger,
                                  {
                                    "data-ws-id": "13XUUVUTbo8ogBwnc2-zT",
                                    "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogTrigger",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                      Button,
                                      {
                                        "data-ws-id": "CpZHAp7GJUwle5AEC_STZ",
                                        "data-ws-component": "Button",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                          HtmlEmbed,
                                          {
                                            "data-ws-id": "0emPLKUBAOQTyVrPfa1V5",
                                            "data-ws-component": "HtmlEmbed",
                                            code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>'
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                  DialogOverlay,
                                  {
                                    "data-ws-id": "Ee5LLqXY5bIaoNU-XdBgo",
                                    "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogOverlay",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                      DialogContent,
                                      {
                                        "data-ws-id": "7mJmpqVW07KKydweeQWDB",
                                        "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogContent",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                            Slot,
                                            {
                                              "data-ws-id": "3OnqrVo6BLReX06-ng0-X",
                                              "data-ws-component": "Slot",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                Fragment3,
                                                {
                                                  "data-ws-id": "xxYyDXmQMWja8n9ltcV9f",
                                                  "data-ws-component": "Fragment",
                                                  children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Link2,
                                                    {
                                                      "data-ws-id": "cCSuWXG7aRl8V6QoIt-Dv",
                                                      "data-ws-component": "Link",
                                                      href: "/about",
                                                      target: "_self",
                                                      prefetch: "intent",
                                                      children: "About"
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                            Slot,
                                            {
                                              "data-ws-id": "K6tNqZ99FEVpwhTK6fUTU",
                                              "data-ws-component": "Slot",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                Fragment3,
                                                {
                                                  "data-ws-id": "GfDOpAbAX0MmMST7HuvFo",
                                                  "data-ws-component": "Fragment",
                                                  children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Link2,
                                                    {
                                                      "data-ws-id": "YZvKvq7TdJPOHQ4gZ0zcp",
                                                      "data-ws-component": "Link",
                                                      href: "/pricing",
                                                      target: "_self",
                                                      prefetch: "intent",
                                                      children: "Pricing"
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                            Slot,
                                            {
                                              "data-ws-id": "TBLweN7E8ZvqwS757x2aA",
                                              "data-ws-component": "Slot",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                Fragment3,
                                                {
                                                  "data-ws-id": "lylqznB2R6E8nBL2OFXyB",
                                                  "data-ws-component": "Fragment",
                                                  children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Link2,
                                                    {
                                                      "data-ws-id": "CxxJHG_1OUZ4zqzeW0vKt",
                                                      "data-ws-component": "Link",
                                                      children: "Try the App"
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                            Box,
                                            {
                                              "data-ws-id": "4VgBDNAygLhwa4uli1-zy",
                                              "data-ws-component": "Box",
                                              tabIndex: 0
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                            DialogClose,
                                            {
                                              "data-ws-id": "Hrwk_WYZVCMvdwMHYUJqO",
                                              "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogClose",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                HtmlEmbed,
                                                {
                                                  "data-ws-id": "Gxg26Cbkilf_rlZq5ULhz",
                                                  "data-ws-component": "HtmlEmbed",
                                                  code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>'
                                                }
                                              )
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
          Box,
          {
            "data-ws-id": "y0ovkn8orARIOOFqBCavY",
            "data-ws-component": "Box",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                Box,
                {
                  "data-ws-id": "l6gT2u2sBW1AyrnidCKGr",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                      Box,
                      {
                        "data-ws-id": "krOa8otC_lr-PReApOjUm",
                        "data-ws-component": "Box",
                        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                          Image2,
                          {
                            "data-ws-id": "KqsPjlsJGROcfkdutawGv",
                            "data-ws-component": "Image",
                            src: "/assets/annie-spratt-dWYU3i-mqEo-unsplash_Bxq7tG0vc6Bhsb97AZfEk.jpeg",
                            loading: "eager"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                      Box,
                      {
                        "data-ws-id": "oQGErZO0PHEQBYuO3VNsq",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                            Heading,
                            {
                              "data-ws-id": "4yQhPsPx7CKfbsbFv7GSC",
                              "data-ws-component": "Heading",
                              children: "About"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                            Text2,
                            {
                              "data-ws-id": "7hjBxVpPbjZZY1DEZ0sfg",
                              "data-ws-component": "Text",
                              children: "Together, we stand dedicated to transforming the way teams work, embracing the power of connection to nurture innovation, and creating an environment where every team member can thrive."
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                Box,
                {
                  "data-ws-id": "FJISk8X7xoXFT9tli9YGI",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                      Box,
                      {
                        "data-ws-id": "DJRG8P9fNMzXwaAWduVc2",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                            Heading,
                            {
                              "data-ws-id": "Ob9A1gLACeZM9WM8NErhM",
                              "data-ws-component": "Heading",
                              children: "Meet the Visionaries"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                            Text2,
                            {
                              "data-ws-id": "fRbeWRTS0jEyRNgaJkXaf",
                              "data-ws-component": "Text",
                              children: "With diverse backgrounds and expertise spanning technology, design, and business strategy, we bring a wealth of knowledge to the table. "
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                      Box,
                      {
                        "data-ws-id": "-BHgfImeEbZMuuejfqHG_",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                            Box,
                            {
                              "data-ws-id": "JbP0Y5kZoq3Agmn_vxWxC",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "hNvWj0qtQJIKmOf-P_UTB",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "kUmxAfeDen3wlS1gGI0Bf",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "dpoh5YI5b5UgU5gFP5mzb",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "DAGHbhcf4iVuJMHfEzCwn",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/ludovic-migneault-EZ4TYgXPNWk-unsplash_C5HgJG2-Yl2EIltDMzCpt.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "7oCVAiClOho_XCMBg0hv5",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "ffsq_b52zsMyol1bUrhpg",
                                                      "data-ws-component": "Heading",
                                                      children: "Jerome Bell"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "3Pcu-6ZezwqGQr-xMYH-P",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Co-founder and CEO"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "aBCYAqIBUO092lnD_vbit",
                                                "data-ws-component": "Box"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "ae58U7QqzrfPIpfbOdMdu",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "aRdjGH0A-sDS2qQLcThGN",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "LuKhORPYyhX7i0J4Gzk4U",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/rachel-mcdermott-0fN7Fxv1eWA-unsplash_YSxowXdHZzaAV4_H9RO5I.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "lbywQQ4USXEJuoWZRalm9",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "exha--kaoHwF0yLH1glbr",
                                                      "data-ws-component": "Heading",
                                                      children: "Elena Williams"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "YEY7FFWYSXbl_DM2cHBh5",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Co-founder and CTO"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "pVzZzd-Av4TlUbIfYY2Df",
                                                "data-ws-component": "Box"
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "oY1ZFvMr3NOT-JpRHWSDS",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "8SdHBGloKSMADdsoz2Mvl",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "XDFcX4iEu6CdHaqxDRTRx",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "Q7dM5C2-r4z9W3mbujdnt",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/daria-pimkina-tYaccl19A3Q-unsplash_CxNvWGlbLj4PmQinO9rYg.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "EcquI3M10mIqkLgHa3gH7",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "19ZRkH9RncSQrmCEyZ2rg",
                                                      "data-ws-component": "Heading",
                                                      children: "Sarah Miller "
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "X0hdIaoQ39eyMyW_KtU8h",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Head of Product Design"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "hIy_5qVV9QE7EmCLoa4mf",
                                                "data-ws-component": "Box"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "d_nTMgdxuIg75sX68K4IV",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "FqezXZJVy6OIVYgHrGRSL",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "yuWzvn21qpJ4Kfg8C0dMu",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/bruce-mars-8YG31Xn4dSw-unsplash_KJktq3e6bvg4m93KCZgFG.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "TISzZI2Y57Xy2yYjH5eKV",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "DfW1FpPEQtnWqPArk25Ow",
                                                      "data-ws-component": "Heading",
                                                      children: "David Ramirez"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "ozBbxQF4S-qgn_Yh1p-qV",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Lead Software Engineer"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "eUKyHBLJ6KGDi46sfrEmr",
                                                "data-ws-component": "Box"
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                            Box,
                            {
                              "data-ws-id": "nj1MYzdWV_0FZ5AnxMvOl",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "Ym9zpcOavGMeZrdM7ZqKX",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "F9cSJQ08nUA_85aTyppOx",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "RgDO_CQD2ZUh2M6rgu8Vg",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "ScbCUoA32ufgfTqunwuGn",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/christina-wocintechchat-com-SJvDxw0azqw-unsplash_2Vhjv5ot3JkLy18j5ONvm.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "EqiglCwEnkxvBs-CfDxks",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "6KUnQ2Tbl5t90yBYP8JJS",
                                                      "data-ws-component": "Heading",
                                                      children: "Jessica Parker"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "-JGoXrvf0x8gNNCYAALFu",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Marketing and Communications Manager"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "V3KAIh83j4Ds3sRcLFnhB",
                                                "data-ws-component": "Box"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "QM43qR-L_kf7_kQR_nJRb",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "Ew6AOGKdZu3BtRCo_X06z",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "GqgSaJ3ojuvmyxaOu9dLT",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/vicky-hladynets-C8Ta0gwPbQg-unsplash_JS3NJkGLTPL9D96tXRp8R.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "aH92ZEzeMR3rv-Z8zA1eO",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "90C73zyxN2tRV_XQs_471",
                                                      "data-ws-component": "Heading",
                                                      children: "Robert Thompson"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "frSPziNd5mNoJBU9aGeao",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Business Development Specialist"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "2_7fMYITutHccBiEoULE8",
                                                "data-ws-component": "Box"
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "Bi8RArKh4Vi2YGEUEHIGq",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "CnAd_amIrnMjCFcqWqwe6",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "miNTCWQJ03RGHuPj8zY0P",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "fXf6nxm7WGsFvcpM0NsD3",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/joel-mott-VWGPhJyzMQ4-unsplash_-mcHxc58jA6kom3rcyacw.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "XQUz0hor3Sx27gsWIbbUm",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "tfrfOnHQSv7_UwJ09t21P",
                                                      "data-ws-component": "Heading",
                                                      children: "Melissa Lee"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "cxIpc54DrE3N90hf0NNyV",
                                                      "data-ws-component": "Paragraph",
                                                      children: "UX/UI Designer"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "T5eKkyh_v0zNNLNx_dLcH",
                                                "data-ws-component": "Box"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Box,
                                        {
                                          "data-ws-id": "xg6gF2toApiQ9aQJ-f2Ca",
                                          "data-ws-component": "Box"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                Box,
                {
                  "data-ws-id": "cnr-e3CwEJrTFptgAQSwv",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                      Box,
                      {
                        "data-ws-id": "VZKri5tXDggaswadXecNl",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                            Heading,
                            {
                              "data-ws-id": "p_fjVqVKt0_ouMrm0TraD",
                              "data-ws-component": "Heading",
                              children: "Our Investors"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                            Text2,
                            {
                              "data-ws-id": "pgtBTdeNiaeYtfqeN87HV",
                              "data-ws-component": "Text",
                              children: "Our investors' trust in our team and our product inspires us to push boundaries, think creatively, and never settle for the status quo."
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                      Box,
                      {
                        "data-ws-id": "FDqv4pvBlfYOjCzYPEZdf",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                            Box,
                            {
                              "data-ws-id": "yJNgCa6i1ZTxh2jqlB2e_",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "Y1SEmO3etbUqTdY8t_rXy",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "E7a8ay6Kk09LMyrdNQ2MD",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "vRA5Cim4Trc9cCPlzc-wm",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "_Z_nbuXMarQm1wTKwZYBj",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/ashton-bingham-EQFtEzJGERg-unsplash_n3B2v0oYFr8F3I9AcvNQP.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "Q08XcskX3DpBTRVZ3tqVt",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "D2oczgUKN7INqQ8nDd1C1",
                                                      "data-ws-component": "Heading",
                                                      children: "Thomas Anderson"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "K_3JVeCvgouGt0GBiWJSV",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Venture Capital Partners, Managing Director"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "DKDF6PFiwbKQUeKBnagxp",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "5er1IbnT1wzFlADEjnz94",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "tdTcTUxZBEWwuhUA594LO",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/sigmund-jzz_3jWMzHA-unsplash_b_VEz4vDDo56YTgGRuVhA.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "EVYYxjiCjBzKeqFi6VMSw",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "J_a7lfwe0EJjg_F5ohzDP",
                                                      "data-ws-component": "Heading",
                                                      children: "Jessica Martinez"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "HDXZ380j2QehQ2jRWna3X",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Tech Innovations Fund, Principal Investor"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "5ASv0Y9gW1syeVA__xDjv",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "UnlAbUrA9WaWbzrCg--P6",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "-ZdIOQOTFk2BgZ3nO72Jw",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "WFQsxzFqj7kpnWi3wXISu",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/foto-sushi-6anudmpILw4-unsplash_9L8RY7TY_Q1EPcvxO_oFX.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "XMClOXjqqj1C7S5F88sRx",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "WIe_KKFBtSWKJOx9vMfW4",
                                                      "data-ws-component": "Heading",
                                                      children: "David Wilson"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "3BNgvFgBEwmay3rR3DesZ",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Growth Ventures Inc., Senior Partner"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "FQbtc4ny7V8xjPUtA3MqI",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "FxQrMynJ7Uq7B7PIkmXNO",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "zhA3mc9ROh4CihqFD6bI8",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/christina-wocintechchat-com-7JGjoSVfIDM-unsplash_2iRG6rykIJrYxZ5IjPWGj.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "T4NpZiLEsG7jtZ36r3HfJ",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "9bLRXLFEfo9XBKHvKXYwZ",
                                                      "data-ws-component": "Heading",
                                                      children: "Rachel Chen"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "uvZOHZwyMbf1PuxOtq1XN",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Impact Investments Group, Head of Investments"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                            Box,
                            {
                              "data-ws-id": "Dv9pg_7vl6k2OeM5CFLWo",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "VrVTk_oSzrxS_Q57tLCMa",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "KpMUv-_BcXTa6ksYvrw_h",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "eFkpkOLjEsubh0U_m7Mmz",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "I3tindkPwX4cLrafudm-_",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/luis-villasmil-hh3ViD0r0Rc-unsplash_59b2CxQV6HODjB0t2loEF.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "dTIMUCrn8C_NdWM5SvKlM",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "YgLe4tL5vAg1zG3EkKUm_",
                                                      "data-ws-component": "Heading",
                                                      children: "Jonathan Patel"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "xiPeu_or6z45Pw7HYsP-9",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Global Innovators Fund, Managing Partner"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "8JqroTaQBdU7Yirz0C2We",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "lqgmGRHBsu71yj4PaqXGl",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "iOBp1M8075Q_x5QhA9yfv",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/jake-nackos-IF9TK5Uy-KI-unsplash_PGNJ6DB8F_VD49AWLsQcW.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "_x3yQ7zrwZ8VZHQVJcLJ2",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "kR5xKldJU9G9psPpLseZ9",
                                                      "data-ws-component": "Heading",
                                                      children: "Laura Sanchez"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "v9RMQW35MhNsOKfn0DfbE",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Sustainable Futures Capital, Investment Analyst"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "d3kuBtzHlozOSX8RL2yL7",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "6i6EsYUbIZpRFiWqAYyAt",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "KuAZUMRsyqDAOt9_ve6NT",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "0_SL7kYubQYOSBMUPDaJC",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/thai-an-E2Yd6K2A3fE-unsplash_Tg8ZBdBE4SGkh2_5hQ0tP.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "ChGADBNm30EX2aD9G0ZUc",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "swn5DQ7eTtIUw-xiwEluD",
                                                      "data-ws-component": "Heading",
                                                      children: "Michael Lee"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "pKAuhgEBNz-FS5ypg35Hk",
                                                      "data-ws-component": "Paragraph",
                                                      children: "Strategic Ventures Ltd., Managing Director"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "s0gKMKKf0DSM-_NCfUymx",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "ImxFTamSdnj58VUwMuQP4",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "xV5VJN7PrQ42LT0G9ophv",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/edward-cisneros-_H6wpor9mjs-unsplash_wSHJ4intTHufcvH563kj2.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "7kGFi4uOIK-lZ2KNNEAtz",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "PeTkrcQ4RoS7oaXFjlsfs",
                                                      "data-ws-component": "Heading",
                                                      children: "Melissa Thompson"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                                    Paragraph,
                                                    {
                                                      "data-ws-id": "9mEkQwTFgLZJOJ5NpiCA3",
                                                      "data-ws-component": "Paragraph",
                                                      children: "FutureTech Fund, Investment Manager"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
          Slot,
          {
            "data-ws-id": "RB-59O22rSqexBPG1nF0Y",
            "data-ws-component": "Slot",
            children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
              Fragment3,
              {
                "data-ws-id": "LXAE0omYOBDRhwHgmjbxd",
                "data-ws-component": "Fragment",
                children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                  Box,
                  {
                    "data-ws-id": "etSoQ_YpqbbjYSdf5gDn_",
                    "data-ws-component": "Box",
                    children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                      Box,
                      {
                        "data-ws-id": "T3kf2U4vSUW1jD4y_NEma",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                            Box,
                            {
                              "data-ws-id": "_5z42eLI3fQfzg74Ywbb1",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                  Link2,
                                  {
                                    "data-ws-id": "8_lYbS23oem75lqyneJKk",
                                    "data-ws-component": "Link",
                                    children: "SaaS Product"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "ZyWzCL9VJFsmbTZBNU9-c",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "xJocVo6XEiFAGYZU4WEBy",
                                          "data-ws-component": "Text",
                                          children: "Company"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "OemFDMxMz1dQm6ZNizOMu",
                                          "data-ws-component": "Link",
                                          children: "Team"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "RyCe2Bi_tJJxSIa6o--Yd",
                                          "data-ws-component": "Link",
                                          children: "Privacy Policy"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "fymS9Wubd_R1Ni-24Zyx6",
                                          "data-ws-component": "Link",
                                          children: "Terms of Service"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                            Box,
                            {
                              "data-ws-id": "jNyPk4jlM6WQIun_94FT1",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "tAD0q_c3Lcz3S18VRY9VO",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "dJ3D3qquPPEVbf4FQytOh",
                                          "data-ws-component": "Text",
                                          children: "Community"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "KF0zY92pvFsNrmUkiD2iq",
                                          "data-ws-component": "Link",
                                          children: "Github"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "k_TUj7O7myu3xDr7wGUNx",
                                          "data-ws-component": "Link",
                                          children: "Discord"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "dLWBQCL9gyAllSg5RXwyU",
                                          "data-ws-component": "Link",
                                          children: "Twitter"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "GFaKIM1XZQEAZ-qwxKOx_",
                                          "data-ws-component": "Link",
                                          children: "Product Hunt"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "EtrG_tdm2KROkPiB9DlEM",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "sQd2JlvN3_sraUU2JjqrV",
                                          "data-ws-component": "Text",
                                          children: "Product"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "_-DoDHqUkbX9m6W1L4jk_",
                                          "data-ws-component": "Link",
                                          children: "Pricing"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "av5H5w4bddISdUjP9Fxl0",
                                          "data-ws-component": "Link",
                                          children: "Download"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "CP_4Oip6tvDePQJWy5Pma",
                                          "data-ws-component": "Link",
                                          children: "Source Code"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        props.scripts
      ]
    }
  );
};
var pagesPaths2 = /* @__PURE__ */ new Set(["", "/pricing", "/about"]), formsProperties2 = /* @__PURE__ */ new Map([]);

// app/routes/[about]._index.tsx
var import_jsx_runtime50 = require("react/jsx-runtime"), meta2 = () => {
  let { page } = pageData2, metas = [
    { title: (page == null ? void 0 : page.title) || "Webstudio" }
  ];
  for (let [name, value] of Object.entries((page == null ? void 0 : page.meta) ?? {})) {
    if (name.startsWith("og:")) {
      metas.push({
        property: name,
        content: value
      });
      continue;
    }
    metas.push({
      name,
      content: value
    });
  }
  return metas;
}, links2 = () => {
  let result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  for (let asset of fontAssets2)
    asset.type === "font" && result.push({
      rel: "preload",
      href: assetBaseUrl + asset.name,
      as: "font",
      crossOrigin: "anonymous"
      // @todo add mimeType
      // type: asset.mimeType,
    });
  return result;
}, getRequestHost2 = (request) => request.headers.get("x-forwarded-host") || request.headers.get("host") || "", getMethod2 = (value) => {
  if (value === void 0)
    return "post";
  switch (value.toLowerCase()) {
    case "get":
      return "get";
    default:
      return "post";
  }
}, action2 = async ({ request, context }) => {
  var _a7;
  let formData = await request.formData(), formId = getFormId(formData);
  if (formId === void 0)
    throw (0, import_server_runtime2.json)("Form not found", { status: 404 });
  let formProperties = formsProperties2.get(formId), { action: action4, method } = formProperties ?? {}, email = (_a7 = user2) == null ? void 0 : _a7.email;
  if (email == null)
    return { success: !1 };
  let pageUrl;
  try {
    pageUrl = new URL(request.url), pageUrl.host = getRequestHost2(request);
  } catch {
    return { success: !1 };
  }
  if (action4 !== void 0)
    try {
      new URL(action4);
    } catch {
      return (0, import_server_runtime2.json)(
        {
          success: !1,
          error: "Invalid action URL, must be valid http/https protocol"
        },
        { status: 200 }
      );
    }
  let formInfo = {
    formData,
    projectId: projectId2,
    action: action4 ?? null,
    method: getMethod2(method),
    pageUrl: pageUrl.toString(),
    toEmail: email,
    fromEmail: pageUrl.hostname + "@webstudio.email"
  };
  return await n8nHandler({
    formInfo,
    hookUrl: context.N8N_FORM_EMAIL_HOOK
  });
}, Outlet2 = () => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
  ReactSdkContext.Provider,
  {
    value: {
      imageLoader,
      assetBaseUrl,
      imageBaseUrl,
      pagesPaths: pagesPaths2
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      Page2,
      {
        scripts: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_jsx_runtime50.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react57.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_react57.ScrollRestoration, {})
        ] })
      }
    )
  }
), about_index_default = Outlet2;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action3,
  default: () => index_default,
  links: () => links3,
  meta: () => meta3
});
var import_server_runtime3 = require("@remix-run/server-runtime");
var import_react59 = require("@remix-run/react");

// app/__generated__/_index.tsx
var import_react58 = require("react");
var import_jsx_runtime51 = require("react/jsx-runtime"), fontAssets3 = [{ id: "1e1bfb48-4b7b-4a0b-bd39-87f504ac9e95", name: "SpaceGrotesk_wght__2FXqrSM6Qb5IUNmO8wuzl.woff2", description: null, projectId: "30e5305e-3f59-4d32-b4c2-bbfb47f19f96", size: 49256, type: "font", createdAt: "2023-06-29T05:05:10.384Z", format: "woff2", meta: { family: "Space Grotesk", variationAxes: { wght: { name: "Weight", min: 300, default: 300, max: 700 } } } }], pageData3 = { page: { id: "9xR9hAVSFQsls07ekq14k", name: "Home", title: "Home", meta: {}, rootInstanceId: "yciogBG54zs9zd-BUDKkU", path: "" } }, user3 = { email: "tarframework@gmail.com" }, projectId3 = "30e5305e-3f59-4d32-b4c2-bbfb47f19f96", Page3 = (props) => {
  let [sheetOpen, set$sheetOpen] = (0, import_react58.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
    Body,
    {
      "data-ws-id": "yciogBG54zs9zd-BUDKkU",
      "data-ws-component": "Body",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          Slot,
          {
            "data-ws-id": "SiScM4cpvzPd6wia0aISy",
            "data-ws-component": "Slot",
            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
              Fragment3,
              {
                "data-ws-id": "hCrOEWk9TWQYyVMtCWD98",
                "data-ws-component": "Fragment",
                children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                  Box,
                  {
                    "data-ws-id": "TWSfZDEQ22jm6ORuD81bO",
                    "data-ws-component": "Box",
                    children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "91efxtQVNXMPQCM8RISLw",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Link2,
                            {
                              "data-ws-id": "FhAJxmce_FA6XmDDVIW3i",
                              "data-ws-component": "Link",
                              href: "/",
                              target: "_self",
                              prefetch: "intent",
                              children: "SaaS Product"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Box,
                            {
                              "data-ws-id": "EQtO7ftc5pPiA3i2FtH_4",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  Slot,
                                  {
                                    "data-ws-id": "VQ59heNoGMqJNIKFRycu6",
                                    "data-ws-component": "Slot",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                      Fragment3,
                                      {
                                        "data-ws-id": "xxYyDXmQMWja8n9ltcV9f",
                                        "data-ws-component": "Fragment",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                          Link2,
                                          {
                                            "data-ws-id": "cCSuWXG7aRl8V6QoIt-Dv",
                                            "data-ws-component": "Link",
                                            href: "/about",
                                            target: "_self",
                                            prefetch: "intent",
                                            children: "About"
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  Slot,
                                  {
                                    "data-ws-id": "pLaX2lKW_Z_7dRvGwY27_",
                                    "data-ws-component": "Slot",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                      Fragment3,
                                      {
                                        "data-ws-id": "GfDOpAbAX0MmMST7HuvFo",
                                        "data-ws-component": "Fragment",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                          Link2,
                                          {
                                            "data-ws-id": "YZvKvq7TdJPOHQ4gZ0zcp",
                                            "data-ws-component": "Link",
                                            href: "/pricing",
                                            target: "_self",
                                            prefetch: "intent",
                                            children: "Pricing"
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Box,
                            {
                              "data-ws-id": "dF4T1lt-2AQ3RpBEYt08B",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                Slot,
                                {
                                  "data-ws-id": "SltUxhQ8TuUqJe2-zxrQR",
                                  "data-ws-component": "Slot",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                    Fragment3,
                                    {
                                      "data-ws-id": "lylqznB2R6E8nBL2OFXyB",
                                      "data-ws-component": "Fragment",
                                      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "CxxJHG_1OUZ4zqzeW0vKt",
                                          "data-ws-component": "Link",
                                          children: "Try the App"
                                        }
                                      )
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Dialog,
                            {
                              "data-ws-id": "cgHhI9Kh3-nHGI_D69LV3",
                              "data-ws-component": "@webstudio-is/sdk-components-react-radix:Dialog",
                              open: sheetOpen,
                              onOpenChange: (open) => {
                                sheetOpen = open, set$sheetOpen(sheetOpen);
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  DialogTrigger,
                                  {
                                    "data-ws-id": "13XUUVUTbo8ogBwnc2-zT",
                                    "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogTrigger",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                      Button,
                                      {
                                        "data-ws-id": "CpZHAp7GJUwle5AEC_STZ",
                                        "data-ws-component": "Button",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                          HtmlEmbed,
                                          {
                                            "data-ws-id": "0emPLKUBAOQTyVrPfa1V5",
                                            "data-ws-component": "HtmlEmbed",
                                            code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>'
                                          }
                                        )
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  DialogOverlay,
                                  {
                                    "data-ws-id": "Ee5LLqXY5bIaoNU-XdBgo",
                                    "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogOverlay",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                      DialogContent,
                                      {
                                        "data-ws-id": "7mJmpqVW07KKydweeQWDB",
                                        "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogContent",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Slot,
                                            {
                                              "data-ws-id": "3OnqrVo6BLReX06-ng0-X",
                                              "data-ws-component": "Slot",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                Fragment3,
                                                {
                                                  "data-ws-id": "xxYyDXmQMWja8n9ltcV9f",
                                                  "data-ws-component": "Fragment",
                                                  children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Link2,
                                                    {
                                                      "data-ws-id": "cCSuWXG7aRl8V6QoIt-Dv",
                                                      "data-ws-component": "Link",
                                                      href: "/about",
                                                      target: "_self",
                                                      prefetch: "intent",
                                                      children: "About"
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Slot,
                                            {
                                              "data-ws-id": "K6tNqZ99FEVpwhTK6fUTU",
                                              "data-ws-component": "Slot",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                Fragment3,
                                                {
                                                  "data-ws-id": "GfDOpAbAX0MmMST7HuvFo",
                                                  "data-ws-component": "Fragment",
                                                  children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Link2,
                                                    {
                                                      "data-ws-id": "YZvKvq7TdJPOHQ4gZ0zcp",
                                                      "data-ws-component": "Link",
                                                      href: "/pricing",
                                                      target: "_self",
                                                      prefetch: "intent",
                                                      children: "Pricing"
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Slot,
                                            {
                                              "data-ws-id": "TBLweN7E8ZvqwS757x2aA",
                                              "data-ws-component": "Slot",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                Fragment3,
                                                {
                                                  "data-ws-id": "lylqznB2R6E8nBL2OFXyB",
                                                  "data-ws-component": "Fragment",
                                                  children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Link2,
                                                    {
                                                      "data-ws-id": "CxxJHG_1OUZ4zqzeW0vKt",
                                                      "data-ws-component": "Link",
                                                      children: "Try the App"
                                                    }
                                                  )
                                                }
                                              )
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Box,
                                            {
                                              "data-ws-id": "4VgBDNAygLhwa4uli1-zy",
                                              "data-ws-component": "Box",
                                              tabIndex: 0
                                            }
                                          ),
                                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            DialogClose,
                                            {
                                              "data-ws-id": "Hrwk_WYZVCMvdwMHYUJqO",
                                              "data-ws-component": "@webstudio-is/sdk-components-react-radix:DialogClose",
                                              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                HtmlEmbed,
                                                {
                                                  "data-ws-id": "Gxg26Cbkilf_rlZq5ULhz",
                                                  "data-ws-component": "HtmlEmbed",
                                                  code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>'
                                                }
                                              )
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
          Box,
          {
            "data-ws-id": "KFt3pU_7bNjPUtVAM_PLs",
            "data-ws-component": "Box",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                Box,
                {
                  "data-ws-id": "8PAZtVQKXTYOaVKPn6qdX",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                      Heading,
                      {
                        "data-ws-id": "IT51c7FjAaBN9pfwTVIaE",
                        "data-ws-component": "Heading",
                        children: "Unleash the Power of Human-Centered Project Management"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                      Text2,
                      {
                        "data-ws-id": "gB69_N0642JvOMPgWZCGp",
                        "data-ws-component": "Text",
                        children: "Revolutionize Collaboration, Cultivate Results, and Embrace the Human Touch"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "z2H3DBkV5rCM3NPaXnQyv",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Link2,
                            {
                              "data-ws-id": "csy41CjHsFYwXBXVp3Nyv",
                              "data-ws-component": "Link",
                              children: "Join our Discord"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Link2,
                            {
                              "data-ws-id": "tR3vEoi_QLIU5p8z9kz10",
                              "data-ws-component": "Link",
                              children: "Try the App"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                Box,
                {
                  "data-ws-id": "MuR6YNg0tASN8bjEROCUu",
                  "data-ws-component": "Box",
                  children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                    Image2,
                    {
                      "data-ws-id": "4hnw7JxeTT89_ZkGPe2Am",
                      "data-ws-component": "Image",
                      src: "/assets/Features_1.1_C4sg2-k5JE9lwGH1oFAxX.jpg"
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                Box,
                {
                  "data-ws-id": "TXgdqKTZqfuMWhIPnAEYK",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "JJQ6fvuNAHo96VzjHfmW2",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Heading,
                            {
                              "data-ws-id": "o0Za1nGa2xP-2My4seoCY",
                              "data-ws-component": "Heading",
                              children: "Seamlessly Blend Efficiency and Personal Connection"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Text2,
                            {
                              "data-ws-id": "IFV1xErotBG5OOUkTYcaY",
                              "data-ws-component": "Text",
                              children: "Our innovative SaaS solution is designed to streamline communication and optimize team collaboration, all while preserving the personal touch that fuels creativity and fosters camaraderie."
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "Npoj--qYoiz2Vq_28lOE7",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Box,
                            {
                              "data-ws-id": "cHz95BbUB--EFSf8dLV6n",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                Image2,
                                {
                                  "data-ws-id": "qdi_TKOpfhGFjhVqxGm3x",
                                  "data-ws-component": "Image",
                                  src: "/assets/Features_1.2_VgPZ6iAQigOpBf-Mn33W3.jpg"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Box,
                            {
                              "data-ws-id": "fBvvkiTcc4H8QdZTxNWLx",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  Heading,
                                  {
                                    "data-ws-id": "qPqm_tZrFEYDAZv9xaOFb",
                                    "data-ws-component": "Heading",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                      Bold,
                                      {
                                        "data-ws-id": "djoJZhznveMly5yeZKAfO",
                                        "data-ws-component": "Bold",
                                        children: "Virtual Team Building Activities"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  Text2,
                                  {
                                    "data-ws-id": "Mhlmn6y2YFcK5svHwuQ2-",
                                    "data-ws-component": "Text",
                                    children: "Incorporate virtual team-building games and activities directly into the platform to foster camaraderie and strengthen relationships among team members, even if they are geographically dispersed."
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  Link2,
                                  {
                                    "data-ws-id": "I7dO95CAhObO7pSN9_W0r",
                                    "data-ws-component": "Link",
                                    children: "Try the App"
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "tl2jLKlnMsOvtlRs7n3r7",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Box,
                            {
                              "data-ws-id": "B_PnriDK_1PsJufLllMn6",
                              "data-ws-component": "Box",
                              children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                Image2,
                                {
                                  "data-ws-id": "2ZiROeh8wjCu9KsC-B6gp",
                                  "data-ws-component": "Image",
                                  src: "/assets/Features_1.3_sCXJ-BElFe5G5qdreXLl2.jpg"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Box,
                            {
                              "data-ws-id": "x0mrMHOZ90pOfPCCc5RQA",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  Heading,
                                  {
                                    "data-ws-id": "-nuiQYW0ug0ew-ppqTzHp",
                                    "data-ws-component": "Heading",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                      Bold,
                                      {
                                        "data-ws-id": "mfjkvaBwr5XFzgGoMEXRo",
                                        "data-ws-component": "Bold",
                                        children: "Empathy Dashboard"
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  Text2,
                                  {
                                    "data-ws-id": "hGPoAEOb95xNcCESH7pa8",
                                    "data-ws-component": "Text",
                                    children: "Integrate an empathy dashboard that allows team members to express their emotions or well-being through emojis or short status updates, helping others understand their current state and offer support when needed."
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  Link2,
                                  {
                                    "data-ws-id": "dVeYTizLX4FAFN5VtF9k1",
                                    "data-ws-component": "Link",
                                    children: "Try the App"
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                Box,
                {
                  "data-ws-id": "1PnlhV97NrtGz7T87vPT3",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "5hwKDN6W-9gU9GyYILKFh",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Heading,
                            {
                              "data-ws-id": "M_Rv2zfIjIc-1M9kXU1Oq",
                              "data-ws-component": "Heading",
                              children: "4 Power Features Everyone Needs to See"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Text2,
                            {
                              "data-ws-id": "oIggbSbOJkD2s1ldXspbe",
                              "data-ws-component": "Text",
                              children: "These unique features can create a more inclusive, engaging, and productive environment for teams "
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "F91Nldn4Ue799PVlcLjjy",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Box,
                            {
                              "data-ws-id": "HhvovkoTEnWxZuKRG1izP",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "vbSAw-knb0qAF8VPpWjVK",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Box,
                                        {
                                          "data-ws-id": "-HCB9trrAOYBcr6xED8Xn",
                                          "data-ws-component": "Box",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Image2,
                                            {
                                              "data-ws-id": "ubK4VatcLY0o-35bZ2dLl",
                                              "data-ws-component": "Image",
                                              src: "/assets/Features_2.1_NIscvc7PVCAtEejnPT2I3.png"
                                            }
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Heading,
                                        {
                                          "data-ws-id": "4dgL2HD5RMihMMnKa4ehv",
                                          "data-ws-component": "Heading",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Bold,
                                            {
                                              "data-ws-id": "wP1Kh6hgjsBxSTMVkFFm2",
                                              "data-ws-component": "Bold",
                                              children: "Recognition and Kudos System"
                                            }
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Paragraph,
                                        {
                                          "data-ws-id": "oFNjby5kD-1GsBEx-Zbsy",
                                          "data-ws-component": "Paragraph",
                                          children: "Create a dedicated space within the platform for team members to publicly recognize and appreciate each other's efforts and achievements."
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "W-QSYzsqKgTJdxixukaxz",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Box,
                                        {
                                          "data-ws-id": "I6wzGycA5PrGgkoOBRT0V",
                                          "data-ws-component": "Box",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Image2,
                                            {
                                              "data-ws-id": "9KMNX72hdSqDMXgAuTcKK",
                                              "data-ws-component": "Image",
                                              src: "/assets/Features_2.2_iIeJXZR4vR2mQD4yPOIW1.png"
                                            }
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Heading,
                                        {
                                          "data-ws-id": "_qNLLBuO13NuLSZg6p57m",
                                          "data-ws-component": "Heading",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Bold,
                                            {
                                              "data-ws-id": "i9RVWEg3lKxy45pYGrh2S",
                                              "data-ws-component": "Bold",
                                              children: "Personalized Avatars and Profiles"
                                            }
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Paragraph,
                                        {
                                          "data-ws-id": "Wsf0j_EPoiYqYvjpq3J-x",
                                          "data-ws-component": "Paragraph",
                                          children: "Allow users to create customizable avatars and profiles that showcase their personalities, helping team members connect on a more personal level beyond just work-related discussions"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Box,
                            {
                              "data-ws-id": "Y0UdmF2hrH3AvxOJvs2Fz",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "fJKYi0adVDK7Bt4u1gIZb",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Box,
                                        {
                                          "data-ws-id": "xsYGB-Vfqn8tCGLniKFyz",
                                          "data-ws-component": "Box",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Image2,
                                            {
                                              "data-ws-id": "qzvuHrBuweB0wtIjIUeFg",
                                              "data-ws-component": "Image",
                                              src: "/assets/Features_2.3_x8WxiEDSffKUEbdqQdEhA.png"
                                            }
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Heading,
                                        {
                                          "data-ws-id": "O1v7BgQDtByFm-ildmlqn",
                                          "data-ws-component": "Heading",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Bold,
                                            {
                                              "data-ws-id": "mUFmHZ2dfx7ILPIg2IAqB",
                                              "data-ws-component": "Bold",
                                              children: "Collaborative Ideation Spaces"
                                            }
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Paragraph,
                                        {
                                          "data-ws-id": "Frw0SS-3Nc5QuJsCUiLzy",
                                          "data-ws-component": "Paragraph",
                                          children: "Design virtual brainstorming and ideation spaces that facilitate real-time collaboration, enabling team members to visualize ideas, share feedback, and build upon each other's creativity"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "RaG82Qpejnuh_blNXDa4M",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Box,
                                        {
                                          "data-ws-id": "7K6msjzpWj_7nyMZDX6Xp",
                                          "data-ws-component": "Box",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Image2,
                                            {
                                              "data-ws-id": "P4SxjJkX2R_idjUkZgfud",
                                              "data-ws-component": "Image",
                                              src: "/assets/Features_2.4_2wCq34wGy7mXEZheN65Ht.jpg"
                                            }
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Heading,
                                        {
                                          "data-ws-id": "XpKJxG8mwCYPsLf5gL0zc",
                                          "data-ws-component": "Heading",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                            Bold,
                                            {
                                              "data-ws-id": "SLF7GgDxOH_P2qWpuWNie",
                                              "data-ws-component": "Bold",
                                              children: "Adaptive Task Prioritization"
                                            }
                                          )
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Paragraph,
                                        {
                                          "data-ws-id": "ha4xx8wHlYroaKCHjMyZk",
                                          "data-ws-component": "Paragraph",
                                          children: "Utilize machine learning algorithms to analyze individual work patterns and automatically adapt task prioritization, ensuring each team member's workload aligns with their peak productivity times"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                Box,
                {
                  "data-ws-id": "55LIleIGwKA_HjsEC3Itt",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "dAzVmqUfB3Lm7aFZC4jLE",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Heading,
                            {
                              "data-ws-id": "UPDaGsHQ5LAvAm7mA5rkP",
                              "data-ws-component": "Heading",
                              children: "Impactful Experiences: Testimonials from Teams that Transformed with Us"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Text2,
                            {
                              "data-ws-id": "Z1jz2yXQOXPsUhJlGnwdT",
                              "data-ws-component": "Text",
                              children: "From small startups to multinational enterprises, our solution has empowered teams to break down barriers, forge stronger bonds, and achieve remarkable results."
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "1GPWE2q-i6T70JXllYPM3",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Box,
                            {
                              "data-ws-id": "4eIUfOFvif5Jd6TKXstIq",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "177r1lN8hSPbPeeFA7yTS",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "g9l5uK5JK4j-tZTBTTETR",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "bwJ0uRpb8mM9uKyT9DOUg",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "DEPb5lkg6fuhEm0F5wBEA",
                                                      "data-ws-component": "Heading",
                                                      children: `"Our team's morale skyrocketed"`
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "anNihXulvkXHCGil3SOpJ",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "KxQHv7rPurWcK9cXlX223",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "LCArjQeExlYSJrvrJec_-",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "R4opvdj1By_u04lCbB-0H",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "ofZ8Cww80EuTICgekhI4T",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "q3SwJr2N5Wq8sJmsx8Fnn",
                                                            "data-ws-component": "Box"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Paragraph,
                                              {
                                                "data-ws-id": "VJlKbwMhJ35vHkplaD_sA",
                                                "data-ws-component": "Paragraph",
                                                children: "The intuitive interface and innovative collaboration features helped us seamlessly connect, even across remote locations. But what truly stood out was the emphasis on empathy and recognition within the platform. We started using the Kudos system to celebrate each other's wins, and the positive energy it generated was remarkable. Our team's morale skyrocketed, and we achieved our project milestones faster than ever. "
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "UL4fhMfwVjBc-cxcbxKw4",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "u9k4M3yCJoeLQRfMGX-OZ",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "ZzqR7cVDPQnBSJnI7t7Bv",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/andrew-power-y9L5-wmifaY-unsplash_dMh4R7uKXN1lnM5k2QTmt.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "Uy9TgB7PWCWFl6iWR9K3-",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "eYjqUkYtiMy49qo1WFbsU",
                                                      "data-ws-component": "Text",
                                                      children: "John, Project Manager"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "oB09N5RnujuRTPjtyj0-9",
                                                      "data-ws-component": "Text",
                                                      children: " XYZ Tech Solutions"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "XegLW7ouMAtNxDe46MwRX",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "WnL5_cp0irtOLmwOd0NVm",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "Q9D9IeQEKGqCoCctLeUGn",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "Z5T2vAb-a8ceatEabbpZ0",
                                                      "data-ws-component": "Heading",
                                                      children: '"SaaS Product transformed the way our marketing team operates"'
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "ZJPilMxAVYEW3mMpFt33-",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "NzpDfMZRPvH6AQhoeIozP",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "vdtGqzp5ti30k1fUzuDSk",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "8Uo24LB1ZFbGrBNGCdJ4t",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "8f1VCeDr6dMavnRHtYj0c",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "WAl1_nmWmpQdorwvAaQbz",
                                                            "data-ws-component": "Box"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Paragraph,
                                              {
                                                "data-ws-id": "46wBFrNP0f_Nvn6OT6C4N",
                                                "data-ws-component": "Paragraph",
                                                children: "The interactive progress celebrations injected so much fun into our projects, and it felt like a virtual party every time we hit a milestone. The empathy dashboard allowed us to express our emotions and well-being openly, fostering a supportive environment where we felt comfortable discussing our challenges."
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "-xqMarHLSv1GeM1cwJM1k",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "SvAlqWyeZmcHcnJKsC7sr",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "x4XjpM9cMdlqfJ9lQSGVi",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/clay-elliot-mpDV4xaFP8c-unsplash_TxKpZ1DjGYzXIYNJ0iwW1.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "jubY3EP8RWdaoWqiU-OyW",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "lpz93qP5z7l6zneLjmTmF",
                                                      "data-ws-component": "Text",
                                                      children: "Sarah, Marketing Specialist"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "oiUz-t9eze5zWn9nWbBKP",
                                                      "data-ws-component": "Text",
                                                      children: "ABC Creative Agency"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Box,
                            {
                              "data-ws-id": "393cnAjV62UkrqgU32Klf",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "A8HfuREWtHmzqjHxsSKa5",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "8f3Hldq0sdBRmgn1SfqH5",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "r7yRTXT6tNolKn-fiHjGY",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "LrJ_3kjiXv8jQs0fNyS6y",
                                                      "data-ws-component": "Heading",
                                                      children: '"the secret sauce behind our recent successes"'
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "KCGNBZ5J9KQuN4tFJ3Hgl",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "SVS3J7hZl6RxQhQjyI7KB",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "dSqQn_0DoiODHrSkJPJsm",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "d_zPJ25VsavdlJEvzqUeO",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "55rIo9Zic647ArJHldnu4",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "lPQ3eiRUPP9H_ooWE7kt4",
                                                            "data-ws-component": "Box"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Paragraph,
                                              {
                                                "data-ws-id": "vOL0BeRQ-Hy_ptfL0frq8",
                                                "data-ws-component": "Paragraph",
                                                children: "The virtual team-building activities and spontaneous coffee chats have brought us closer, despite being in different time zones. We've seen tremendous productivity gains since implementing this platform, but what impresses me most is the focus on maintaining a human touch. Our team feels more connected than ever, and I believe that's the secret sauce behind our recent successes."
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "JFLcBNtQN86mBJ5ZfgxPz",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "N-ZJ8d-8Nwn6y5hqZfJS-",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "82xxrJt3aDqLnarWFWevo",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/leilani-angel-K84vnnzxmTQ-unsplash_hTwP6Ll8K4KCXsx4D9Ef0.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "nTVAJUPTo5EBSlDU6BF0w",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "eyrnl3jJ9HIPErQkcdmen",
                                                      "data-ws-component": "Text",
                                                      children: "Michael, CEO"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "-C1TMlVdS58YAwRBixZVQ",
                                                      "data-ws-component": "Text",
                                                      children: "XYZ Startups"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "TXmpGtyWpfcLOy_-9tQ1o",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "QxdVdHCMotF0QUkYvk65x",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "z8qJ-XHM0ohThX8b456Nt",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Heading,
                                                    {
                                                      "data-ws-id": "EHqGGI_Y8_lm1Vy0Bwgwh",
                                                      "data-ws-component": "Heading",
                                                      children: '"It was a great experience"'
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "Ro9kNZVE5WlXjp6rLqWl1",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "JXSCKrv4IOY_-EDbyHnae",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "r-l-s0DpNh1fmVtvP8siM",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "ymvp_fWOw4cf7sWj8ZSek",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "KUNV_X-vrBkHeO7SqvLEP",
                                                            "data-ws-component": "Box"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "phzXFNIR02M7L_ZOU6B6p",
                                                            "data-ws-component": "Box"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Paragraph,
                                              {
                                                "data-ws-id": "qI_sG3qu8FJTtuIa0a-fU",
                                                "data-ws-component": "Paragraph",
                                                children: "The sentiment analysis for feedback ensures our communications are constructive and considerate, and the adaptive task prioritization keeps everyone engaged and motivated. We've become more efficient, but we haven't lost sight of the human element that drives our passion."
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "aQ1yXK5MgWLKZSGPLe-oT",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Box,
                                              {
                                                "data-ws-id": "ZybejNMMZmtS5pWxKtgiG",
                                                "data-ws-component": "Box",
                                                children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                  Image2,
                                                  {
                                                    "data-ws-id": "vJE8YR7WH0K_syA4ZOzdb",
                                                    "data-ws-component": "Image",
                                                    src: "/assets/linkedin-sales-solutions-QgYvORVDdd8-unsplash_Xm_WpENtQPgyvXKExi_tB.jpeg"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "gKo9c7lMJ6HBJTM-rHNG4",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "Mxy44fiOBLc7vHcR4M5IY",
                                                      "data-ws-component": "Text",
                                                      children: "Emily, Project Lead"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Text2,
                                                    {
                                                      "data-ws-id": "6_sr5zpGilkGwXfe-it4c",
                                                      "data-ws-component": "Text",
                                                      children: "Global Nonprofit Initiative"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                Box,
                {
                  "data-ws-id": "j2yWzrb47b0pr-JHIBoBp",
                  "data-ws-component": "Box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                      Box,
                      {
                        "data-ws-id": "1JJwCx6wkEaht02Ev5L8s",
                        "data-ws-component": "Box",
                        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                          Heading,
                          {
                            "data-ws-id": "wbINRcQA5mR3A4RQfyKKd",
                            "data-ws-component": "Heading",
                            children: "Choose the Perfect Plan for Your Team's Success"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                      Slot,
                      {
                        "data-ws-id": "C76iiK0bavOWVLWDt3fdP",
                        "data-ws-component": "Slot",
                        children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                          Fragment3,
                          {
                            "data-ws-id": "cKEfbHO_Z62b419KEeDuD",
                            "data-ws-component": "Fragment",
                            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                              Box,
                              {
                                "data-ws-id": "-Ns0a4fns6nARAsaY9w-j",
                                "data-ws-component": "Box",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                    Box,
                                    {
                                      "data-ws-id": "Jn-o7ilBBp7XQ5CTL0i3L",
                                      "data-ws-component": "Box",
                                      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "rIx2T8qZCYzBESwFnYGl1",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "3thIc18CdC4qfHc0oG3fS",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "qJjE-g7_90Hcn5OazMAkz",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "hAyuZ-RAWMquhZWZ5XAOJ",
                                                            "data-ws-component": "Text",
                                                            children: "Free"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Heading,
                                                          {
                                                            "data-ws-id": "j7JHZA1WgR3TlX8kuO1Ww",
                                                            "data-ws-component": "Heading",
                                                            children: "Free for everyone"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Separator,
                                                    {
                                                      "data-ws-id": "aKfUglcP9uH-rk1U6VmEw",
                                                      "data-ws-component": "Separator"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "flXzm6ByPWPg8IsUQ3bGH",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "Ob3zrG9uqaNgp97BRCrMh",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "7eeo4T54Zwgt3tWura-mA",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "VEDjYSbUNLfs_gw66cRtA",
                                                                  "data-ws-component": "Text",
                                                                  children: "Unlimited members"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "u1YblY88u8BpkPEcsxZvY",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "uNMvbM7OJ-ekHeqBKVpP0",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "cqAGQfqCDRyLI_fqHa5fH",
                                                                  "data-ws-component": "Text",
                                                                  children: "250 issues (unlimited archived)"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "X-m8nDACcMhbhNFaf2tZl",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "rkPC2m68n1jyS33GgQXGu",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "PHgbVAJhS2lQ-jjkQ4FPJ",
                                                                  "data-ws-component": "Text",
                                                                  children: "Import and export"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "CYllBijBgetZHdEXD00T5",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "JiCzO1mTWL9p4BfgXOTIM",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "C-yFbnR4GLrbl9J_fpgsX",
                                                                  "data-ws-component": "Text",
                                                                  children: "Integrations, APIs, webhooks"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Link2,
                                              {
                                                "data-ws-id": "q9KyCG6eZg_SGof6mtO0P",
                                                "data-ws-component": "Link",
                                                href: "/pricing",
                                                prefetch: "intent",
                                                children: "Free"
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    }
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                    Box,
                                    {
                                      "data-ws-id": "RirPNBndJmlwR1n0tNtyW",
                                      "data-ws-component": "Box",
                                      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "qSrcVqlMgZuZQb8lZp6ci",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "bFn8XpRKdwfy79lM24Syb",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "01pRKVtyl1hcAQpQIJ6lj",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "xNlkQ6IeWFEhyjPq58gTv",
                                                            "data-ws-component": "Text",
                                                            children: "Standard"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Heading,
                                                          {
                                                            "data-ws-id": "2wy_t_EAHh3Lyia7jx2Tw",
                                                            "data-ws-component": "Heading",
                                                            children: "$8 per user/month"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Separator,
                                                    {
                                                      "data-ws-id": "iSKIzKb3fv1A-wVodUBgV",
                                                      "data-ws-component": "Separator"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "zuhl8Owhn-2uwqEZ_xEYB",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "PhuPRBHe-rI6A1CTWLlnd",
                                                            "data-ws-component": "Box",
                                                            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                              Text2,
                                                              {
                                                                "data-ws-id": "tHqoib_BIUFE7nvi5B4AD",
                                                                "data-ws-component": "Text",
                                                                children: "Everything in Free, plus..."
                                                              }
                                                            )
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "n_l9vBuXrMAWvahH1NTEU",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "Pdyl1fng7S006l5xQvjIX",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "6cHYYQ0t02ZW8FwWPnKKF",
                                                                  "data-ws-component": "Text",
                                                                  children: "Unlimited issues and file uploads"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "EdVywKKrjml9RQRAwIJ1g",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "D6weP7N8AT6j-3NRnZcQO",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "YpqpFFvAgsMmOTlCNdHbT",
                                                                  "data-ws-component": "Text",
                                                                  children: "Guest accounts, private teams"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "LuC99KxBaS1cfoASgXDee",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "zoRtbOgN0SVwrBkBRp13U",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "P6qIWficJXyfkIrvEH5k7",
                                                                  "data-ws-component": "Text",
                                                                  children: "Admin tools"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Link2,
                                              {
                                                "data-ws-id": "YKPWqa77s9U-6XUNigvTG",
                                                "data-ws-component": "Link",
                                                href: "/pricing",
                                                children: "Standard"
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    }
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                    Box,
                                    {
                                      "data-ws-id": "QCRnRnWDS5lilxAd9Ai_C",
                                      "data-ws-component": "Box",
                                      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                        Box,
                                        {
                                          "data-ws-id": "2xiKzSplG7rNQoT76D0tz",
                                          "data-ws-component": "Box",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                              Box,
                                              {
                                                "data-ws-id": "AuVcBecFSASMvRxU5WdMs",
                                                "data-ws-component": "Box",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "_kIHOdhzPM_Q-xdKDRCIb",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Text2,
                                                          {
                                                            "data-ws-id": "6twHyszYQvnIAYxfdnKyo",
                                                            "data-ws-component": "Text",
                                                            children: "Plus"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Heading,
                                                          {
                                                            "data-ws-id": "xAoOWH44wwjOfOObRnXzw",
                                                            "data-ws-component": "Heading",
                                                            children: "$14 per user/month"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                    Separator,
                                                    {
                                                      "data-ws-id": "MizaMZbMNqwnIsCddIp9N",
                                                      "data-ws-component": "Separator"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                    Box,
                                                    {
                                                      "data-ws-id": "FSNwRMsds6fK1plSvlygz",
                                                      "data-ws-component": "Box",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "LMMlDSLfDaGBr-57cwUQS",
                                                            "data-ws-component": "Box",
                                                            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                              Text2,
                                                              {
                                                                "data-ws-id": "ySdqGrE-RX6osFl60zNdf",
                                                                "data-ws-component": "Text",
                                                                children: "Everything in Standard, plus..."
                                                              }
                                                            )
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "qHT6r5-lnpYs3XTV1Ye6P",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "bjchn2889dazpw9_995WW",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "XemvmOtK4EeZFWhXP4BEN",
                                                                  "data-ws-component": "Text",
                                                                  children: "SAML / Single Sign On"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "9wgH-lbI69o1ioXiNsebJ",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "5UYnbK731H1nAqKFpVpc-",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "AWAXrmytNYbmnVt0KHhqf",
                                                                  "data-ws-component": "Text",
                                                                  children: "Advanced authentication controls"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "nRz8ZHiiklXmDaYfGq834",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "08vFSEeQmjCeSIuqtiE34",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "vPs9trmbHznVkdVnHEJvL",
                                                                  "data-ws-component": "Text",
                                                                  children: "Linear insights and SLAs"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                                          Box,
                                                          {
                                                            "data-ws-id": "fjysnt3-EORHjzAdrdvuY",
                                                            "data-ws-component": "Box",
                                                            children: [
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Image2,
                                                                {
                                                                  "data-ws-id": "LzH861PHwJY52nGb3SGYr",
                                                                  "data-ws-component": "Image",
                                                                  src: "/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                                                Text2,
                                                                {
                                                                  "data-ws-id": "bSlGiOi5JlBEVdXvEGTxS",
                                                                  "data-ws-component": "Text",
                                                                  children: "Priority support"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                              Link2,
                                              {
                                                "data-ws-id": "D9Ma82venPH1VTWNbgygy",
                                                "data-ws-component": "Link",
                                                prefetch: "intent",
                                                children: "Plus"
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "1msfU4Ntb847TQoTq8mNa",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Text2,
                            {
                              "data-ws-id": "hYEZshdNFOd_5N7uuilr_",
                              "data-ws-component": "Text",
                              children: "Discover flexible and affordable options to suit your project management needs"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                            Link2,
                            {
                              "data-ws-id": "Hu8a8-JZ01633Ah4v7Nwf",
                              "data-ws-component": "Link",
                              prefetch: "intent",
                              children: "Compare our Plans"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                Box,
                {
                  "data-ws-id": "m9IVVvrpGZ5RPVTmDMAgo",
                  "data-ws-component": "Box",
                  children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                    Box,
                    {
                      "data-ws-id": "plbVtYQv9Qnf068n2khIn",
                      "data-ws-component": "Box",
                      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                        Box,
                        {
                          "data-ws-id": "qkOwk6i2dmRz5aqYBY7y1",
                          "data-ws-component": "Box",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                              Box,
                              {
                                "data-ws-id": "Va1QQAkOmJRW8gUv2-no7",
                                "data-ws-component": "Box",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                    Heading,
                                    {
                                      "data-ws-id": "kZbVTgv73E7AXwKUAD2vy",
                                      "data-ws-component": "Heading",
                                      children: "Unlock Your Team's Full Potential!"
                                    }
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                    Text2,
                                    {
                                      "data-ws-id": "mckX_PoBrpjjDd6I_axNt",
                                      "data-ws-component": "Text",
                                      children: "Take the first step towards human-centered project management excellence"
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                              Link2,
                              {
                                "data-ws-id": "yUIliS0D6Myn_k-oBP1Qf",
                                "data-ws-component": "Link",
                                children: "Get started with Free"
                              }
                            )
                          ]
                        }
                      )
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          Slot,
          {
            "data-ws-id": "_NqZ9fD9LqNEc09fvDDd4",
            "data-ws-component": "Slot",
            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
              Fragment3,
              {
                "data-ws-id": "LXAE0omYOBDRhwHgmjbxd",
                "data-ws-component": "Fragment",
                children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                  Box,
                  {
                    "data-ws-id": "etSoQ_YpqbbjYSdf5gDn_",
                    "data-ws-component": "Box",
                    children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                      Box,
                      {
                        "data-ws-id": "T3kf2U4vSUW1jD4y_NEma",
                        "data-ws-component": "Box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Box,
                            {
                              "data-ws-id": "_5z42eLI3fQfzg74Ywbb1",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                  Link2,
                                  {
                                    "data-ws-id": "8_lYbS23oem75lqyneJKk",
                                    "data-ws-component": "Link",
                                    children: "SaaS Product"
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "ZyWzCL9VJFsmbTZBNU9-c",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "xJocVo6XEiFAGYZU4WEBy",
                                          "data-ws-component": "Text",
                                          children: "Company"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "OemFDMxMz1dQm6ZNizOMu",
                                          "data-ws-component": "Link",
                                          children: "Team"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "RyCe2Bi_tJJxSIa6o--Yd",
                                          "data-ws-component": "Link",
                                          children: "Privacy Policy"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "fymS9Wubd_R1Ni-24Zyx6",
                                          "data-ws-component": "Link",
                                          children: "Terms of Service"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                            Box,
                            {
                              "data-ws-id": "jNyPk4jlM6WQIun_94FT1",
                              "data-ws-component": "Box",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "tAD0q_c3Lcz3S18VRY9VO",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "dJ3D3qquPPEVbf4FQytOh",
                                          "data-ws-component": "Text",
                                          children: "Community"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "KF0zY92pvFsNrmUkiD2iq",
                                          "data-ws-component": "Link",
                                          children: "Github"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "k_TUj7O7myu3xDr7wGUNx",
                                          "data-ws-component": "Link",
                                          children: "Discord"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "dLWBQCL9gyAllSg5RXwyU",
                                          "data-ws-component": "Link",
                                          children: "Twitter"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "GFaKIM1XZQEAZ-qwxKOx_",
                                          "data-ws-component": "Link",
                                          children: "Product Hunt"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
                                  Box,
                                  {
                                    "data-ws-id": "EtrG_tdm2KROkPiB9DlEM",
                                    "data-ws-component": "Box",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Text2,
                                        {
                                          "data-ws-id": "sQd2JlvN3_sraUU2JjqrV",
                                          "data-ws-component": "Text",
                                          children: "Product"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "_-DoDHqUkbX9m6W1L4jk_",
                                          "data-ws-component": "Link",
                                          children: "Pricing"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "av5H5w4bddISdUjP9Fxl0",
                                          "data-ws-component": "Link",
                                          children: "Download"
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                                        Link2,
                                        {
                                          "data-ws-id": "CP_4Oip6tvDePQJWy5Pma",
                                          "data-ws-component": "Link",
                                          children: "Source Code"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        props.scripts
      ]
    }
  );
};
var pagesPaths3 = /* @__PURE__ */ new Set(["", "/pricing", "/about"]), formsProperties3 = /* @__PURE__ */ new Map([]);

// app/routes/_index.tsx
var import_jsx_runtime52 = require("react/jsx-runtime"), meta3 = () => {
  let { page } = pageData3, metas = [
    { title: (page == null ? void 0 : page.title) || "Webstudio" }
  ];
  for (let [name, value] of Object.entries((page == null ? void 0 : page.meta) ?? {})) {
    if (name.startsWith("og:")) {
      metas.push({
        property: name,
        content: value
      });
      continue;
    }
    metas.push({
      name,
      content: value
    });
  }
  return metas;
}, links3 = () => {
  let result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  for (let asset of fontAssets3)
    asset.type === "font" && result.push({
      rel: "preload",
      href: assetBaseUrl + asset.name,
      as: "font",
      crossOrigin: "anonymous"
      // @todo add mimeType
      // type: asset.mimeType,
    });
  return result;
}, getRequestHost3 = (request) => request.headers.get("x-forwarded-host") || request.headers.get("host") || "", getMethod3 = (value) => {
  if (value === void 0)
    return "post";
  switch (value.toLowerCase()) {
    case "get":
      return "get";
    default:
      return "post";
  }
}, action3 = async ({ request, context }) => {
  var _a7;
  let formData = await request.formData(), formId = getFormId(formData);
  if (formId === void 0)
    throw (0, import_server_runtime3.json)("Form not found", { status: 404 });
  let formProperties = formsProperties3.get(formId), { action: action4, method } = formProperties ?? {}, email = (_a7 = user3) == null ? void 0 : _a7.email;
  if (email == null)
    return { success: !1 };
  let pageUrl;
  try {
    pageUrl = new URL(request.url), pageUrl.host = getRequestHost3(request);
  } catch {
    return { success: !1 };
  }
  if (action4 !== void 0)
    try {
      new URL(action4);
    } catch {
      return (0, import_server_runtime3.json)(
        {
          success: !1,
          error: "Invalid action URL, must be valid http/https protocol"
        },
        { status: 200 }
      );
    }
  let formInfo = {
    formData,
    projectId: projectId3,
    action: action4 ?? null,
    method: getMethod3(method),
    pageUrl: pageUrl.toString(),
    toEmail: email,
    fromEmail: pageUrl.hostname + "@webstudio.email"
  };
  return await n8nHandler({
    formInfo,
    hookUrl: context.N8N_FORM_EMAIL_HOOK
  });
}, Outlet3 = () => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
  ReactSdkContext.Provider,
  {
    value: {
      imageLoader,
      assetBaseUrl,
      imageBaseUrl,
      pagesPaths: pagesPaths3
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      Page3,
      {
        scripts: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react59.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react59.ScrollRestoration, {})
        ] })
      }
    )
  }
), index_default = Outlet3;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-KDZE43LI.js", imports: ["/build/_shared/chunk-YPXLVECY.js", "/build/_shared/chunk-7X2MWA5C.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EU3F7EMZ.js", imports: ["/build/_shared/chunk-G6HFERBK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[about]._index": { id: "routes/[about]._index", parentId: "root", path: "about", index: !0, caseSensitive: void 0, module: "/build/routes/[about]._index-DCFPZJHZ.js", imports: ["/build/_shared/chunk-XNAIISWC.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[pricing]._index": { id: "routes/[pricing]._index", parentId: "root", path: "pricing", index: !0, caseSensitive: void 0, module: "/build/routes/[pricing]._index-PYI3J5J6.js", imports: ["/build/_shared/chunk-XNAIISWC.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-Q7WITGIG.js", imports: ["/build/_shared/chunk-XNAIISWC.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "fba1c741", hmr: void 0, url: "/build/manifest-FBA1C741.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/[pricing]._index": {
    id: "routes/[pricing]._index",
    parentId: "root",
    path: "pricing",
    index: !0,
    caseSensitive: void 0,
    module: pricing_index_exports
  },
  "routes/[about]._index": {
    id: "routes/[about]._index",
    parentId: "root",
    path: "about",
    index: !0,
    caseSensitive: void 0,
    module: about_index_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
