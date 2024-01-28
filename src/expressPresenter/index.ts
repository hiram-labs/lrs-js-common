import { Router } from 'express';
import Config from './Config';
import handleCustomRoute from './handleCustomRoute';
import mixinCors from './mixins/cors';
import mixinHelmet from './mixins/helmet';
import mixinJson from './mixins/json';
import mixinMorgan from './mixins/morgan';
import mixinUrlEncoding from './mixins/urlEncoding';

export default (config: Config): Router => {
  const router = Router();

  router.use(mixinCors());
  router.use(mixinJson(config.bodyParserLimit));
  router.use(mixinUrlEncoding(config.bodyParserLimit));
  router.use(mixinHelmet());
  router.use(mixinMorgan(config.morganDirectory));

  router.get(`/${config.customRoute}`, handleCustomRoute(config));
  return router;
};
