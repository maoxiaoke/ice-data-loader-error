import type { PageConfig } from './types';
import { Link, Outlet, useParams, useSearchParams, useLocation, useNavigate } from '@ice/runtime/router';
import { defineAppConfig, useAppData, useData, useConfig, Meta, Title, Links, Scripts, Data, Main, history, KeepAliveOutlet, useMounted, ClientOnly, defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from '@ice/runtime';
import { withAuth, useAuth } from '@ice/plugin-auth/esm/runtime';

function definePageConfig(pageConfig: () => PageConfig): () => PageConfig {
  return pageConfig;
}

export {
  definePageConfig,
  Link,
  Outlet,
  useParams,
  useSearchParams,
  useLocation,
  useNavigate,
  defineAppConfig,
  useAppData,
  useData,
  useConfig,
  Meta,
  Title,
  Links,
  Scripts,
  Data,
  Main,
  history,
  KeepAliveOutlet,
  useMounted,
  ClientOnly,
  defineDataLoader,
  defineServerDataLoader,
  defineStaticDataLoader,
  withAuth,
  useAuth,};

export * from './types';
