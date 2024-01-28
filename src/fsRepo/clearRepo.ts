import fs from 'fs-extra';
import Config from './Config';

export default (config: Config) => {
  return async (): Promise<void> => {
    await fs.emptyDir(config.storageDir);
  };
};
