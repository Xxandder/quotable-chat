import { type Logger as LibraryLogger, pino } from 'pino';
import pretty from 'pino-pretty';
type LogFunction = (
    message: string,
    parameters?: Record<string, unknown>,
  ) => void;

interface ILogger {
    info: LogFunction;
    warn: LogFunction;
    error: LogFunction;
};


class LoggerService implements ILogger {
  private logger: LibraryLogger;

  public constructor() {
    this.logger = pino({
      transport: {
        target: 'pino-pretty'
      },
    })

    this.logger.info('Logger is created…');
  }

  public error(
    message: string,
    parameters: Record<string, unknown> = {},
  ): void {
    this.logger.error(parameters, message);
  }

  public info(
    message: string,
    parameters: Record<string, unknown> = {},
  ): void {
    this.logger.info(parameters, message);
  }

  public warn(
    message: string,
    parameters: Record<string, unknown> = {},
  ): void {
    this.logger.warn(parameters, message);
  }
}

export { LoggerService };