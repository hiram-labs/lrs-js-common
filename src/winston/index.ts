import winston from 'winston';
import CloudWatchTransport from 'winston-cloudwatch';
import Config from './Config';

const createConsoleTransport = (config: Config): winston.transports.ConsoleTransportInstance => {
  return new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    ),
    handleExceptions: true,
    level: config.console.level,
    stderrLevels: ['error']
  });
};

const createAwsTransport = (config: Config): CloudWatchTransport => {
  return new CloudWatchTransport({
    awsAccessKeyId: config.cloudWatch.awsConfig.accessKeyId,
    awsSecretKey: config.cloudWatch.awsConfig.secretAccessKey,
    awsRegion: config.cloudWatch.awsConfig.region,
    level: config.cloudWatch.level,
    logGroupName: config.cloudWatch.logGroupName,
    logStreamName: config.cloudWatch.logStreamName
  });
};

export default (config: Config) => {
  return winston.createLogger({
    exitOnError: false,
    format: winston.format.combine(winston.format.errors({ stack: true })),
    transports: [createConsoleTransport(config), ...(config.cloudWatch.enabled ? [createAwsTransport(config)] : [])]
  });
};
