var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

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
var useAuth = () => {
  const value = useContext(Context);
  return value;
};

// node_modules/.pnpm/npm.urbanic-inc.com+@ice+plugin-auth@1.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/@ice/plugin-auth/esm/runtime/index.js
var EXPORT_NAME = "authConfig";
var runtime = async ({ appContext, useConfig: useConfig2, addProvider, addWrapper }) => {
  const { appExport, appData } = appContext;
  const exported = appExport[EXPORT_NAME];
  const authConfig = (typeof exported === "function" ? await exported(appData) : exported) || {};
  const initialAuth = authConfig.initialAuth || {};
  const AuthProviderWrapper = ({ children }) => {
    const [state, setState] = React2.useState(initialAuth);
    const updateState = (newState = {}) => {
      setState({
        ...state,
        ...newState
      });
    };
    return React2.createElement(AuthProvider, { value: [state, updateState] }, children);
  };
  addProvider(AuthProviderWrapper);
  const AuthRouteWrapper = ({ children }) => {
    const [auth] = useAuth();
    const routeConfig = useConfig2();
    const routeConfigAuth = routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.auth;
    if (routeConfigAuth && !Array.isArray(routeConfigAuth)) {
      throw new Error("config.auth must be an array");
    }
    const hasAuth = Array.isArray(routeConfigAuth) && routeConfigAuth.length ? Object.keys(auth).filter((item) => routeConfigAuth.includes(item) ? auth[item] : false).length : true;
    if (!hasAuth) {
      if (authConfig.NoAuthFallback) {
        return React2.createElement(authConfig.NoAuthFallback, { routeConfig });
      }
      return React2.createElement(React2.Fragment, null, "No Auth");
    }
    return React2.createElement(React2.Fragment, null, children);
  };
  addWrapper(AuthRouteWrapper);
};
var runtime_default = runtime;

// .ice/index.ts
function definePageConfig(pageConfig) {
  return pageConfig;
}

export {
  __export,
  runtime_default,
  defineAppConfig,
  Meta,
  Title,
  Links,
  Scripts,
  Main,
  definePageConfig
};
//# sourceMappingURL=chunk-C64GN3GW.mjs.map
