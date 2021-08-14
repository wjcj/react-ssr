import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { createServerStore } from '../client/store';
import App, { routes } from '../client/App';
import stats from '../../dist/react-loadable.json';

const app = express();

app.use(express.static('dist'));

app.use('/*', async (req, res) => {
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

  const store = createServerStore();
  
  try {
    await loadBranchData(req.baseUrl, store);

    const context = {};
    const modules = [];

    const jsx = (
      <Provider store={store}>
        <StyleContext.Provider value={{ insertCss }}>
        {/* 收集所有被加载的模块👇 */}
          <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <StaticRouter context={context} location={req.baseUrl} >
              <App/>
            </StaticRouter>
          </Loadable.Capture>
        </StyleContext.Provider>
      </Provider>
    );
    
    console.log('modules====>', modules);
    const bundles = getBundles(stats, modules);
    const contentDom = renderToString(jsx);
    const helmet = Helmet.renderStatic();

    const html = renderHtml({
      content: contentDom,
      state: store.getState(),
      css,
      helmet,
      bundles,
    });
    
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url);
      return;
    }
    if (context.notFound) {
      res.status(400);
    }
    res.send(html);

  } catch (error) {
    res.status(500).send({ error });
  }
});

Loadable.preloadAll().then(() => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Node.js app is running at http://localhost:${port}/`));
});

function renderHtml({ content, state, css, helmet, bundles }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="icon" href="data:;base64,=">
        ${helmet.title.toString()}${helmet.meta.toString()}
        <style>${[...css].join('')}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <textarea id="textarea-ssr-data" style="display: none">${JSON.stringify(state)}</textarea>
        <script src="/client.js"></script>
        ${bundles.map(bundle => `<script src="/${bundle.file}"></script>`).join('\n')}
        <script>window.main();</script>
      </body>
    </html>
  `;
};

async function loadBranchData (pathname, store) {
  const branch = matchRoutes(routes, pathname);
  const promises = branch.map(({ route }) => {
    const component = route.component;
    if (component.preload) {
      return component.preload().then(res => {
        return res.default.loadData ? res.default.loadData(store) : null;
      })
    }
    return typeof component.loadData === 'function' ? component.loadData(store) : Promise.resolve(null);
  });
  const result = await Promise.all(promises);
  return result;
}
