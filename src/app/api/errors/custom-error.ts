export abstract class CustomError extends Error {
  abstract status: number;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract renderError(): { message: string; status: number; field?: string }[];
}
