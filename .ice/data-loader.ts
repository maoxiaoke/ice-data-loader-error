import { dataLoader } from '@ice/runtime';
import * as app from '@/app';
        
import { dataLoader as dataLoader_layout } from '@/pages/layout';
import { dataLoader as dataLoader_about_layout } from '@/pages/about/layout';
import { dataLoader as dataLoader_about_another } from '@/pages/about/another';
import { dataLoader as dataLoader_about_index } from '@/pages/about/index';
import { dataLoader as dataLoader_index } from '@/pages/index';

const loaders = {
  'layout': dataLoader_layout,
  'about/layout': dataLoader_about_layout,
  'about/another': dataLoader_about_another,
  'about/index': dataLoader_about_index,
  'index': dataLoader_index,
};


let fetcher = (options) => {
  window.fetch(options.url, options);
}  

// Only init static runtime in data-loader. 
const staticRuntimeModules = [
];

dataLoader.init(loaders, {
  fetcher,
  runtimeModules: staticRuntimeModules,
  appExport: app,
  });
