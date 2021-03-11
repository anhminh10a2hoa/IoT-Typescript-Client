export default class Exception extends Error {
  private static serialVersionUID: number = -3510853523188440984;

  constructor(private status: number, message: string) {
    super(message);
    this.status = status;
  }

  public getStatus(): number {
    return this.status;
  }

  public getMessage(): string {
    return this.message;
  }
}