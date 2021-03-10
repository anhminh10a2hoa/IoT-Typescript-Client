export default class Exception extends Error {
  private static serialVersionUID: number = -3510853523188440984;
  private errorInfo: Error;

  constructor(message: string, errorInfo: Error) {
    super(message);
    this.errorInfo = errorInfo;
  }

  public getErrorInfo(): Error {
    return this.errorInfo;
  }
}