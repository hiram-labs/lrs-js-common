import { once } from 'lodash';
import 'mocha'; // tslint:disable-line
import Service from '../../serviceFactory/Service';

export default <ConcreteService extends Service>(service: ConcreteService) => {
  const migrateService = once(async () => {
    await service.rollback();
    await service.migrate();
  });

  return (): ConcreteService => {
    before(async () => {
      await migrateService();
    });

    beforeEach(async () => {
      await service.clearService();
    });

    return service;
  };
};
