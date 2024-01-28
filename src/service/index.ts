import Service from '../serviceFactory/Service';
import Config from './Config';

export default (config: Config): Service => {
  return {
    clearService: config.repo.clearRepo,
    migrate: config.repo.migrate,
    rollback: config.repo.rollback
  };
};
