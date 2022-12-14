import type { AppConfig, GetAppData, RouteConfig as DefaultRouteConfig } from '@ice/runtime';
import type { ConfigAuth } from '@ice/plugin-auth/esm/types';
type ExtendsRouteConfig = ConfigAuth;
type PageConfig = DefaultRouteConfig<ExtendsRouteConfig>;

export type {
  AppConfig,
  GetAppData,
  PageConfig,
};