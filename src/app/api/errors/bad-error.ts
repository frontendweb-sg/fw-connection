import { CustomError } from "./custom-error";
export class BadRequestError extends CustomError {
  status: number = 400;
  constructor(public message: string = "Bad request") {
    super(message);
  }

  renderError(): {
    message: string;
    status: number;
    field?: string | undefined;
  }[] {
    return [{ message: this.message, status: this.status, field: this.name }];
  }
}
