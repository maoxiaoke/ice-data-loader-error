import {
  Links,
  Main,
  Meta,
  Scripts,
  Title,
  __export,
  defineAppConfig,
  runtime_default
} from "./chunk-C64GN3GW.mjs";

// .ice/env.server.ts
process.env.ICE_CORE_MODE = "development";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "3001";

// .ice/entry.server.ts
import * as runtime from "@ice/runtime/server";

// .ice/runtimeModules.ts
var statics = [];
var commons = [
  runtime_default
];

// src/app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});
var app_default = defineAppConfig(() => ({}));

// src/document.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/jsx-dev-runtime";
function Document() {
  return /* @__PURE__ */ _jsxDEV("html", {
    children: [
      /* @__PURE__ */ _jsxDEV("head", {
        children: [
          /* @__PURE__ */ _jsxDEV("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
            lineNumber: 7,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("meta", {
            name: "description",
            content: "ICE Demo"
          }, void 0, false, {
            fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
            lineNumber: 8,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          }, void 0, false, {
            fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
            lineNumber: 9,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Meta, {}, void 0, false, {
            fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Title, {}, void 0, false, {
            fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Links, {}, void 0, false, {
            fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV("body", {
        children: [
          /* @__PURE__ */ _jsxDEV(Main, {}, void 0, false, {
            fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Scripts, {}, void 0, false, {
            fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "/Users/nazha/nazha-demos/ice-loader/src/document.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var document_default = Document;

// asset-manifest:virtual:assets-manifest.json
var virtual_assets_manifest_default = { publicPath: "/", entries: { main: ["js/framework.js", "js/vendors-node_modules_pnpm_npm_urbanic-inc_com_ice_bundles_0_1_1_node_modules_ice_bundles_comp-31a339.js", "js/main.js"] }, pages: { layout: ["js/p_layout.js"], "about-layout": ["js/p_about-layout.js"], "about-another": ["js/p_about-another.js"], "about-index": ["js/p_about-index.js"], index: ["css/vendors-node_modules_pnpm_npm_urbanic-inc_com_antd-mobile_5_27_0_biqbaboplfbrettd7655fr4n2y_n-8eb462.css", "js/vendors-node_modules_pnpm_npm_urbanic-inc_com_antd-mobile_5_27_0_biqbaboplfbrettd7655fr4n2y_n-8eb462.js", "css/p_index.css", "js/p_index.js"], blog: ["js/p_blog.js"] }, assets: { "src/pages/ice.png": "971eddfc" }, dataLoader: "js/data-loader.js" };

// .ice/routes.ts
var routes_default = [
  {
    path: "",
    load: () => import(
      /* webpackChunkName: "p_layout" */
      "./layout-SC4XMLE2.mjs"
    ),
    componentName: "layout",
    index: void 0,
    id: "layout",
    exact: true,
    exports: [
      "dataLoader",
      "default",
      "pageConfig"
    ],
    layout: true,
    children: [
      {
        path: "about",
        load: () => import(
          /* webpackChunkName: "p_about-layout" */
          "./layout-PCPXLLPM.mjs"
        ),
        componentName: "about-layout",
        index: void 0,
        id: "about/layout",
        exact: true,
        exports: [
          "dataLoader",
          "default"
        ],
        layout: true,
        children: [
          {
            path: "another",
            load: () => import(
              /* webpackChunkName: "p_about-another" */
              "./another-F4DBQLKX.mjs"
            ),
            componentName: "about-another",
            index: void 0,
            id: "about/another",
            exact: true,
            exports: [
              "dataLoader",
              "default"
            ]
          },
          {
            path: "",
            load: () => import(
              /* webpackChunkName: "p_about-index" */
              "./about-SLEQ53V5.mjs"
            ),
            componentName: "about-index",
            index: true,
            id: "about/index",
            exact: true,
            exports: [
              "dataLoader",
              "default"
            ]
          }
        ]
      },
      {
        path: "",
        load: () => import(
          /* webpackChunkName: "p_index" */
          "./pages-CJK7UVMZ.mjs"
        ),
        componentName: "index",
        index: true,
        id: "index",
        exact: true,
        exports: [
          "dataLoader",
          "default",
          "pageConfig"
        ]
      },
      {
        path: "blog",
        load: () => import(
          /* webpackChunkName: "p_blog" */
          "./blog-XOVTEIJJ.mjs"
        ),
        componentName: "blog",
        index: void 0,
        id: "blog",
        exact: true,
        exports: [
          "default",
          "pageConfig"
        ]
      }
    ]
  }
];

// .ice/routes-config.bundle.mjs
import { Link, Outlet, useParams, useSearchParams, useLocation, useNavigate } from "@ice/runtime/router";
import { defineAppConfig as defineAppConfig2, useAppData, useData, useConfig, Meta as Meta2, Title as Title2, Links as Links2, Scripts as Scripts2, Data, Main as Main2, history, KeepAliveOutlet, useMounted, ClientOnly, defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime";
import * as React2 from "react";
import * as React from "react";
import { createContext, useContext } from "react";
var Context = createContext(null);
Context.displayName = "AuthContext";
var AuthProvider = Context.Provider;
function definePageConfig(pageConfig4) {
  return pageConfig4;
}
var pageConfig = definePageConfig(() => {
  return {
    title: "Layout",
    meta: [
      {
        name: "layout-color",
        content: "#f00"
      }
    ],
    auth: [
      "admin"
    ]
  };
});
var pageConfig2 = definePageConfig(() => {
  return {
    title: "Home",
    meta: [
      {
        name: "theme-color",
        content: "#000"
      },
      {
        name: "title-color",
        content: "#f00"
      }
    ],
    auth: [
      "admin"
    ]
  };
});
var pageConfig3 = definePageConfig(() => {
  return {
    title: "Blog",
    auth: [
      "guest"
    ]
  };
});
var routes_config_default = {
  "layout": pageConfig,
  "index": pageConfig2,
  "blog": pageConfig3
};

// .ice/entry.server.ts
var runtimeModules = {
  commons,
  statics
};
var getRouterBasename = () => {
  var _a, _b, _c;
  const appConfig = runtime.getAppConfig(app_exports);
  return (_c = (_b = (_a = appConfig == null ? void 0 : appConfig.router) == null ? void 0 : _a.basename) != null ? _b : "/") != null ? _c : "";
};
var setRuntimeEnv = (renderMode) => {
  if (renderMode === "SSG") {
    process.env.ICE_CORE_SSG = "true";
  } else {
    process.env.ICE_CORE_SSR = "true";
  }
};
async function renderToHTML2(requestContext, options = {}) {
  const { documentOnly, renderMode = "SSR", basename, serverOnlyBasename, routePath, disableFallback } = options;
  setRuntimeEnv(renderMode);
  return await runtime.renderToHTML(requestContext, {
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    routes: routes_default,
    runtimeModules,
    Document: document_default,
    serverOnlyBasename,
    basename: basename || getRouterBasename(),
    documentOnly,
    renderMode,
    routePath,
    disableFallback,
    routesConfig: routes_config_default
  });
}
async function renderToResponse2(requestContext, options = {}) {
  const { documentOnly, renderMode = "SSR", basename, serverOnlyBasename, disableFallback } = options;
  setRuntimeEnv(options);
  runtime.renderToResponse(requestContext, {
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    routes: routes_default,
    runtimeModules,
    Document: document_default,
    serverOnlyBasename,
    basename: basename || getRouterBasename(),
    documentOnly,
    renderMode,
    disableFallback,
    routesConfig: routes_config_default
  });
}
export {
  renderToHTML2 as renderToHTML,
  renderToResponse2 as renderToResponse
};
//# sourceMappingURL=index.mjs.map
