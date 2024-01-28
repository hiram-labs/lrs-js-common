/* tslint:disable no-magic-numbers */
import Config from './Config';
import Handler from './utils/Handler';

export default (config: Config): Handler => {
  return async (_req, res) => {
    res.status(200).send(config.customRouteText);
  };
};
