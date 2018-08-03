import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

enableProdMode();

const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

const app = express();

// const template = readFileSync(join(DIST_FOLDER, 'angularpro-home1', 'index.html')).toString();
const { AppServerModuleNgFactory, LAZY_MODULE_MAP  } = require('./dist/angularpro-home1-server/main');

// app.engine('html', (_, options, callback) => {
//   const opts = { document: template, url: options.req.url };
//
//   renderModuleFactory(AppServerModuleNgFactory, opts)
//     .then(html => callback(null, html));
// });

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'angularpro-home1'));
// app.set('views', 'src')

app.get('*.*', express.static(join(DIST_FOLDER, 'angularpro-home1')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
