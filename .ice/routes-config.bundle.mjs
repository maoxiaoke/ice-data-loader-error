// .ice/index.ts
import { Link, Outlet, useParams, useSearchParams, useLocation, useNavigate } from "@ice/runtime/router";
import { defineAppConfig, useAppData, useData, useConfig, Meta, Title, Links, Scripts, Data, Main, history, KeepAliveOutlet, useMounted, ClientOnly, defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime";

// node_modules/.pnpm/npm.urbanic-inc.com+@ice+plugin-auth@1.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/@ice/plugin-auth/esm/runtime/index.js
import * as React2 from "react";

// node_modules/.pnpm/npm.urbanic-inc.com+@ice+plugin-auth@1.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/@ice/plugin-auth/esm/runtime/Auth.js
import * as React from "react";
import { createContext, useContext } from "react";
var Context = createContext(null);
Context.displayName = "AuthContext";
var AuthProvider = Context.Provider;

// .ice/index.ts
function definePageConfig(pageConfig4) {
  return pageConfig4;
}

// src/pages/layout.tsx
var pageConfig = definePageConfig(() => {
  return {
    title: "Layout",
    meta: [{
      name: "layout-color",
      content: "#f00"
    }],
    auth: ["admin"]
  };
});

// src/pages/index.tsx
var pageConfig2 = definePageConfig(() => {
  return {
    title: "Home",
    meta: [{
      name: "theme-color",
      content: "#000"
    }, {
      name: "title-color",
      content: "#f00"
    }],
    auth: ["admin"]
  };
});

// src/pages/blog.tsx
var pageConfig3 = definePageConfig(() => {
  return {
    title: "Blog",
    auth: ["guest"]
  };
});

// .ice/routes-config.ts
var routes_config_default = {
  "layout": pageConfig,
  "index": pageConfig2,
  "blog": pageConfig3
};
export {
  routes_config_default as default
};
